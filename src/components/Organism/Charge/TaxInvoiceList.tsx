import React from 'react';

import { useTaxInvoiceList } from '../../hooks/customs/charge/useTaxInvoiceList';

import ATitle from '../../Atom/ATitle';
import BaseTable from '../Table';
import Paginations01Index from '../../common/paginations/Pagination02/Pagination02.index';
import styled from 'styled-components';
import Loader from '../../common/Loader';

const TaxCashReceiptsHistoryTable = () => {
  const TableFoot = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 25px 0;
  `;

  const {
    totalPage,
    handlePageChange,
    activePage,
    setActivePage,
    startPage,
    setStartPage,
    currentPage,
    taxInvoiceData,
    thead,
    isSuccess,
    isLoading,
  } = useTaxInvoiceList();

  return (
    <>
      <ATitle type="sub" text="현금영수증/세금계산서 발행 신청 내역" color="#0D42E5" />
      <div style={{ minHeight: '400px' }}>
        <BaseTable type="line" thead={thead} tbody={taxInvoiceData} onclick={(e: any) => {}} />
        {isLoading && <Loader />}
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
      </TableFoot>
    </>
  );
};

export default TaxCashReceiptsHistoryTable;
