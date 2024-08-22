import React, { useState } from 'react';
import { formatDateRangePickerDate, formatDateYYYYMMDD } from '../../../../apis/utils/formats/dateFormatUtil';
import { useLocation } from 'react-router-dom';

interface IUseManagementDateSearch {
  setSearchSelectValue: React.Dispatch<React.SetStateAction<string>>;
  setSearchDates: React.Dispatch<React.SetStateAction<string[] | string>>;
  setStartPage: React.Dispatch<React.SetStateAction<number>>;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const useManagementDateSearch = (props: IUseManagementDateSearch) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialDates = searchParams.get('searchDates')?.split(',') || '';
  const initialSelectValue = searchParams.get('searchSelectValue') || 'a';
  const [msgSelectValue, setMsgSelectValue] = useState(initialSelectValue);
  const [rangePicker, setRangePicker] = useState<string[] | string>(initialDates);

  // 검색 조건 - 구분 종류
  const handleMessageSelect = (e: string) => {
    setMsgSelectValue(e);
  };

  // 검색 - 기능
  const handleSearch = () => {
    // 검색 조건값 설정
    props.setSearchDates(rangePicker);
    switch (msgSelectValue) {
      case 's':
        props.setSearchSelectValue('s');
        break;
      case 'f':
        props.setSearchSelectValue('f');
        break;
      case 'e':
        props.setSearchSelectValue('e');
        break;
      default:
        props.setSearchSelectValue('null');
    }

    // 페이징네이션 state 값 초기화
    props.setActivePage(1);
    props.setStartPage(1);
    props.setCurrentPage(1);
  };

  // start, end 검색 날짜 세팅 함수
  const onChangeRangePickerDate = (val: any) => {
    if (val === null) {
      setRangePicker('');
    } else {
      const dateArray = formatDateRangePickerDate(val);
      const formatDates = dateArray.map(formatDateYYYYMMDD);
      setRangePicker(formatDates);
    }
  };

  return {
    onChangeRangePickerDate,
    handleMessageSelect,
    handleSearch,
    msgSelectValue,
    initialDates,
  };
};
