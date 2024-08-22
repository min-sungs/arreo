import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { binSearchTextState, binSelectValueState } from '../../../../../recoil/atoms/addressList';

interface IUseSearchBin {
  recycleBinRefetch: any;
}

export const useSearchBin = ({ recycleBinRefetch }: IUseSearchBin) => {
  const [, setBinSelectValue] = useRecoilState(binSelectValueState);
  const [, setBinSearchText] = useRecoilState(binSearchTextState);
  const [selectState, setSelectState] = useState('이름'); // 기본 Select State
  const [searchState, setSearchState] = useState(''); // 검색어 State

  const [selectSwitch, setSelectSwitch] = useState(false); // select 누르면 oprions 나올 스위치 버튼 역할

  const [selectArrValue] = useState([
    { id: 0, name: 'name', koname: '이름' },
    { id: 1, name: 'number', koname: '연락처' },
    { id: 2, name: 'email', koname: '이메일' },
  ]);

  const onClickSelectListButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const result = e.target as HTMLButtonElement;
    if (typeof result.textContent === 'string') {
      setSelectState(result.textContent);
    }
  };

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchState(e.target.value);
  };

  const onSubmitSearchPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    recycleBinRefetch();
  };

  const onClickSearchButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // 클릭 이벤트에 대한 기본 동작 방지
    const searchTrimText = searchState.trim();
    setBinSearchText(searchTrimText);
    const select = selectArrValue
      .map((el) => el)
      .filter((el) => {
        return el.koname === selectState;
      });
    setBinSelectValue(select[0].name);
    const formEvent = new Event('submit') as unknown as React.FormEvent<HTMLFormElement>;
    onSubmitSearchPost(formEvent);
  };

  return {
    selectSwitch,
    setSelectSwitch,
    selectState,
    selectArrValue,
    onClickSelectListButton,
    onChangeSearchInput,
    searchState,
    onSubmitSearchPost,
    onClickSearchButton,
  };
};
