import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil';
import {
  deleteRemoveItems,
  getMaintableList,
  getUserAddressRecycleBinList,
  patchEditItems,
  postAddItem,
  postAdressBinDelete,
  postAdressBinRestore,
  sortAdressList,
} from '../../../../apis/api/addressApis';
import {
  binItemCheckBoxListState,
  currentPageState1,
  currentPageState2,
  itemCheckBoxListState,
  recycleBinListToggleState,
  searchTextState,
  selectAllState,
  selectValueState,
  selectedGroupSeqNoState,
} from '../../../../recoil/atoms/addressList';
import { BinData, BuddyData } from '../../../Molecules/addressbook/types/AddressTable.types';
import { useModal } from '../useModal';
import { useGroupList } from './useGroupList';
import { useDelete, useFetch } from '../../../../apis/utils/reactQuery';
import { usePost } from '../../../../apis/hooks/usePost';

export const useAddressTable = () => {
  const [selectAll, setSelectAll] = useRecoilState(selectAllState); // 전체 선택 상태 관리 state
  const [checkedList, setCheckedList] = useRecoilState<BuddyData[]>(itemCheckBoxListState); // 체크된 리스트 데이터
  const [binCheckedList, setBinCheckedList] = useRecoilState<BinData[]>(binItemCheckBoxListState); // 체크된 휴지통 리스트 데이터
  const selectedGroupSeqNo = useRecoilValue(selectedGroupSeqNoState); // 그룹이름 클릭시 저장되는 시퀀스넘버 값
  const [currentPage1, setCurrentPage1] = useRecoilState(currentPageState1); // 현재페이지1
  const [addressTotalElement1, setAddressTotalElement1] = useState<number>(0);
  const [startPage1, setStartPage1] = useState<number>(1);
  const [activePage1, setActivePage1] = useState<number>(1);
  const [currentPage2, setCurrentPage2] = useRecoilState(currentPageState2); // 현재페이지2
  const [addressTotalElement2, setAddressTotalElement2] = useState<number>(0);
  const [startPage2, setStartPage2] = useState<number>(1);
  const [activePage2, setActivePage2] = useState<number>(1);
  const [itemAddOpen, setItemAddOpen] = useState(false); // 개별 추가
  const [itemEditOpen, setItemEditOpen] = useState(false); // 개별 수정
  const [itemAddGroupValue, setItemAddGroupValue] = useState<string | undefined>(''); // 개별 생성시 그룹 벨류
  const [itemAddGroupSeqNoValue, setItemAddGroupSeqNoValue] = useState(''); // 개별 생성시 셀렉트 선택 groupSeqNo값
  const [itemAddNameValue, setItemAddNameValue] = useState(''); // 개별 생성시 이름 밸류
  const [itemAddPhoneValue, setItemAddPhoneValue] = useState(''); // 개별 생성시 휴대폰번호 벨류
  const [itemAddEmailValue, setItemAddEmailValue] = useState(''); // 개별 생성시 이메일 벨류
  const [editItems, setEditItems] = useState<
    {
      name: string;
      phnNum: string;
      email: string;
      groupSeqNo: number;
      buddySeqNo: number;
    }[]
  >([]);
  const recycleBinListToggle = useRecoilValue(recycleBinListToggleState); // 휴지통 클릭시 띄울 리스트 토글상태
  const [isSubmitting, setIsSubmitting] = useState(false); // 중복 post 방지 상태
  const [isEditting, setIsEditting] = useState(false);
  const [sortListMenu, setSortListMenu] = useState('buddy_nm');
  const selectValue = useRecoilValue(selectValueState); // 검색항목
  const searchText = useRecoilValue(searchTextState); // 검색어

  const queryClient = useQueryClient();

  const { confirmModal, warningModal, successModal } = useModal();
  const { groupList, groupListIsLoading } = useGroupList();

  const { mutate } = usePost('/contacts/create', { params: 'groupList2' }); // 연락처 추가
  const { mutate: patchEditItem } = usePost('/contacts/update', { params: 'groupList2' }); // 연락처 수정
  // const { mutate: deleteRemoveItem } = useDelete('/contacts/delete', { params: 'groupList2' }); // 연락처 삭제
  const { mutate: binListRestoreMutate } = usePost('/contacts/recycle/restore', { params: 'groupList2' }); // 휴지통 복원
  const { mutate: binListDeleteMutate } = usePost('/contacts/recycle/delete', { params: 'groupList2' }); // 휴지통 삭제
  const { mutate: sortListMutate } = usePost('/toggleSortDirection', { params: 'maingrouplist' }); // 리스트 정렬

  // 그룹이름 클릭시 메인 테이블에 띄울 List get
  // const { data: groupMainList, isLoading }: any = useFetch('groupBuddyList', {
  //   groupSeqNo: selectedGroupSeqNo,
  //   pageNumber: currentPage1 - 1,
  //   pageSize: 10,
  //   keywordValue: selectValue,
  //   keyword: searchText,
  // });
  const { data: groupMainList = [], isLoading } = useQuery(
    ['maingrouplist', selectedGroupSeqNo, searchText, selectValue, currentPage1, groupList],
    async () => {
      try {
        const result = await getMaintableList({
          currentPage: currentPage1 - 1,
          groupSeqNo: selectedGroupSeqNo,
          keyword: searchText,
          keywordValue: selectValue,
        });
        return result;
      } catch (error) {
        console.error('Error fetching groupMainList:', error);
        return error;
      }
    },
  );

  // 휴지통 클릭시 메인 테이블에 띄울 List get
  // const { data: recycleBinList, isLoading: binIsLoading }: any = useFetch('/contacts/recycle', {
  //   pageNumber: currentPage2 - 1,
  //   pageSize: 10,
  //   keywordValue: selectValue,
  //   keyword: searchText,
  // });
  const { data: recycleBinList, isLoading: binIsLoading } = useQuery(
    ['recyclebinlist', recycleBinListToggleState, searchText, selectValue, currentPage2, groupList],
    () => {
      const result = getUserAddressRecycleBinList({
        currentPage: currentPage2 - 1,
        keyword: searchText,
        keywordValue: selectValue,
      });
      return result;
    },
  );

  // 페이지네이션 관련
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage1(pageNumber);
    setCurrentPage2(pageNumber);
    setSelectAll(false);
  };

  useEffect(() => {
    if (localStorage.getItem('authorizationToken') && !groupListIsLoading && !isLoading && groupList && groupMainList) {
      setAddressTotalElement1(groupMainList?.totalElements);
      setStartPage1(Math.floor(groupMainList && groupMainList.pageable.pageNumber / 10) * 10 + 1);
      setActivePage1(groupMainList && groupMainList.pageable.pageNumber + 1);
    }
  }, [isLoading, groupMainList]);

  useEffect(() => {
    if (
      localStorage.getItem('authorizationToken') &&
      !groupListIsLoading &&
      !binIsLoading &&
      groupList &&
      recycleBinList
    ) {
      setAddressTotalElement2(recycleBinList?.totalElements);
      setStartPage2(Math.floor(recycleBinList && recycleBinList.pageable.pageNumber / 10) * 10 + 1);
      setActivePage2(recycleBinList && recycleBinList.pageable.pageNumber + 1);
    }
  }, [binIsLoading, recycleBinList, recycleBinListToggleState]);

  // 그룹이름 클릭시 메인테이블 셀렉트에서 아이템(리스트) 추가에 사용할 디폴트값 만들기
  const defaultGroupObj =
    groupList?.groupList?.find((group: any) => group?.groupSeqNo === selectedGroupSeqNo) || groupList?.groupList?.[0];
  const defaultGroupName = defaultGroupObj?.groupNm;
  const defaultGroupSeqNo = defaultGroupObj?.groupSeqNo;

  // 전체 선택 체크박스 토글 함수
  const toggleSelectAll = useRecoilCallback(({ set }) => async () => {
    set(selectAllState, (prevSelectAll) => !prevSelectAll);
    const newSelectAll = !selectAll;

    if (newSelectAll) {
      // 전체 선택인 경우
      if (recycleBinListToggle === false) {
        let itemsToAdd: BuddyData[] = [];

        if (selectedGroupSeqNo || selectedGroupSeqNo === null) {
          // selectedGroupSeqNo가 존재하는 경우
          itemsToAdd = groupMainList?.content?.map((item: BuddyData) => item) || [];
        }
        // 이미 존재하는 아이템 제외하고 추가
        set(itemCheckBoxListState, (prevChecked) => [
          ...prevChecked.filter((item) => !itemsToAdd.some((addItem) => addItem.buddySeqNo === item.buddySeqNo)),
          ...itemsToAdd,
        ]);
      } else {
        let binItemsTodAdd: BinData[] = [];
        if (!selectedGroupSeqNo || selectedGroupSeqNo !== null) {
          binItemsTodAdd = recycleBinList?.content?.map((item: BinData) => item) || [];
        }
        set(binItemCheckBoxListState, (prevChecked) => [
          ...prevChecked.filter((item) => !binItemsTodAdd.some((addItem) => addItem.buddySeqNo === item.buddySeqNo)),
          ...binItemsTodAdd,
        ]);
      }
    } else {
      // 전체 선택이 해제된 경우
      if (recycleBinListToggle === false) {
        set(itemCheckBoxListState, (prevChecked) =>
          prevChecked.filter(
            (item) => !groupMainList?.content.some((groupItem: BuddyData) => groupItem.buddySeqNo === item.buddySeqNo),
          ),
        );
      }
      set(binItemCheckBoxListState, (prevChecked) =>
        prevChecked.filter(
          (item) => !recycleBinList?.content.some((groupItem: BinData) => groupItem.buddySeqNo === item.buddySeqNo),
        ),
      );
    }
  });

  // 개별 체크박스 토글 함수
  const toggleCheckBox = (event: ChangeEvent<HTMLInputElement>, list: BuddyData | BinData) => {
    const isChecked = event.target.checked;

    if (recycleBinListToggle === false) {
      setCheckedList((prevChecked: any) => {
        if (isChecked) {
          return [...prevChecked, list];
        }
        return prevChecked.filter((el: BuddyData) => el.buddySeqNo !== list.buddySeqNo);
      });
    } else {
      setBinCheckedList((prevChecked: any) => {
        if (isChecked) {
          return [...prevChecked, list];
        }
        return prevChecked.filter((el: BinData) => el.buddySeqNo !== list.buddySeqNo);
      });
    }
  };

  /** 아이템(리스트) 추가 로직
   * 1. 추가 버튼 토글 핸들러
   * 2. 리스트 추가에 대한 뮤테이션
   * 3. 리스트 추가 인풋 핸들러
   * 4. 리스트 추가 버튼 핸들러(폼)
   */
  // 1 - 추가 버튼 클릭시 셀렉트에 디폴트값 지정
  const addToggleBtnHandler = () => {
    setItemAddOpen((prevItemAddOpen) => !prevItemAddOpen);
    setItemAddGroupSeqNoValue(defaultGroupSeqNo);
    setItemAddGroupValue(defaultGroupName);
  };

  // 2 - 뮤테이션 성공시 maingrouplist api 재호출

  // 3 - 아이템 추가 그룹이름, 이름, 휴대폰번호, 이메일 입력시 setValue를 인식해 value값 변환
  const postItemGroupSelectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGroup = groupList?.groupList?.find((group: any) => group.groupNm === e.target.value);
    const addItemGroupSeqNo = selectedGroup?.groupSeqNo || null;
    // 선택한 그룹의 groupSeqNo를 itemAddGroupValue에 설정
    setItemAddGroupValue(e.target.value);
    // 선택한 그룹의 groupSeqNo를 newItem.groupSeqNo에 설정
    setItemAddGroupSeqNoValue(addItemGroupSeqNo);
  };
  const postItemNameInputChangeHandler = (e: any) => {
    setItemAddNameValue(e.target.value);
  };
  const postItemPhoneInputChangeHandler = (e: any) => {
    setItemAddPhoneValue(e.target.value);
  };
  const postItemEmailInputChangeHandler = (e: any) => {
    setItemAddEmailValue(e.target.value);
  };

  // 4 - 저장 버튼 클릭시 form 태그에서 유효성 검사 후 뮤테이트로 보내는 값
  const postItemSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 기본속성 제거
    if (isSubmitting) return; // 이미 제출 중이면 중복 클릭 방지

    const addNewItemName = itemAddNameValue.trim();
    if (!addNewItemName) {
      setItemAddNameValue('');
      warningModal('연락처 등록', '이름을 입력해 주세요.', true);
      return;
    }
    const addNewItemPhone = itemAddPhoneValue.trim();
    const phoneNumCheck = /^(01[0156789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
    const isValidPhoneNum = phoneNumCheck.test(addNewItemPhone);
    if (!addNewItemPhone) {
      setItemAddPhoneValue('');
      warningModal('연락처 등록', '휴대폰번호를 입력해 주세요.', true);
      return;
    }
    if (addNewItemPhone.length >= 1 && !isValidPhoneNum) {
      warningModal('연락처 등록', '휴대폰번호를 확인해 주세요.', true);
      return;
    }
    const addNewItemEmail = itemAddEmailValue.trim();
    const emailCheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailCheck.test(addNewItemEmail);
    if (addNewItemEmail.length >= 1 && !isValidEmail) {
      warningModal('연락처 등록', '이메일 항목을 빈칸 또는 형식을 맞춰 주세요.', true);
      return;
    }

    setIsSubmitting(true); // 제출 중인 상태로 변경
    // 뮤테이트로 보내는 값
    const newItem = {
      name: addNewItemName,
      phnNum: addNewItemPhone,
      groupSeqNo: itemAddGroupSeqNoValue,
      email: addNewItemEmail,
    };
    mutate(newItem, {
      onSuccess: () => {
        queryClient.invalidateQueries(['groupList2']);
        setItemAddGroupValue(defaultGroupName);
        setItemAddNameValue('');
        setItemAddPhoneValue('');
        setItemAddEmailValue('');
        setItemAddOpen(false);
        setIsSubmitting(false); // 성공 후 버튼 활성화
        successModal('연락처 등록', '새로운 연락처를 등록하였습니다.', true);
      },
      onError: (error: Error) => {
        warningModal('연락처 등록', `에러 발생: ${error.message}`, true);
        setIsSubmitting(false); // 에러 발생시에도 버튼 활성화
      },
    });
  };

  /** 아이템(리스트) 수정 로직
   * 1. 아이템(리스트) 수정에 대한 뮤테이션
   * 2. 체크 아이템 토글 핸들러
   * 3. 체크 아이템 벨류 변환 핸들러
   * 4. 변경된 값 담아서 뮤테이트로 전달
   */
  // 1 - 뮤테이션 성공시 maingrouplist api 재호출

  // 2 - 체크 리스트만 인풋창으로 토글하기위한 핸들러
  const toggleInputItemsHandler = () => {
    if (!(checkedList?.length > 0)) {
      warningModal('연락처 수정', '선택된 리스트가 없습니다.</br>수정할 연락처를 선택해주세요.', true);
      setItemEditOpen(false);
      return;
    }
    const selectedGroup = groupMainList?.content.filter((list: BuddyData) => checkedList.includes(list));

    setItemEditOpen((prevItemEditOpen) => !prevItemEditOpen);
    const editedItems = selectedGroup.map((group: any) => ({
      name: group.buddyNm,
      phnNum: group.keyCommNo,
      email: group.emailId,
      groupSeqNo: group.groupSeqNo,
      buddySeqNo: group.buddySeqNo,
    }));
    setEditItems(editedItems);
  };

  const patchItemGroupSelectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGroup = groupList?.groupList?.find((group: any) => group.groupNm === e.target.value);
    const editItemGroupSeqNo = selectedGroup.groupSeqNo;
    // 기존 상태 복사 후 업데이트
    setEditItems((prev) =>
      prev.map((item) => ({
        ...item,
        groupSeqNo: item.groupSeqNo === editItemGroupSeqNo ? editItemGroupSeqNo : item.groupSeqNo,
      })),
    );
  };

  // 3 - 아이템 수정 그룹이름, 이름, 휴대폰번호, 이메일 입력시 setValue를 인식해 value값 변환
  const patchItemInputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
    buddySeqNo: number,
    field: 'groupSeqNo' | 'name' | 'phnNum' | 'email',
  ) => {
    if (e.target instanceof HTMLSelectElement && field === 'groupSeqNo') {
      // 그룹 선택이 변경된 경우
      const selectedGroup = groupList?.groupList?.find((group: any) => group.groupNm === e.target.value);
      const editItemGroupSeqNo = selectedGroup?.groupSeqNo || null;

      // 기존 상태 복사 후 업데이트
      setEditItems((prev) =>
        prev.map((item) => ({
          ...item,
          groupSeqNo: item.buddySeqNo === buddySeqNo ? editItemGroupSeqNo : item.groupSeqNo,
        })),
      );
    }
    if (e.target instanceof HTMLInputElement && buddySeqNo !== undefined && field) {
      // 아이템의 이름, 휴대폰번호, 이메일이나 그룹SeqNo가 변경된 경우
      const changeItem = e.target.name.split('-')[1];
      const { value } = e.target;

      // 기존 상태 복사 후 업데이트
      setEditItems((prev) =>
        prev.map((item) => ({
          ...item,
          [field]: item.buddySeqNo === +changeItem ? value : item[field],
        })),
      );
    }
  };

  // 4 - 수정 완료 버튼 클릭 -> 뮤테이트로 버디시퀀스넘버, 이름, 휴대폰번호, 이메일, 그룹시퀀스넘버 벨류 넘김
  const patchItemSubmitHandler = (e: any) => {
    e.preventDefault();

    if (isEditting) return; // 중복 수정 방지

    // 각 아이템에 대해 유효성 검사 진행
    for (const item of editItems) {
      const { name, phnNum, email } = item;

      if (!name.trim() || !phnNum.trim()) {
        warningModal('연락처 수정', '이름과 휴대폰번호는 필수입니다.', true);
        return;
      }
      const editPhoneNum = phnNum.trim();
      const phoneNumCheck = /^(01[0156789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
      const isValidPhoneNum = phoneNumCheck.test(editPhoneNum);
      if (editPhoneNum.length >= 1 && !isValidPhoneNum) {
        warningModal('연락처 등록', '휴대폰번호를 확인해 주세요.', true);
        return;
      }

      const editEmail = email.trim();
      const emailCheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const isValidEmail = emailCheck.test(editEmail);
      if (editEmail.length >= 1 && !isValidEmail) {
        warningModal('연락처 등록', '이메일 항목을 빈칸 또는 형식을 맞춰 주세요.', true);
        return;
      }
    }

    setIsEditting(true); // 수정중인 상태로 변경
    patchEditItem(editItems, {
      onSuccess: () => {
        queryClient.invalidateQueries([
          'maingrouplist',
          selectedGroupSeqNo,
          searchText,
          selectValue,
          currentPage1,
          groupList,
        ]);
        successModal('연락처 수정', '연락처를 수정했습니다.', true);
        setItemEditOpen(false);
        setIsEditting(false); // 성공시 버튼 활성화
        setCheckedList([]);
      },
      onError: (error: any) => {
        warningModal('연락처 수정', error.response.data, true);
        setItemEditOpen(false);
        setIsEditting(false); // 에러 발생시에도 버튼 활성화
      },
    });
  };

  /** 아이템(리스트) 삭제 로직
   * 1. 리스트 삭제에 대한 뮤테이션
   * 2. 아이템 삭제할 리스트와 버튼 이벤트
   */
  // 1 - 뮤테이션 성공시 maingrouplist api 재호출
  const { mutate: deleteRemoveItem } = useMutation(deleteRemoveItems, {
    onSuccess: () => {
      queryClient.invalidateQueries(['groupList2']);
      successModal('연락처 삭제', '연락처를 삭제하였습니다.', true);
      setCheckedList([]);
      setSelectAll(false);
    },
    onError: (error: any) => {
      warningModal('연락처 삭제', error.response.data, true);
    },
  });

  // 2 - 아이템 삭제 버튼 클릭시 체크박스 목록 조회 유효성 검사 후 뮤테이트로 보내는 값
  const deleteItemOnClickHandler = () => {
    setItemAddOpen(false);
    if (itemEditOpen) {
      warningModal('연락처 삭제', '연락처를 수정중입니다.</br>수정을 마치고 삭제해주세요.', true);
      return;
    }
    if (!(checkedList.length > 0)) {
      warningModal('연락처 삭제', '선택된 연락처가 없습니다.</br>삭제할 연락처를 선택해주세요.', true);
      return;
    }
    const buddySeqNoArray = checkedList?.map((item: BuddyData) => item.buddySeqNo) || [];
    confirmModal(
      () =>
        deleteRemoveItem(
          buddySeqNoArray,
          //   {
          //   onSuccess: () => {
          //     queryClient.invalidateQueries(['groupList2']);
          //     successModal('연락처 삭제', '연락처를 삭제하였습니다.', true);
          //     setCheckedList([]);
          //     setSelectAll(false);
          //   },
          //   onError: (error: any) => {
          //     warningModal('연락처 삭제', error.response.data, true);
          //   },
          // }
        ),
      '연락처 삭제',
      '삭제 하시겠습니까?',
      true,
    );
  };

  /** 휴지통 아이템(리스트) 복원 로직
   * 1. 리스트 복원에 대한 뮤테이션
   * 2. 아이템 복원할 리스트와 버튼 이벤트
   */
  // 1 - 뮤테이션 성공시 recyclebinlist api 재호출

  // 2 - 아이템 복원 버튼 클릭시 체크박스 목록 조회 유효성 검사 후 뮤테이트로 보내는 값
  const binListRestoreOnClick = () => {
    if (!(binCheckedList.length > 0)) {
      warningModal('연락처 복원', '선택된 연락처가 없습니다.</br>복원할 연락처를 선택해주세요.', true);
      return;
    }
    const buddySeqNoArray = binCheckedList?.map((item: BinData) => item.buddySeqNo) || [];
    confirmModal(
      () =>
        binListRestoreMutate(buddySeqNoArray, {
          onSuccess: () => {
            queryClient.invalidateQueries(['groupList2']);
            successModal('연락처 복원', '연락처를 이전 그룹으로 복원하였습니다.', true);
            setCheckedList([]);
            setBinCheckedList([]);
            setSelectAll(false);
          },
          onError: (error: any) => {
            warningModal('연락처 복원', error.response.data, true);
          },
        }),
      '연락처 복원',
      '해당 연락처를 이전 그룹으로 복원 하시겠습니까?',
      true,
    );
  };

  /** 휴지통 아이템(리스트) 삭제 로직
   * 1. 리스트 삭제에 대한 뮤테이션
   * 2. 아이템 삭제할 리스트와 버튼 이벤트
   */
  // 1 - 뮤테이션 성공시 recyclebinlist api 재호출

  // 2 - 아이템 삭제 버튼 클릭시 체크박스 목록 조회 유효성 검사 후 뮤테이트로 보내는 값
  const binListDeleteOnClick = () => {
    if (!(binCheckedList.length > 0)) {
      warningModal('연락처 삭제', '선택된 연락처가 없습니다.</br>삭제할 연락처를 선택해주세요.', true);
      return;
    }
    const buddySeqNoArray = binCheckedList?.map((item: BinData) => item.buddySeqNo) || [];
    confirmModal(
      () =>
        binListDeleteMutate(buddySeqNoArray, {
          onSuccess: () => {
            queryClient.invalidateQueries(['groupList2']);
            successModal('연락처 삭제', '연락처를 삭제하였습니다.', true);
            setCheckedList([]);
            setBinCheckedList([]);
            setSelectAll(false);
          },
          onError: (error: any) => {
            warningModal('연락처 삭제', error.response.data, true);
          },
        }),
      '연락처 삭제',
      '선택한 연락처를 영구 삭제 하시겠습니까?',
      true,
    );
  };

  /** 출력 리스트 정렬하기 (이름, 휴대폰번호, 이메일) */
  const toggleNameSortListClick = () => {
    setSortListMenu('buddy_nm');
    sortListMutate(sortListMenu, {
      onSuccess: () => {
        queryClient.invalidateQueries(['maingrouplist']);
      },
      onError: (error: any) => {
        warningModal('리스트 정렬', error.response.data, true);
      },
    });
  };
  const togglePhoneSortListClick = () => {
    setSortListMenu('key_comm_no');
    sortListMutate(sortListMenu, {
      onSuccess: () => {
        queryClient.invalidateQueries(['maingrouplist']);
      },
      onError: (error: any) => {
        warningModal('리스트 정렬', error.response.data, true);
      },
    });
  };
  const toggleEmailSortListClick = () => {
    setSortListMenu('email_id');
    sortListMutate(sortListMenu, {
      onSuccess: () => {
        queryClient.invalidateQueries(['maingrouplist']);
      },
      onError: (error: any) => {
        warningModal('리스트 정렬', error.response.data, true);
      },
    });
  };

  return {
    toggleSelectAll,
    selectAll,
    setItemAddOpen,
    addToggleBtnHandler,
    toggleInputItemsHandler,
    isLoading,
    itemEditOpen,
    setItemEditOpen,
    itemAddOpen,
    postItemSubmitHandler,
    itemAddGroupValue,
    groupMainList,
    patchItemGroupSelectChangeHandler,
    groupList,
    itemAddNameValue,
    postItemNameInputChangeHandler,
    itemAddPhoneValue,
    postItemPhoneInputChangeHandler,
    itemAddEmailValue,
    postItemEmailInputChangeHandler,
    isSubmitting,
    checkedList,
    binCheckedList,
    postItemGroupSelectChangeHandler,
    patchItemInputChangeHandler,
    patchItemSubmitHandler,
    toggleCheckBox,
    addressTotalElement1,
    startPage1,
    setStartPage1,
    activePage1,
    setActivePage1,
    addressTotalElement2,
    startPage2,
    setStartPage2,
    activePage2,
    setActivePage2,
    handlePageChange,
    deleteItemOnClickHandler,
    recycleBinListToggle,
    recycleBinList,
    binListRestoreOnClick,
    binListDeleteOnClick,
    toggleNameSortListClick,
    togglePhoneSortListClick,
    toggleEmailSortListClick,
    isEditting,
    editItems,
    deleteRemoveItem,
  };
};
