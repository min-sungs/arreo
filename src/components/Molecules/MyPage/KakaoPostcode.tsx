/**
 * 카카오 모듈화 코드
 * 리액트로 나온 라이브러리가 있어서 대채
 */

// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';

// /** 카카오 주소 API 컴포넌트 스타일 */
// const KakaoPostContainer = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   gap: 2rem;
// `;

// const PostInfoInputWrap = styled.div`
//   width: 25%;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   gap: 0.5rem;
// `;

// const PostInfoFirstSubmit = styled.div``;

// const PostInfoSecondSubmit = styled.div``;

// const FirstInput = styled.input`
//   width: 30%;
//   padding: 0.5rem;
//   border: none;
//   background-color: #e9e9e9;
//   text-align: start;
//   font-size: 12px;
//   color: #000000;
//   font-weight: lighter;
// `;

// const SecondInput = styled.input`
//   width: 100%;
//   padding: 0.5rem;
//   border: none;
//   background-color: #e9e9e9;
//   text-align: start;
//   font-size: 12px;
//   color: #000000;
//   font-weight: lighter;
// `;

// const SearchAddressButton = styled.button`
//   padding: 0.5rem;
//   border: none;
//   background: transparent;
//   background-color: #8c8c8c;
//   color: #ffffff;
//   font-size: 12px;
//   &:hover {
//     cursor: pointer;
//     background-color: #adadad;
//   }
// `;

// declare global {
//   interface Window {
//     daum?: any;
//   }
// }

// interface kakaoPostcodeProps {
//   address?: string;
//   postCode?: string;
//   setFirstValueAddress?: any;
//   setSecondValueAddress?: any;
//   onChange?: (e: string) => void;
//   firstValueAddress?: string;
//   secondValueAddress?: string;
//   register?: any;
//   nameRegister: string;
//   postRegister: string;
// }

// const KakaoPostcode: React.FC<kakaoPostcodeProps> = ({
//   address,
//   postCode,
//   setFirstValueAddress,
//   setSecondValueAddress,
//   onChange,
//   firstValueAddress,
//   secondValueAddress,
//   register,
//   nameRegister,
//   postRegister,
// }) => {
//   console.log(address, postCode);
//   const [isInitialRender, setIsInitialRender] = useState(true); // 초기 렌더링시 반응을 막기 위한 상태

//   const handleFirstAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (onChange) {
//       onChange(e.target.value);
//     }
//   };

//   const handleSecondAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSecondValueAddress(e.target.value);
//   };

//   const handleOpenPostcode = () => {
//     if (window.daum && window.daum.Postcode) {
//       new window.daum.Postcode({
//         oncomplete: (data: any) => {
//           // 여기에서 우편번호 검색 결과(data)를 처리합니다.
//           setFirstValueAddress(data.zonecode);
//           setSecondValueAddress(data.address);
//           console.log(data);
//         },
//       }).open();
//     } else {
//       console.error('카카오 우편번호 API 스크립트를 로드할 수 없습니다.');
//     }
//   };

//   useEffect(() => {
//     // 카카오 우편번호 API 스크립트를 동적으로 로드
//     const script = document.createElement('script');
//     script.src = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
//     script.async = true;
//     document.body.appendChild(script);

//     script.onload = () => {
//       // API 스크립트가 로드되면 호출할 함수 설정
//       if (!isInitialRender) {
//         handleOpenPostcode(); // 페이지 로드 후 바로 우편번호 검색 창 열기
//       } else {
//         console.error('카카오 우편번호 API 스크립트를 로드할 수 없습니다.');
//       }
//     };
//   }, [isInitialRender]);

//   return (
//     <KakaoPostContainer>
//       <PostInfoInputWrap>
//         <PostInfoFirstSubmit>
//           {/* <label htmlFor="firstinput"></label> */}
//           <FirstInput
//             id="firstinput"
//             type="text"
//             // value={firstValueAddress}
//             onChange={handleFirstAddressChange}
//             readOnly
//             {...register(nameRegister, {})}
//           />
//         </PostInfoFirstSubmit>
//         <PostInfoSecondSubmit>
//           {/* <label htmlFor="secondinput"></label> */}
//           <SecondInput
//             id="secondinput"
//             type="text"
//             // value={secondValueAddress}
//             onChange={handleSecondAddressChange}
//             readOnly
//             {...register(postRegister, {})}
//           />
//         </PostInfoSecondSubmit>
//       </PostInfoInputWrap>
//       <SearchAddressButton type="button" onClick={handleOpenPostcode}>
//         검색
//       </SearchAddressButton>
//     </KakaoPostContainer>
//   );
// };

// export default KakaoPostcode;
