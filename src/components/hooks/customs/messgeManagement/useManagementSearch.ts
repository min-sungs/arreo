import { useQueryClient } from '@tanstack/react-query';
import React, { ChangeEvent, KeyboardEvent, MouseEvent, useState } from 'react';
import { removeHyphens } from '../../../../apis/utils/formats/phoneNumberFormatUtil';
import { useLocation } from 'react-router';

interface IUseManagementSearch {
  setSearchSelectValue: React.Dispatch<React.SetStateAction<string | null>>;
  setSearchKeywordValue: React.Dispatch<React.SetStateAction<string | null>>;
  setSearchKeyword: React.Dispatch<React.SetStateAction<string | null>>;
  setStartPage: React.Dispatch<React.SetStateAction<number>>;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  queryKey?: string;
}

export const useManagementSearch = (props: IUseManagementSearch) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialSearchKeyword = searchParams.get('searchKeyword');
  const initialSearchSelectValue = searchParams.get('searchSelectValue');
  const initialSearchKeywordValue = searchParams.get('searchKeywordValue');
  const [msgSelectValue, setMsgSelectValue] = useState<string | null>(initialSearchSelectValue);
  const [keywordValue, setKeywordValue] = useState<string | null>(initialSearchKeywordValue);
  // const [keyword, setKeyword] = useState<string | null>(initialSearchKeyword === 'null' ? null : initialSearchKeyword);
  const [keyword, setKeyword] = useState<string | null>(initialSearchKeyword === 'null' ? null : initialSearchKeyword);
  const queryClient = useQueryClient();
  // 검색 조건 - 구분 종류
  const handleMessageSelect = (e: string | null) => {
    setMsgSelectValue(e);
  };

  // 검색 조건 - 휴대폰, 이름...
  const handleKeywordValueSelect = (e: string) => {
    setKeywordValue(e);
  };

  // 검색 조건 - 검색 내용
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  // 장기보관함 조회 검색 함수
  const onClickSearchBtn = (event: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>) => {
    if ('key' in event && event.key !== 'Enter') {
      return;
    }
    queryClient.removeQueries(['getLongTimeStorageList']);
    props.setSearchSelectValue(msgSelectValue);

    props.setSearchKeywordValue(keywordValue === 'name' ? 'name' : 'number');

    if (keywordValue === 'number' && keyword !== 'null' && keyword) {
      props.setSearchKeyword(removeHyphens(keyword));
    } else {
      props.setSearchKeyword(keyword !== 'null' ? keyword : '');
    }
    // 페이징네이션 state 값 초기화
    props.setActivePage(1);
    props.setStartPage(1);
    props.setCurrentPage(1);
  };

  // 예약전송 괸리 검색 함수
  const onClickSearchBtnSt = (event: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>) => {
    if ('key' in event && event.key !== 'Enter') {
      return;
    }
    queryClient.removeQueries(['getReserveSendList']);

    props.setSearchKeywordValue(keywordValue === 'content' ? 'content' : 'number');

    if (keywordValue === 'number' && keyword !== 'null' && keyword) {
      props.setSearchKeyword(removeHyphens(keyword));
    } else {
      props.setSearchKeyword(keyword !== 'null' ? keyword : '');
    }
    // 페이징네이션 state 값 초기화
    props.setActivePage(1);
    props.setStartPage(1);
    props.setCurrentPage(1);
  };

  // 모든 상세 페이지 검색 함수
  const onClickSearchDetailBtn = (event: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>) => {
    if ('key' in event && event.key !== 'Enter') {
      return;
    }
    props.setSearchKeywordValue(keywordValue === 'name' ? 'name' : 'number');
    if (keywordValue !== 'name' && keyword !== 'null' && keyword) {
      props.setSearchKeyword(removeHyphens(keyword));
    } else {
      props.setSearchKeyword(keyword !== 'null' ? keyword : '');
    }
    // 페이징네이션 state 값 초기화
    props.setActivePage(1);
    props.setStartPage(1);
    props.setCurrentPage(1);
  };

  return {
    keyword,
    onClickSearchBtn,
    onClickSearchDetailBtn,
    handleKeywordValueSelect,
    keywordValue,
    handleMessageSelect,
    handleSearch,
    msgSelectValue,
    onClickSearchBtnSt,
  };
};
