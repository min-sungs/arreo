// import React from 'react';
//
// import { useTrcContentDetail } from '../../../../hooks/customs/messgeManagement/trContent/detail/useTrContentDetailIndex';
// import * as S from './TRContentDetailPage.styles';
// import TRContentDetailTopComponent from '../../../../Molecules/MessageManagement/TRContentDetail/top/TRContentDetailTop.index';
// import TRContentDetailMidComponent from '../../../../Molecules/MessageManagement/TRContentDetail/mid/TRContentDetailMid.index';
// import TRContentDetailBottomComponent from '../../../../Molecules/MessageManagement/TRContentDetail/bottom/TRContentDetail.bottom';
// import Loader from '../../../../common/Loader';
//
// const TRContentDetailPage = () => {
//
//   const {
//     isLoading,
//     detailInfo,
//     setSearchKeywordValue,
//     setSearchKeyword,
//     setCurrentPage,
//     tableData,
//     totalElements,
//     startPage,
//     setStartPage,
//     activePage,
//     setActivePage,
//     setPageSize,
//     pageSize,
//     setSelectSendState,
//     selectSendState
//   } = useTrcContentDetail();
//
//   return (
//     <>
//       <S.Wrapper>
//         {isLoading && (
//           <S.LoadingDiv>
//             <Loader />
//           </S.LoadingDiv>
//         )}
//         <TRContentDetailTopComponent detailInfo={detailInfo} />
//         <TRContentDetailMidComponent
//           startPage={startPage}
//           setStartPage={setStartPage}
//           activePage={activePage}
//           setActivePage={setActivePage}
//           totalElements={totalElements}
//           tableData={tableData}
//           setCurrentPage={setCurrentPage}
//           setSearchKeyword={setSearchKeyword}
//           setSearchKeywordValue={setSearchKeywordValue}
//           setPageSize={setPageSize}
//           pageSize={pageSize}
//           selectSendState={selectSendState}
//           setSelectSendState={setSelectSendState}
//         />
//       </S.Wrapper>
//       <TRContentDetailBottomComponent />
//     </>
//   );
// };
//
// export default TRContentDetailPage;
