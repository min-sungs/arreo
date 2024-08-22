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
  width: 1100px;
  margin: 4.3vw 0;
  /* height: 1400px; */
  border-radius: 180px;
  background: #f5f5f5;
  position: relative;
  flex-shrink: 0;
  /* box-shadow: 0px 5px 15px 3px rgba(0, 0, 0, 0.13); */
  padding: 0 8.86vw;
  box-sizing: border-box;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 90px;
    left: 50%;
    top: 2%;
    translate: -50% -50%;
    background-color: #f5f5f5;
    z-index: 999;

    -webkit-filter: blur(2px);
    -moz-filter: blur(2px);
    -o-filter: blur(2px);
    -ms-filter: blur(2px);
    filter: blur(2px);
  }

  &::before {
    content: 'ARREO 회원가입';
    position: absolute;
    left: 50%;
    top: 0%;
    translate: -50% -50%;
    color: #000;
    text-align: center;
    font-family: 'Inter';
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 582;
    line-height: normal;
    z-index: 1000;
  }
`;

export const TermsHeading = styled.p`
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0 auto 0.9vw auto;
`;
export const TermsSubHeading = styled.p`
  width: 20vw;
  color: #919091;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 1.83vw;
`;

export const TermLine = styled.hr`
  width: 100%;
  margin-bottom: 1.36vw;
`;

export const AgreementWrap = styled.ul`
  margin-bottom: 4.5vw;
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
