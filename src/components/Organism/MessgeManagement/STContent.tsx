// import React from 'react';
//
// import ManagementSearch from '../../Molecules/MessageManagement/ManagementSearch';
// import ManagementSubmit from '../../Molecules/MessageManagement/ManagementSubmit';
// import * as S from './styles/MessageManagement.styles';
// import BaseTable from '../Table';
// import BaseGuide from '../../Atom/BaseGuide';
// import Paginations01Index from '../../common/paginations/Paginations01.index';
// import Loader from '../../common/Loader';
// import { useStContent } from '../../hooks/customs/messgeManagement/stContent/useStcContent';
//
// const STContent = () => {
//   const {
//     messageSelect,
//     thead,
//     tbody,
//     handleCheckBox,
//     handleCheckBoxAll,
//     allChecked,
//     checkedId,
//     activePage,
//     setActivePage,
//     startPage,
//     setStartPage,
//     totalPage,
//     handlePageChange,
//     isLoading,
//     buttonList,
//     setSearchCondition,
//     setCurrentPage,
//     setKeyword,
//   } = useStContent();
//   return (
//     <>
//       <S.Wrapper>
//         {isLoading && (
//           <S.LoadingDiv>
//             <Loader />
//           </S.LoadingDiv>
//         )}
//         <S.TableSearchBox>
//           <ManagementSearch
//             name1="예약전송구분"
//             typeOptionsProp={messageSelect}
//             setSearchKeywordValue={setSearchCondition}
//             setSearchKeyword={setKeyword}
//             setStartPage={setStartPage}
//             setActivePage={setActivePage}
//             setCurrentPage={setCurrentPage}
//             type="STC"
//           />
//         </S.TableSearchBox>
//         <S.TableWrapper>
//           <BaseTable
//             type="line"
//             option={{ checkbox: true }}
//             thead={thead}
//             tbody={tbody}
//             handleCheckBox={handleCheckBox}
//             handleCheckBoxAll={handleCheckBoxAll}
//             allChecked={allChecked}
//             checkedId={checkedId}
//             onclick={() => {}}
//           />
//           <S.TableFooter>
//             <S.PaginationWrapper>
//               <Paginations01Index
//                 dataCount={totalPage}
//                 startPage={startPage}
//                 setStartPage={setStartPage}
//                 activePage={activePage}
//                 setActivePage={setActivePage}
//                 eventHook={handlePageChange}
//               />
//             </S.PaginationWrapper>
//             <S.SubmitWrap>
//               <ManagementSubmit buttonList={buttonList} />
//             </S.SubmitWrap>
//           </S.TableFooter>
//         </S.TableWrapper>
//       </S.Wrapper>
//       <S.Footer>
//         <BaseGuide
//           text="예약내용을 클릭하시면 예약내용, 예약일자를 수정할 수 있습니다.<br/>
//           예약내역 수정 및 예약취소는 예약한 시간 10분 전까지만 가능합니다. "
//         />
//       </S.Footer>
//     </>
//   );
// };
//
// export default STContent;
