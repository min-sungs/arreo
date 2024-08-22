// import { useNavigate } from 'react-router-dom';
// import { formatDateTime } from '../../../../../../apis/utils/formats/dateFormatUtil';
// import { IButtonList } from '../../../../../Molecules/MessageManagement/ManagementSubmit';
// import { useMutationStDeleteDetail } from '../../../../mutations/useMutationStDeleteDetail';
// import { useMutationUpdateStMsgDetail } from '../../../../mutations/useMutationUpdateStMsgDetail';
// import { useStContentDetail } from './useStContentDetail';
// import { v4 as uuidv4 } from 'uuid';
// import { useModal } from '../../../useModal';
// import React, { useState } from 'react';
// import { formatPhoneNumber } from '../../../../../../apis/utils/formats/phoneNumberFormatUtil';
//
// interface IUseStContentDetailMid {
//   tableData: any;
//   sndMsg: string;
//   datePicker: string | undefined;
//   setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
//   // setSearchKeywordValue: React.Dispatch<React.SetStateAction<string | null>>;
//   // setSearchKeyword: React.Dispatch<React.SetStateAction<string | null>>;
// }
//
// export const useStContentDetailMid = ({ sndMsg, datePicker, tableData, setCurrentPage }: IUseStContentDetailMid) => {
//   const [pageNumberState, setPageNumberState] = useState<number>(1);
//
//   const { initialPage, initialSearchKeyword, initialSearchKeywordValue, prepayPayNo } = useStContentDetail();
//   const { confirmModal, successModal, warningModal } = useModal();
//   const navigate = useNavigate();
//   // ? 예약전송 삭제 Mutation
//   const { mutationDelete, isDeleteLoading } = useMutationStDeleteDetail();
//   // ? 예약전송 수정 Mutation
//   const { mutationUpdateMsg, isUpdateLoading } = useMutationUpdateStMsgDetail({
//     // refetch,
//     sndDttm: formatDateTime(datePicker ?? ('' as string)),
//     sndMsg,
//     prepayPayNo,
//     callback: ""
//   });
//   const handlePageChange = (pageNumber: number) => {
//     setPageNumberState(pageNumber);
//     setCurrentPage(pageNumber);
//   };
//   // 뒤로가기
//   const onBack = () => {
//     navigate(
//       `/scheduledtransfer?page=${initialPage}&searchKeywordValue=${initialSearchKeywordValue}&searchKeyword=${initialSearchKeyword}`,
//     );
//   };
//   // 재전송 함수
//   const onClickReSendMsg = () => {
//     confirmModal(
//       async () => {
//         await mutationUpdateMsg();
//       },
//       '예약전송 수정',
//       '메세지를 수정하시겠습니까?',
//       true,
//     );
//   };
//   // 예약취소 함수
//   const onDelete = () => {
//     confirmModal(
//       async () => {
//         try {
//           // await mutationDelete({ prepayPayNo: [prepayPayNo] });
//           successModal(
//             '예약문자 취소',
//             '선택하신 메세지가 성공적으로</br> 취소되었습니다.',
//             true,
//             `/scheduledtransfer?page=${initialPage}&searchKeywordValue=${initialSearchKeywordValue}&searchKeyword=${initialSearchKeyword}`,
//           );
//         } catch (error) {
//           warningModal('예약문자 취소', '예약문자 취소가 실패했습니다.', true);
//         }
//       },
//       '예약전송 취소',
//       '선택하신 메세지를 취소하시겠습니까?',
//       true,
//     );
//   };
//   // 버튼 리스트
//   const buttonList: IButtonList[] = [
//     { color: '#000', func: onClickReSendMsg, text: '수정' },
//     { color: '#000', func: onBack, text: '뒤로가기' },
//     { color: '#a1a1a1', func: onDelete, text: '예약 취소' },
//   ];
//
//   // 테이블 구조 설정
//   const thead = ['번호', '받는사람', '그룹명', '휴대폰번호'];
//   const tbody = tableData?.map((el: any, index: number) => {
//     const firstItemIndex = pageNumberState * 10 - 10;
//     return {
//       id: uuidv4(),
//       번호: firstItemIndex + index + 1,
//       받는사람: el?.buddyNm ?? 'ㅡ',
//       // eslint-disable-next-line no-nested-ternary
//       그룹명: el?.groupNm ?? 'ㅡ',
//       휴대폰번호: el?.phoneNumber ? formatPhoneNumber(el?.phoneNumber) : 'ㅡ',
//     };
//   });
//
//   const typeSelect = [
//     {
//       value: 'number',
//       label: '휴대폰번호',
//     },
//     // {
//     //   value: '이름',
//     //   label: '이름',
//     // },
//   ];
//
//   return {
//     typeSelect,
//     tbody,
//     thead,
//     handlePageChange,
//     buttonList,
//     isDeleteLoading,
//     isUpdateLoading,
//   };
// };
