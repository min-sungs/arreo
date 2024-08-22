import _ from 'lodash';

import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
// eslint-disable-next-line import/named
import { getPointResult } from '../../../../apis/api/pointApi';
import { formatDateBase } from '../../../../apis/utils/formats/dateFormatUtil';
import dayjs from 'dayjs';
import { useMutationPointExcelDown } from './usePointExcel';

export const usePointHistory = () => {
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

  const thead = ['번호', '결제일', '사용내역', '구분', '사용금액'];

  const {
    data: pointHistoryData,
    isSuccess,
    isLoading,
  } = useQuery(['pointHistory', currentPage, totalPage, pageSize, searchDates, searchSelectValue], () =>
    getPointResult(currentPage - 1, pageSize, searchDates, searchSelectValue).then((data) =>
      data.content.map((e: any, idx: number) => {
        return {
          id: e.msgId,
          번호: String((currentPage - 1) * 10 + (idx + 1)),
          결제일: formatDateBase(e.wrtDttm),
          사용내역: e.usedCd,
          구분: e.payGb,
          사용금액: `${e.cash.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')} ⓒ`,
          사용포인트: `${e.point.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')} ⓟ`,
        };
      }, setTotalPage(data.totalElements)),
    ),
  );

  useEffect(() => {
    getPointResult(currentPage - 1, pageSize, searchDates, searchSelectValue).then((data) =>
      setTotalPage(data.totalElements),
    );
    // handlePageChange(currentPage-1);
  }, [currentPage]);

  const selectedValue = [
    { value: 'all', label: '전체조회' },
    { value: '1', label: '수입(충전)' },
    { value: '2', label: '사용(지출)' },
    { value: '3', label: '취소(예약취소)' },
    { value: '9', label: '재충전(환불)' },
  ];

  // // checkbox test
  const handleClick = (checkedId: string[]) => {};

  // 이전 달의 첫 번째 날짜 계산
  const lastMonthStart = dayjs().subtract(1, 'month').startOf('month');

  // 이번 달의 마지막 날짜 계산
  const currentMonthEnd = dayjs().endOf('month');

  const disabledDate = (current: any) => {
    return current < lastMonthStart || current > currentMonthEnd;
  };

  // 엑셀 다운
  const { isExcelLoading, mutationExcelDown } = useMutationPointExcelDown({
    searchDates,
    searchSelectValue,
  });

  const excelDownload = () => {
    mutationExcelDown();
  };

  return {
    thead,
    pointHistoryData,
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
    isSuccess,
    excelDownload,
    mutationExcelDown,
    isExcelLoading,
    isLoading,
  };
};

// export default usePointHistory;
