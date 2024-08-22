import styled from 'styled-components';

export const SignUpContainer = styled.div`
  background: #f5f5f5;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-height: 750px) {
    position: relative;
    top: 4rem;
  }
`;

export const SignUpFormWrapper = styled.div`
  width: 57.3vw;
  margin: 4.3vw 0;
  height: 711px;
  border-radius: 150px;
  background: #f5f5f5;
  position: relative;

  /* box-shadow: inset 0px -10px 15px 3px rgba(0, 0, 0, 0.13); */
  padding: 0 8.86vw;
  box-sizing: border-box;

  &::before {
    content: 'ARREO 회원가입';
    position: absolute;
    left: 50%;
    top: 0%;
    translate: -50% -50%;
    color: #000;
    text-align: center;
    font-family: 'Inter';
    font-size: 25px;
    font-style: normal;
    font-weight: 582;
    line-height: normal;
  }
`;

export const Say015ApplyTitle = styled.h2`
  text-align: center;
  margin-top: 115px;
  color: #000;
  font-size: 2rem;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 0.1vw;
`;

// 인증 번호
export const CertifyTitle = styled.h2`
  font-size: 1.5rem;
  display: inline-block;
`;

export const CertifyWrap = styled.div`
  margin-bottom: 50px;
`;

export const CertifyInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const CertifyTimer = styled.time`
  font-size: 1.3rem;
  color: #f52323;
`;

// 인증 번호

export const SignUpLine = styled.div`
  margin: 25px 0;
  width: 100%;
  border: 1px solid #8c8c8c;
`;

export const RecoveryPwWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const RecoveryPwInner = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 50%;
`;

export const AgreementButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10vw;
  box-sizing: border-box;
  margin: 2vw auto;
`;

export const ValidationError = styled.p`
  font-size: 1.4rem;
  color: #ff6fe9;
`;

export const ValidationMessage = styled.p`
  font-size: 1.4rem;
  color: gray;
  margin-bottom: 10px;
`;

export const ValidationSuccess = styled.p`
  font-size: 1.4rem;
  color: #2bff00;
`;
