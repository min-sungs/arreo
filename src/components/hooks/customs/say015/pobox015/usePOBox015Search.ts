import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { say015SearchTextState, say015SelectValueState } from '../../../../../recoil/atoms/say015Atom';

interface IUsePOBox015Search {
  say015MessageListRefetch: any;
}

export const usePOBox015Search = ({ say015MessageListRefetch }: IUsePOBox015Search) => {
  const [, setSay015SelectValue] = useRecoilState(say015SelectValueState); // 검색 항목
  const [, setSay015SearchText] = useRecoilState(say015SearchTextState); // 검색어
  const [selectState, setSelectState] = useState<string>('연락처'); // 기본 Select State
  const [searchState, setSearchState] = useState<string>(''); // 검색어 State
  const [selectOpen, setSelectOpen] = useState<boolean>(false); // 검색창 셀렉트 State

  const [selectArrValue] = useState([
    { name: '연락처', value: 'number' },
    { name: '내용', value: 'content' },
  ]);

  const searchSelectHandle = () => {
    setSelectOpen((prev) => !prev);
  };

  const selectOptionHandle = (el: any) => {
    setSelectState(el.name);
    setSelectOpen((prev) => !prev);
  };

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchState(e.target.value);
  };

  const onSubmitSearchPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    say015MessageListRefetch();
  };

  const onClickSearchButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // 클릭 이벤트에 대한 기본 동작 방지
    const searchTrimText = searchState.trim();
    setSay015SearchText(searchTrimText);
    const select = selectArrValue
      .map((el) => el)
      .filter((el) => {
        return el.name === selectState;
      });
    setSay015SelectValue(select[0].value);
    const formEvent = new Event('submit') as unknown as React.FormEvent<HTMLFormElement>;
    onSubmitSearchPost(formEvent);
  };

  return {
    selectOpen,
    searchSelectHandle,
    selectArrValue,
    selectState,
    selectOptionHandle,
    onChangeSearchInput,
    searchState,
    onSubmitSearchPost,
    onClickSearchButton,
  };
};
