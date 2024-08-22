/* eslint-disable no-nested-ternary */
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import styled from 'styled-components';

import BaseButton from '../../Atom/BaseButton';
import BaseInput from '../../Atom/BaseInput';
import BaseSelect from '../../Atom/BaseSelect';
import { useManagementSearch } from '../../hooks/customs/messgeManagement/useManagementSearch';

const SearchWrap = styled.div`
  display: flex;
`;

const ManagementSearch = (props: any) => {
  const { messageOptionsProp, typeOptionsProp, name1, name2, type, queryKey } = props;

  const {
    handleMessageSelect,
    handleSearch,
    msgSelectValue,
    handleKeywordValueSelect,
    keywordValue,
    onClickSearchBtn,
    onClickSearchBtnSt,
    keyword,
    onClickSearchDetailBtn,
  } = useManagementSearch({
    setStartPage: props.setStartPage,
    setActivePage: props.setActivePage,
    setSearchKeyword: props.setSearchKeyword,
    setSearchSelectValue: props.setSearchSelectValue,
    setSearchKeywordValue: props.setSearchKeywordValue,
    setCurrentPage: props.setCurrentPage,
    queryKey,
  });

  return (
    <SearchWrap>
      {messageOptionsProp && (
        <BaseSelect
          name={name1}
          options={messageOptionsProp}
          onChange={handleMessageSelect}
          value={msgSelectValue as string}
          customStyle={{
            backgroundColor: 'transparent',
            border: 'none',
            fontSize: '1.4rem',
            color: '#605E55',
          }}
        />
      )}
      {typeOptionsProp && (
        <BaseSelect
          name={name2}
          options={typeOptionsProp}
          onChange={handleKeywordValueSelect}
          value={keywordValue as string}
          customStyle={{
            backgroundColor: 'transparent',
            border: 'none',
            // marginLeft: '15px',
            fontSize: '1.4rem',
            color: '#605E55',
          }}
        />
      )}

      <BaseInput
        onChange={handleSearch}
        backgroundColor="transparent"
        borderBottom="1px solid #929292"
        marginLeft="19px"
        onKeyPress={type === 'LTS' ? onClickSearchBtn : type === 'STC' ? onClickSearchBtnSt : onClickSearchDetailBtn}
        value={keyword as string}
      />

      <BaseButton
        onClick={type === 'LTS' ? onClickSearchBtn : type === 'STC' ? onClickSearchBtnSt : onClickSearchDetailBtn}
        backgroundColor="transparent"
      >
        <SearchIcon />
      </BaseButton>
    </SearchWrap>
  );
};

export default ManagementSearch;
