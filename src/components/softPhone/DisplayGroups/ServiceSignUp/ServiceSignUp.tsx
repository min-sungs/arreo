// import React from 'react';
// import AmountHelp from './AmountHelp/AmountHelp';
// import SelectNumber from './SelectNumber/SelectNumber';
// import * as S from './ServiceSignUp.styles';

// interface IServiceSignUp {
//   open015SubPage?: string | null;
//   setOpen015SubPage?: any;
//   initial015SubPage?: any;
//   say015SubHandle?: any;
//   authorityData?: any;
// }

// const ServiceSignUp = ({
//   open015SubPage,
//   setOpen015SubPage,
//   initial015SubPage,
//   say015SubHandle,
//   authorityData,
// }: IServiceSignUp) => {
//   return (
//     <S.ServiceSignUpWrap>
//       {/* 구독료 안내 */}
//       {open015SubPage === initial015SubPage.second && (
//         <AmountHelp
//           setOpen015SubPage={setOpen015SubPage}
//           initial015SubPage={initial015SubPage}
//           say015SubHandle={say015SubHandle}
//         />
//       )}

//       {/* 번호 선택 */}
//       {open015SubPage === initial015SubPage.third && (
//         <SelectNumber
//           setOpen015SubPage={setOpen015SubPage}
//           initial015SubPage={initial015SubPage}
//           say015SubHandle={say015SubHandle}
//           open015SubPage={open015SubPage}
//           authorityData={authorityData}
//         />
//       )}
//     </S.ServiceSignUpWrap>
//   );
// };

// export default ServiceSignUp;
