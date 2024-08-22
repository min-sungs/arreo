// /* eslint-disable no-nested-ternary */
// import { useQuery } from '@tanstack/react-query';
// import { useEffect, useState } from 'react';
//
// import _ from 'lodash';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useModal } from '../../useModal';
// import { useMutationStDelete } from '../../../mutations/useMutationStDelete';
// import { getReserveSendList } from '../../../../../apis/api/stContentApis';
// import { ITableRow } from '../../../../Organism/Table';
// import { cmpUsrIdFormat } from '../../../../../apis/utils/formats/cmpUsrIdFormat';
// import { formatDateBase } from '../../../../../apis/utils/formats/dateFormatUtil';
// import { formatPhoneNumber } from '../../../../../apis/utils/formats/phoneNumberFormatUtil';
// import { IButtonList } from '../../../../Molecules/MessageManagement/ManagementSubmit';
//
// interface MessageData {
//   id: number;
//   name: string;
//   email: string;
//   phone: string;
//   website: string;
// }
//
// interface ApiResponse {
//   data: MessageData[];
// }
// /**
//  * 전송/예약 관리 => 예약전송 관리 페이지
//  */
// export const useStContent = () => {
//   const pageSize: number = 10;
//   const [totalPage, setTotalPage] = useState(10);
//   const [tableData, setTableData] = useState<any>([{}]);
//   const [startPage, setStartPage] = useState(1);
//   const [activePage, setActivePage] = useState(1);
//   const [allChecked, setAllChecked] = useState<boolean>(false);
//   const [checkedId, setCheckedId] = useState<string[]>([]);
//   const { confirmModal, warningModal } = useModal();
//
//   // 상세페이지 이동 테스트
//   const navigate = useNavigate();
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const initialPage = parseInt(searchParams.get('page') as string, 10) || 1;
//   const initialSearchKeyword = searchParams.get('searchKeyword');
//   const initialSearchKeywordValue = searchParams.get('searchKeywordValue');
//   const [currentPage, setCurrentPage] = useState(initialPage);
//   const [searchCondition, setSearchCondition] = useState<string | null>(initialSearchKeywordValue);
//   const [keyword, setKeyword] = useState<string | null>(initialSearchKeyword === 'null' ? null : initialSearchKeyword);
//   useEffect(() => {
//     navigate(`?page=${currentPage}&searchKeyword=${keyword}&searchKeywordValue=${searchCondition}`);
//     setActivePage(currentPage);
//     setStartPage(Math.floor((currentPage - 1) / 10) * 10 + 1);
//   }, [keyword, searchCondition, currentPage, navigate]);
//
//   // 페이싱네이션 - 페이지 변경
//   const handlePageChange = (pageNumber: any) => {
//     setCurrentPage(pageNumber);
//   };
//
//   const onClickMoveDetailPage = (id: string) => {
//     navigate(
//       `/scheduledtransferDetail?prepayPayNo=${id}&page=${currentPage}&searchKeywordValue=${searchCondition}&searchKeyword=${keyword}`,
//     );
//   };
//
//   // 예약전송 삭제 Mutation
//   const { mutationDelete } = useMutationStDelete();
//
//   // 전송결과 조회페이지 리스트 조회 Query
//   const queryKey = ['getReserveSendList', currentPage, pageSize, searchCondition, keyword];
//   const { data, isLoading, isError } = useQuery<ApiResponse | undefined | any>(
//     queryKey,
//     () => getReserveSendList({ pageNumber: currentPage - 1, pageSize, searchCondition: "number", keyword }),
//     {
//       refetchOnWindowFocus: false,
//     },
//   );
//   // 전송결과 조회페이지 데이터
//   useEffect(() => {
//     if (!isLoading && !isError) {
//       if (activePage > 1 && data?.content?.length < 1) {
//         handlePageChange(currentPage - 1);
//       } else {
//         setTableData(data?.content);
//         const totalSize = Math.ceil(data.totalElements / pageSize) * 10;
//         setTotalPage(totalSize);
//
//         // 체크박스 초기화
//         setCheckedId([]);
//         setAllChecked(false);
//       }
//     }
//   }, [data, isLoading, isError, pageSize]);
//
//   // 체크박스 전체 선택 함수
//   const handleCheckBoxAll = (tbody: ITableRow[]) => {
//     if (allChecked) {
//       setAllChecked(false);
//       setCheckedId([]);
//     } else {
//       setAllChecked(true);
//       setCheckedId(tbody.map((e) => e.id));
//     }
//   };
//
//   // 체크박스 단일 선택 함수
//   const handleCheckBox = (tbody: ITableRow[], id: string) => {
//     if (checkedId.includes(id)) {
//       setCheckedId(checkedId.filter((e) => e !== id));
//       setAllChecked(false);
//     } else {
//       const updatedCheckedId = _.sortBy([...checkedId, id]);
//       setCheckedId(updatedCheckedId);
//       if (_.isEqual(updatedCheckedId, _.sortBy(tbody.map((e) => e.id)))) setAllChecked(true);
//     }
//   };
//
//   // 취소 함수
//   const onDelete = () => {
//     if (checkedId.length === 0) {
//       warningModal('예약전송 취소', '예약전송 취소하실 메세지를 선택해주세요.', true);
//     } else {
//       confirmModal(
//         async () => {
//           // await mutationDelete({ prepayPayNo: checkedId });
//         },
//         '예약전송 취소',
//         '선택하신 메세지를 취소하시겠습니까?',
//         true,
//       );
//     }
//   };
//
//   // 검색 조건 선택 리스트
//   const messageSelect = [
//     { value: 'number', label: '휴대폰번호' },
//     { value: 'content', label: '내용' },
//   ];
//
//   // 테이블 헤드
//   const thead = ['구분', '예약일시', '예약내용', '받는사람', '사용금액'];
//
//   const tbody = tableData?.map((el: any, index: number) =>
//     // el?.msgGroupId !== undefined
//     // 현재 그룹화 데이터로 안주기때문에 msgGroupId 가 없음. 우선 prepayPayNo로 분기처리
//     ({
//       id: el?.prepayPayNo ?? index,
//       구분: el?.cmpUsrId ? `${cmpUsrIdFormat({ cmpUsrId: el?.cmpUsrId })} (예약)` : '',
//       예약일시: el?.sndDttm ? formatDateBase(el?.sndDttm) : '',
//       예약내용: {
//         data: el?.sndMsg ?? '',
//         func: onClickMoveDetailPage,
//       },
//       받는사람:
//         el?.rcvPhnId?.length > 10
//           ? `${formatPhoneNumber(el?.rcvPhnId)} ${el?.buddyName ? `(${el?.buddyName})` : ''} `
//           : el?.rcvPhnId?.length < 10
//           ? `${el?.rcvPhnId}`
//           : '',
//       사용금액: el?.usedMoney ? `${el?.usedMoney}원` : '',
//     }),
//   );
//   const buttonList: IButtonList[] = [
//     { width: '169px', color: '#605e55', func: onDelete, text: '선택한 예약문자 취소' },
//   ];
//
//   // 상세페이지 이동 테스트
//
//   return {
//     handleCheckBoxAll,
//     handleCheckBox,
//     onDelete,
//     totalPage,
//     pageSize,
//     currentPage,
//     messageSelect,
//     handlePageChange,
//     setSearchCondition,
//     setKeyword,
//     setCurrentPage,
//     startPage,
//     setStartPage,
//     activePage,
//     setActivePage,
//     allChecked,
//     checkedId,
//     onClickMoveDetailPage,
//     thead,
//     tbody,
//     isLoading,
//     buttonList,
//   };
// };
