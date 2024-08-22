// import React, {useState} from 'react';
// import {formatPhoneNumber} from '../../../../../../apis/utils/formats/phoneNumberFormatUtil';
// import {formatDateBase} from '../../../../../../apis/utils/formats/dateFormatUtil';
// import {IButtonList} from '../../../../../Molecules/MessageManagement/ManagementSubmit';
// import {useModal} from '../../../useModal';
// import {useNavigate} from 'react-router-dom';
// import {useTrcContentDetail} from './useTrContentDetailIndex';
// import {useMutationSaveMsgStorageDetail} from '../../../../mutations/useMutationSaveMsgStorageDetail';
// import {useMutationDeleteMsgManagementDetail} from '../../../../mutations/useMutationDeleteTrMsgManagementDetail';
//
// export interface IUseTRContentDetailMidProps {
//   tableData: any;
//   setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
//   setPageSize: React.Dispatch<React.SetStateAction<number>>
//   setActivePage: React.Dispatch<React.SetStateAction<number>>;
//   setStartPage: React.Dispatch<React.SetStateAction<number>>;
//   setSelectSendState:React.Dispatch<React.SetStateAction<string>>;
// }
//
// export interface ISendStateArr {
//   name: string,
//   value: string
// }
//
// export const useTRContentDetailMid = ({tableData, setCurrentPage, setPageSize, setStartPage, setSelectSendState}: IUseTRContentDetailMidProps) => {
//   const {confirmModal, warningModal, successModal} = useModal();
//   const {initialPage, initialSelectValue, initialDates, checkedId} = useTrcContentDetail();
//   const [pageNumberState, setPageNumberState] = useState<number>(1);
//   const navigate = useNavigate();
//
//   const pageSizeArr = ["10", "15", "30", "50"];
//   const sendStateArr = [{name:"전체", value:"0" }, {name: "성공", value:"-100"}, {name:"전송 중", value:"99"}, {name:"실패", value: "100"}];
//
//   // 장기 보관함 저장 Mutation
//   const {mutate: mutationSaveMsgStorageDetail, isSaveLoading} = useMutationSaveMsgStorageDetail({checkedId});
//
//   // 전송 결과 삭제 Mutation
//   const {mutationDeleteMsgDetail, isDeleteLoading} = useMutationDeleteMsgManagementDetail({checkedId});
//
//   // 페이지 표출 사이즈 선택 함수
//   const onSelectedPageSize = (e: any) => {
//     setPageSize(parseInt(e.currentTarget.value, 10));
//     setStartPage((prev) => 1);
//     setCurrentPage((prev) => 1);
//     setPageNumberState((prev) => 1);
//   }
//
//   // 페이지 표출 사이즈 선택 함수
//   const onSelectedSendStatus = (e: any) => {
//     setSelectSendState(e.currentTarget.value);
//     setStartPage((prev) => 1);
//     setCurrentPage((prev) => 1);
//     setPageNumberState((prev) => 1);
//   }
//
//   // 페이징 네이션 동작 함수
//   const handlePageChange = (pageNumber: number) => {
//     setPageNumberState(pageNumber);
//     setCurrentPage(pageNumber);
//   };
//
//   // 장기 보관함 저장 함수
//   const onSaveMsg = () => {
//     confirmModal(
//       async () => {
//         try {
//           mutationSaveMsgStorageDetail();
//         } catch (error) {
//           warningModal('장기보관', '장기보관에 실패했습니다.', true);
//         }
//       },
//       '장기보관함',
//       '메세지를 장기보관하시겠습니까?',
//       true,
//     );
//   };
//
//   // 삭제 함수
//   const onDelete = () => {
//     confirmModal(
//       async () => {
//         try {
//           mutationDeleteMsgDetail();
//           successModal(
//             '전송결과 삭제',
//             '메세지가 성공적으로</br> 삭제가되었습니다.',
//             true,
//             `/transferresult?page=${initialPage}&searchSelectValue=${initialSelectValue}&searchDates=${initialDates}`,
//           );
//         } catch (error) {
//           warningModal('전송결과 삭제', '전송결과 삭제가 실패했습니다.', true);
//         }
//       },
//       '전송결과 삭제',
//       '메세지를 삭제하시겠습니까?',
//       true,
//     );
//   };
//
//   // 뒤로가기
//   const onBack = () => {
//     navigate(`/transferresult?page=${initialPage}&searchSelectValue=${initialSelectValue}&searchDates=${initialDates}`);
//   };
//
//   // 테이블 구조 설정
//   // const thead = ['번호', '받는사람', '받은 시간', '전송상태', '실패사유'];
//   const thead = ['번호', '받는사람', '받은 시간', '전송상태'];
//   const tbody = tableData?.map((el: any, index: number) => {
//     // 리스트 번호
//     const firstItemIndex = pageNumberState * 10 - 10;
//     return {
//       id: el?.cmpMsgId ?? index,
//       번호: firstItemIndex + index + 1,
//       받는사람: (el?.rcvPhnId ? formatPhoneNumber(el?.rcvPhnId) : '') + (el?.buddyName ? ` (${el?.buddyName})` : ''),
//       '받은 시간': el?.regRcvDttm ? formatDateBase(el?.regRcvDttm) : 'ㅡ',
//       // eslint-disable-next-line no-nested-ternary
//       전송상태: String(el?.rsltVal) === '-100' ? '성공' : String(el?.rsltVal) === '99' ? '전송중' : String(el?.rsltVal) === 'undefined' ? "" : '실패',
//       // 실패사유: String(el?.rsltVal) === '-100' || String(el?.rsltVal) === '99' ? 'ㅡ' : '실패사유',
//     };
//   });
//
//   const typeSelect = [
//     {
//       value: '휴대폰번호',
//       label: '휴대폰번호',
//     },
//   ];
//
//   // 버튼 리스트
//   const buttonList: IButtonList[] = [
//     {color: 'blue', func: onSaveMsg, text: '장기보관함'},
//     {color: '#000', func: onBack, text: '뒤로가기'},
//     {color: '#a1a1a1', func: onDelete, text: '삭제'},
//   ];
//
//   return {
//     typeSelect,
//     thead,
//     tbody,
//     buttonList,
//     handlePageChange,
//     isSaveLoading,
//     isDeleteLoading,
//     pageSizeArr,
//     onSelectedPageSize,
//     setPageNumberState,
//     sendStateArr,
//     onSelectedSendStatus
//   };
// };
