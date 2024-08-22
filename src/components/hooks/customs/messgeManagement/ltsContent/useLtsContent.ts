// import { useQuery } from '@tanstack/react-query';
// import { useEffect, useState } from 'react';
//
// import { getLongTimeStorageList } from '../../../../../apis/api/ltsContentApis';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useRecoilValue } from 'recoil';
// import { ResendAddressBookOff } from '../../../../../recoil/atoms/TrcMessageAtom';
//
// interface MessageData {
//   id: number;
//   name: string;
//   email: string;
//   phone: string;
//   website: string;
// }
// //
// interface ApiResponse {
//   data: MessageData[];
// }
// /**
//  * 전송/예약 관리 => 메시지 장기보관함 페이지
//  */
// export const useLtsContent = () => {
//   const pageSize: number = 10;
//   const [totalPage, setTotalPage] = useState(10);
//   const [tableData, setTableData] = useState<any>([{}]);
//   const [startPage, setStartPage] = useState(1);
//   const [activePage, setActivePage] = useState(1);
//   const [allChecked, setAllChecked] = useState<boolean>(false);
//   const [checkedId, setCheckedId] = useState<string[]>([]);
//
//   const navigate = useNavigate();
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const initialPage = parseInt(searchParams.get('page') as string, 10) || 1;
//   const initialSearchKeyword = searchParams.get('searchKeyword');
//   const initialSearchSelectValue = searchParams.get('searchSelectValue');
//   const initialSearchKeywordValue = searchParams.get('searchKeywordValue');
//
//   // 검색 내용 state
//   const [searchKeyword, setSearchKeyword] = useState<string | null>(initialSearchKeyword);
//   // 메시지 종류 선택 state
//   const [searchSelectValue, setSearchSelectValue] = useState<string | null>(initialSearchSelectValue);
//   // 이름, 번호 중 선택 state
//   const [searchKeywordValue, setSearchKeywordValue] = useState<string | null>(initialSearchKeywordValue);
//   const [currentPage, setCurrentPage] = useState<number>(initialPage);
//
//   const isResendLtsAddressBook = useRecoilValue(ResendAddressBookOff);
//
//   useEffect(() => {
//     navigate(
//       `?page=${currentPage}&searchSelectValue=${searchSelectValue}&searchKeyword=${searchKeyword}&searchKeywordValue=${searchKeywordValue}`,
//     );
//     setActivePage(currentPage);
//     setStartPage(Math.floor((currentPage - 1) / 10) * 10 + 1);
//   }, [searchKeyword, searchSelectValue, searchKeywordValue, currentPage, navigate]);
//
//   // 페이징네이션 동작 함수
//   const handlePageChange = (pageNumber: any) => {
//     // 체크박스 초기화
//     setAllChecked(false);
//     setCheckedId([]);
//
//     setCurrentPage(pageNumber);
//   };
//
//   // 리스트 조회 API
//   const queryKey = [
//     'getLongTimeStorageList',
//     currentPage,
//     pageSize,
//     searchKeyword,
//     searchSelectValue,
//     searchKeywordValue,
//   ];
//   const { data, isLoading, isError } = useQuery<ApiResponse | undefined | any>(queryKey, () =>
//     getLongTimeStorageList(currentPage - 1, pageSize, searchKeyword, searchSelectValue, searchKeywordValue),
//   );
//
//   useEffect(() => {
//     if (!isLoading && !isError) {
//       if (activePage > 1 && data?.content?.length < 1) {
//         handlePageChange(currentPage - 1);
//       } else {
//         setTableData(data?.content);
//         const totalSize = Math.ceil(data.totalElements / pageSize) * 10;
//         setTotalPage(totalSize);
//         // 체크박스 초기화
//         setCheckedId([]);
//         setAllChecked(false);
//       }
//     }
//   }, [data, isLoading, isError, pageSize, activePage]);
//
//   const messageSelect = [
//     { value: 'all', label: '전체조회' },
//     { value: 's', label: '문자전송' },
//     { value: 'f', label: '포토전송' },
//     { value: 'e', label: '1000자전송' },
//   ];
//
//   const typeSelect = [
//     {
//       value: 'number',
//       label: '연락처',
//     },
//   ];
//
//   return {
//     messageSelect,
//     typeSelect,
//     activePage,
//     handlePageChange,
//     setActivePage,
//     setStartPage,
//     startPage,
//     totalPage,
//     allChecked,
//     checkedId,
//     setSearchKeyword,
//     setSearchKeywordValue,
//     setSearchSelectValue,
//     setCurrentPage,
//     isLoading,
//     tableData,
//     setAllChecked,
//     setCheckedId,
//     isResendLtsAddressBook,
//   };
// };
