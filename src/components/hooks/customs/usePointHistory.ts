import _ from 'lodash';

import { getPointHistoryAllApi } from '../../../apis/api/pointApi';
import { useQuery } from '@tanstack/react-query';
import { ITableRow } from '../../Organism/Table';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatDateBase } from '../../../apis/utils/formats/dateFormatUtil';
import { trcExcelDownload, getDateTransferListAll } from '../../../apis/api/transferResultApi';

export const usePointHistory = () => {
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

  const thead = ['번호', '결제일', '사용내역', '구분', '사용금액'];
  // const pointHistoryData: ITableRow[] = [
  //   { id: '1', 번호: '1', 결제일: '20231017 12:00', 사용내역: '포토문자', 사용금액: '0 C 250 P', 구분: '지출' },
  //   { id: '2', 번호: '2', 결제일: '20231017 12:00', 사용내역: '포토문자', 사용금액: '0 C 250 P', 구분: '지출' },
  //   { id: '3', 번호: '3', 결제일: '20231017 12:00', 사용내역: '포토문자', 사용금액: '0 C 250 P', 구분: '지출' },
  //   { id: '4', 번호: '4', 결제일: '20231017 12:00', 사용내역: '포토문자', 사용금액: '0 C 250 P', 구분: '지출' },
  //   { id: '5', 번호: '5', 결제일: '20231017 12:00', 사용내역: '포토문자', 사용금액: '0 C 250 P', 구분: '지출' },
  //   { id: '6', 번호: '6', 결제일: '20231017 12:00', 사용내역: '포토문자', 사용금액: '0 C 250 P', 구분: '지출' },
  // ];

  const { data: pointHistoryData, isSuccess } = useQuery(['pointHistory', currentPage], () =>
    getPointHistoryAllApi(currentPage - 1).then((data) =>
      data.content.map((e: any, idx: number) => {
        // const pointCategory: { [key: string]: string } = {
        //   1: '수입(충전)',
        //   2: '사용',
        //   3: '취소(예약취소)',
        //   9: '재충전(환불)',
        // };

        return {
          id: e.msgId,
          번호: String((currentPage - 1) * 10 + (idx + 1)),
          결제일: formatDateBase(e.wrtDttm),
          사용내역: e.usedCd,
          사용금액: `${e.point}C ${e.cash}P`,
          구분: e.payGb,
        };
      }, setTotalPage(data.totalElements)),
    ),
  );

  // // checkbox test
  const handleClick = (checkedId: string[]) => {};

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
  };
};
