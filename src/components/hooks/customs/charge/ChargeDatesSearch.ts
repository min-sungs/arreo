import React, { useEffect, useState } from 'react';
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
  const initialSelectValue = searchParams.get('selectedValue') || '';
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
      // case '1':
      //   props.setSearchSelectValue('a');
      //   break;
      // case '2':
      //   props.setSearchSelectValue('b');
      //   break;
      // case '3':
      //   props.setSearchSelectValue('c');
      //   break;
      // case '9':
      //   props.setSearchSelectValue('d');
      //   break;

      // case '13':
      //   props.setSearchSelectValue('a');
      //   setSelectedValue('13');
      //   break;
      // case '11':
      //   props.setSearchSelectValue('b');
      //   setSelectedValue('11');
      //   break;
      // case '18':
      //   props.setSearchSelectValue('c');
      //   setSelectedValue('18');
      //   break;
      // case '12':
      //   props.setSearchSelectValue('d');
      //   // setSelectedValue('12');
      //   break;
      // case '35':
      //   props.setSearchSelectValue('e');
      //   break;
      // case '32':
      //   props.setSearchSelectValue('f');
      //   break;
      case '50':
        props.setSearchSelectValue('50');
        setSelectedValue('50');
        break;
      case '60':
        props.setSearchSelectValue('60');
        setSelectedValue('60');
        break;
      case '81':
        props.setSearchSelectValue('81');
        setSelectedValue('81');
        break;
      case 'all':
        props.setSearchSelectValue('');
        setSelectedValue('');
        break;
      default:
        props.setSearchSelectValue('');
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
