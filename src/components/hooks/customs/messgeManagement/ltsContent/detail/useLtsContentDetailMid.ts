// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useModal } from '../../../useModal';
// import { useLtsContentDetail } from './useLtsContentDetail';
// import { formatPhoneNumber } from '../../../../../../apis/utils/formats/phoneNumberFormatUtil';
// import { IButtonList } from '../../../../../Molecules/MessageManagement/ManagementSubmit';
// import { useMutationDeleteLtsMsgManagementDetail } from '../../../../mutations/useMutationDeleteLtsMsgManagementDetail';
// import { ResendAddressBookOff } from '../../../../../../recoil/atoms/TrcMessageAtom';
// import { useRecoilState } from 'recoil';
// import { ITableRow } from '../../../../../Organism/Table';
// import _ from 'lodash';
//
// export interface IUseLtsContentDetailMidProps {
//   tableData: any;
//   setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
//   detailInfoMessage: string;
//   setCheckList: React.Dispatch<React.SetStateAction<string[]>>;
//   setCheckAll: React.Dispatch<React.SetStateAction<boolean>>;
//   checkList: string[];
//   checkAll: boolean;
// }
//
// export interface ITableDetailCheck {
//   buddyNm: string;
//   cmpMsgId: string;
//   groupNm: string;
//   phoneNumber: string;
// }
//
// export const useLtsContentDetailMid = ({
//   setCurrentPage,
//   tableData,
//   setCheckList,
//   setCheckAll,
//   checkList,
//   checkAll,
//   detailInfoMessage,
// }: IUseLtsContentDetailMidProps) => {
//   const { confirmModal, warningModal, successModal } = useModal();
//   const [pageNumberState, setPageNumberState] = useState<number>(1);
//   const [resendDetailData, setResendDetailData] = useState<ITableDetailCheck[]>();
//   const navigate = useNavigate();
//
//   const { initialPage, initialSearchKeyword, initialSearchSelectValue, initialSearchKeywordValue, msgGroupId } =
//     useLtsContentDetail();
//
//   // 장기보관함 삭제 Mutation
//   const { mutationDeleteLtsMsgDetail, isDeleteLoading } = useMutationDeleteLtsMsgManagementDetail();
//
//   // 페이징네이션 동작 함수
//   const handlePageChange = (pageNumber: number) => {
//     console.log('LTS Detail Mid pageNumber ', pageNumber);
//     setPageNumberState(pageNumber);
//     setCurrentPage(pageNumber);
//   };
//
//   // 재전송
//   const [isResendAddressBook, setIsResendAddressBook] = useRecoilState(ResendAddressBookOff);
//
//   // 삭제 함수
//   const onDelete = () => {
//     confirmModal(
//       async () => {
//         try {
//           await mutationDeleteLtsMsgDetail([msgGroupId]);
//           successModal(
//             '장기보관함 삭제',
//             '메세지가 성공적으로</br> 삭제가되었습니다.',
//             true,
//             `/longtimestorage?page=${initialPage}?&searchSelectValue=${initialSearchSelectValue}&searchKeyword=${initialSearchKeyword}&searchKeywordValue=${initialSearchKeywordValue}`,
//           );
//         } catch (error) {
//           warningModal('장기보관함 삭제', '장기보관함 삭제가 실패했습니다.', true);
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
//     navigate(
//       `/longtimestorage?page=${initialPage}?&searchSelectValue=${initialSearchSelectValue}&searchKeyword=${initialSearchKeyword}&searchKeywordValue=${initialSearchKeywordValue}`,
//     );
//   };
//
//   // 단일 체크박스 선택시 해당 리스트 id값 추출
//   const handleDetailCheck = (element: ITableRow[], id: string) => {
//     if (checkList.includes(id)) {
//       setCheckList(checkList.filter((e) => e !== id));
//       setCheckAll(false);
//     } else {
//       const updateCheckList = _.sortBy([...checkList, id]);
//
//       console.log('updateCheckList', updateCheckList);
//       setCheckList(updateCheckList);
//       if (_.isEqual(updateCheckList, _.sortBy(element.map((e) => e.id)))) setCheckAll(true);
//     }
//   };
//
//   // 체크박스 전체선택
//   const handleDetailCheckAll = (el: ITableRow[]) => {
//     if (checkAll) {
//       setCheckAll(false);
//       setCheckList([]);
//     } else {
//       setCheckAll(true);
//       setCheckList(el.map((e: any) => e.id));
//     }
//   };
//   // 재전송할 리스트 추출
//   const extractCheckNum = (list: ITableDetailCheck[], check: string[]) => {
//     console.log('LTS Detail check', check);
//     console.log('LTS Detail list', list);
//
//     const sameData = list.filter((obj: ITableDetailCheck) => check.includes(obj.cmpMsgId));
//     if (sameData) setResendDetailData(sameData);
//   };
//
//   // 재전송 함수
//   const onClickReSendMsg = () => {
//     if (checkList.length > 0) {
//       setIsResendAddressBook(true);
//       extractCheckNum(tableData, checkList);
//     } else {
//       warningModal('경고', '재전송하실 대상을 선택해주세요', true);
//     }
//   };
//
//   // 테이블 구조 설정
//   const thead = ['번호', '받는사람'];
//
//   const tbody = tableData?.map((el: any, index: number) => {
//     // console.log(el);
//     // 리스트 번호
//     const firstItemIndex = pageNumberState * 10 - 10;
//     return {
//       id: el.cmpMsgId ?? index,
//       번호: firstItemIndex + index + 1,
//       받는사람: (el?.phoneNumber ? formatPhoneNumber(el?.phoneNumber) : '') + (el?.buddyNm ? ` (${el?.buddyNm})` : ''),
//     };
//   });
//
//   const typeSelect = [
//     {
//       value: 'number',
//       label: '휴대폰번호',
//     },
//     // {
//     //   value: 'name',
//     //   label: '이름',
//     // },
//   ];
//
//   // 버튼 리스트
//   const buttonList: IButtonList[] = [
//     // { color: '#000', func: onClickReSendMsg, text: '재전송' },
//     { color: '#000', func: onBack, text: '뒤로가기' },
//     { color: '#a1a1a1', func: onDelete, text: '삭제' },
//   ];
//
//   return {
//     typeSelect,
//     thead,
//     tbody,
//     buttonList,
//     handlePageChange,
//     isDeleteLoading,
//     isResendAddressBook,
//     handleDetailCheck,
//     handleDetailCheckAll,
//     resendDetailData,
//   };
// };
