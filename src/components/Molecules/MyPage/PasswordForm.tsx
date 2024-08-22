// import React, { useState, useEffect } from 'react';
// import { useSetRecoilState } from 'recoil';
// import styled from 'styled-components';
// import { changePwAtom } from '../../../recoil/atoms/myPageAtom';

// /** 비밀번호 변경 인풋 컴포넌트 스타일 */
// const PasswordWrap = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   gap: 1rem;
// `;
// const PasswordInput = styled.input`
//   padding: 0.5rem;
//   border: none;
//   background-color: #e9e9e9;
//   text-align: start;
//   font-size: 12px;
//   color: #000000;
//   font-weight: lighter;
//   ::placeholder {
//     color: #a1a1a1;
//   }
// `;
// const ViewPasswordWrap = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   gap: 0.5rem;
// `;
// const ViewPasswordInput = styled.input``;

// interface PasswordFormProps {
//   onChange?: (e: string) => void;
// }

// const PasswordForm: React.FC<PasswordFormProps | any> = ({ onChange }) => {
//   const [password, setPassword] = useState<string>(''); // 비밀번호 상태
//   const [showPassword, setShowPassword] = useState<boolean>(false); // 비밀번호 보이기/감추기 상태
//   const [capsLockEnabled, setCapsLockEnabled] = useState<boolean>(false); // Caps Lock 키 상태
//   const [passwordError, setPasswordError] = useState<string>(''); // 비밀번호 유효성 오류 메시지

//   // 비밀번호 변경 시 호출되는 이벤트 핸들러
//   const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newPassword = e.target.value;
//     setPassword(newPassword);
//     onChange(newPassword);

//     // 비밀번호 유효성 검사 (최소 8자, 최대 16자, 영문, 숫자, 선택적으로 특수 문자 포함)
//     if (
//       newPassword.length < 8 ||
//       newPassword.length > 16 ||
//       !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]?)[A-Za-z\d@$!%*?&]*$/.test(newPassword)
//     ) {
//       setPasswordError(
//         '비밀번호는 최소 8자에서 최대 16자까지의 영문, 숫자, 선택적으로 특수 문자를 포함할 수 있습니다.',
//       );
//     } else {
//       setPasswordError('');
//     }
//   };

//   // 비밀번호 보이기/감추기 옵션을 토글하는 이벤트 핸들러
//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   // 대문자 키 누름 이벤트를 감지
//   useEffect(() => {
//     const handleKeyPress = (e: KeyboardEvent) => {
//       if (e.getModifierState('CapsLock')) {
//         setCapsLockEnabled(true);
//       } else {
//         setCapsLockEnabled(false);
//       }
//     };

//     // 대문자 키 누름 이벤트를 감지하는 이벤트 리스너 등록
//     window.addEventListener('keydown', handleKeyPress);

//     // 컴포넌트 언마운트 시 이벤트 리스너 제거
//     return () => {
//       window.removeEventListener('keydown', handleKeyPress);
//     };
//   }, []);

//   return (
//     <PasswordWrap>
//       {/* <label htmlFor="password">비밀번호:</label> */}
//       <PasswordInput
//         type={showPassword ? 'text' : 'password'} // 비밀번호 보이기/감추기 상태에 따라 타입 변경
//         id="password"
//         value={password}
//         onChange={handlePasswordChange}
//         minLength={8}
//         maxLength={16}
//       />

//       <ViewPasswordWrap>
//         <ViewPasswordInput type="checkbox" id="showPassword" checked={showPassword} onChange={toggleShowPassword} />
//         <label htmlFor="showPassword">비밀번호 보이기</label>
//       </ViewPasswordWrap>

//       {/* Caps Lock 키가 활성화되면 경고 표시 */}
//       {capsLockEnabled && <p style={{ color: 'red' }}>Caps Lock 키가 활성화되어 있습니다.</p>}
//       {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
//     </PasswordWrap>
//   );
// };

// export default PasswordForm;
