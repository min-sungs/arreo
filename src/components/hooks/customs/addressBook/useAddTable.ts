import React, { useCallback, useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useMutationAddTable } from '../../mutations/addressBook/useMutationAdd.ts';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { tableAddSchema } from '../../../../pages/AddressPage/components/addTable/tableDataAdd.validation.ts';
import { removeHyphens } from '../../../../apis/utils/formats/phoneNumberFormatUtil.ts';

export const useAddTable = () => {
  const queryClient = useQueryClient();
  const [tableAddOpen, setTableAddOpen] = useState<boolean>(false); // 리스트 추가 컴포넌트 토글 상태
  const [selectSwitch, setSelectSwitch] = useState(false); // select 누르면 oprions 나올 스위치 버튼 역할
  const [selectState, setSelectState] = useState({ groupNm: '', groupSeqNo: 0 });
  const [addressAddSwitch, setAddressAddSwitch] = useState(false); // 주소록 추가 클릭시 셀렉트 상태
  // 테이블 토글상태 true = 대량추가 false = 메인테이블
  const [openLargeToggle, setOpenLargeToggle] = useState<boolean>(false);
  const [addressAddSelectArr, setAddressAddSelectArr] = useState([
    { id: 0, name: '간편 추가' },
    { id: 1, name: '대량 추가' },
  ]);
  const [selectArrValue, setSelectArrValue] = useState([
    // Left select 가상 데이터
    { id: 0, groupSeqNo: '', koname: '' },
  ]);

  const tableAddOpenHandle: React.MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    setTableAddOpen((prev) => !prev);
  }, [tableAddOpen]);

  const onClickAddressAddClick = (item: any) => {
    if (item.id === 0) {
      tableAddOpenHandle(item);
    }
    if (item.id === 1) {
      setOpenLargeToggle((prev) => !prev);
    }
    setAddressAddSwitch((prev) => prev && false);
  };

  // 대량추가 뒤로가기 버튼 클릭 handle
  const onClickBackBtnHandle = () => {
    setOpenLargeToggle((prev)=> prev && false);
  }

  const groupList: any = queryClient.getQueryData(['groupList2', null]);
  const { mutate } = useMutation(useMutationAddTable, {
    onSuccess: () => {
      queryClient.invalidateQueries(['groupList2']);
      queryClient.invalidateQueries(['newBuddyList']);
    },
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(tableAddSchema),
    mode: 'onSubmit',
    defaultValues: {
      emailId: '',
      buddyNm: '',
      etcInfo: '',
      keyCommNo: undefined,
    },
  });

  // 그룹 리스트
  useEffect(() => {
    if (!groupList) return;
    const selectArr = groupList?.groupList?.map((el: any, index: number) => {
      return { id: index, groupSeqNo: el.groupSeqNo, koname: el.groupNm };
    });
    setSelectState({ groupNm: selectArr[0].koname, groupSeqNo: selectArr[0].groupSeqNo });
    setSelectArrValue(selectArr);
  }, [groupList]);

  const onClickSelectListButton = (item: any) => {
    // select option 클릭 이벤트
    // const result = e.target as HTMLButtonElement;
    setSelectState({ groupNm: item.koname, groupSeqNo: item.groupSeqNo });
  };

  // 주소록 추가 MUTATION
  const onAddTableHandler = (data: any) => {
    const params = { ...data };
    params.groupSeqNo = selectState.groupSeqNo;
    // params.keyCommNo = removeHyphens(params.keyCommNo);
    mutate(params);
  };

  return {
    onAddTableHandler,
    handleSubmit,
    register,
    selectState,
    selectArrValue,
    selectSwitch,
    setSelectSwitch,
    onClickSelectListButton,
    tableAddOpenHandle,
    tableAddOpen,
    setTableAddOpen,
    addressAddSwitch,
    setAddressAddSwitch,
    addressAddSelectArr,
    onClickAddressAddClick,
    openLargeToggle,
    setOpenLargeToggle,
    onClickBackBtnHandle,
  };
};
