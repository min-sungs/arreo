import _ from 'lodash';

import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getPayResult, payResultPrintAll } from '../../../../apis/api/pointApi';
import { formatDateBase } from '../../../../apis/utils/formats/dateFormatUtil';
import dayjs from 'dayjs';
import { useFetch } from '../../../../apis/utils/reactQuery';

export const usePayHistory = () => {
  const pageSize: number = 10;

  const [totalPage, setTotalPage] = useState(5);
  const [activePage, setActivePage] = useState(1);
  const [startPage, setStartPage] = useState(1);

  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialPage = parseInt(searchParams.get('page') as string, 10) || 1;
  const initialDates = searchParams.get('searchDates')?.split(',') || '';
  const initialSelectValue = searchParams.get('searchSelectValue');

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [searchSelectValue, setSearchSelectValue] = useState<string | null>(initialSelectValue);
  const [searchDates, setSearchDates] = useState<string[] | string>(initialDates);

  // 페이싱네이션 - 페이지 변경
  const handlePageChange = (pageNumber: any) => {
    navigate(`?page=${pageNumber}`);
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    navigate(`?page=${currentPage}&searchDates=${searchDates}&searchSelectValue=${searchSelectValue}`);
    setActivePage(currentPage);
  }, [searchDates, searchSelectValue, currentPage, navigate]);

  const thead = ['번호', '결제일', '결제방법', '결제금액', '포인트', '영수증인쇄'];

  const {
    data: payResultData,
    isSuccess,
    isLoading,
  } = useQuery(['payResult', currentPage, totalPage, pageSize, searchDates, searchSelectValue], () =>
    getPayResult(currentPage - 1, pageSize, searchSelectValue, searchDates).then((data) =>
      data.content.map((e: any, idx: number) => {
        const pay: { [key: string]: string } = {
          '12': '휴대폰결제',
          '13': '신용카드',
          '11': '계좌이체',
          '18': '무통장입금',
          '32': 'ARS',
          '35': '가상계좌',
          '50': '선불결제',
          '60': '간편결제',
          '81': '배치인증',
        };
        return {
          id: e.msgId,
          번호: String((currentPage - 1) * 10 + (idx + 1)),
          결제일: formatDateBase(e.wrtDttm),
          결제방법: pay[e.payGb],
          결제금액: `${e.pg.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}원`,
          포인트: `${e.cc.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}`,
          영수증id: e.mobilId,
        };
      }, setTotalPage(data.totalElements)),
    ),
  );

  useEffect(() => {
    getPayResult(currentPage - 1, pageSize, searchSelectValue, searchDates).then((data) =>
      setTotalPage(data.totalElements),
    );
  }, [currentPage]);

  const selectedValue = [
    { value: 'all', label: '전체조회' },
    { value: '12', label: '휴대폰결제' },
    { value: '13', label: '신용카드' },
    { value: '11', label: '계좌이체' },
    { value: '18', label: '무통장입금' },
    { value: '32', label: 'ARS' },
    { value: '35', label: '가상계좌' },
    { value: '50', label: '선불결제' },
    { value: '60', label: '간편결제' },
    { value: '81', label: '배치인증' },
  ];

  // checkbox test
  const handleClick = (checkedId: string[]) => {};

  // 3년 전 첫 번째 날짜 계산
  const lastYearStart = dayjs().subtract(3, 'year').startOf('month');

  // 이번 달의 마지막 날짜 계산
  const currentMonthEnd = dayjs().endOf('month');

  const disabledDate = (current: any) => {
    return current < lastYearStart || current > currentMonthEnd;
  };

  const handlePrint = () => {
    payResultPrintAll(searchDates).then((data) => {
      const printWindow = window.open(
        '/payResultPrint',
        '_blank',
        'scrollbars=1,toolbar=0,scroll=1,menubar=0,status=0,resizable=0,width=418,height=700',
      );
      printWindow?.document.write(data);
      printWindow?.print();
    });
  };

  return {
    thead,
    payResultData,
    handleClick, // test용
    totalPage,
    handlePageChange,
    startPage,
    setStartPage,
    activePage,
    setActivePage,
    currentPage,
    setCurrentPage,
    selectedValue,
    disabledDate,
    setSearchSelectValue,
    setSearchDates,
    handlePrint,
    isSuccess,
    isLoading,
  };
};

// export default usePayHistory;
