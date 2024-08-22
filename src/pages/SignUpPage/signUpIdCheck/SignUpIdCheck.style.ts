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
  /* height: 1400px; */
  border-radius: 150px;
  background: #f5f5f5;
  position: relative;
  flex-shrink: 0;
  box-shadow: 0px 10px 15px 3px rgba(0, 0, 0, 0.13);
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

export const SignUpLine = styled.div`
  margin: 25px 0;
  width: 100%;
  border: 1px solid #8c8c8c;
`;

export const SignUpSubTitle = styled.p`
  color: #000;
  font-size: 12px;
  font-weight: 500;
  line-height: 25px;
`;

export const AgreementButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10vw;
  box-sizing: border-box;
  width: 500px;
  margin: 4vw auto;
`;

export const Say015ApplyServiceGuide = styled.div`
  width: 98.6%;
  margin-top: 73px;
  margin-left: 5px;
  margin-bottom: 100px;
  font-size: 11px;
  line-height: 25px;
`;

export const SignUpSubTitleWrap = styled.div`
  display: flex;
  line-height: 35px;
`;

export const IdCheckBigWrap = styled.div`
  width: 42%;
`;

export const IdCheckSmallWrap = styled.div`
  width: 15%;
  margin-left: 35px;
`;
