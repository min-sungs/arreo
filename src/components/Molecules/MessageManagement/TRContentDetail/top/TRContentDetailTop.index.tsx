// import React from 'react';
// import * as S from '../../styles/MessageManagementDetail.styles';
// import { formatDateBase } from '../../../../../apis/utils/formats/dateFormatUtil';
// import { formatPhoneNumber } from '../../../../../apis/utils/formats/phoneNumberFormatUtil';
// import { ITRContentDetailTopProps } from './TRContentDetailTop.types';
//
// const TRContentDetailTopComponent = ({ detailInfo }: ITRContentDetailTopProps) => {
//   return (
//     <S.DetailInfoBox>
//       <>
//         <S.DetailInfoLeft>
//           {detailInfo?.imageData && (
//             <S.ContentImgWrapper>
//               <S.ContentImg src={`data:image/jpeg;base64,${detailInfo.imageData}`} alt="" />
//             </S.ContentImgWrapper>
//           )}
//           <S.ContentTextWrapper>
//             <S.ContentInfoTextArea name="" id="" cols={50} rows={15} value={detailInfo.sndMsg} />
//           </S.ContentTextWrapper>
//         </S.DetailInfoLeft>
//         <S.DetailInfoRight>
//           <S.RightSubWrapper>
//             <S.ContentInfoTopWrapper>
//               <S.Div>
//                 <S.ContentInfoTitle>전송일자</S.ContentInfoTitle>
//                 <S.ContentInfoText>{formatDateBase(detailInfo?.sndDttm)}</S.ContentInfoText>
//               </S.Div>
//               <S.Div>
//                 <S.ContentInfoTitle>회신번호</S.ContentInfoTitle>
//                 <S.ContentInfoText>{formatPhoneNumber(detailInfo?.callback)}</S.ContentInfoText>
//               </S.Div>
//             </S.ContentInfoTopWrapper>
//             <S.ContentInfoMidWrapper>
//               <S.ContentInfoTitle>사용금액</S.ContentInfoTitle>
//               <S.ContentInfoText>
//                 {detailInfo.usedCash ?? "0"} &copy; &nbsp;&nbsp;&nbsp;{detailInfo.usedPoint ?? "0"} &#8471;
//               </S.ContentInfoText>
//             </S.ContentInfoMidWrapper>
//             <S.ContentInfoBottomWrapper>
//               <S.ContentNumCaseInfoBox>
//                 <S.ContentInfoTitle className="number__case">전송 건수</S.ContentInfoTitle>
//                 <S.ContentInfoText>{detailInfo?.totalCount ?? "0"}건</S.ContentInfoText>
//               </S.ContentNumCaseInfoBox>
//               <S.ContentNumCaseInfoBox>
//                 <S.ContentInfoTitle className="number__case">성공 건수</S.ContentInfoTitle>
//                 <S.ContentInfoText>{detailInfo?.successCount ?? "0"}건</S.ContentInfoText>
//               </S.ContentNumCaseInfoBox>
//               <S.ContentNumCaseInfoBox>
//                 <S.ContentInfoTitle className="number__case">실패 건수</S.ContentInfoTitle>
//                 <S.ContentInfoText>{detailInfo?.failCnt ?? "0"}건</S.ContentInfoText>
//               </S.ContentNumCaseInfoBox>
//               <S.ContentNumCaseInfoBox>
//                 <S.ContentInfoTitle className="number__case">전송 중건</S.ContentInfoTitle>
//                 <S.ContentInfoText>{detailInfo?.sendingCount ?? "0"}건</S.ContentInfoText>
//               </S.ContentNumCaseInfoBox>
//             </S.ContentInfoBottomWrapper>
//           </S.RightSubWrapper>
//         </S.DetailInfoRight>
//       </>
//     </S.DetailInfoBox>
//   );
// };
//
// export default TRContentDetailTopComponent;
