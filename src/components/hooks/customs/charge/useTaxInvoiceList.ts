import _ from 'lodash';

import { getTaxInvoiceList } from '../../../../apis/api/pointApi';
import { useQuery } from '@tanstack/react-query';
import { ITableRow } from '../../../Organism/Table';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatDateBase } from '../../../../apis/utils/formats/dateFormatUtil';

export const useTaxInvoiceList = () => {
  const [totalPage, setTotalPage] = useState(10);
  const [activePage, setActivePage] = useState(1);
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // 페이싱네이션 - 페이지 변경
  const handlePageChange = (pageNumber: any) => {
    navigate(`?page=${pageNumber}`);
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    navigate(`?page=${currentPage}`);
    setActivePage(currentPage);
  }, [currentPage, navigate]);

  const thead = ['번호', '일자', '구분', '이름', '신청금액', '처리결과', '기타'];
  // const pointHistoryData: ITableRow[] = [
  //   { id: '1', 번호: '1', 결제일: '20231017 12:00', 사용내역: '포토문자', 사용금액: '0 C 250 P', 구분: '지출' },
  //   { id: '2', 번호: '2', 결제일: '20231017 12:00', 사용내역: '포토문자', 사용금액: '0 C 250 P', 구분: '지출' },
  //   { id: '3', 번호: '3', 결제일: '20231017 12:00', 사용내역: '포토문자', 사용금액: '0 C 250 P', 구분: '지출' },
  //   { id: '4', 번호: '4', 결제일: '20231017 12:00', 사용내역: '포토문자', 사용금액: '0 C 250 P', 구분: '지출' },
  //   { id: '5', 번호: '5', 결제일: '20231017 12:00', 사용내역: '포토문자', 사용금액: '0 C 250 P', 구분: '지출' },
  //   { id: '6', 번호: '6', 결제일: '20231017 12:00', 사용내역: '포토문자', 사용금액: '0 C 250 P', 구분: '지출' },
  // ];

  const {
    data: taxInvoiceData,
    isSuccess,
    isLoading,
  } = useQuery(['taxInvoiceList', currentPage], () =>
    getTaxInvoiceList(currentPage - 1).then((data) =>
      data.map((e: any, idx: number) => {
        const taxCategory: { [key: string]: string } = {
          T: '세금계산서',
          C: '현금영수증',
        };
        const stateCategory: { [key: string]: string } = {
          R: '처리중',
          Y: '처리완료',
          N: '불가',
        };

        return {
          id: e.msgId,
          번호: String((currentPage - 1) * 10 + (idx + 1)),
          일자: formatDateBase(e.wrtDttm),
          구분: taxCategory[e.reqGb],
          이름: e.name,
          신청금액: `${e.payAmt.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}원`,
          처리결과: stateCategory[e.stateGb],
        };
      }, setTotalPage(data.totalElements)),
    ),
  );

  useEffect(() => {
    if (isSuccess) {
      getTaxInvoiceList(currentPage - 1).then((data) => setTotalPage(data.totalElements));
    }
  }, [currentPage]);

  // // checkbox test
  const handleClick = (checkedId: string[]) => {};

  return {
    thead,
    taxInvoiceData,
    handleClick, // test용
    totalPage,
    handlePageChange,
    startPage,
    setStartPage,
    activePage,
    setActivePage,
    currentPage,
    setCurrentPage,
    isSuccess,
    isLoading,
  };
};
