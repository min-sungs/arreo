import React, { useState } from 'react';
import { useModal } from '../../useModal.tsx';
import { useMutationUpdateStMsgDetail } from '../../../mutations/useMutationUpdateStMsgDetail.ts';
import { formatDateYYYYMMDDHHmmss } from '../../../../../apis/utils/formats/dateFormatUtil.ts';
import { scheduleDetailParamsRecoil } from '../../../../../recoil/atoms/sendResult/sendResult.ts';
import { useRecoilValue } from 'recoil';
import { IScheduleTable } from '../../../../../pages/publishMessagePage/components/sendrResult/schedule/components/ScheduleTable.tsx';

interface IUseScheduleTable {
  props: IScheduleTable;
}

export const useScheduleTable = ({ props }: IUseScheduleTable) => {
  const [selectSwitch, setSelectSwitch] = useState(false); // select 누르면 oprions 나올 스위치 버튼 역할
  const [searchSelectState, setSearcgSelectState] = useState<{ label: string; value: string }>({
    label: '연락처',
    value: 'number',
  }); // State
  const [searchInputState, setSearchInputState] = useState<string>('');
  const scheduleDetailParamsState = useRecoilValue(scheduleDetailParamsRecoil);
  // ? 예약전송 수정 Mutation
  const { mutationUpdateMsg, isUpdateLoading } = useMutationUpdateStMsgDetail({
    sndDttm: formatDateYYYYMMDDHHmmss(props.datePicker),
    sndMsg: props.sndMsg,
    prepayPayNo: scheduleDetailParamsState.prepayPayNo,
    callback: scheduleDetailParamsState.callback,
  });

  // 수정 함수
  const onClickUpdateMsg = () => {
    mutationUpdateMsg();
  };
  // 검색 조건 STATE 변경
  const handleSearchSelect = (value: { label: string; value: string }) => {
    setSearcgSelectState(value);
    setSelectSwitch(false);
  };
  // 검색어 STATE 변경
  const handleSearchInput = (text: string) => {
    setSearchInputState(text);
  };
  // 검색
  const onClickSearch = (e: any) => {
    e.preventDefault();
    props.setSearchAllValue((prevState: any) => {
      const updatedData = { ...prevState };
      updatedData.keyword = searchInputState;
      updatedData.keywordValue = searchSelectState.value;
      return updatedData;
    });
  };
  const typeSelect = [
    {
      value: 'number',
      label: '연락처',
    },
  ];

  return {
    typeSelect,
    isUpdateLoading,
    searchSelectState,
    handleSearchSelect,
    selectSwitch,
    setSelectSwitch,
    searchInputState,
    handleSearchInput,
    onClickSearch,
    onClickUpdateMsg,
  };
};
