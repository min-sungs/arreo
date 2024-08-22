// import React from 'react';
// import ManagementSearch from '../../ManagementSearch';
// import BaseTable from '../../../../Organism/Table';
// import Paginations01Index from '../../../../common/paginations/Paginations01.index';
// import ManagementSubmit from '../../ManagementSubmit';
// import * as S from '../../styles/MessageManagementDetail.styles';
// import { ISTContentDetailMidComponentProps } from './STContentDetailMid.types';
// import { useStContentDetailMid } from '../../../../hooks/customs/messgeManagement/stContent/detail/useStContentDetailMid';
// import Loader from '../../../../common/Loader';
//
// const STContentDetailMidComponent = ({
//   setCurrentPage,
//   setSearchKeyword,
//   setSearchKeywordValue,
//   tableData,
//   totalPage,
//   datePicker,
//   sndMsg,
//   activePage,
//   setActivePage,
//   setStartPage,
//   startPage,
// }: ISTContentDetailMidComponentProps) => {
//   const { typeSelect, tbody, thead, buttonList, handlePageChange, isDeleteLoading, isUpdateLoading } =
//     useStContentDetailMid({
//       tableData,
//       datePicker,
//       sndMsg,
//       setCurrentPage,
//     });
//
//   return (
//     <>
//       {isUpdateLoading || isDeleteLoading ? (
//         <S.LoadingDiv>
//           <Loader />
//         </S.LoadingDiv>
//       ) : null}
//       <S.TableSearchBox>
//         <ManagementSearch
//           name1="검색조건타입"
//           typeOptionsProp={typeSelect}
//           setSearchKeywordValue={setSearchKeywordValue}
//           setSearchKeyword={setSearchKeyword}
//           setStartPage={setStartPage}
//           setActivePage={setActivePage}
//           setCurrentPage={setCurrentPage}
//         />
//       </S.TableSearchBox>
//       <S.TableWrapper>
//         <BaseTable type="line" thead={thead} tbody={tbody} />
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
// export default STContentDetailMidComponent;
