import _ from 'lodash';

import { getTaxBillList } from '../../../../apis/api/pointApi';
import { useQuery } from '@tanstack/react-query';
// import { ITableRow } from '../../../Organism/Table';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatDateBase } from '../../../../apis/utils/formats/dateFormatUtil';

export const useTaxInvoiceHistory = () => {
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

  const thead = ['번호', '발행 요청 일자', '구분', '사업자명', '신청금액', '상태', '상태 설명', '상세보기'];

  const {
    data: taxBliiData,
    isSuccess,
    isLoading,
  } = useQuery(['getTaxBillList', currentPage], () =>
    getTaxBillList(currentPage - 1).then((data) =>
      data.content.map((e: any, idx: number) => {
        return {
          시리얼넘버: e.serialnum,
          번호: String((currentPage - 1) * 10 + (idx + 1)),
          '발행 요청 일자': formatDateBase(e.publicdate),
          구분: '세금계산서',
          사업자명: e.corpName,
          신청금액: `${e.amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}원`,
          상태: e.state,
          '상태 설명': e.desc,
          상세보기: '상세보기',
        };
      }, setTotalPage(data.totalElements)),
    ),
  );

  useEffect(() => {
    if (isSuccess) {
      getTaxBillList(currentPage - 1).then((data) => setTotalPage(data.totalElements));
    }
  }, [currentPage]);

  // // checkbox test
  const handleClick = (checkedId: string[]) => {};

  return {
    thead,
    taxBliiData,
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
