import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getPayList, getMbrCorpList } from '../../../../../apis/api/pointApi';
import { formatDateBase } from '../../../../../apis/utils/formats/dateFormatUtil';
import Loader from '../../../../common/Loader';
import { v4 as uuidv4 } from 'uuid';
import Paginations01Index from '../../../../common/paginations/Paginations01.index';
import { useFieldArray, useForm } from 'react-hook-form';
import { instance, instanceFile } from '../../../../../apis/api/clientAxios';
import DaumPostcode from 'react-daum-postcode';
import FileSaver from 'file-saver';
// import { useModal } from '../../../hooks/customs/useModal';
import { useModal } from '../../useModal';
import { useFetch } from '../../../../../apis/utils/reactQuery';

interface mbrCorpListType {
  corpId: number;
  등록상태초기: string;
  confirmState: string;
  corpName: string;
  corpNum: string;
  corpCeo: string;
  corpAddress: string;
  corpType: string;
  corpClass: string;
  corpFile: FileList;
  managerDept: string;
  managerName: string;
  managerPhone: string;
  managerEmail: string;
}

interface payListType {
  msgId: string;
  wrtDttm: string;
  payAmt: number;
}

export const usePublishTaxBill = (
  isInsertVisible: boolean,
  setIsInsertVisible: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const thead = ['선택', '법인명', '사업자등록번호', '등록 상태', ' '];
  const tbodyTitle = ['대표명', '주소지', '업태 및 업종', '담당자', '부 서', '연락처', '이메일'];
  // const [isInsertVisible, setIsInsertVisible] = useState(false);

  const queryClient = useQueryClient();

  const { confirmModal, warningModal, successModal } = useModal();

  // 결제 내역 thead
  const payThead = ['', '결제일', '결제 금액'];

  const [totalPage, setTotalPage] = useState(5);

  const [userKey, setUserKey] = useState('');
  const queryKey = ['MbrCorpList', userKey];
  const PayqueryKey = ['getPayList', userKey];

  // 사업자 상세보기, 첨부파일 input  토글
  const [isOn, setIsOn] = useState(0);

  // 결제 내역 리스트
  const { data: payResultData, isLoading: payLoading } = useFetch<Array<payListType>>('/getPayList', undefined, {
    retry: false,
  });
  // 사업자 리스트
  const { data: MbrCorpData, isLoading: CorpLoading } = useFetch<Array<mbrCorpListType>>('/getMbrCorpList', () => {});
  const getStateCategory = (confirmState: string) => {
    if (confirmState === 'R') {
      return '승인 중';
    }

    if (confirmState === 'Y') {
      return '승인 완료';
    }

    if (confirmState === 'C') {
      return '승인 거절';
    }

    return '알 수 없음';
  };

  // useEffect(() => {
  //   getPayList().then((data) => setTotalPage(data.totalElements));
  //   getMbrCorpList();
  //   // handlePageChange(currentPage-1);
  // }, []);

  // useEffect(() => {
  //   getMbrCorpList();
  // });

  // 각 항목에 대한 확장 상태를 추적하는 상태
  const [expandedItem, setExpandedItem] = useState(-1);

  // BottomArrow 클릭을 처리하는 함수
  const handleArrowClick = (index: any) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    mode: 'onSubmit',
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'MbrCorpList',
  });

  const [modalState, setModalState] = useState(false);

  // 주소창
  const postCodeStyle: any = {
    width: '400px',
    height: '400px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    zIndex: 1000,
    display: modalState ? 'block' : 'none',
    boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.75)',
  };

  // 주소창 닫기
  const closeOverlay = () => {
    setModalState(false);
  };

  // 주소 추가
  const onCompletePost = (data: any) => {
    setModalState(false);

    setValue(`MbrCorpList[${expandedItem}].corpAddress`, `(${data.zonecode}) ${data.address} ${data.buildingName}`);
  };

  // 사업자 수정
  const onSubmit = async (data: any) => {
    if (
      data.MbrCorpList[expandedItem].사업자등록번호.length !== 10 &&
      data.MbrCorpList[expandedItem].사업자등록번호.length !== 13
    ) {
      warningModal('등록된 사업자 수정', '사업자등록번호를 확인해 주세요.', true);
      return;
    }

    confirmModal(
      async () => {
        try {
          const corpInfoData: any = {
            corpId: data.MbrCorpList[expandedItem].id,
            corpName: data.MbrCorpList[expandedItem].법인명,
            corpNum: data.MbrCorpList[expandedItem].사업자등록번호,
            confirmState: data.MbrCorpList[expandedItem].confirmState,
            // corpFile: data.MbrCorpList[expandedItem].corpFile,
            corpCeo: data.MbrCorpList[expandedItem].대표명,
            corpType: data.MbrCorpList[expandedItem].업태,
            corpClass: data.MbrCorpList[expandedItem].업종,
            corpAddress: data.MbrCorpList[expandedItem].주소지,
            managerDept: data.MbrCorpList[expandedItem].부서,
            managerName: data.MbrCorpList[expandedItem].담당자,
            managerPhone: data.MbrCorpList[expandedItem].연락처,
            managerEmail: data.MbrCorpList[expandedItem].이메일,
          };

          // 폼 데이터 생성
          const formData = new FormData();
          // formData.append('corpInfoDTO', JSON.stringify(corpInfoData));
          // formData.append('corpInfoDTO', corpInfoData);
          const json = JSON.stringify(corpInfoData);
          const blob = new Blob([json], { type: 'application/json' });
          formData.append('corpInfoDTO', blob);
          formData.append('file', data.MbrCorpList[expandedItem].첨부파일[0]); // 파일은 배열로 전송됩니다.

          // Axios를 사용하여 서버로 데이터 전송
          await instanceFile.post(`/updateCorpInfo`, formData);
          successModal('등록된 사업자 수정', '선택한 사업자가 성공적으로 수정되었습니다.', true);
          queryClient.invalidateQueries(['/getMbrCorpList']);

          setExpandedItem(-1);
        } catch (error) {
          warningModal('등록된 사업자 수정', '선택한 사업자 수정에 실패했습니다.', true);
        }
      },
      '등록된 사업자 수정',
      '선택한 사업자를 수정하시겠습니까?',
      true,
    );
  };

  // 사업자 삭제
  const handleDelete = async (data: any) => {
    confirmModal(
      async () => {
        try {
          const corpId = Number(data.MbrCorpList[expandedItem].id);
          await instance.post(`/deleteMbrCorpInfo?corpId=${corpId}`);
          successModal('선택한 사업자 삭제', '선택한 사업자가 삭제되었습니다.', true);
          queryClient.invalidateQueries(['/getMbrCorpList']);
          setExpandedItem(-1);
        } catch (error) {
          warningModal('선택한 사업자 삭제', '선택한 사업자 삭제가 실패했습니다.', true);
        }
      },
      '선택한 사업자 삭제',
      '선택한 사업자를 삭제하시겠습니까?',
      true,
    );
  };

  // 사업자 등록 추가
  const insertOpen = () => {
    setIsInsertVisible(true);
  };

  // 세금계산서 발행 value값
  const [inputValue, setInputValue] = useState<any>({
    corpId: 0,
    msgIdList: [],
    totalPrice: 0,
    payAmt: [],
    confirmState: '',
  });

  const [selectedOption, setSelectedOption] = useState('');
  // const [selectedOption2, setSelectedOption2] = useState('');
  // 체크박스 상태 관리
  const [checkedBox, setCheckedBox] = useState<{ [key: string]: boolean }>({});
  const [checkedBoxes, setCheckedBoxes] = useState<{ [key: string]: boolean }>({});
  // 선택된 데이터 관리
  const [selectedData, setSelectedData] = useState<any[]>([]);
  const [selectedDatas, setSelectedDatas] = useState<any[]>([]);

  // 결제내역 체크박스 클릭 핸들러
  const handleCheckBoxClick = (msgId: string, e: any, data: any) => {
    const { name, value } = e.target;

    setCheckedBox((prev) => {
      const updatedChecked = {
        ...prev,
        [msgId]: !prev[msgId], // 클릭할 때마다 체크 여부를 토글
      };

      // 현재 선택된 체크박스의 개수 확인
      const currentCheckedCount = Object.values(updatedChecked).filter((isChecked) => isChecked).length;

      // 체크박스 개수가 4개를 초과하면 추가적인 처리를 하지 않음
      if (currentCheckedCount > 4) {
        warningModal('결제 내역은 최대 4개까지만 선택할 수 있습니다.'); // 사용자에게 알림
        // 체크 상태를 유지하지 않음
        return prev;
      }

      const selectedPayItem = payResultData?.find((item: any) => item[name] === value);

      setInputValue((prevData: any) => ({
        ...prevData,
        msgIdList: checkedBox[msgId]
          ? prevData.msgIdList.filter((id: string) => id !== value)
          : [...prevData.msgIdList, value],
        payAmt: checkedBox[msgId]
          ? prevData.payAmt.filter(
              (amt: number) => amt !== Number(selectedPayItem?.payAmt.toString().replace(/,/g, '')),
            )
          : [...prevData.payAmt, Number(selectedPayItem?.payAmt.toString().replace(/,/g, ''))],
      }));

      return updatedChecked;
    });

    setSelectedData((prev) => {
      // 체크가 해제된 경우 해당 데이터를 제외
      if (prev.some((item) => item['체크'] === msgId)) {
        return prev.filter((item) => item['체크'] !== msgId);
      }
      // 체크된 경우 해당 데이터를 추가
      return [...prev, data];
    });
  };

  // 사업자 리스트 선택 박스 value
  const onValue = (corpId: string, e: any, data: any) => {
    const { name, value } = e.target;

    if (e.target.name === 'corpId') {
      setSelectedOption(e.target.value);

      // 선택된 corpId를 사용하여 MbrCorpData에서 해당 기업 데이터를 찾음
      const selectedCorpData = MbrCorpData?.find((corp: any) => corp.corpId.toString() === corpId);

      // 찾은 데이터의 confirmState를 inputValue에 설정
      if (selectedCorpData) {
        setInputValue((prevData: any) => ({
          ...prevData,
          [name]: value,
          confirmState: selectedCorpData.confirmState, // 등록상태초기는 confirmState의 값입니다.
        }));
      } else {
        // 선택된 corpId에 해당하는 데이터가 없는 경우
        console.log('선택하신 사업자 ID에 해당하는 데이터를 찾을 수 없습니다.');
      }
    }

    // if (e.target.name === 'msgId') {
    //   // e.target.value.checked = true;
    //   const selectedPayItem = payResultData?.find((item: any) => item['체크'] === value);

    //   console.log(selectedPayItem)
    //   setInputValue((prevData: any) => ({
    //     ...prevData,
    //     msgIdList: [...prevData.msgIdList, value],
    //     payAmt: [...prevData.payAmt, Number(selectedPayItem?['결제금액'].replace(/,/g, ''))],
    //   }));
    // }

    // console.log(e)
  };

  // 세금계산서 발행
  const onSubmit2 = async (data: any) => {
    const totalPayAmt = inputValue.payAmt.reduce((acc: any, payAmt: any) => acc + payAmt, 0);

    const corpInfoData: any = {
      corpId: inputValue.corpId,
      msgIdList: inputValue.msgIdList,
      payAmt: inputValue.payAmt,
      totalPrice: totalPayAmt,
      confirmState: inputValue.confirmState,
    };

    if (corpInfoData.corpId === 0 || corpInfoData.msgIdList.length === 0) {
      warningModal('사업자 리스트와 결제 내역을 체크해주세요');
      return;
    }

    if (inputValue.confirmState !== 'Y') {
      warningModal('승인 완료된 사업자만 세금계산서 발행이 가능합니다.');
      return;
    }

    confirmModal(
      async () => {
        try {
          // Axios를 사용하여 서버로 데이터 전송
          await instance.post(`/publishTaxBill`, corpInfoData);
          successModal('세금계산서 발행', '세금계산서 발행에 성공했습니다.', true);
          queryClient.invalidateQueries(['/getPayList']);
          queryClient.invalidateQueries(['/getTaxBillList']);
          inputValue.msgIdList = [];
        } catch (error) {
          warningModal('세금계산서 발행', '세금계산서 발행에 실패했습니다.', true);
        }
      },
      '세금계산서 발행',
      '세금계산서 발행을 하시겠습니까?',
      true,
    );
  };

  // 사업자등록증 파일 다운로드
  const fileDownload = async (corpId: number, corpFile: any) => {
    try {
      const response = await instance.get('/corpFileDownload', { responseType: 'blob', params: { corpId } });
      if (response.status === 200) {
        const contentDisposition = response.headers['content-disposition'];
        const filenameMatch = /filename="(.*)"/.exec(contentDisposition);
        const filename = filenameMatch ? filenameMatch[1] : corpFile;

        // 파일 다운로드
        FileSaver.saveAs(response.data, filename);

        return response;
      }
      if (response.data === undefined) {
        return undefined;
      }
      return response.status;
    } catch (error) {
      return error;
    }
  };

  // 사업자 정보 등록하기 클릭시 사업자form on
  const handleInsertButtonClick = () => {
    setIsInsertVisible(true);
  };

  return {
    modalState,
    setModalState,
    closeOverlay,
    postCodeStyle,
    onCompletePost,
    insertOpen,
    thead,
    MbrCorpData,
    selectedOption,
    onValue,
    handleArrowClick,
    setIsOn,
    expandedItem,
    handleSubmit,
    handleDelete,
    onSubmit,
    onSubmit2,
    register,
    fileDownload,
    CorpLoading,
    payLoading,
    payThead,
    payResultData,
    checkedBox,
    handleCheckBoxClick,
    isOn,
    setIsInsertVisible,
    handleInsertButtonClick,
    getStateCategory,
  };
};
