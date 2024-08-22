// import React, {useEffect, useRef} from 'react';
// import * as S from '../../styles/MessageManagementDetail.styles';
// import ManagementSearch from '../../ManagementSearch';
// import Loader from '../../../../common/Loader';
// import BaseTable from '../../../../Organism/Table';
// import ManagementSubmit from '../../ManagementSubmit';
// import {ITRContentDetailMidProps} from './TRContentDetailMid.types';
// import {ISendStateArr, useTRContentDetailMid} from '../../../../hooks/customs/messgeManagement/trContent/detail/useTrContentDetailMid';
// import {v4 as uuidv4} from "uuid";
// import Pagination02Index from "../../../../common/paginations/Pagination02/Pagination02.index.tsx";
//
// const TRContentDetailMidComponent = ({
// setCurrentPage,
// setSearchKeyword,
// setSearchKeywordValue,
// tableData,
// totalElements,
// activePage,
// setActivePage,
// setStartPage,
// startPage,
// setPageSize,
// pageSize,
// setSelectSendState,
// selectSendState
// }: ITRContentDetailMidProps) => {
//   const {
//     typeSelect, tbody, thead, buttonList, handlePageChange,
//     isDeleteLoading, isSaveLoading, pageSizeArr, onSelectedPageSize, sendStateArr,
//     onSelectedSendStatus
//   } =
//     useTRContentDetailMid({
//       tableData,
//       setCurrentPage,
//       setPageSize,
//       setActivePage,
//       setStartPage,
//       setSelectSendState
//     });
//
//   return (
//     <>
//       {isSaveLoading || isDeleteLoading ? (
//         <S.LoadingDiv>
//           <Loader/>
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
//           queryKey="getResultDetail"
//         />
//         <S.SelectWrap>
//           <S.SelectText>전송 상태 : </S.SelectText>
//           <S.SelectBox onChange={onSelectedSendStatus}>
//             {sendStateArr.map((el: ISendStateArr) => (
//               <option value={el?.value} key={uuidv4()} selected={el.value === selectSendState}>{el?.name}</option>
//             ))}
//           </S.SelectBox>
//         </S.SelectWrap>
//         <S.SelectWrap>
//           <S.SelectText>리스트 표출 개수 : </S.SelectText>
//           <S.SelectBox onChange={onSelectedPageSize}>
//             {pageSizeArr.map((el: string) => (
//               <option value={el} key={uuidv4()} selected={el === String(pageSize)}>{el}</option>
//             ))}
//           </S.SelectBox>
//         </S.SelectWrap>
//       </S.TableSearchBox>
//       <S.TableWrapper>
//         <BaseTable type="line" thead={thead} tbody={tbody}/>
//         <S.TableFooter>
//           <S.PaginationWrapper>
//             <Pagination02Index
//               pageSize={pageSize}
//               dataCount={totalElements}
//               startPage={startPage}
//               setStartPage={setStartPage}
//               activePage={activePage}
//               setActivePage={setActivePage}
//               eventHook={handlePageChange}
//             />
//           </S.PaginationWrapper>
//           <S.SubmitWrap>
//             <ManagementSubmit buttonList={buttonList}/>
//           </S.SubmitWrap>
//         </S.TableFooter>
//       </S.TableWrapper>
//     </>
//   )
//     ;
// };
//
// export default TRContentDetailMidComponent;
