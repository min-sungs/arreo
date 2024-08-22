import React from 'react';
import { Say015ApplyTitle } from '../../../pages/SignUpPage/signUpRecovery/SignUpRecovery.style';

const RecoveryTitle = ({
  number,
  isType,
  isSame,
  isCertifyCate,
}: {
  number: string;
  isType: string;
  isSame: boolean;
  isCertifyCate: boolean;
}) => {
  switch (isType) {
    case 'Find':
      switch (isSame) {
        case true:
          return (
            <Say015ApplyTitle>
              {number?.replace(/(\d{7})\d{4}(\D*)/, (match: any, group1: string, group2: string) => {
                const lastFourDigits = group1; // 숫자 중 마지막 4자리
                const remainingChars = group2; // 숫자 이후의 문자열

                return `${lastFourDigits}****${remainingChars}`; // 마지막 4자리 외의 숫자를 ****로 변경
              })}
              의 아이디를 <span style={{ color: '#0D42E5' }}>복원요청</span>
              하셨습니다.
              <br />
              사용 할 비밀번호를 입력해주세요.
            </Say015ApplyTitle>
          );

        case false:
          return (
            <Say015ApplyTitle>
              {number?.replace(/(\d{7})\d{4}(\D*)/, (match: any, group1: string, group2: string) => {
                const lastFourDigits = group1; // 숫자 중 마지막 4자리
                const remainingChars = group2; // 숫자 이후의 문자열

                return `${lastFourDigits}****${remainingChars}`; // 마지막 4자리 외의 숫자를 ****로 변경
              })}
              의 아이디를 <span style={{ color: '#0D42E5' }}>복원요청</span>
              하셨습니다.
              <br />
              기존 번호와 동일하지 않으시다면 번호 인증 후에 비밀번호를 재설정 하실 수 있습니다.
            </Say015ApplyTitle>
          );
        default:
          // eslint-disable-next-line consistent-return
          return null;
      }

    case 'Recovery':
      switch (isSame) {
        case true:
          return (
            <Say015ApplyTitle>
              {number?.replace(/(\d{7})\d{4}(\D*)/, (match: any, group1: string, group2: string) => {
                const lastFourDigits = group1; // 숫자 중 마지막 4자리
                const remainingChars = group2; // 숫자 이후의 문자열

                return `${lastFourDigits}****${remainingChars}`; // 마지막 4자리 외의 숫자를 ****로 변경
              })}
              의 휴면아이디를 <span style={{ color: '#0D42E5' }}>복원요청</span>
              하셨습니다.
              <br />
              사용 할 비밀번호를 입력해주세요.
            </Say015ApplyTitle>
          );

        case false:
          return (
            <Say015ApplyTitle>
              {number?.replace(/(\d{7})\d{4}(\D*)/, (match: any, group1: string, group2: string) => {
                const lastFourDigits = group1; // 숫자 중 마지막 4자리
                const remainingChars = group2; // 숫자 이후의 문자열

                return `${lastFourDigits}****${remainingChars}`; // 마지막 4자리 외의 숫자를 ****로 변경
              })}
              의 휴면아이디를 <span style={{ color: '#0D42E5' }}>복원요청</span>
              하셨습니다.
              <br />
              기존 번호와 동일하지 않으시다면 번호 인증 후에 비밀번호를 재설정 하실 수 있습니다.
            </Say015ApplyTitle>
          );
        default:
          // eslint-disable-next-line consistent-return
          return null;
      }

    default:
      return <> null</>;
  }
};

export default RecoveryTitle;
