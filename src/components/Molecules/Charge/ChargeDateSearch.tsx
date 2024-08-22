import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import styled from 'styled-components';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';


import BaseButton from '../../Atom/BaseButton';
import BaseSelect from '../../Atom/BaseSelect';
import { ChargeDatesSearch } from '../../hooks/customs/charge/useChargeDatesSearch';
import locale from 'antd/es/date-picker/locale/ko_KR';
import { formatDateBase } from '../../../apis/utils/formats/dateFormatUtil';


const { RangePicker } = DatePicker;

const SearchWrap = styled.div`
  margin-top: 30px;
  display: flex;
	align-items: center;
	@media screen and (max-width:540px){
		flex-wrap: wrap;
		gap: 1rem;
		> div{
			width: 100%;
		}
	}
`;

const RangePickerWrap = styled.div`
  margin-left: 15px;
  position: relative;
	display: flex;
	align-items: center;
	gap: 1.2rem;
	button{
		width: auto;
	}
	@media screen and (max-width:540px){
		margin-left: 0;
		> div{
			padding: 0;
		}
	}
  .custom-range-picker input::placeholder {
    color: #999;
  }
`;


// date 클릭 시 현재 달 출력
const MonthEnd = dayjs().subtract(1, 'month').startOf('month');


const ChargeDateSearch = (props: any) => {
  const { chargeOptionsProp, name1, disabledDate } = props;

  const { onChangeRangePickerDate, handleChargeSelect, handleChargeSearch, selectedValue, initialDates } =
    ChargeDatesSearch({
      setStartPage: props.setStartPage,
      setActivePage: props.setActivePage,
      setSearchSelectValue: props.setSearchSelectValue,
      setSearchDates: props.setSearchDates,
      setCurrentPage: props.setCurrentPage,
    });

  return (
    <SearchWrap>
      {chargeOptionsProp && (
        <BaseSelect
          name={name1}
          options={chargeOptionsProp}
          value={selectedValue}
          onChange={handleChargeSelect}
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
          changeOnBlur
          disabledDate={disabledDate}
          // prevIcon={false}
          // nextIcon={false}
          // superPrevIcon={false}
          // superNextIcon={false}
          defaultValue={
            initialDates[0] && initialDates[1]
              ? [
                dayjs(formatDateBase(initialDates?.[0]), 'YYYY-MM-DD'),
                dayjs(formatDateBase(initialDates?.[1]), 'YYYY-MM-DD'),
              ]
              : null
          }
          defaultPickerValue={[MonthEnd, MonthEnd]}
          locale={locale}
        />

				<BaseButton backgroundColor="transparent"
					onClick={handleChargeSearch}
				>
					<SearchIcon />
				</BaseButton>
      </RangePickerWrap>

    </SearchWrap>
  );
};

export default ChargeDateSearch;

