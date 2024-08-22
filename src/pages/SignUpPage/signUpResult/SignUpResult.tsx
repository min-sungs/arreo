import React from 'react';

import SignUpProcess from '../../../components/common/SignUpLayout/SignUpProcess';

import { useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {
  ArreoContentCard,
  ArreoContentCardText,
  ArreoContentCardTitle,
  ArreoContentWrap,
  SignUpContainer,
  SignUpFormWrapper,
  SignUpMessageAgree,
  SignUpResult015,
  SignUpResultId,
  SignUpResultSecretary,
  SignUpResultWrap,
  SignUpSubTitle,
  SignUpTitle,
} from './SignUpResult.style';

const SignUpResult = () => {
  const process: string = '4';
  const location = useLocation();
  // const navigate = useNavigate();
  // const info = location.state;

  const arreoContent = [
    { content: '아레오 홈', text: '015 번호로 누리는 다양한 서비스' },
    { content: '주소록', text: '지인과 함께쓰는 아레오 주소록' },
    { content: '메시지', text: '다양한 문자를 웹에서 보내는 편리함' },
    { content: '삐삐', text: '문자, 음성, 팩스를 015 하나로' },
    { content: '이메일', text: '내 휴대폰번호로 주고받는 메일' },
  ];

  return (
    <SignUpContainer>
      <SignUpFormWrapper>
        <SignUpProcess process={process} />
        <SignUpTitle>신혜령 님의 회원가입이 완료되었습니다.</SignUpTitle>
        <SignUpSubTitle>지금부터 아래의 ID로 아레오 서비스를 이용하실 수 있습니다. </SignUpSubTitle>
        <SignUpResultWrap>
          <SignUpResultId>ARREO ID</SignUpResultId>
          <SignUpResult015>015 번호</SignUpResult015>
          <SignUpResultSecretary>015 비서</SignUpResultSecretary>
        </SignUpResultWrap>
        <SignUpMessageAgree>2023SUS 8월 2일 문자 수신 거부, 이메일 수신 거부 처리 되었습니다.</SignUpMessageAgree>
        <ArreoContentWrap>
          {arreoContent.map((element) => {
            return (
              <ArreoContentCard key={uuidv4()}>
                <ArreoContentCardTitle>{element.content}</ArreoContentCardTitle>
                <ArreoContentCardText>{element.text}</ArreoContentCardText>
              </ArreoContentCard>
            );
          })}
        </ArreoContentWrap>
      </SignUpFormWrapper>
    </SignUpContainer>
  );
};

export default SignUpResult;
