// import React from 'react';
// import * as S from './LTSContentDetailPage.styles';
// import Loader from '../../../../common/Loader';
// import LTSContentDetailTopComponent from '../../../../Molecules/MessageManagement/LTSContentDetail/top/LTSContentDetailTop.index';
// import LTSContentDetailMidComponent from '../../../../Molecules/MessageManagement/LTSContentDetail/mid/LTSContentDetailMid.index';
// import { useLtsContentDetail } from '../../../../hooks/customs/messgeManagement/ltsContent/detail/useLtsContentDetail';
// import LTSContentDetailBottomComponent from '../../../../Molecules/MessageManagement/LTSContentDetail/bottom/LTSContentDetailBottom.index';
//
// const LTSContentDetailPage = () => {
//   const {
//     setSearchKeyword,
//     setSearchKeywordValue,
//     setCurrentPage,
//     totalPage,
//     detailInfo,
//     isLoading,
//     tableData,
//     activePage,
//     setActivePage,
//     setStartPage,
//     startPage,
//     checkList,
//     setCheckList,
//     checkAll,
//     setCheckAll,
//   } = useLtsContentDetail();
//   console.log('LTS Detail tableData', tableData);
//   console.log('LTS Detail detailInfo', detailInfo);
//   return (
//     <>
//       <S.Wrapper>
//         {isLoading && (
//           <S.LoadingDiv>
//             <Loader />
//           </S.LoadingDiv>
//         )}
//         <LTSContentDetailTopComponent detailInfo={detailInfo} />
//         <LTSContentDetailMidComponent
//           activePage={activePage}
//           setActivePage={setActivePage}
//           setStartPage={setStartPage}
//           startPage={startPage}
//           setCurrentPage={setCurrentPage}
//           setSearchKeyword={setSearchKeyword}
//           setSearchKeywordValue={setSearchKeywordValue}
//           tableData={tableData}
//           totalPage={totalPage}
//           detailInfoMessage={detailInfo.sndMsg}
//           checkList={checkList}
//           setCheckList={setCheckList}
//           checkAll={checkAll}
//           setCheckAll={setCheckAll}
//         />
//       </S.Wrapper>
//       <LTSContentDetailBottomComponent />
//     </>
//   );
// };
//
// export default LTSContentDetailPage;
