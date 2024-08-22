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
  width: 56.3vw;
  margin: 4.3vw 0;
  /* height: 1400px; */
  border-radius: 180px;
  background: #f5f5f5;
  position: relative;
  flex-shrink: 0;
  box-shadow: 0px 5px 15px 3px rgba(0, 0, 0, 0.13);
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
    font-size: 3.5rem;
    font-style: normal;
    font-weight: 582;
    line-height: normal;
  }
`;

export const SignUpTitle = styled.h3`
  color: #0D42E5;
  font-family: Inter;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const SignUpSubTitle = styled.p`
  color: #000;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const SignUpResultWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 5.5rem 0 2rem 0;
`;
export const SignUpResultId = styled.div``;
export const SignUpResult015 = styled.div``;
export const SignUpResultSecretary = styled.div``;
export const SignUpMessageAgree = styled.div`
  text-align: center;
  color: #6d6c6d;
  font-size: 1rem;
  margin-bottom: 13rem;
`;
export const ArreoContentWrap = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
export const ArreoContentCard = styled.div`
  width: 17%;
  padding: 1.4rem 2rem;
  box-sizing: border-box;
  background: #F6F6F8;
  box-shadow: 0px 7px 7px 1.53px #e9e9e9;
  margin-bottom: 7rem;
`;
export const ArreoContentCardTitle = styled.div`
  color: #0935bc;
  text-align: center;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 3rem;
`;
export const ArreoContentCardText = styled.div`
  color: #000;
  text-align: center;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
