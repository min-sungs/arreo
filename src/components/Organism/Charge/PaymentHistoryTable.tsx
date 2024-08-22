import React from 'react';

import ATitle from '../../Atom/ATitle';
import BaseTable from '../Table';
import BaseButton from '../../Atom/BaseButton';
import { usePayHistory } from '../../hooks/customs/charge/usePayHistory';

import Paginations01Index from '../../common/paginations/Pagination02/Pagination02.index';
import ChargeDateSearch from '../../Molecules/Charge/ChargeDateSearch';
import styled from 'styled-components';
import Loader from '../../common/Loader';

const PaymentHistoryTable = () => {
  const TableFoot = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 25px 0;
  `;

  const BaseTableCover = styled.div`
    /* min-height: 400px; */

    & tr td:last-child{
      padding:0;
    }
  `;

  // const SearchBox = styled.div`
  //   display:flex;
  //   align-items: flex-end;
  // `;

  const {
    totalPage,
    handlePageChange,
    activePage,
    setActivePage,
    startPage,
    setStartPage,
    currentPage,
    thead,
    payResultData,
    selectedValue,
    disabledDate,
    setSearchSelectValue,
    setSearchDates,
    setCurrentPage,
    handlePrint,
    isLoading,
  } = usePayHistory();

  return (
    <>
      <ATitle type="sub" text="결제내역" color="#0D42E5" />
      <div style={{ display: 'flex', alignItems: 'flex-end', flexWrap : 'wrap', gap : '1rem' }}>
        <ChargeDateSearch
          chargeOptionsProp={selectedValue}
          name1="결제내역"
          disabledDate={disabledDate}
          setSearchSelectValue={setSearchSelectValue}
          setSearchDates={setSearchDates}
          setStartPage={setStartPage}
          setActivePage={setActivePage}
          setCurrentPage={setCurrentPage}
        />
        <BaseButton
          width="180px"
          height="32px"
          fontSize="14px"
          fontWeight="bold"
          backgroundColor="#222"
          color="#fff"
          // marginLeft="10px"
          marginBottom="7px"
          onClick={handlePrint}
        >
          조회 기간 전체 영수증 인쇄
        </BaseButton>
      </div>
      <BaseTableCover>
        <BaseTable type="line" thead={thead} tbody={payResultData} />
        {isLoading && <Loader />}
      </BaseTableCover>
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
      </TableFoot>
      <p style={{ lineHeight: '18px', fontSize: '1.2rem' }}>
        결제 내역은 최근 3년간의 내역을 검색할 수 있으며, 이전 자료는 자동 삭제 됩니다.
        <br />
        결제한 내역에 대해 영수증을 인쇄할 수 있습니다.
      </p>
    </>
  );
};

export default PaymentHistoryTable;
