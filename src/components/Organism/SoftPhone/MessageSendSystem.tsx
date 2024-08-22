import { useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

import { useFieldArray, useForm } from 'react-hook-form';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { getCallerNumberList, getUserAddressGroupList } from '../../../apis/api/addressApis';
import { calMsglen } from '../../../apis/utils/translateEncode';
import { groupCheckBoxListState, itemCheckBoxListState } from '../../../recoil/atoms/addressList';
import BaseButton from '../../Atom/BaseButton';
import AddressDropdown from '../../Molecules/addressbook/AddressDropdown';
import Loader from '../../common/Loader';

import { useGetMessageForms } from '../../hooks/customs/useGetMessageForms';
import { useModal } from '../../hooks/customs/useModal';

import { useFilePost } from '../../../apis/hooks/usePost';
import AttachFile from '../../Molecules/SoftPhone/AttachFile';
import CallingNumber from '../../Molecules/SoftPhone/CallingNumber';
import ContentArea from '../../Molecules/SoftPhone/ContentArea';
import MsgCategoryCheck from '../../Molecules/SoftPhone/MsgCategoryCheck';
import SndMsgTypeCheck from '../../Molecules/SoftPhone/SndMsgTypeCheck';
import { BuddyData } from '../../Molecules/addressbook/types/AddressTable.types';
import * as S from '../AddressBook/styles/MessageSendSystem.styles';

type UploadImage = {
  file: File;
  thumbnail: string;
  type: string;
};

interface MessageSendSystemProps {
  sndMsg?: string;
  subject?: string;
}
// const MessageSendSystem = ({ sndMsg, subject }: MessageSendSystemProps) => {
const MessageSendSystem = (props: MessageSendSystemProps) => {
  const queryClient = useQueryClient();
  const { mutate: sendMessage } = useFilePost('/message/legacy/send');
  const { warningModal, confirmModal, successModal } = useModal();

  const fileInputRef = useRef<HTMLInputElement>(null); // 이미지 첨부
  const [imageFile, setImageFile] = useState<UploadImage | null>(null); // 첨부한 이미지

  const [isOpen, setIsOpen] = useState(false); // 메인테이블에서 받아온 개별리스트 드롭다운 상태
  const [directIsOpen, setDirectIsOpen] = useState(false); // 수신인 직접추가목록 드롭다운 상태
  const [itemSubmitValue, setItemSubmitValue] = useState(''); // 수신인 직접입력해서 개별리스트로 추가하는 인풋벨류
  const [IsSubmitting, setIsSubmitting] = useState(false); // 그룹 추가시 버튼 활성화 상태

  const groupCheckBoxList = useRecoilValue<number[]>(groupCheckBoxListState);
  const [checkedList, setCheckedList] = useRecoilState<BuddyData[]>(itemCheckBoxListState); // 메인테이블에서 체크한 리스트
  const [directAddItem, setDirectAddItem] = useState<string[]>([]); // 수신인 직접입력 목록

  // 발신번호 리스트
  const [messageEncode, setMessageEncode] = useState<number>(0);

  const { data: callerNumberList, isLoading: callerNumberLoading } = useQuery<any>(['callerNumberList'], () =>
    getCallerNumberList(),
  );

  const { handleSubmit, control, setValue, register, reset } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      callback: '', // 첫 번째 요소로 설정
      subject: '',
      sndMsg: '', // 보낼 메세지
      usrCd: '00000', // sms : 00000, lms : LMS01, mms : MMS01
      groupSeqList: [0], // 그룹 PK) 리스트, 배열
      buddySeqList: [], // 주소록 PK 리스트, 배열
      etcPhoneNumberList: [], // 주소록에 없고 즉석에서 추가한 전화번호 리스트
      msgType: 'M0',

      // 예약전송 시간
      sndDttm: '', // 공란 또는 과거시점이면 즉시발송, 미래시점의 경우 예약발송 ex 2023년 11월 08일 11시 11분 11초 '20231108111111'

      // 반복전송을 위한 파라미터
      sndInterval: 'week',
      dayOfWeek: 'monday',
      sndDate: '1',
      sndHour: '12',
      sndMinute: '00',
      repeatCount: 2,
    },
  });

  // useform 커스텀 훅으로  onchange 함수 변환
  const { subject, sndMsg, callback, msgType, sndInterval, dayOfWeek, sndDate, sndHour, sndMinute, repeatCount }: any =
    useGetMessageForms({
      control,
      callerNumberList,
    });

  // 입력값을 받아서 value에 따른 분기처리
  const handleOnChange = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
    onChange(value);
  };

  // const type = watch('msgType');

  useEffect(() => {
    switch (msgType) {
      case 'M0':
        reset({
          sndInterval: '',
          dayOfWeek: '',
          sndDate: '',
          sndHour: '',
          sndMinute: '',
          repeatCount: 0,
          sndDttm: '',
        });
        break;
      case 'M1':
        reset({
          sndInterval: '',
          dayOfWeek: '',
          sndDate: '',
          sndHour: '',
          sndMinute: '',
          repeatCount: 0,
          sndDttm: '',
        });
        break;
      case 'M2':
        reset({
          sndInterval: 'week',
          dayOfWeek: 'monday',
          sndDate: '1',
          sndHour: '12',
          sndMinute: '00',
          repeatCount: 2,
          sndDttm: '',
        });
        break;
      default:
        break;
    }
  }, [msgType, reset]);

  // 메세지 컨텐츠 크기 계산
  useEffect(() => {
    const messageSize = calMsglen(sndMsg.value);

    setMessageEncode(messageSize);
  }, [sndMsg]);

  // 메세지 타입
  useEffect(() => {
    const condition1 = messageEncode >= 100;

    if (!condition1 && !imageFile) {
      setValue('usrCd', '00000');
    } else if (condition1 && !imageFile) {
      setValue('usrCd', 'LMS01');
    } else {
      setValue('usrCd', 'MMS01');
    }
  }, [messageEncode, imageFile]);

  // callback default 값 지정
  useEffect(() => {
    if (!callerNumberLoading && callerNumberList) {
      setValue('callback', callerNumberList[0].callback);
    }
  }, [callerNumberLoading, callerNumberList]);

  // 이미지 파일 전송시 state에 저장
  const uploadImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (fileList && fileList[0]) {
      const url = URL.createObjectURL(fileList[0]);
      setImageFile({
        file: fileList[0],
        thumbnail: url,
        type: fileList[0].type.slice(0, 5),
      });
    }
  };

  // icon 클릭시 state 초기화
  const handleImageDeleteClick = () => {
    setImageFile(null);
  };

  const showImage = useMemo(() => {
    if (!imageFile && imageFile === null) {
      return null;
    }
    return <S.ShowFileImage src={imageFile.thumbnail} alt={imageFile.type} />;
  }, [imageFile]);

  // 메인테이블에서 체크박스로 받아온 Set함수를 배열로 만들어 리스트 만들기
  const checkedArray: any = Array.from(checkedList);
  // const checkedArray: any = ['01000000000'];

  // 체크 넘버, 입력 넘버 useform value로 넘기기
  useEffect(() => {
    if (checkedList) {
      const filterData: any | number[] = checkedList.map((el) => el.buddySeqNo);
      setValue('buddySeqList', filterData);
    }
  }, [checkedArray]);

  // 재전송 메세지 감지
  useEffect(() => {
    if (props.sndMsg) {
      setValue('sndMsg', props.sndMsg);
    }
  }, [props.sndMsg]);

  // 재전송 메세지 제목 감지
  // useEffect(() => {
  //   if (props.subject) {
  //     setValue('subject', props.subject);
  //   }
  // }, [props.subject]);

  // 체크박스 데이터와 'groupList'의 데이터 불러옴
  const { data: groupList = [], isLoading } = useQuery(['groupList2'], () => getUserAddressGroupList());

  // 체크 그룹 useform value로 넘기기
  useEffect(() => {
    if (groupCheckBoxList) {
      setValue('groupSeqList', groupCheckBoxList);
    }
  }, [groupCheckBoxList]);

  // 메인테이블에서 불러온 개별리스트 '그룹' 삭제버튼
  const handleDeleteGroupButtonClick = () => {
    setCheckedList([]); // 삭제하면 빈배열으로 만들기
  };

  // 수신인 직접추가목록 리스트 '그룹' 삭제버튼
  const handleDeleteDirectAddItemGroup = () => {
    setDirectAddItem([]); // 삭제하면 빈배열로 만들기
  };

  // 개별리스트 아이템 제거하는 함수
  const deleteItemhandler = (item: BuddyData) => {
    const newArray = checkedList.filter((list) => list !== item);
    setCheckedList(newArray);
  };

  // 수신인 직적추가목록 아이템 제거하는 함수
  const deleteDirectAddItemHandler = (item: string) => {
    const newArray = directAddItem.filter((list) => list !== item);
    setDirectAddItem(newArray);
  };

  // 개별리스트 X버튼 클릭이벤트
  const handleDeleteItemButtonClick = (item: BuddyData) => {
    deleteItemhandler(item);
  };

  // 수신인 직접추가목록 개별리스트 x버튼 클릭이벤트
  const handleDeleteDirectAddItem = (item: string) => {
    deleteDirectAddItemHandler(item);
  };

  // 수신인 추가 인풋 벨류 핸들러
  const itemSubmitValueHandler = (e: { target: { value: React.SetStateAction<string> } }) => {
    setItemSubmitValue(e.target.value);
  };

  // 수신인 폼태그로 추가하기
  const writeNumberClick = () => {
    const addNewItem = itemSubmitValue.trim();
    const phoneNumCheck = /^(01[0156789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
    const isValidPhoneNum = phoneNumCheck.test(addNewItem);
    if (!addNewItem) {
      setItemSubmitValue('');
      warningModal('수신인 추가', '추가할 번호를 입력해 주세요.', true);
      return;
    }
    if (addNewItem.length >= 1 && !isValidPhoneNum) {
      warningModal('수신인 추가', '입력한 번호를 확인해 주세요.', true);
      return;
    }

    // setIsSubmitting(true); // 제출 중인 상태로 변경
    const newItem: any | string[] = [...directAddItem, addNewItem];
    setDirectAddItem(newItem); // newItem을 Set으로 만들어서 checkedSet에 적용
    setValue('etcPhoneNumberList', newItem);
    setItemSubmitValue('');
    setIsSubmitting(false); // 제출 완료 후 상태 변경
  };

  // 메세지 전송
  const transmitMessage = (data: any) => {
    const {
      callback, // 첫 번째 요소로 설정
      subject,
      sndMsg, // 보낼 메세지
      usrCd, // sms : 00000, lms : LMS01, mms : MMS01
      groupSeqList, // 그룹 PK) 리스트, 배열
      buddySeqList, // 주소록 PK 리스트, 배열
      etcPhoneNumberList, // 주소록에 없고 즉석에서 추가한 전화번호 리스트
      msgType,

      // 예약전송 시간
      sndDttm, // 공란 또는 과거시점이면 즉시발송, 미래시점의 경우 예약발송 ex 2023년 11월 08일 11시 11분 11초 '20231108111111'

      // 반복전송을 위한 파라미터
      sndInterval,
      dayOfWeek,
      sndDate,
      sndHour,
      sndMinute,
      repeatCount,
    }: any = data;

    // 반복전송 컬럼
    const repeatMsg = {
      callback, // 첫 번째 요소로 설정
      subject,
      sndMsg, // 보낼 메세지
      usrCd, // sms : 00000, lms : LMS01, mms : MMS01
      groupSeqList, // 그룹 PK) 리스트, 배열
      buddySeqList, // 주소록 PK 리스트, 배열
      etcPhoneNumberList,
      sndInterval,
      dayOfWeek,
      sndDate,
      sndHour,
      sndMinute,
      repeatCount,
    };
    // 예약전송 컬럼
    const rsvMsg = {
      callback, // 첫 번째 요소로 설정
      subject,
      sndMsg, // 보낼 메세지
      usrCd, // sms : 00000, lms : LMS01, mms : MMS01
      groupSeqList, // 그룹 PK) 리스트, 배열
      buddySeqList, // 주소록 PK 리스트, 배열
      etcPhoneNumberList,
      sndDttm,
    };

    const immediateMsg = {
      callback, // 첫 번째 요소로 설정
      subject,
      sndMsg, // 보낼 메세지
      usrCd, // sms : 00000, lms : LMS01, mms : MMS01
      groupSeqList, // 그룹 PK) 리스트, 배열
      buddySeqList, // 주소록 PK 리스트, 배열
      etcPhoneNumberList,
    };
    let sendMsgData: any;

    switch (msgType) {
      case 'M2':
        sendMsgData = {
          dto: repeatMsg,
          file: imageFile,
        };
        break;
      case 'M1':
        sendMsgData = {
          dto: rsvMsg,
          file: imageFile,
        };
        break;
      case 'M0':
        sendMsgData = {
          dto: immediateMsg,
          file: imageFile,
        };
        break;
      default:
        console.error('Invalid msgType');
        break;
    }

    if (data.sndMsg === '') {
      warningModal('실패', '전달하실 메세지를 입력해주세요', true);
    } else if (
      data.groupSeqList.length === 0 &&
      data.buddySeqList.length === 0 &&
      data.etcPhoneNumberList.length === 0
    ) {
      warningModal('실패', '전달하실 번호를 입력해주세요', true);
    } else {
      confirmModal(
        () =>
          sendMessage(sendMsgData, {
            onSuccess: (response: any) => {
              //   queryClient.invalidateQueries(['getLongTimeStorageList']);
              successModal('메세지 전송', `메세지 전송에 성공하셨습니다.`, true);
              queryClient.invalidateQueries(['point']);
              return response.data;
            },
            onError: (res) => {
              warningModal('메세지 전송', '메세지 전송에 실패하셨습니다.', true);
            },
          }),
        '메세지 전송',
        '메세지를 전송하시겠습니까?',
        true,
      );
    }
  };

  return (
    <S.MessageSendSystemWrap>
      <S.MessageSendSystemInner>
        <S.MessageSendSystemTitleWrap>
          <S.MessageSendSystemTitle>수신인</S.MessageSendSystemTitle>
          <S.AddNumberItemInput
            type="text"
            id="addItem"
            name="addItem"
            value={itemSubmitValue}
            onChange={itemSubmitValueHandler}
            placeholder="01012345678"
          />
          <S.AddItemIconButton disabled={IsSubmitting}>
            <FaPlus size={14} color="gray" onClick={writeNumberClick} />
          </S.AddItemIconButton>
        </S.MessageSendSystemTitleWrap>
        <S.MessageSendSystemBody>
          {isLoading ? (
            <Loader />
          ) : (
            <S.SendNumberWrap>
              <S.SendNumberList>
                {/* 그룹리스트 */}
                {groupList &&
                  groupList?.groupList?.length > 0 &&
                  groupList?.groupList
                    ?.filter((group: any) => groupCheckBoxList.includes(group.groupSeqNo))
                    .map((group: any) => <AddressDropdown key={group.groupSeqNo} group={group} />)}
                {/* 개별리스트 */}
                {checkedList && checkedList?.length > 0 ? (
                  <S.DropdownBtnWrapper>
                    <S.DropdownButton
                      type="button"
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                    >
                      <S.GroupNmDelBtnWrap>
                        추가리스트 ({checkedList?.length})
                        <S.DeleteButton onClick={handleDeleteGroupButtonClick}>
                          <FaTimes size={14} color="gray" />
                        </S.DeleteButton>
                      </S.GroupNmDelBtnWrap>
                      <div>
                        {isOpen ? (
                          <BsChevronUp size="16px" color="#141414" />
                        ) : (
                          <BsChevronDown size="16px" color="#141414" />
                        )}
                      </div>
                    </S.DropdownButton>
                    {isOpen && (
                      <S.GrouplistWrapper>
                        {checkedList &&
                          checkedList.length > 0 &&
                          checkedList?.map((item: BuddyData) => (
                            <S.Grouplist key={uuidv4()}>
                              <S.NameBox>{item.buddyNm}</S.NameBox>
                              <S.NumberBox>{item.keyCommNo}</S.NumberBox>
                              <S.DeleteButton onClick={() => handleDeleteItemButtonClick(item)}>
                                <FaTimes size={12} color="gray" />
                              </S.DeleteButton>
                            </S.Grouplist>
                          ))}
                      </S.GrouplistWrapper>
                    )}
                  </S.DropdownBtnWrapper>
                ) : null}
                {directAddItem && directAddItem?.length > 0 ? (
                  <S.DropdownBtnWrapper>
                    <S.DropdownButton
                      type="button"
                      onClick={() => {
                        setDirectIsOpen(!directIsOpen);
                      }}
                    >
                      <S.GroupNmDelBtnWrap>
                        수신인 추가 ({directAddItem?.length})
                        <S.DeleteButton onClick={handleDeleteDirectAddItemGroup}>
                          <FaTimes size={14} color="gray" />
                        </S.DeleteButton>
                      </S.GroupNmDelBtnWrap>
                      <div>
                        {directIsOpen ? (
                          <BsChevronUp size="16px" color="#141414" />
                        ) : (
                          <BsChevronDown size="16px" color="#141414" />
                        )}
                      </div>
                    </S.DropdownButton>
                    {directIsOpen && (
                      <S.GrouplistWrapper>
                        {directAddItem &&
                          directAddItem.length > 0 &&
                          directAddItem?.map((item: string) => (
                            <S.Grouplist key={uuidv4()}>
                              <S.NameBox>
                                <span>수신인</span>
                              </S.NameBox>
                              <S.NumberBox>{item}</S.NumberBox>
                              <S.DeleteButton onClick={() => handleDeleteDirectAddItem(item)}>
                                <FaTimes size={12} color="gray" />
                              </S.DeleteButton>
                            </S.Grouplist>
                          ))}
                      </S.GrouplistWrapper>
                    )}
                  </S.DropdownBtnWrapper>
                ) : null}
              </S.SendNumberList>
            </S.SendNumberWrap>
          )}
        </S.MessageSendSystemBody>
        <ContentArea
          // handleMouseEnter={handleMouseEnter}
          // handleMouseLeave={handleMouseLeave}
          // isHovering={isHovering}
          handleImageDeleteClick={handleImageDeleteClick}
          imageFile={imageFile}
          sndMsg={sndMsg}
          showImage={showImage}
          handleOnChange={handleOnChange}
          messageEncode={messageEncode}
          subject={subject}
        />
        <S.MessageButtonSection>
          <S.MessageButtonSectionLeft>
            <MsgCategoryCheck onChange={handleOnChange} msgType={msgType} />

            <CallingNumber callback={callback} handleOnChange={handleOnChange} callerNumberList={callerNumberList} />
          </S.MessageButtonSectionLeft>
          <BaseButton
            width="6.9rem"
            height="49px"
            backgroundColor="#1175F7"
            color="#fff"
            fontSize="1.5rem"
            onClick={handleSubmit(transmitMessage)}
          >
            전송
          </BaseButton>
        </S.MessageButtonSection>
        <SndMsgTypeCheck
          msgType={msgType}
          sndInterval={sndInterval}
          handleOnChange={handleOnChange}
          dayOfWeek={dayOfWeek}
          sndDate={sndDate}
          sndHour={sndHour}
          sndMinute={sndMinute}
          repeatCount={repeatCount}
          setValue={setValue}
          register={register}
        />
        <AttachFile fileInputRef={fileInputRef} uploadImageChange={uploadImageChange} />
      </S.MessageSendSystemInner>
    </S.MessageSendSystemWrap>
  );
};

export default MessageSendSystem;
