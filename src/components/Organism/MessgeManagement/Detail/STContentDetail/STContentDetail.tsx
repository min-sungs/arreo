// /* eslint-disable no-nested-ternary */
// import React from 'react';
// import BaseGuide from '../../../../Atom/BaseGuide';
// import * as S from '../styles/MessageManagementDetail.styles';
// import Loader from '../../../../common/Loader';
// import 'dayjs/locale/ko';
// import STContentDetailTopComponent from '../../../../Molecules/MessageManagement/STContentDetail/top/STContentDetailTop.index';
// import STContentDetailMidComponent from '../../../../Molecules/MessageManagement/STContentDetail/mid/STContentDetailMid.index';
// import { useStContentDetail } from '../../../../hooks/customs/messgeManagement/stContent/detail/useStContentDetail';
//
// const STContentDetail = () => {
//   const {
//     setSearchKeyword,
//     setSearchKeywordValue,
//     setCurrentPage,
//     totalPage,
//     detailInfo,
//     isLoading,
//     datePicker,
//     sndMsg,
//     setDatePicker,
//     setSndMsg,
//     tableData,
//     startPage,
//     setStartPage,
//     activePage,
//     setActivePage,
//   } = useStContentDetail();
//   return (
//     <>
//       <S.Wrapper>
//         {isLoading && (
//           <S.LoadingDiv>
//             <Loader />
//           </S.LoadingDiv>
//         )}
//
//         <STContentDetailTopComponent
//           detailInfo={detailInfo}
//           datePicker={datePicker}
//           setDatePicker={setDatePicker}
//           setSndMsg={setSndMsg}
//           sndMsg={sndMsg}
//         />
//
//         <STContentDetailMidComponent
//           startPage={startPage}
//           setStartPage={setStartPage}
//           activePage={activePage}
//           setActivePage={setActivePage}
//           setCurrentPage={setCurrentPage}
//           setSearchKeyword={setSearchKeyword}
//           setSearchKeywordValue={setSearchKeywordValue}
//           tableData={tableData}
//           totalPage={totalPage}
//           datePicker={datePicker}
//           sndMsg={sndMsg}
//         />
//       </S.Wrapper>
//
//       <S.Footer>
//         <BaseGuide
//           text="전송결과는 전월과 당월만 검색이 가능하며, 이전 자료는 자동 삭제됩니다.
//           <br /> 전송결과 조회에서 원하는 문자를 메시지 장기보관함에 장기보관할 수 있습니다.
//           <br /> 보관함팝업 전송내용을 클릭하시면 상세내역을 확인할 수 있습니다.
//           <br />
//           전송 실패 시 SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.
//           <br />
//           이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과가 다소 늦게 반영될 수
//           있습니다.
//           <br /> (최종 전송결과는 SMS(문자전송) 최대 24시간, MMS(포토·1000자전송) 최대 72시간 소요됩니다.)
//           <br /> 전송결과 조회가 지연되지 않을 경우, 재전송 시도 전에 반드시 사용내역에서 캐시(cash)차감 여부를 확인하여
//           주시기 바랍니다."
//         />
//       </S.Footer>
//     </>
//   );
// };
//
// export default STContentDetail;
