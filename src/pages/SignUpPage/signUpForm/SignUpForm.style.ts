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

export const SignUpSubTitle = styled.p`
  color: #000;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 2vw;
`;

export const TermLine = styled.hr`
  width: 100%;
`;
export const SignUpInputForm = styled.div`
  width: 100%;
  padding: 0 2vw;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 50px 50px 50px 50px 50px;
  align-items: center;
  margin: 1.57vw 0 1.7vw 0;
`;

export const SignUpPhoneInputWrap = styled.div`
  width: 15.4vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 0.2vw;
`;

export const SignUpInputSpan = styled.span`
  font-size: 2.5rem;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 1.5rem;
`;

export const SignUpEmailInputWrap = styled.div`
  width: 15.4vw;
  display: grid;
  grid-template-columns: 1fr 0.5fr 1fr;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 0.2vw;
`;

export const SignUpEmailSpan = styled.span`
  padding: 0px 0.43vw;
  box-sizing: border-box;
  font-size: 1.5rem;
`;

export const SignUpSelect = styled.select``;
export const SignUpCheckEmail = styled.div`
  box-sizing: border-box;
  padding: 0 0 0 9.4vw;
`;

export const SignUpAdAgreeWrap = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-rows: 30px 30px;
  padding: 0 2vw;
  box-sizing: border-box;
  margin-bottom: 3vw;
`;
export const AdAgreeCheckBox = styled.input``;

export const AdAgreeLabel = styled.label`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  justify-items: end;
  font-size: 1.5rem;
`;

export const AdLabelWrap = styled.div`
  display: flex;
`;
export const AgreeLabel = styled.label``;
export const DisagreeLabel = styled.label``;

export const SignCustomButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3vw;
`;

export const ValidationError = styled.span`
  font-size: 1rem;
  color: #ff6fe9;
`;

export const ValidationMessage = styled.span`
  font-size: 1rem;
  color: gray;
`;
