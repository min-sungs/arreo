// import React, { useState } from 'react';
// import ManagementSearch from '../../ManagementSearch';
// import BaseTable, { ITableRow } from '../../../../Organism/Table';
// import Paginations01Index from '../../../../common/paginations/Paginations01.index';
// import ManagementSubmit from '../../ManagementSubmit';
// import * as S from '../../styles/MessageManagementDetail.styles';
// import { ILTSContentDetailMidComponentProps } from './LTSContentDetailMid.types';
// import { useLtsContentDetailMid } from '../../../../hooks/customs/messgeManagement/ltsContent/detail/useLtsContentDetailMid';
// import Loader from '../../../../common/Loader';
// import ResendAddressBook from '../../../../Organism/ResendAddressBook/ResendAddressBook';
//
// const LTSContentDetailMidComponent = ({
//   setCurrentPage,
//   setSearchKeyword,
//   setSearchKeywordValue,
//   tableData,
//   totalPage, // handlePageChange,
//   activePage,
//   setActivePage,
//   setStartPage,
//   startPage,
//   detailInfoMessage,
//   checkList,
//   setCheckList,
//   checkAll,
//   setCheckAll,
// }: ILTSContentDetailMidComponentProps) => {
//   const {
//     typeSelect,
//     tbody,
//     thead,
//     buttonList,
//     handlePageChange,
//     isDeleteLoading,
//     handleDetailCheckAll,
//     handleDetailCheck,
//     isResendAddressBook,
//     resendDetailData,
//   } = useLtsContentDetailMid({
//     tableData,
//     setCurrentPage,
//     detailInfoMessage,
//     setCheckList,
//     setCheckAll,
//     checkAll,
//     checkList,
//   });
//
//   // 체크박스 단일 선택
//   console.log('detailInfoMessage', detailInfoMessage);
//   console.log('checkList', checkList);
//   console.log('checkAll', checkAll);
//   console.log('checkList', checkList);
//   console.log('재전송할 대상 리스트', resendDetailData);
//   return (
//     <>
//       {isResendAddressBook && (
//         <ResendAddressBook
//           type="detail"
//           detailInfoMessage={detailInfoMessage}
//           resendDetailData={resendDetailData}
//           setCheckList={setCheckList}
//           setCheckAll={setCheckAll}
//         />
//       )}
//       {isDeleteLoading && (
//         <S.LoadingDiv>
//           <Loader />
//         </S.LoadingDiv>
//       )}
//       <S.TableSearchBox>
//         <ManagementSearch
//           name1="검색조건타입"
//           typeOptionsProp={typeSelect}
//           setSearchKeywordValue={setSearchKeywordValue}
//           setSearchKeyword={setSearchKeyword}
//           setStartPage={setStartPage}
//           setActivePage={setActivePage}
//           setCurrentPage={setCurrentPage}
//           queryKey="getResultLtsDetail"
//         />
//       </S.TableSearchBox>
//       <S.TableWrapper>
//         <BaseTable
//           type="line"
//           option={{ checkbox: true }}
//           handleCheckBoxAll={handleDetailCheckAll}
//           handleCheckBox={handleDetailCheck}
//           thead={thead}
//           tbody={tbody}
//           checkedId={checkList}
//           allChecked={checkAll}
//         />
//         <S.TableFooter>
//           <S.PaginationWrapper>
//             <Paginations01Index
//               dataCount={totalPage}
//               startPage={startPage}
//               setStartPage={setStartPage}
//               activePage={activePage}
//               setActivePage={setActivePage}
//               eventHook={handlePageChange}
//             />
//           </S.PaginationWrapper>
//           <S.SubmitWrap>
//             <ManagementSubmit buttonList={buttonList} />
//           </S.SubmitWrap>
//         </S.TableFooter>
//       </S.TableWrapper>
//     </>
//   );
// };
//
// export default LTSContentDetailMidComponent;
