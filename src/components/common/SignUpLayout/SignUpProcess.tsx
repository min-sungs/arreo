import React from 'react';
import styled from 'styled-components';

import { SignUpProcesseEllipseProps, SignUpProcesseNameProps } from '../../../apis/utils/typeGuard/signUpGuard';

const SignUpProcessWrap = styled.div`
  width: 70%;
  height: 42px;
  margin: 5.4vw auto 3.8vw auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const SignUpProcessTag = styled.div``;

const SignUpProcesseEllipse = styled.span<SignUpProcesseEllipseProps>`
  display: block;
  width: 13px;
  height: 13px;
  border-radius: 100%;
  background-color: ${(props) => props.BackGroundColor};
`;

const SignUpProcesseName = styled.p<SignUpProcesseNameProps>`
  margin-top: 10px;
  color: #0D42E5;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  color: ${(props) => props.Color};
`;
interface processProps {
  process: string;
}
const SignUpProcess = (props: processProps) => {
  return (
    <SignUpProcessWrap>
      {props?.process === '1' ? (
        <SignUpProcessTag>
          <SignUpProcesseEllipse BackGroundColor="#0D42E5" />
          <SignUpProcesseName Color="#0D42E5">약관동의 및 본인인증</SignUpProcesseName>
        </SignUpProcessTag>
      ) : (
        <SignUpProcessTag>
          <SignUpProcesseEllipse BackGroundColor="#C8C8C8" />
          <SignUpProcesseName Color="#C8C8C8">약관동의 및 본인인증</SignUpProcesseName>
        </SignUpProcessTag>
      )}
      {props?.process === '2' ? (
        <SignUpProcessTag>
          <SignUpProcesseEllipse BackGroundColor="#0D42E5" />
          <SignUpProcesseName Color="#0D42E5">회원 정보 입력</SignUpProcesseName>
        </SignUpProcessTag>
      ) : (
        <SignUpProcessTag>
          <SignUpProcesseEllipse BackGroundColor="#C8C8C8" />
          <SignUpProcesseName Color="#C8C8C8">회원 정보 입력</SignUpProcesseName>
        </SignUpProcessTag>
      )}
      {/*{props?.process === '3' ? (*/}
      {/*  <SignUpProcessTag>*/}
      {/*    <SignUpProcesseEllipse BackGroundColor="#0D42E5" />*/}
      {/*    <SignUpProcesseName Color="#0D42E5">015 이용신청</SignUpProcesseName>*/}
      {/*  </SignUpProcessTag>*/}
      {/*) : (*/}
      {/*  <SignUpProcessTag>*/}
      {/*    <SignUpProcesseEllipse BackGroundColor="#C8C8C8" />*/}
      {/*    <SignUpProcesseName Color="#C8C8C8">015 이용신청</SignUpProcesseName>*/}
      {/*  </SignUpProcessTag>*/}
      {/*)}*/}
      {props?.process === '4' ? (
        <SignUpProcessTag>
          <SignUpProcesseEllipse BackGroundColor="#0D42E5" />
          <SignUpProcesseName Color="#0D42E5">가입 완료</SignUpProcesseName>
        </SignUpProcessTag>
      ) : (
        <SignUpProcessTag>
          <SignUpProcesseEllipse BackGroundColor="#C8C8C8" />
          <SignUpProcesseName Color="#C8C8C8">가입 완료</SignUpProcesseName>
        </SignUpProcessTag>
      )}
    </SignUpProcessWrap>
  );
};

export default SignUpProcess;
