import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  messageSendDataRecoil,
  messageSendViewListRecoil,
  reSendFileRecoil,
  reSendMsgRecoil,
  reSendMsgToggleRecoil,
} from '../../../../recoil/atoms/messageSend/messageSend.ts';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { instance } from '../../../../apis/api/clientAxios.ts';
import { useMutationSendMsg } from '../../mutations/addressBook/useMutationSendMsg.ts';
import { checkGroupListState } from '../../../../recoil/atoms/addressList.ts';
import { useModalHook } from '../../../commons/modals/useModalHook.tsx';
import dayjs from 'dayjs';
import { calMsgByte } from '../../utils/byteCalculatorUtil.ts';
import { useMsgRecoilReset } from '../useMsgRecoilReset.ts';
import { base64ToBlob } from '../../utils/fileUtils.ts';
import { assertMsglen, calMsglen } from '../../../../apis/utils/translateEncode.ts';

interface IUseMessageSend {
  selectNumber: any;
  gridRef?: React.MutableRefObject<any>;
}

export const useMessageSend = ({ selectNumber, gridRef }: IUseMessageSend) => {
  const [fileResult, setFileResult] = useState<any>(null);
  const [sndMsgSubjectState, setSndMsgSubjectState] = useState<string>('');
  const [sndMsgState, setSndMsgState] = useState<string>('');
  const [sndDttm, setSndDttm] = useState<string>(dayjs(new Date()).format('YYYYMMDDHHmmss'));
  const [messageSendViewList, setMessageSendViewList] = useRecoilState(messageSendViewListRecoil);
  const [messageSendData, setMessageSendData] = useRecoilState(messageSendDataRecoil);
  const [repeatCycleState, setRepeatCycleState] = useState<{ label: string; value: string }>({
    label: '매주',
    value: 'week',
  });
  const [repeatDayState, setRepeatDayState] = useState<{ label: string; value: string }>({
    label: '월',
    value: 'monday',
  });
  const [sndDateState, setSndDateState] = useState<string>('1');
  const [repeatCountState, setRepeatCountState] = useState<string>('2');
  const [timeState, setTimeState] = useState<string>(dayjs(new Date()).format('HH:mm:ss'));
  const { resetMsgInfo } = useMsgRecoilReset({ gridRef });

  const setGroupCheckedList = useSetRecoilState(checkGroupListState);
  // 재전송 - 메세지, 이미지 파일
  const reSendMsgState = useRecoilValue(reSendMsgRecoil);
  const [reSendFileState, setReSendFileState] = useRecoilState(reSendFileRecoil);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { warningModal, successModal } = useModalHook();
  const queryClient = useQueryClient();

  // 그룹 리스트 get simple list api
  const {
    mutate: groupSimpleListMutate,
    data: groupSimpleListData,
    isLoading: groupSimpleListLoading,
  } = useMutation(async (queryString: any) => {
    const response = await instance.get(`/groupSimpleList?groupSeqNo=${queryString}`);
    return response.data;
  });

  // 전송 api
  const { mutate: sendMsgMutate, isLoading: sendMsgLoading } = useMutation(useMutationSendMsg);

  useEffect(() => {
    setSndMsgState(reSendMsgState);
    setFileResult(reSendFileState);
  }, [reSendMsgState, reSendFileState]);

  useEffect(() => {
    groupSimpleListMutate(messageSendData?.groupSeqList);
  }, [messageSendData]);

  useEffect(() => {
    if (groupSimpleListData && !groupSimpleListLoading) {
      setMessageSendViewList((prevState: any) => {
        const updatedState = { ...prevState };
        updatedState.groupViewList = groupSimpleListData;
        return updatedState;
      });
    }
  }, [groupSimpleListLoading, groupSimpleListData]);

  // 날짜 변경
  const handleDate = (date: any, dateString: any) => {
    if (dateString !== '') {
      setSndDttm(dayjs(dateString).format('YYYYMMDDHHmmss'));
    } else {
      setSndDttm(dayjs(new Date()).format('YYYYMMDDHHmmss'));
    }
  };

  // 시간 변경
  const handleTime = (time: any, timeString: any) => {
    if (timeString !== '') {
      setTimeState(timeString);
    } else {
      setTimeState(dayjs(new Date()).format('HH:mm:ss'));
    }
  };
  // 메시지 작성
  const handleSendMsg = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // 작성 메시지
    const msg = e.currentTarget.value;
    // 작성 메시지 바이트
    const msgLength = calMsglen(msg);
    if (msgLength > 2000) {
      setSndMsgState(assertMsglen(msg, 2000));
    } else {
      setSndMsgState(msg);
    }
  };
  // 이미지 첨부 input 클릭
  const onClickInputFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  // 이미지 미리보기 업로드
  const uploadFileHandler = (file: any) => {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      setFileResult(event.target.result);
    };
    reader.readAsDataURL(file.target.files[0]);
  };
  // 이미지 삭제
  const deleteInputFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      setFileResult(null);
      setReSendFileState(null);
    }
  };

  // 전송에 필요한 데이터 가공
  const onClickSendValidation = (tap: number) => {
    const groupSeqList = messageSendData?.groupSeqList;
    const buddySeqList = messageSendData?.buddySeqList;
    const etcPhoneNumberList = messageSendData?.etcPhoneNumberList;

    let usrCd = '00000';
    let subject: string | null = null;
    let file;
    if (fileInputRef.current && fileInputRef.current?.files?.[0]) {
      file = fileInputRef.current.files[0];
    } else if (reSendFileState) {
      // 재전송일 경우
      file = base64ToBlob(reSendFileState, 'image/jpeg');
    }

    // MMS, LMS 구분
    if (file) {
      usrCd = 'MMS01';
    } else if (calMsgByte(sndMsgState) > 90) {
      usrCd = 'LMS01';
    }
    // 제목
    if (calMsgByte(sndMsgState) > 90) {
      subject = sndMsgSubjectState;
    }
    // 기본값
    const dto: any = {
      callback: selectNumber,
      sndMsg: sndMsgState,
      usrCd,
      groupSeqList,
      buddySeqList,
      etcPhoneNumberList,
      sndDttm: null,
      subject,
    };
    // 예약(1)or 반복(2) 전송일 경우
    if (tap === 2) {
      const timeSplit = timeState.split(':');
      dto.sndInterval = repeatCycleState.value;
      dto.dayOfWeek = repeatDayState.value;
      dto.repeatCount = repeatCountState;
      dto.sndDate = sndDateState;
      dto.sndHour = timeSplit[0];
      dto.sndMinute = timeSplit[1];
      dto.sndDttm = null;
    } else if (tap === 1) {
      dto.sndDttm = sndDttm;
    }
    return { dto, file };
  };

  // 전송
  const onClickSend = (tap: number) => {
    const sendData = onClickSendValidation(tap);
    if ((sendData.dto.sndMsg !== '' || sendData.file) && sendData.dto.callback &&
      (sendData.dto.groupSeqList?.length > 0 || sendData.dto.buddySeqList?.length > 0 || sendData.dto.etcPhoneNumberList?.length > 0)) {
      sendMsgMutate(sendData, {
        onSuccess: () => {
          successModal('전송', '메세지 전송 성공', true);
          queryClient.invalidateQueries(['point']); // 금액
          queryClient.invalidateQueries(['getMessageDataResultAll']); // 전송 결과
          queryClient.invalidateQueries(['getReserveSendList']); // 예약
          queryClient.invalidateQueries(['/contacts/frequently-sent']); // 자주 보낸 주소 리스트 조회
          queryClient.invalidateQueries(['/send-result']); // 이력
          resetMsgInfo();
        },
        onError: () => {
          warningModal(
            '전송',
            '메세지 전송 실패 </br>다시 시도 해주시기 바랍니다. </br> 만약 실패가 지속 된다면 문의 부탁드립니다.',
            true,
          );
        },
      });
    } else {
      warningModal('전송', '전송 양식이 올바르지않습니다.', true);
    }
  };

  // 수신인 상단 리스트 삭제
  const deleteSendTopList = (seqNo?: number) => {
    if (!seqNo && gridRef) {
      const gridInstance = gridRef.current.getInstance();
      gridInstance.uncheckAll();
      setMessageSendData((prevState: any) => {
        return {
          ...prevState,
          buddySeqList: [],
        };
      });

      setMessageSendViewList((prevState: any) => {
        return {
          ...prevState,
          buddyViewList: { buddyGroupName: prevState.buddyViewList.buddyGroupName, buddyList: [] },
        };
      });
    } else {
      const removeSendSeq = messageSendData.groupSeqList.map((el) => el).filter((el: any) => el !== seqNo);
      const removeSendView = messageSendViewList.groupViewList
        .map((el: any) => el)
        .filter((el: any) => el.groupSeqNo !== seqNo);

      setGroupCheckedList(removeSendSeq);
      setMessageSendData((prevState: any) => {
        return {
          ...prevState,
          groupSeqList: removeSendSeq,
        };
      });
      setMessageSendViewList((prevState: any) => {
        return {
          ...prevState,
          groupViewList: removeSendView,
        };
      });
    }
  };

  // 개별 리스트 하위 목록 삭제
  const deleteSendBottomSeqList = (buddySeq: number, rowKey: number) => {
    if (gridRef) {
      const gridInstance = gridRef.current.getInstance();
      const removeBuddySeqList: any = messageSendData.buddySeqList
        .map((el: any) => el)
        .filter((el: any) => el !== buddySeq);
      const removeBuddyViewList = messageSendViewList.buddyViewList.buddyList
        .map((el: any) => el)
        .filter((el: any) => el.buddySeqNo !== buddySeq);

      gridInstance.uncheck(rowKey);
      setMessageSendData((prevState: any) => {
        return {
          ...prevState,
          buddySeqList: removeBuddySeqList,
        };
      });

      setMessageSendViewList((prevState: any) => {
        return {
          ...prevState,
          buddyViewList: {
            buddyGroupName: prevState.buddyViewList.buddyGroupName,
            buddyList: removeBuddyViewList,
          },
        };
      });
    }
  };

  // 재전송 수신인 목록 하위 리스트 제거
  const deleteSendBottomEtcList = (keyCommNo: string) => {
    const removeEtcSeqList: any = messageSendData.etcPhoneNumberList
      .map((el: any) => el)
      .filter((el: any) => el !== keyCommNo);
    const removeEtcViewList = messageSendViewList.etcViewList.buddyList
      .map((el: any) => el)
      .filter((el: any) => el.keyCommNo !== keyCommNo);

    setMessageSendData((prevState: any) => {
      return {
        ...prevState,
        etcPhoneNumberList: removeEtcSeqList,
      };
    });

    setMessageSendViewList((prevState: any) => {
      return {
        ...prevState,
        etcViewList: {
          buddyGroupName: prevState.etcViewList.buddyGroupName,
          buddyList: removeEtcViewList,
        },
      };
    });
  };
  // 재전송 수신인 목록 상위 리스트 제거
  const deleteSendTopEtcList = () => {
    setMessageSendData((prevState: any) => {
      return {
        ...prevState,
        etcPhoneNumberList: [],
      };
    });

    setMessageSendViewList((prevState: any) => {
      return {
        ...prevState,
        etcViewList: {
          buddyGroupName: prevState.etcViewList.buddyGroupName,
          buddyList: [],
        },
      };
    });
  };

  return {
    setSndMsgState,
    fileInputRef,
    uploadFileHandler,
    onClickInputFile,
    fileResult,
    onClickSend,
    messageSendViewList,
    messageSendData,
    deleteSendTopList,
    deleteSendBottomSeqList,
    deleteSendBottomEtcList,
    sndMsgState,
    deleteInputFile,
    handleDate,
    sndDttm,
    repeatCycleState,
    setRepeatCycleState,
    repeatDayState,
    setRepeatDayState,
    repeatCountState,
    setRepeatCountState,
    onClickSendValidation,
    setSndDateState,
    sndDateState,
    timeState,
    setTimeState,
    handleTime,
    sendMsgLoading,
    deleteSendTopEtcList,
    setSndMsgSubjectState,
    handleSendMsg,
  };
};
