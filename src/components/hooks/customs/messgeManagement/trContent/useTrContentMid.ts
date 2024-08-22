// /* eslint-disable no-nested-ternary */
// import { useLocation, useNavigate } from 'react-router-dom';
// import { formatDateBase } from '../../../../../apis/utils/formats/dateFormatUtil';
// import { formatPhoneNumber } from '../../../../../apis/utils/formats/phoneNumberFormatUtil';
// import { ITableRow } from '../../../../Organism/Table';
// import React, { useState } from 'react';
// import _ from 'lodash';
// import { deleteTransferMsg } from '../../../../../apis/api/transferResultApi';
// import { useModal } from '../../useModal';
// import { useMutationSaveMsgStorage } from '../../../mutations/useMutationSaveMsgStorage';
// import { useMutationDeleteMsgManagement } from '../../../mutations/useMutationDeleteMsgManagement';
// import { IButtonList } from '../../../../Molecules/MessageManagement/ManagementSubmit';
// import { useMutationTRCExcelDown } from '../../../mutations/useMutationTRCExcelDown';
// import { useRecoilValue, useSetRecoilState } from 'recoil';
// import { ResendAddressBookOff } from '../../../../../recoil/atoms/TrcMessageAtom';
//
// interface IUseTrContentMidProps {
//   tableData: any;
//   allChecked: boolean;
//   setAllChecked: React.Dispatch<React.SetStateAction<boolean>>;
//   setCheckedId: React.Dispatch<React.SetStateAction<string[]>>;
//   checkedId: string[];
// }
//
// export const useTrContentMid = ({
//   tableData,
//   allChecked,
//   setAllChecked,
//   setCheckedId,
//   checkedId,
// }: IUseTrContentMidProps) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const currentPage = parseInt(searchParams.get('page') as string, 10) || 1;
//   const searchDates = searchParams.get('searchDates')?.split(',') || '';
//   const searchSelectValue = searchParams.get('searchSelectValue');
//
//   // 재전송 끄기
//   const [reSendData, setReSendData] = useState([]);
//   const isResendAddressBook = useRecoilValue(ResendAddressBookOff);
//   const setReSendMsg = useSetRecoilState(ResendAddressBookOff);
//
//   const { confirmModal, warningModal } = useModal();
//
//   // 엑셀 다운로드 Mutation
//   const { isExcelLoading, mutationExcelDown } = useMutationTRCExcelDown({ searchDates, searchSelectValue });
//
//   // 장기보관함 저장 Mutation
//   const { mutationSaveMsgStorage, isSaveLoading } = useMutationSaveMsgStorage({
//     checkedId,
//     setCheckedId,
//     setAllChecked,
//   });
//   // 전송결과 삭제 Mutation
//   const { mutationDeleteMsg, isDeleteLoading } = useMutationDeleteMsgManagement({
//     queryKeyName: 'getMessageDataResultAll',
//     currentPage,
//     pageSize: 10,
//     apiFunc: async () => {
//       await deleteTransferMsg(checkedId);
//     },
//   });
//
//   const onSaveMsg = () => {
//     if (checkedId.length === 0) {
//       warningModal('장기보관', '장기보관하려는 메세지를 선택해주세요.', true);
//     } else {
//       confirmModal(
//         async () => {
//           mutationSaveMsgStorage();
//         },
//         '장기보관함',
//         '선택하신 메세지를 장기보관하시겠습니까?',
//         true,
//       );
//     }
//   };
//
//   // 삭제 함수
//   const onDelete = () => {
//     if (checkedId.length === 0) {
//       warningModal('전송결과 삭제', '전송결과 삭제하려는 메세지를 선택해주세요.', true);
//     } else {
//       confirmModal(
//         async () => {
//           mutationDeleteMsg();
//         },
//         '전송결과 삭제',
//         '선택하신 메세지를 삭제하시겠습니까?',
//         true,
//       );
//     }
//   };
//
//   const onExcel = () => {
//     mutationExcelDown();
//   };
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
//   // 체크한 리스트의 id값과 같은 값 추출하기
//   const checkResendList = (id: string[]) => {
//     const sameData = tableData.filter((el: any) => el.prepayPayNo === id[0]);
//     setReSendData(sameData);
//   };
//
//   // 메세지 재전송 창
//   const reSendMsg = () => {
//     checkResendList(checkedId);
//     if (checkedId.length > 1) {
//       warningModal('실패', '하나의 메세지만 재전송이 가능합니다.', true);
//       return;
//     }
//     if (checkedId.length === 0) {
//       warningModal('실패', '재전송할 메세지를 선택해 주세요.', true);
//       return;
//     }
//     setReSendMsg(true);
//   };
//
//   const onClickMoveDetailPage = (id: string) => {
//     navigate(
//       `/transferresultDetail?prepayPayNo=${id}&page=${currentPage}&searchSelectValue=${searchSelectValue}&searchDates=${searchDates}`,
//     );
//   };
//
//   // 테이블 헤드
//   const thead = ['구분', '전송일시', '전송내용', '받는사람', '전송상태'];
//
//   // 테이블 바디
//   const tbody = tableData?.map((el: any, index: number) => ({
//     id: el?.prepayPayNo ?? index,
//     imgData: el.imageData ?? '',
//     구분: el?.cmpUsrId ?? '',
//     전송일시: el?.sndDttm ? formatDateBase(el?.sndDttm) : '',
//     전송내용: {
//       data: el?.sndMsg ?? '',
//       func: onClickMoveDetailPage,
//     },
//     받는사람:
//       el?.rcvPhnId?.length > 10
//         ? `${formatPhoneNumber(el?.rcvPhnId)} ${el?.buddyName ? `(${el?.buddyName})` : ''} `
//         : el?.rcvPhnId?.length < 10
//         ? `${el?.rcvPhnId}`
//         : '',
//     전송상태: el?.rcvPhnId ? `${el?.successCount}/${el?.groupCount}` : '',
//   }));
//
//   // 버튼 리스트
//   const buttonList: IButtonList[] = [
//     { color: 'blue', func: onSaveMsg, text: '장기보관함' },
//     { color: '#000', func: reSendMsg, text: '재전송' },
//     { color: '#000', func: onExcel, text: '엑셀 다운' },
//     { color: '#a1a1a1', func: onDelete, text: '삭제' },
//   ];
//
//   return {
//     isExcelLoading,
//     buttonList,
//     handleCheckBox,
//     handleCheckBoxAll,
//     thead,
//     tbody,
//     isSaveLoading,
//     isDeleteLoading,
//     reSendData,
//     isResendAddressBook,
//   };
// };
