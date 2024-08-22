// import { QueryFunction, QueryKey, useQuery } from '@tanstack/react-query';
// import { useEffect, useState } from 'react';
//
// import { useLocation } from 'react-router-dom';
// import { getStorageDetailApi } from '../../../../../../apis/api/ltsContentDetailApis';
//
// /**
//  * 전송/예약 관리 => 메시지 장기보관함 상세 페이지
//  */
// export const useLtsContentDetail = () => {
//   const pageSize: number = 10;
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [totalPage, setTotalPage] = useState<number>(1);
//   const [tableData, setTableData] = useState<any>([{}]);
//   const [detailInfo, setDetailInfo] = useState<any>({});
//   const [startPage, setStartPage] = useState<number>(1);
//   const [activePage, setActivePage] = useState<number>(1);
//   const [checkList, setCheckList] = useState<string[]>([]);
//   const [checkAll, setCheckAll] = useState(false);
//
//   // 이름, 번호 중 선택 state
//   const [searchKeywordValue, setSearchKeywordValue] = useState<string | null>(null);
//   // 검색 내용 state
//   const [searchKeyword, setSearchKeyword] = useState<string | null>(null);
//
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const initialPage = parseInt(searchParams.get('page') as string, 10) || 1;
//   const initialSearchKeyword = searchParams.get('searchKeyword');
//   const initialSearchSelectValue = searchParams.get('searchSelectValue');
//   const initialSearchKeywordValue = searchParams.get('searchKeywordValue');
//   const msgGroupId = searchParams.get('msgGroupId') as string;
//
//   // 전체리스트
//   const { data, isLoading, isError } = useQuery(['getResultLtsDetail',"msgGroupId", currentPage, pageSize, searchKeyword, searchKeywordValue],
//     () => getStorageDetailApi({pageSize,msgGroupId,callback:"",pageNumber:0,keywordValue:"",keyword:""}), {
//       refetchOnWindowFocus: false,
//     });
//
//   // 페이징네이션 동작 함수
//   const handlePageChange = (pageNumber: any) => {
//     // 체크박스 초기화
//     setCheckAll(false);
//     setCheckList([]);
//
//     setCurrentPage(pageNumber);
//   };
//
//   useEffect(() => {
//     if (!isLoading && !isError && data.rcvPhnIds) {
//       if (activePage > 1 && data?.content?.length < 1) {
//         handlePageChange(currentPage - 1);
//       } else {
//         setTableData(data?.rcvPhnIds?.content);
//         setDetailInfo({
//           msgGroupId: data?.msgGroupId,
//           sndMsg: data?.sndMsg,
//           sndDttm: data?.sndDttm,
//           callback: data?.callback,
//           imageData: data?.imageData,
//         });
//         setCheckAll(false);
//         setCheckList([]);
//         setActivePage((data?.rcvPhnIds?.pageable?.pageNumber as number) + 1);
//         setTotalPage(data?.rcvPhnIds?.totalElements as number);
//       }
//     }
//   }, [data, isLoading, isError, pageSize]);
//   return {
//     handlePageChange,
//     tableData,
//     totalPage,
//     startPage,
//     setStartPage,
//     activePage,
//     setActivePage,
//     setSearchKeywordValue,
//     setSearchKeyword,
//     setCurrentPage,
//     msgGroupId,
//     detailInfo,
//     isLoading,
//     isError,
//     initialPage,
//     initialSearchKeyword,
//     initialSearchSelectValue,
//     initialSearchKeywordValue,
//     setCheckList,
//     checkList,
//     checkAll,
//     setCheckAll,
//   };
// };
