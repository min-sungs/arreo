import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { DefaultRowData } from '../../../../apis/api/addressApis';
import { usePost } from '../../../../apis/hooks/usePost';
import { useGroupList } from '../addressBook/useGroupList';
import { useModal } from '../useModal';

export interface TableRowData {
  label: string;
  value: string;
  [key: string]: string;
}

export const defaultRow = [
  { key: 'groupSeqNo', label: '그룹', value: '' },
  { key: 'buddyNm', label: '이름', value: '' },
  { key: 'keyCommNo', label: '휴대폰번호', value: '' },
  { key: 'emailId', label: '이메일', value: '' },
  { key: 'birthday', label: '생일', value: '' },
  { key: 'coNm', label: '회사이름', value: '' },
  { key: 'coHandle', label: '직함', value: '' },
  { key: 'coDept', label: '부서', value: '' },
  { key: 'genderFlag', label: '성별', value: '' },
  { key: 'homeZipCd', label: '집우편번호', value: '' },
  { key: 'homeAddr', label: '집주소', value: '' },
  { key: 'homeNumber', label: '집전화', value: '' },
  { key: 'coZipCd', label: '회사우편번호', value: '' },
  { key: 'coAddr', label: '회사주소', value: '' },
  { key: 'coNumber', label: '회사전화', value: '' },
  { key: 'faxNumber', label: '팩스', value: '' },
  { key: 'homepageUrl', label: '홈페이지', value: '' },
  { key: 'accountNo', label: '계좌번호', value: '' },
  { key: 'marriageDay', label: '결혼기념일', value: '' },
  { key: 'messenger', label: '메신저', value: '' },
  { key: 'number015', label: '015번호', value: '' },
  { key: 'etcInfo', label: '메모', value: '' },
  { key: 'residentNo', label: '주민번호', value: '' },
  // { key: 'deleteBtn', label: '삭제', value: '' },
];

export const defaultAddData = {
  // groupNm: '', // 그룹이름
  groupSeqNo: null, // 그룹고유번호
  buddyNm: '', // 이름
  keyCommNo: '', // 휴대폰번호
  // siteId: '', // 서비스이용 사이트 이름(아레오, 네티앙)
  // usrId: '', // ?한성노트북
  // usrKey: '', // ?
  emailId: '', // 이메일
  birthday: '', // 생일
  coNm: '', // 회사이름
  coHandle: '', // 직함
  coDept: '', // 부서
  genderFlag: '', // 성별
  homeZipCd: '', // 집우편번호
  homeAddr: '', // 집주소
  homeNumber: '', // 집전화
  coZipCd: '', // 회사우편번호
  coAddr: '', // 회사주소
  coNumber: '', // 회사전화
  faxNumber: '', // 팩스
  homepageUrl: '', // 홈페이지
  accountNo: '', // 계좌번호
  marriageDay: '', // 결혼기념일
  messenger: '', // 메신저
  number015: '', // 015번호
  etcInfo: '', // 메모
  residentNo: '', // 주민번호
  // natCd: '', // 국가번호
  // deleteBtn: '',
};

// 성별라벨 셀렉트 옵션 값지정
export const selectOptions2 = [
  { label: '선택안함', value: '' },
  { label: '남자', value: '1' },
  { label: '여자', value: '0' },
];

export const useLargeAddressTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPostting, setIsPostting] = useState(false);
  const [groupDetail, setGroupDetail] = useState([]); // 그룹 선택 담기는 배열
  const [columnVisibility, setColumnVisibility] = useState<{ [key: string]: boolean }>({});
  const [selectedItems, setSelectedItems] = useState(new Set(['그룹', '이름', '휴대폰번호', '이메일', '메모']));
  const [selectedKey, setSelectedKey] = useState(new Set(['groupSeqNo', 'buddyNm', 'keyCommNo', 'emailId', 'etcInfo']));
  const [headerSelect, setHeaderSelect] = useState<string | undefined>(groupDetail[0]);
  const [addData, setAddData] = useState<DefaultRowData[]>([defaultAddData]);
  const [openLargeToggle, setOpenLargeToggle] = useState<boolean>(false); // 대량추가 페이지 토글 상태
  const { mutate: addBuddyDataList } = usePost('/contacts/large-buddy', { params: 'groupList2' }); // 대량 추가

  const queryClient = useQueryClient();

  const { groupList, groupListIsLoading } = useGroupList();
  const { warningModal, successModal } = useModal();

  const { register, handleSubmit, control, setValue, reset } = useForm({
    defaultValues: { largeColum: [defaultAddData] },
  });
  const { fields, append, remove } = useFieldArray({
    name: 'largeColum',
    control,
  });

  // 대량추가 테이블 toggle handle
  const largeToggleHandle = () => {
    setOpenLargeToggle((prev) => !prev);
  };

  // 그룹 셀렉트 옵션
  const largeGroupOption = [{ label: '그룹선택', value: '' }, ...groupDetail];

  // 그룹 셀렉트 옵션 리스트 담기
  useEffect(() => {
    if (groupList.groupList && !groupListIsLoading) {
      const listDetail = groupList?.groupList?.map((el: any) => ({ label: el.groupNm, value: el.groupSeqNo }));
      setGroupDetail(listDetail);
    }
  }, [groupList, groupListIsLoading]);

  // 컬럼 체크여부에 따른 가시성 설정
  useEffect(() => {
    const defaultVisibility: { [key: string]: boolean } = {};
    selectedItems.forEach((item) => {
      defaultVisibility[item] = true;
    });
    setColumnVisibility(defaultVisibility);
  }, [isModalOpen]);

  /** 아이템(리스트) 추가 로직 */
  // 대량추가 유효성검사 로직
  const validateInput = (value: string, regex: any, errorMessage: string) => {
    const trimmedValue = value?.trim();
    if (trimmedValue.length >= 1 && !regex.test(trimmedValue)) {
      warningModal('대량 추가', errorMessage, true);
      return false;
    }
    return true;
  };

  // 주소록 저장 버튼 클릭
  const handleSaveChanges = (data: any) => {
    if (isPostting) return; // 이미 제출 중이면 중복 클릭 방지

    for (const item of data.largeColum) {
      const {
        groupSeqNo,
        buddyNm,
        keyCommNo,
        emailId,
        homeZipCd,
        coZipCd,
        homeNumber,
        coNumber,
        faxNumber,
        accountNo,
        residentNo,
        number015,
      } = item;
      if (!groupSeqNo || !buddyNm.trim() || !keyCommNo.trim()) {
        warningModal('대량 추가', '그룹, 이름, 휴대폰번호는 필수입니다.', true);
        return;
      }

      if (
        !validateInput(
          keyCommNo,
          /^(01[0156789]|02|0[3-9][0-9])[- ]?[0-9]{3,4}[- ]?[0-9]{4}$/,
          '휴대폰번호를 확인해 주세요.',
        ) ||
        !validateInput(
          emailId,
          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          '이메일 항목을 빈칸 또는 형식을 맞춰 주세요.',
        ) ||
        !validateInput(homeZipCd, /^[\d -]+$/, '집우편번호를 빈칸 또는 형식을 맞춰 주세요.') ||
        !validateInput(coZipCd, /^[\d -]+$/, '회사우편번호를 빈칸 또는 형식을 맞춰 주세요.') ||
        !validateInput(homeNumber, /^[\d -]+$/, '집전화번호를 빈칸 또는 형식을 맞춰 주세요.') ||
        !validateInput(coNumber, /^[\d -]+$/, '회사전화번호를 빈칸 또는 형식을 맞춰 주세요.') ||
        !validateInput(faxNumber, /^[\d -]+$/, '팩스번호를 빈칸 또는 형식을 맞춰 주세요.') ||
        !validateInput(accountNo, /^[\d -]+$/, '계좌번호를 빈칸 또는 형식을 맞춰 주세요.') ||
        !validateInput(residentNo, /^[\d -]+$/, '주민번호를 빈칸 또는 형식을 맞춰 주세요.') ||
        !validateInput(number015, /^015[- ]?\d{4}[- ]?\d{4}$/, '015번호를 빈칸 또는 형식을 맞춰 주세요.')
      ) {
        return;
      }
    }

    setIsPostting(true);
    addBuddyDataList(data.largeColum, {
      onSuccess: () => {
        setIsPostting(false);
        setHeaderSelect(groupDetail[0]);
        reset();
        successModal('연락처 등록', '새로운 연락처를 등록하였습니다.', true);
        queryClient.invalidateQueries(['groupList2']);
      },
      onError: (error: Error) => {
        setIsPostting(false);
        warningModal('연락처 등록', `에러 발생: ${error.message}`, true);
      },
    });
  };

  // AddRow 버튼 클릭
  const handleAddRow = () => {
    // 새로운 행을 만듭니다.
    append(defaultAddData);
  };

  // 10줄 추가
  const handleAdd10Row = () => {
    // 새로운 행을 만듭니다.
    const add10Rows = Array.from({ length: 10 }, () => ({ ...defaultAddData }));
    append(add10Rows);
  };

  // RemoveRow 버튼 클릭
  const handleRemoveRow = () => {
    // 마지막 행을 제거합니다.
    if (fields.length > 1) {
      remove(fields.length - 1);
    } else {
      warningModal('대량추가 리스트 제거', '마지막 항목입니다.', true);
    }
  };

  // AddColumn 버튼 클릭
  const handleAddColumn = () => {
    setIsModalOpen(true);
  };

  const handleInputChange = (event: any) => {
    setValue(event.registerNm, parseInt(event.groupSeqNo, 10));
  };

  // 그룹 전체 변경
  const handleGroupChange = (e: any) => {
    setHeaderSelect(e);
    for (let i = 0; i < fields.length; i++) {
      setValue(`largeColum.${i}.groupSeqNo`, e);
    }
  };

  // 삭제버튼 클릭
  const handleDeleteRow = (rowIndex: number) => {
    // length가 1이상이면 삭제가 가능합니다.
    if (fields.length > 1) {
      remove(rowIndex);
    } else {
      warningModal('대량추가 리스트 제거', '마지막 항목입니다.', true);
    }
  };

  return {
    groupListIsLoading,
    columnVisibility,
    headerSelect,
    handleGroupChange,
    groupDetail,
    addData,
    handleInputChange,
    handleAddColumn,
    handleAddRow,
    handleAdd10Row,
    handleRemoveRow,
    handleSaveChanges,
    isPostting,
    isModalOpen,
    setIsModalOpen,
    selectedItems,
    setSelectedItems,
    selectOptions2,
    handleDeleteRow,
    register,
    handleSubmit,
    fields,
    append,
    remove,
    defaultAddData,
    selectedKey,
    setSelectedKey,
    largeGroupOption,
    defaultRow,
    largeToggleHandle,
    openLargeToggle,
  };
};
