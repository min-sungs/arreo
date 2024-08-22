// /* eslint-disable no-nested-ternary */
// import React from 'react';
// import * as S from '../../styles/MessageManagementDetail.styles';
// import { formatPhoneNumber } from '../../../../../apis/utils/formats/phoneNumberFormatUtil';
// import dayjs, { Dayjs } from 'dayjs';
// import locale from 'antd/es/date-picker/locale/ko_KR';
// import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
// import generatePicker from 'antd/es/date-picker/generatePicker';
// import 'dayjs/locale/ko';
// import { calMsglen } from '../../../../../apis/utils/translateEncode';
// import { useStContentDetailTop } from '../../../../hooks/customs/messgeManagement/stContent/detail/useStContentDetailTop';
//
// const DatePicker = generatePicker<Dayjs>(dayjsGenerateConfig);
//
// interface ISTContentDetailTopComponentProps {
//   detailInfo: any;
//   sndMsg: string;
//   datePicker: string | undefined;
//   setSndMsg: React.Dispatch<React.SetStateAction<string>>;
//   setDatePicker: React.Dispatch<React.SetStateAction<string | undefined>>;
// }
// const STContentDetailTopComponent = ({
//   detailInfo,
//   datePicker,
//   setSndMsg,
//   sndMsg,
//   setDatePicker,
// }: ISTContentDetailTopComponentProps) => {
//   const { onChange, onChangeSndMsg } = useStContentDetailTop({
//     detailInfo,
//     setDatePicker,
//     setSndMsg,
//   });
//
//   return (
//     <S.DetailInfoBox>
//       <>
//         <S.DetailInfoLeft>
//           {detailInfo.imageData && (
//             <S.ContentImgWrapper>
//               <S.ContentImg src={`data:image/jpeg;base64,${detailInfo.imageData}`} alt="" />
//             </S.ContentImgWrapper>
//           )}
//           <S.ContentTextWrapper>
//             <S.ContentInfoTextArea name="" id="" cols={50} rows={15} value={sndMsg} onChange={onChangeSndMsg} />
//             <S.ContentInfoTextLength>
//               {calMsglen(sndMsg)} /{' '}
//               {detailInfo?.msgGb === 'SMS'
//                 ? '90'
//                 : detailInfo?.msgGb === 'LMS'
//                 ? '2000'
//                 : detailInfo?.msgGb === 'MMS'
//                 ? '2000'
//                 : ''}
//               byte
//             </S.ContentInfoTextLength>
//           </S.ContentTextWrapper>
//         </S.DetailInfoLeft>
//         <S.DetailInfoRight>
//           <S.RightSubWrapper>
//             <S.ContentInfoTopWrapper>
//               <S.Div>
//                 <S.ContentInfoTitle>전송구분</S.ContentInfoTitle>
//                 <S.ContentInfoText>
//                   {detailInfo?.msgGb === 'SMS'
//                     ? '문자전송'
//                     : detailInfo?.msgGb === 'LMS'
//                     ? '1000자 전송'
//                     : detailInfo?.msgGb === 'MMS'
//                     ? '포토전송'
//                     : ''}
//                   (예약)
//                 </S.ContentInfoText>
//               </S.Div>
//               <S.Div>
//                 <S.ContentInfoTitle>회신번호</S.ContentInfoTitle>
//                 <S.ContentInfoText>{formatPhoneNumber(detailInfo?.callback)}</S.ContentInfoText>
//               </S.Div>
//             </S.ContentInfoTopWrapper>
//             <S.ContentInfoTopWrapper>
//               <S.Div>
//                 <S.ContentInfoTitle>사용금액</S.ContentInfoTitle>
//                 <S.ContentInfoText>{detailInfo?.usedMoney}원</S.ContentInfoText>
//               </S.Div>
//               <S.Div>
//                 <S.ContentInfoTitle>받는사람</S.ContentInfoTitle>
//                 <S.ContentInfoText>{detailInfo?.totalCount}명</S.ContentInfoText>
//               </S.Div>
//             </S.ContentInfoTopWrapper>
//             <S.ContentInfoBottomWrapper>
//               <S.ContentNumCaseInfoBox>
//                 <S.Div>
//                   <S.ContentInfoTitle>예약일시</S.ContentInfoTitle>
//                   <DatePicker
//                     id="stDatePicker"
//                     locale={locale}
//                     value={datePicker ? dayjs(datePicker, 'YYYY-MM-DD HH:mm') : undefined}
//                     showTime={{ format: 'HH:mm' }}
//                     format="YYYY-MM-DD HH:mm"
//                     onChange={onChange}
//                     style={{ backgroundColor: 'transparent', outline: 'none' }}
//                   />
//                 </S.Div>
//               </S.ContentNumCaseInfoBox>
//             </S.ContentInfoBottomWrapper>
//           </S.RightSubWrapper>
//         </S.DetailInfoRight>
//       </>
//     </S.DetailInfoBox>
//   );
// };
//
// export default STContentDetailTopComponent;
