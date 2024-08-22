import styled from 'styled-components';

export const SigninWrap = styled.div`
  height:100vh;
`;
export const Container = styled.div`
  display:flex;
  justify-content:space-between;
  height:100%;
  background-color:#fff;
`
/* Start Content Zone */
export const Content = styled.div`
  position:relative;
  display:flex;
  justify-content:space-between;
  
  width:70%;
  background:rgb(226,226,235) linear-gradient(180deg, rgba(226,226,235,0.38) 55%, rgba(25,25,25,0.3) 100%);

  box-shadow:5px 5px 10px 0px rgba(0, 0, 0, 0.03);
  box-sizing:border-box;
  border-radius: 0 50px 50px 0;
`
export const ContentInfoWrap = styled.div`
  padding:118px 0 0 105px;
  width:100%;
  height:100%;
  background-image:url('/img/signin/PhoneImage.png');
  background-repeat:no-repeat;
  background-position:bottom 30px right 40px;
  background-size:78%;
  box-sizing: border-box;
`
export const ContentTitle = styled.div`
  margin-bottom:84px;
  h2 {
    margin-bottom:30px;
    font-size:6rem;
    font-weight:700;
    color:#191919;
  }
  p {
    font-size:1.9rem;
    font-weight:400;
    color:#69696D;
  }
`
export const ContentText = styled.div`
  p { 
    &:first-child {
      margin-bottom:46px;
      font-size:1.8rem;
      font-weight:700;
      color:#0D42E5;
    }
    &:last-child {
      line-height:normal;
      font-size:1.5rem;
      font-weight:500;
      white-space:pre-line;
      color:#69696D;
    }
  }
`
export const LoginGuideText = styled.p`
  margin:10px 0 0 10px;
  font-size:1.1rem;
  font-weight:500;
  color: #DF0A0A;
`
export const AppImage = styled.img`
  position:absolute;
  right:0;
  bottom:0;
  object-fit:contain;
  @media screen and (max-width:1920px) {
    width:90%;
  }
`
/* End Content Zone */

/* Start NoneSoftPhone Zone */
export const NoneSoftPhoneWrap = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width:30%;
  background-color:white;
  form {width:70%;}
`;
export const TitleZone = styled.div`
  display:flex;
  justify-content:flex-end;
  margin-bottom:30px;
`;
export const Title = styled.h1`
  display:flex;
  align-items:center;
  justify-content:center;
  width:160px;
  height:160px;
  background-color:#0D42E5;
  border-radius:50%;
  box-sizing:border-box;
  font-size:4rem;
  font-weight:200;
  color:#fff;
`
export const GreetingText = styled.p`
  line-height:normal;
  font-size:3rem;
  font-weight:600;
  color:#191919;
`
export const GuideText = styled.p`
  margin:28px 0 116px 0;
  font-size:1.6rem;
  font-weight:500;
  color:#191919;
  @media screen and (max-width:1340px) {
    font-size:1.4rem;
  }
`
export const ArreoLoginInfo = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`;
export const ArreoLoginInput = styled.div`
  display:flex;
  flex-direction:column;
  &.active {
    input {border-bottom:2px solid red}
  }
  input {
    margin-top:15px;
    color:#191919;
    box-sizing:border-box;
    border-bottom:2px solid #191919;
    outline:none;
    &:focus {border:none;border-bottom:2px solid #191919;}
    &::placeholder {
      font-size:1.6rem;
      font-weight:500;
      color:#999 ;
    }
  }
`;
export const ArreoIdInputWrap = styled.div`
  position:relative;
  width:100%;
`;
export const ArreoPasswordInputWrap = styled.div`
  position:relative;
  width:100%;
  > div {
    &:first-child {margin-top:46px;}
  }
`;
export const DataFunZone = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  a {
    position:relative;
    font-size:1.5rem;
    font-weight:600;
    color:#191919;
    /* &:nth-child(2) {
      margin:0 7rem;
      &::before,::after {
        position:absolute;
        top:50%;
        transform:translateY(-50%);
        content:"";
        display:inline-block;
        width:2px;height:100%;
        background-color:#191919;
      }
      &::before {right:-3.4rem;}
      &::after {left:-3.4rem;}
    } */
    @media screen and (max-width:1400px) {
      font-size:1.3rem;
    }
  }
  span {display:inline-block;margin:0 8.75%;width:2px;height:10px;background-color:#000;}
  button {
    font-size:1.2rem;
    font-weight:600;
  }
`;
export const AgreementButtonWrap = styled.div`
  box-sizing:border-box;
  display:flex;
  flex-direction:column;
  width:100%;
  margin:46px 0 26px 0;
`;
export const Label = styled.label`
  font-size:1.8rem;
  font-weight:bold;
  color:#191919;
`;
export const ArreoLoginError = styled.div`
 
`;
export const ValidationError = styled.span`
  font-size:1rem;
  color:red;
`;
/* End NoneSoftPhone Zone */