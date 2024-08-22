import { useRecoilState } from 'recoil';
import { recycleBinListToggleState, searchTextState, selectValueState } from '../../../../recoil/atoms/addressList.ts';
import React, { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

export const useAddressSearch = () => {
  const [selectValue, setSelectValue] = useRecoilState(selectValueState); // 검색항목
  const [searchText, setSearchText] = useRecoilState(searchTextState); // 검색어
  const [selectState, setSelectState] = useState('이름'); // 검색항목 State
  const [searchState, setSearchState] = useState(''); // 검색어 State

  const [selectSwitch, setSelectSwitch] = useState(false); // select 누르면 oprions 나올 스위치 버튼 역할
  const [selectArrValue] = useState([
    // select 가상 데이터
    { id: 0, name: 'name', koname: '이름' },
    { id: 1, name: 'number', koname: '휴대폰번호' },
    { id: 2, name: 'email', koname: '이메일' },
  ]);
  const [recycleBinListToggle, setRecycleBinListToggle] = useRecoilState(recycleBinListToggleState); // 휴지통 클릭시 띄울 리스트 토글상태

  const queryClient = useQueryClient();

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchState(value);
  };

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectState(e.target.value);
  };

  const onSubmitSearchPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (recycleBinListToggle) {
      queryClient.invalidateQueries(['recyclebinlist']);
    } else {
      queryClient.invalidateQueries(['maingrouplist']);
    }
  };

  const onClickSelectListButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    // select option 클릭 이벤트
    const result = e.target as HTMLButtonElement;
    if (typeof result.textContent === 'string') {
      setSelectState(result.textContent);
    }
  };

  const onClickSearchButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // 클릭 이벤트에 대한 기본 동작 방지
    const searchTrimText = searchState.trim();
    setSearchText(searchTrimText);
    const select = selectArrValue
      .map((el) => el)
      .filter((el) => {
        return el.koname === selectState;
      });
    setSelectValue(select[0].name);
    const formEvent = new Event('submit') as unknown as React.FormEvent<HTMLFormElement>;
    onSubmitSearchPost(formEvent);
  };

  return {
    onSubmitSearchPost,
    selectSwitch,
    setSelectSwitch,
    selectState,
    selectArrValue,
    onClickSelectListButton,
    onChangeSearchInput,
    searchState,
    onClickSearchButton,
    onChangeSelect,
  };
};
