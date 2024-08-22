// import { QueryFunction, QueryKey, useQuery } from '@tanstack/react-query';
// import { useEffect, useState } from 'react';
//
// import { useLocation } from 'react-router-dom';
// import { getReserveSendDetail } from '../../../../../../apis/api/stContentDetailApis';
// import { formatDateBase } from '../../../../../../apis/utils/formats/dateFormatUtil';
// import QueryResult from './types/useStContentDetailIndex.types';
//
// /**
//  * 전송/예약 관리 => 예약전송 조회 상세 페이지
//  */
// export const useStContentDetail = () => {
//   const pageSize: number = 10;
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [totalPage, setTotalPage] = useState<number>(1);
//   const [tableData, setTableData] = useState<any>([{}]);
//   const [detailInfo, setDetailInfo] = useState<any>([{}]);
//   const [startPage, setStartPage] = useState<number>(1);
//   const [activePage, setActivePage] = useState<number>(1);
//   const [datePicker, setDatePicker] = useState<string | undefined>(undefined);
//   const [sndMsg, setSndMsg] = useState<string>('');
//   // 이름, 번호 중 선택 state
//   const [searchKeywordValue, setSearchKeywordValue] = useState<string | null>(null);
//   // 검색 내용 state
//   const [searchKeyword, setSearchKeyword] = useState<string | null>(null);
//
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const initialPage = parseInt(searchParams.get('page') as string, 10) || 1;
//   const initialSearchKeyword = searchParams.get('searchKeyword');
//   const initialSearchKeywordValue = searchParams.get('searchKeywordValue');
//   const prepayPayNo = searchParams.get('prepayPayNo') as string;
//
//   // ? 예약전송 리스트 조회 Query
//   const queryKey = [
//     'getReserveSendDetail',
//     {
//       pageNumber: currentPage - 1,
//       pageSize,
//       prepayPayNo,
//       keywordValue: searchKeywordValue,
//       keyword: searchKeyword,
//     },
//   ];
//   const { data, isLoading, isError }: QueryResult = useQuery(
//     queryKey,
//     getReserveSendDetail as QueryFunction<any, QueryKey>,
//     {
//       refetchOnWindowFocus: false,
//     },
//   );
//   useEffect(() => {
//     if (!isLoading && !isError && data) {
//       setDatePicker(formatDateBase(data?.sndDttm));
//       setTableData(data?.sendList?.content);
//       setDetailInfo(data);
//       setTotalPage(data.sendList.totalElements as number);
//       setSndMsg(data?.sndMsg);
//       setActivePage((data?.sendList?.pageable?.pageNumber as number) + 1);
//     }
//   }, [data, isLoading, isError, pageSize]);
//
//   return {
//     isLoading,
//     totalPage,
//     startPage,
//     setStartPage,
//     activePage,
//     setActivePage,
//     setSearchKeywordValue,
//     setSearchKeyword,
//     setCurrentPage,
//     detailInfo,
//     datePicker,
//     sndMsg,
//     setDatePicker,
//     setSndMsg,
//     tableData,
//     initialPage,
//     initialSearchKeyword,
//     initialSearchKeywordValue,
//     prepayPayNo,
//   };
// };
