// /* eslint-disable no-nested-ternary */
// import { useLocation, useNavigate } from 'react-router-dom';
// import { formatDateBase } from '../../../../../apis/utils/formats/dateFormatUtil';
// import { formatPhoneNumber } from '../../../../../apis/utils/formats/phoneNumberFormatUtil';
// import { ITableRow } from '../../../../Organism/Table';
// import React, { useState } from 'react';
// import _ from 'lodash';
// import { useModal } from '../../useModal';
// import { useMutationDeleteMsgManagement } from '../../../mutations/useMutationDeleteMsgManagement';
// import { IButtonList } from '../../../../Molecules/MessageManagement/ManagementSubmit';
// import { deleteMsgStorage } from '../../../../../apis/api/ltsContentApis';
// import { cmpUsrIdFormat } from '../../../../../apis/utils/formats/cmpUsrIdFormat';
// import { useMutationLTSCExcelDown } from '../../../mutations/useMutationLTSCExcelDown';
// import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
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
// export const useLTSContentMid = ({
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
//   const searchKeyword = searchParams.get('searchKeyword');
//   const searchSelectValue = searchParams.get('searchSelectValue');
//   const searchKeywordValue = searchParams.get('searchKeywordValue');
//
//   const { confirmModal, warningModal } = useModal();
//
//   // 재전송 켜기
//   const [reSendData, setReSendData] = useState([]);
//   const [isResendAddressBook, setIsResendAddressBook] = useRecoilState(ResendAddressBookOff);
//
//   // 엑셀 다운
//   const { isExcelLoading, mutationExcelDown } = useMutationLTSCExcelDown({
//     searchKeywordValue,
//     searchSelectValue,
//     searchKeyword,
//   });
//
//   // 삭제 API
//   const { mutationDeleteMsg, isDeleteLoading } = useMutationDeleteMsgManagement({
//     queryKeyName: 'getLongTimeStorageList',
//     currentPage,
//     pageSize: 10,
//     apiFunc: async () => {
//       await deleteMsgStorage(checkedId);
//     },
//   });
//
//   // 삭제 함수
//   const onDelete = () => {
//     if (checkedId.length === 0) {
//       warningModal('장기보관 메세지 삭제', '삭제하려는 메세지를 선택해주세요.', true);
//     } else {
//       confirmModal(
//         async () => {
//           mutationDeleteMsg();
//         },
//         '장기보관 메세지 삭제',
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
//   // 체크한 리스트의 id값과 같은 값 추출하기
//   const checkResendList = (id: string[]) => {
//     const sameData = tableData.filter((el: any) => el.msgGroupId === id[0]);
//     setReSendData(sameData);
//   };
//
//   // 장기보관함 메세지 재전송 창
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
//     setIsResendAddressBook(true);
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
//   const onClickMoveDetailPage = (id: string) => {
//     navigate(
//       `/longtimestorageDetail?msgGroupId=${id}&page=${currentPage}&searchSelectValue=${searchSelectValue}&searchKeyword=${searchKeyword}&searchKeywordValue=${searchKeywordValue}`,
//     );
//   };
//
//   // 테이블 구조 설정
//   const thead = ['구분', '전송일시', '전송내용', '받는사람'];
//   const tbody = tableData?.map((el: any, index: number) => ({
//     id: el?.msgGroupId ?? index,
//     imgData: el?.imageData ?? '',
//     // eslint-disable-next-line no-nested-ternary
//     구분: cmpUsrIdFormat({ cmpUsrId: el?.cmpUsrId }),
//     전송일시: el?.sndDttm ? formatDateBase(el?.sndDttm) : '',
//     전송내용: {
//       // data: el?.subject,
//       data: el?.sndMsg ?? '',
//       func: onClickMoveDetailPage,
//     },
//     받는사람:
//       el?.rcvPhnId?.length > 10
//         ? `${formatPhoneNumber(el?.rcvPhnId)} ${el?.buddyName ? `(${el?.buddyName})` : ''} `
//         : el?.rcvPhnId?.length < 10
//         ? `${el?.rcvPhnId}`
//         : '',
//   }));
//
//   // 버튼 리스트
//   const buttonList: IButtonList[] = [
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
//     isDeleteLoading,
//     reSendData,
//     isResendAddressBook,
//   };
// };
