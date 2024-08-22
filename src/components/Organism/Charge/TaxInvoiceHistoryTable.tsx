import React from 'react';

import { useTaxInvoiceHistory } from '../../hooks/customs/charge/useTaxInvoiceHistory';

import ATitle from '../../Atom/ATitle';
import BaseTable from '../Table';
import Paginations01Index from '../../common/paginations/Pagination02/Pagination02.index';
import styled from 'styled-components';
import Loader from '../../common/Loader';
import { Link, useLocation } from 'react-router-dom';

const TaxInvoiceHistoryTable = () => {
  const TableFoot = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 25px 0;
  `;

  const TableDiv = styled.div`
    min-height: 400px;

    & td {
      white-space: wrap;
      line-height: 18px;
    }
  `;

  const {
    totalPage,
    handlePageChange,
    activePage,
    setActivePage,
    startPage,
    setStartPage,
    currentPage,
    taxBliiData,
    thead,
    isSuccess,
    isLoading,
  } = useTaxInvoiceHistory();

  return (
    <div>
      <ATitle type="sub" text="세금계산서 발행 내역" color="#0D42E5" />
      <TableDiv>
        <BaseTable type="line" thead={thead} tbody={taxBliiData} onclick={(e: any) => {}} />
        {isLoading && <Loader />}
      </TableDiv>
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
    </div>
  );
};

export default TaxInvoiceHistoryTable;
