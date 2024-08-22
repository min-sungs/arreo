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

export const Say015ApplyServiceGuide = styled.div`
  width: 98.6%;
  margin-top: 73px;
  margin-left: 50px;
  margin-bottom: 100px;
  font-size: 11px;
  line-height: 25px;
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
  color: #000;
  font-size: 2rem;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 0.1vw;
`;
export const Say015ApplySubTitle = styled.p`
  color: #919091;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: normal;
`;

export const SignUpCustomButtonWrap = styled.div`
  width: 100%;
  text-align: right;
  margin-bottom: 0.84vw;
`;

export const SignUpLine = styled.div`
  width: 100%;
  border: 1px solid #8c8c8c;
`;

export const Say015ApplyInfo = styled.div`
  width: 95.6%;
  margin: 0 auto;
`;

export const Say015ApplyInput = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
`;

export const Label = styled.label`
  margin-left: 50px;
  line-height: 36px;
  width: 7.5vw;
  font-size: 1.5rem;
`;

export const AgreementButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10vw;
  box-sizing: border-box;
  width: 500px;
  margin: 0 auto;
  margin-bottom: 4vw;
`;

export const ValidationError = styled.span`
  font-size: 1rem;
  color: red;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 999;
  overflow: auto;
`;

export const ErrorWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
