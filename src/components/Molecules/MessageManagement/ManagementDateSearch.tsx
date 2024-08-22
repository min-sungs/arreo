import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import styled from 'styled-components';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';

import BaseButton from '../../Atom/BaseButton';
import BaseSelect from '../../Atom/BaseSelect';
import { useManagementDateSearch } from '../../hooks/customs/messgeManagement/useManagementDateSearch';
import { formatDateBase } from '../../../apis/utils/formats/dateFormatUtil';

const { RangePicker } = DatePicker;

const SearchWrap = styled.div`
  display: flex;
`;

const RangePickerWrap = styled.div`
  margin-left: 15px;
  position: relative;
  top: -8px;
  .custom-range-picker input::placeholder {
    color: #999;
  }
`;

const ManagementDateSearch = (props: any) => {
  const { messageOptionsProp, name1 } = props;
  const { initialDates, onChangeRangePickerDate, handleMessageSelect, handleSearch, msgSelectValue } =
    useManagementDateSearch({
      setStartPage: props.setStartPage,
      setActivePage: props.setActivePage,
      setSearchSelectValue: props.setSearchSelectValue,
      setSearchDates: props.setSearchDates,
      setCurrentPage: props.setCurrentPage,
    });

  return (
    <SearchWrap>
      {messageOptionsProp && (
        <BaseSelect
          name={name1}
          options={messageOptionsProp}
          onChange={handleMessageSelect}
          value={msgSelectValue}
          customStyle={{
            backgroundColor: 'transparent',
            border: 'none',
            fontSize: '1.4rem',
            color: '#605E55',
          }}
        />
      )}
      <RangePickerWrap>
        <RangePicker
          id="searchDate"
          bordered={false}
          className="custom-range-picker"
          onChange={onChangeRangePickerDate}
          defaultValue={
            initialDates[0] && initialDates[1]
              ? [
                dayjs(formatDateBase(initialDates?.[0]), 'YYYY-MM-DD'),
                dayjs(formatDateBase(initialDates?.[1]), 'YYYY-MM-DD'),
              ]
              : null
          }
          changeOnBlur
        />
      </RangePickerWrap>

      <BaseButton backgroundColor="transparent" onClick={handleSearch}>
        <SearchIcon />
      </BaseButton>
    </SearchWrap>
  );
};

export default ManagementDateSearch;
