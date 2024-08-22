import { useQueryClient } from '@tanstack/react-query';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { usePost } from '../../../../apis/hooks/usePost';
import { useDelete, useFetch } from '../../../../apis/utils/reactQuery';
import {
  clickTotalStylesState,
  currentPageState1,
  currentPageState2,
  duplicationListToggleState,
  groupCheckBoxListState,
  recycleBinListToggleState,
  selectAllState,
  selectedGroupSeqNoState,
} from '../../../../recoil/atoms/addressList';
import { useModal } from '../useModal';

export const useGroupList = () => {
  // 체크박스 데이터
  const [clickTimeoutId, setClickTimeoutId] = useState<any>(null);
  const [, setSelectAll] = useRecoilState(selectAllState); // 리스트 전체 선택 상태 관리 state
  const [groupSelectAll, setGroupSelectAll] = useState(false); // 전체 체크, 해제
  const [addOpen, setAddOpen] = useState(false); // 주소록 그룹추가버튼 상태
  const [addPostGroupValue, setAddPostGroupValue] = useState(''); // 그룹 추가 인풋창 밸류
  const [isSubmitting, setIsSubmitting] = useState(false); // 그룹 추가시 버튼 활성화 상태
  const [isEditting, setIsEditting] = useState(false); // 수정 완료시 버튼 활성화 상태
  const [editOpen, setEditOpen] = useState(false); // 수정 버튼 토글
  const [groupEditValues, setGroupEditValues] = useState<{ [key: string]: string }>({}); // 수정 그룹의 각 인풋 값을 관리하는 상태
  const [groupCheckBoxList, setGroupCheckBoxList] = useRecoilState<number[]>(groupCheckBoxListState); // 체크된 그룹 시퀀스넘버 배열
  const [, setSelectedGroupSeqNo] = useRecoilState(selectedGroupSeqNoState); // 그룹이름 클릭시 저장되는 시퀀스넘버 값
  const [, setRecycleBinListToggle] = useRecoilState(recycleBinListToggleState); // 휴지통 클릭시 띄울 리스트 토글상태
  const [, setCurrentPage1] = useRecoilState(currentPageState1); // 현재페이지
  const [, setCurrentPage2] = useRecoilState(currentPageState2); // 현재페이지
  const [clickGroupStyles, setGroupClickStyles] = useState<Record<number, boolean>>({}); // 그룹이름 클릭시 클릭 아이템 스타일
  const [clickBinStyles, setClickBinStyles] = useState<boolean>(false); // 휴지통 클릭시 스타일 토글
  const [clickTotalStyles, setClickTotalStyles] = useRecoilState<boolean>(clickTotalStylesState); // 토탈 클릭시 스타일 토글
  const [, setDuplicationListToggle] = useRecoilState(duplicationListToggleState); // 중복검사 클릭시 띄울 리스트 토글상태

  const { mutate: postAddGroup } = usePost('/group/create', { params: 'groupList2' }); // 그룹 추가
  const { mutate: deleteDelGroups } = usePost('/group/delete', { params: 'groupList2' }); // 그룹 삭제
  const { mutate: patchEditGroups } = usePost('/group/update', { params: 'groupList2' }); // 그룹 수정
  const { mutate: deleteAddressBinAllList } = useDelete('/contacts/recycle/delete', { params: 'groupList2' }, 'all'); // 휴지통 비우기

  const { confirmModal, warningModal, successModal } = useModal();
  const queryClient = useQueryClient();

  // 그룹리스트 get 요청
  const { data: groupList = [], isLoading: groupListIsLoading }: any = useFetch('groupList2');

  /** 그룹 추가 로직
   * 1.그룹 추가 인풋 핸들러
   * 2.그룹 추가 버튼 핸들러, 뮤테이트로 값 보내고 성공, 실패 함수
   */
  // 1 - 그룹 추가 인풋 텍스트 입력시 setValue를 인식해 value값 변환
  const postGroupInputChangeHandler = (e: any) => {
    setAddPostGroupValue(e.target.value);
  };

  // 2 - 저장 버튼 클릭시 form 태그에서 유효성 검사 후 뮤테이트로 보내는 값
  const postGroupSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return; // 이미 제출 중이면 중복 클릭 방지

    const addNewGroup = addPostGroupValue.trim();
    if (!addNewGroup) {
      setAddPostGroupValue('');
      warningModal('그룹 등록', '그룹 이름을 입력해 주세요.', true);
      return;
    }
    setIsSubmitting(true); // 제출 중인 상태로 변경

    const newGroup = {
      groupNm: addNewGroup,
    };

    postAddGroup(newGroup, {
      onSuccess: () => {
        queryClient.invalidateQueries(['groupList2']);
        successModal('그룹 등록', '새로운 그룹을 등록하였습니다.', true);
        setAddPostGroupValue('');
        setAddOpen(false);
        setIsSubmitting(false); // 성공 후에 버튼 활성화
      },
      onError: (error: Error) => {
        warningModal('그룹 등록', `에러 발생: ${error.message}`, true);
        setIsSubmitting(false); // 에러 발생시에도 버튼 활성화
      },
    });
  };

  /** 그룹 삭제 로직
   * 1.그룹 삭제할 리스트와 버튼 핸들러, 뮤테이트로 시퀀스넘버, 벨류 넘기고 성공, 실패 함수
   */
  // 1 - 그룹 삭제 버튼 클릭시 체크박스 목록 조회 유효성 검사 후 뮤테이트로 보내는 값
  const deleteGroupOnClickHandler = () => {
    setAddOpen(false);
    if (editOpen) {
      warningModal('그룹 삭제', '선택된 그룹이 수정중입니다. 수정을 마치고 삭제해주세요.', true);
      return;
    }
    if (!(groupCheckBoxList.length > 0)) {
      warningModal('그룹 삭제', '선택된 그룹이 없습니다. 삭제할 그룹을 선택해주세요.', true);
      return;
    }
    confirmModal(
      () =>
        deleteDelGroups(
          { groupSeqNos: groupCheckBoxList },
          {
            onSuccess: () => {
              queryClient.invalidateQueries(['groupList2']);
              successModal('그룹 삭제', '그룹을 삭제했습니다.', true);
              setGroupCheckBoxList([]);
            },
            onError: (error: any) => {
              warningModal('그룹 삭제', error.response.message, true);
            },
          },
        ),
      '그룹 삭제',
      '해당 그룹에 속한 연락처는 "휴지통"으로 이동합니다. 삭제 하시겠습니까?',
      true,
    );
  };

  /** 휴지통 비우기 로직 */
  const deleteBinAllListOnClick = () => {
    confirmModal(
      () =>
        deleteAddressBinAllList('', {
          onSuccess: () => {
            queryClient.invalidateQueries(['groupList2']);
            successModal('연락처 삭제', '휴지통의 전체 연락처를 삭제했습니다.', true);
          },
          onError: (error: any) => {
            warningModal('연락처 삭제', error.response.message, true);
          },
        }),
      '연락처 삭제',
      '휴지통의 전체 연락처를 영구 삭제하시겠습니까?',
      true,
    );
  };

  /** 그룹 수정 로직
   * 1.그룹 수정-저장 Submit 버튼
   * 2.수정할 그룹 인풋창 토글 버튼 핸들러
   * 3.각 인풋창 상태 저장 함수
   */
  // 1 - 수정 완료 버튼 클릭 -> 뮤테이트로 시퀀스넘버, 벨류 넘기고 성공, 실패 함수
  const patchGroupOnClickHandler = () => {
    if (isEditting) return; // 중복 수정 방지

    // 각 입력 필드가 비어 있는지 확인
    for (const groupSeqNo in groupEditValues) {
      const groupNm = groupEditValues[groupSeqNo].trim();
      if (!groupNm) {
        warningModal('그룹 수정', '그룹 이름을 입력해 주세요.', true);
        return;
      }
    }

    const groupEditValuesArray = Object.keys(groupEditValues).map((groupSeqNo) => ({
      groupSeqNo,
      groupNm: groupEditValues[groupSeqNo],
    }));
    setIsEditting(true); // 수정중인 상태로 변경
    patchEditGroups(groupEditValuesArray, {
      onSuccess: () => {
        queryClient.invalidateQueries(['groupList2']);
        successModal('그룹 수정', '그룹을 수정했습니다.', true);
        setEditOpen(false);
        setIsEditting(false);
      },
      onError: (error: Error) => {
        warningModal('그룹 수정', `에러 발생: ${error.message}`, true);
        setEditOpen(false);
        setIsEditting(false);
      },
    });
  };

  // 그룹명 클릭시 시퀀스넘버, 페이지크기, 페이지넘버 보내고 메인테이블에 띄울 데이터 받아오기
  const handleGroupNmOnClick = async (groupSeqNo: number) => {
    if (clickTimeoutId) {
      clearTimeout(clickTimeoutId);
    }

    const timeoutId = setTimeout(() => {
      try {
        setSelectedGroupSeqNo(groupSeqNo); // 시퀀스 값을 리코일에 저장
        setSelectAll(false);
        setGroupClickStyles(() => ({
          [groupSeqNo]: true,
        }));
        setCurrentPage1(1); // 그룹 변환시 1page로 이동
        setCurrentPage2(1);
        setRecycleBinListToggle(false); // 휴지통 선택 취소시 리스트 토글
        setClickBinStyles(false); // 휴지통 선택 취소 스타일
        setClickTotalStyles(false);
        setDuplicationListToggle(false);
      } catch (error) {
        console.error('데이터 가져오기 실패:', error);
      }
    }, 200);

    setClickTimeoutId(timeoutId);
  };

  // 2 - 체크 그룹만 인풋창으로 토글하기위한 핸들러
  const editGroupOpenHandler = (editGroupOpenHandler: number) => {
    clearTimeout(clickTimeoutId);
    setGroupCheckBoxList((prev) => [editGroupOpenHandler]);
    setEditOpen(!editOpen);
    setGroupEditValues((prevValues) => {
      const updatedValues = { ...prevValues };
      updatedValues[editGroupOpenHandler] = updatedValues[editGroupOpenHandler] || '';
      return updatedValues;
    });
  };

  // 3 - 시퀀스넘버로 개별 인풋벨류 저장하는 함수
  const updateGroupEditValue = (groupSeqNo: any, value: any) => {
    setGroupEditValues((prevValues) => ({
      ...prevValues,
      [groupSeqNo]: value,
    }));
  };

  // 체크박스 토글 핸들
  const checkBoxChangeHandle = ({
    event,
    groupSeqNo,
  }: {
    event: ChangeEvent<HTMLInputElement>;
    groupSeqNo: number;
  }) => {
    const { checked } = event.target;
    if (checked) {
      setGroupCheckBoxList((prev: any[]) => [...prev, groupSeqNo]);
    } else {
      setGroupCheckBoxList((prev: any[]) => prev.filter((el) => el !== groupSeqNo));
    }
  };

  // 전체 선택 시 모든 항목을 추가
  const arrayEqual = (arr1: number[], arr2: number[]) => {
    if (arr1.length !== arr2.length) {
      return false;
    }
    return arr1.every((val: any, index: any) => val === arr2[index]);
  };

  useEffect(() => {
    if (groupSelectAll && groupList) {
      const allGroupSeqNos = groupList?.groupList?.map((group: any) => group.groupSeqNo);
      const isEqual = arrayEqual(groupCheckBoxList, allGroupSeqNos);
      if (!isEqual) {
        setGroupCheckBoxList(allGroupSeqNos.map(String));
      }
    }
  }, [groupSelectAll, groupList]);

  // 전체선택 해제
  const handleSelectAll = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setGroupCheckBoxList(() => {
      if (isChecked) {
        // 전체 선택을 누르면 모든 그룹을 추가합니다.
        return groupList?.groupList?.map((group: any) => group.groupSeqNo);
      }
      // 전체 해제를 누르면 모든 그룹을 제거합니다.
      return [];
    });
    setGroupSelectAll(isChecked);
  };

  // Total 클릭 이벤트
  const groupTotalListOnClick = () => {
    setGroupClickStyles({});
    setClickTotalStyles(true);
    setClickBinStyles(false);
    setRecycleBinListToggle(false);
    setDuplicationListToggle(false);
    setSelectedGroupSeqNo(null);
    setSelectAll(false);
    setCurrentPage1(1); // 그룹 변환시 1page로 이동
  };

  // 휴지통 클릭 이벤트
  const recycleBinOnClick = () => {
    setGroupClickStyles({});
    setClickTotalStyles(false);
    setClickBinStyles(true);
    setRecycleBinListToggle(true);
    setDuplicationListToggle(false);
    setSelectAll(false);
    setSelectedGroupSeqNo(0);
    setCurrentPage2(1); // 그룹 변환시 1page로 이동
  };

  // 클릭시 스타일
  const clickStyle = {
    width: `78%`,
    color: `rgba(13, 66, 229, 1)`,
    transform: `scale(1) translate(10px, 0)`,
    transition: `transform 0.5s ease`,
  };

  // 클릭시 토탈스타일
  const totalClickStyle = {
    width: `auto`,
    color: `rgba(13, 66, 229, 1)`,
  };

  const childrenClickStyle = {
    fontWeight: '600',
  };

  return {
    childrenClickStyle,
    checkBoxChangeHandle,
    handleSelectAll,
    groupList,
    groupSelectAll,
    groupListIsLoading,
    groupCheckBoxList,
    addOpen,
    setAddOpen,
    addPostGroupValue,
    postGroupSubmitHandler,
    postGroupInputChangeHandler,
    deleteGroupOnClickHandler,
    editOpen,
    setEditOpen,
    editGroupOpenHandler,
    groupEditValues,
    updateGroupEditValue,
    patchGroupOnClickHandler,
    handleGroupNmOnClick,
    isSubmitting,
    clickGroupStyles,
    clickStyle,
    isEditting,
    recycleBinOnClick,
    clickBinStyles,
    groupTotalListOnClick,
    clickTotalStyles,
    totalClickStyle,
    deleteBinAllListOnClick,
  };
};
