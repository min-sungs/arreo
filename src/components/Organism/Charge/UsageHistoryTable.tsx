import React from 'react';

import ATitle from '../../Atom/ATitle';
import BaseTable from '../Table';
import BaseButton from '../../Atom/BaseButton';
import { usePointHistory } from '../../hooks/customs/charge/usePointHistory';

import Paginations01Index from '../../common/paginations/Pagination02/Pagination02.index';
import ChargeDateSearch from '../../Molecules/Charge/ChargeDateSearch';
import styled from 'styled-components';
import Loader from '../../common/Loader';

const UsageHistoryTable = () => {
  const TableFoot = styled.div`
    display: flex;
    justify-content: space-between;
		flex-wrap: wrap;
		gap: 1rem;
    margin: 25px 0;
  `;

  const {
    thead,
    totalPage,
    handlePageChange,
    activePage,
    setActivePage,
    startPage,
    setStartPage,
    currentPage,
    pointHistoryData,
    selectedValue,
    disabledDate,
    setSearchSelectValue,
    setSearchDates,
    setCurrentPage,
    isSuccess,
    excelDownload,
    isLoading,
  } = usePointHistory();

  return (
    <>
      <ATitle type="sub" text="사용내역" color="#0D42E5" />
      <ChargeDateSearch
        chargeOptionsProp={selectedValue}
        name1="사용내역"
        disabledDate={disabledDate}
        setSearchSelectValue={setSearchSelectValue}
        setSearchDates={setSearchDates}
        setStartPage={setStartPage}
        setActivePage={setActivePage}
        setCurrentPage={setCurrentPage}
      />
      <div style={{ minHeight: '400px' }}>
        <BaseTable name="use" type="line" thead={thead} tbody={pointHistoryData} onclick={(e: any) => {}} />
        {isSuccess || (isLoading && <Loader />)}
      </div>
      <TableFoot>
        <Paginations01Index
          dataCount={totalPage}
          startPage={startPage}
          setStartPage={setStartPage}
          activePage={activePage}
          setActivePage={setActivePage}
          eventHook={handlePageChange}
          pageSize={10}
        />

        <BaseButton
          width="100px"
          height="30px"
          fontSize="14px"
          fontWeight="bold"
          backgroundColor="#000"
          color="#fff"
          onClick={excelDownload}
        >
          엑셀 다운
        </BaseButton>
      </TableFoot>
      <p style={{ fontSize: '1.2rem' }}>사용내역은 전월, 당월만 검색이 가능하며 이전 자료는 삭제됩니다. </p>
    </>
  );
};

export default UsageHistoryTable;
