import React, { useState } from 'react';
import styled from 'styled-components';

import SignUpProcess from '../../../components/common/SignUpLayout/SignUpProcess';
import BaseButton from '../../../components/Atom/BaseButton';
import { useLocation } from 'react-router-dom';
import {
  AgreementButtonWrap,
  Say015ApplyTitle,
  SignUpContainer,
  SignUpFormWrapper,
  SignUpLine,
  SignUpSubTitle,
} from './SignUpExistence.style';

const SignUpExistence = () => {
  const location = useLocation();
  const info = location.state;
  return (
    <SignUpContainer>
      <SignUpFormWrapper>
        <Say015ApplyTitle>
          회원님께서는 현재 아레오에 <span style={{ color: '#0D42E5' }}>2개의 아이디</span>를 가지고 계신 것으로
          확인됩니다.
        </Say015ApplyTitle>
        <SignUpLine />
        <SignUpSubTitle>
          현재 가입되어 있는 아이디를 확인하기 원하시면 <span style={{ color: '#0D42E5' }}>[아이디 확인]</span> 버튼을,
          <br />
          새로운 아이디로 다시 가입하기 원하시면 <span style={{ color: '#0D42E5' }}>[계속 가입]</span> 버튼을 클릭해
          주세요.
        </SignUpSubTitle>
        <SignUpLine />
        <AgreementButtonWrap>
          <BaseButton width="138px" height="39px" disabled backgroundColor="#0D42E5" fontWeight="bold" color="#fff">
            아이디 확인
          </BaseButton>
          <BaseButton
            width="138px"
            height="39px"
            marginLeft="2vw"
            disabled
            backgroundColor="#000"
            fontWeight="bold"
            color="#fff"
          >
            계속 가입
          </BaseButton>
        </AgreementButtonWrap>
      </SignUpFormWrapper>
    </SignUpContainer>
  );
};

export default SignUpExistence;
