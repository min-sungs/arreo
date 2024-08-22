// import React from "react";
// import * as S from '../../styles/sendresult/SendResult.styles.ts'
//
// const SendResultLeftDataView = () => {
//     return (
//         <S.SendResultLeftDataView>
//             {/* 메시지 데이터 출력 */}
//             {/* dataContent */}
//             <div>
//                 <div className="messageContent">
//                     <img src='/img/sendresult/cat.png' alt="sendResultImage" />
//                     <p>
//                         SMS(문자전송)는 24시간, MMS(1000자, 포토전송)는 72시간 내에 재충전 됩니다.
//                         이동통신사 또는 수신자의 사정으로 인하여 메시지 발신이 지연될 경우, 최종 전송결과
//                         가 다소 늦게 반영될 수 있습니다.(최종 전송결과는 SMS(문자전송) 최대 24시간,
//                         MMS(포토·1000자전송) 최대 72시간 소요됩니다.)
//                     </p>
//                 </div>
//                 {/* MMS Byte */}
//                 <div className="byteWrap">
//                     {/* Byte */}
//                     <span>MMS 0Byte</span>
//                 </div>
//             </div>
//             {/* 전송 데이터 출력 */}
//             <dl>
//                 <div>
//                     <dt>전송 일자</dt>
//                     <dd>2024.01.31 13:23</dd>
//                 </div>
//                 <div>
//                     <dt>회신 번호</dt>
//                     <dd>010-4998-7052</dd>
//                 </div>
//                 <div>
//                     <dt>전송 건수</dt>
//                     <dd>3,258</dd>
//                 </div>
//                 <div>
//                     <dt>성공 건수</dt>
//                     <dd>3,258</dd>
//                 </div>
//                 <div>
//                     <dt>실패 건수</dt>
//                     <dd>0</dd>
//                 </div>
//                 <div>
//                     <dt>전송중 건</dt>
//                     <dd>0</dd>
//                 </div>
//                 <div>
//                     <dt>사용 금액</dt>
//                     <dd>
//                         <span>232 C</span>
//                         <span>21 P</span>
//                     </dd>
//                 </div>
//             </dl>
//         </S.SendResultLeftDataView>
//     )
// }
//
// export default SendResultLeftDataView;