import React, { useState } from 'react';
import { formatDateRangePickerDate, formatDateYYYYMMDD } from '../../../../apis/utils/formats/dateFormatUtil';
import { useLocation } from 'react-router-dom';

interface ChargeDateSearch {
  setSearchSelectValue: React.Dispatch<React.SetStateAction<string>>;
  setSearchDates: React.Dispatch<React.SetStateAction<string[] | string>>;
  setStartPage: React.Dispatch<React.SetStateAction<number>>;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const ChargeDatesSearch = (props: ChargeDateSearch) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialDates = searchParams.get('searchDates')?.split(',') || '';
  const initialSelectValue = searchParams.get('searchSelectValue') || '';
  const [selectedValue, setSelectedValue] = useState(initialSelectValue);
  const [rangePicker, setRangePicker] = useState<string[] | string>(initialDates);

  // 검색 조건 - 구분 종류
  const handleChargeSelect = (e: string) => {
    setSelectedValue(e);
  };

  // 검색 - 기능
  const handleChargeSearch = () => {
    // 검색 조건값 설정
    props.setSearchDates(rangePicker);

    switch (selectedValue) {
      // 사용 내역
      case '1':
        props.setSearchSelectValue('1');
        break;
      case '2':
        props.setSearchSelectValue('2');
        break;
      case '3':
        props.setSearchSelectValue('3');
        break;
      case '9':
        props.setSearchSelectValue('9');
        break;

      // 결제 내역
      case '13':
        props.setSearchSelectValue('13');
        break;
      case '11':
        props.setSearchSelectValue('11');
        break;
      case '18':
        props.setSearchSelectValue('18');
        break;
      case '12':
        props.setSearchSelectValue('12');
        break;
      case '35':
        props.setSearchSelectValue('35');
        break;
      case '32':
        props.setSearchSelectValue('32');
        break;
      case '50':
        props.setSearchSelectValue('50');
        break;
      case '60':
        props.setSearchSelectValue('60');
        break;
      case '81':
        props.setSearchSelectValue('81');
        break;
      case 'all':
        props.setSearchSelectValue('all');
        break;
      default:
        props.setSearchSelectValue('all');
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
    handleChargeSelect,
    handleChargeSearch,
    selectedValue,
    initialDates,
  };
};
