import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import BaseButton from '../../../components/Atom/BaseButton';
import BaseInput from '../../../components/Atom/BaseInput';
import { useLocation } from 'react-router-dom';
import {
  AgreementButtonWrap,
  Say015ApplyTitle,
  SignUpContainer,
  SignUpFormWrapper,
  SignUpLine,
} from './SignUpDelete.style';

const SignUpDelete = () => {
  const location = useLocation();

  const number = location.state.data;

  return (
    <SignUpContainer>
      <SignUpFormWrapper>
        <Say015ApplyTitle>
          {number.replace(/(\d{7})\d{4}(\D*)/, (match: any, group1: string, group2: string) => {
            const lastFourDigits = group1; // 숫자 중 마지막 4자리
            const remainingChars = group2; // 숫자 이후의 문자열

            return `${lastFourDigits}****${remainingChars}`; // 마지막 4자리 외의 숫자를 ****로 변경
          })}
          의 휴면아이디를 <span style={{ color: '#0D42E5' }}>삭제요청</span>하셨습니다.
          <br />
        </Say015ApplyTitle>
        <SignUpLine />

        <AgreementButtonWrap>
          <BaseButton
            width="138px"
            height="39px"
            marginLeft="2vw"
            disabled
            backgroundColor="#0D42E5"
            fontWeight="bold"
            color="#fff"
          >
            확인
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
            취소
          </BaseButton>
        </AgreementButtonWrap>
      </SignUpFormWrapper>
    </SignUpContainer>
  );
};

export default SignUpDelete;
