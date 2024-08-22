import React, { useState } from 'react';
import styled from 'styled-components';

const SignUpCheckBoxButton = styled.input`
  /* 체크되지 않은 상태의 스타일 */
  appearance: none;
  width: 15px;
  height: 15px;
  border: 1.9999999px solid rgb(145, 144, 145); /* 테두리 스타일 */
  background-color: transparent; /* 배경색 */
  border-radius: 0; /* border-radius를 0으로 설정하여 직사각형 모양으로 만듭니다. */
  outline: none; /* 포커스 효과 제거 */
  margin-right: 5px;

  /* 체크된 상태의 스타일 */
  &:checked {
    background-color: #0D42E5; /* 체크되었을 때 배경색 변경 */
    border: 1.9999999px solid #0D42E5; /* 테두리 스타일 */
  }

  /* 체크 표시 제거 */
  &:after {
    content: ''; /* 가상 요소 생성 */
    display: block;
    width: 6px;
    height: 12px;
    border: solid transparent;
    border-width: 0 2px 2px 0; /* 체크 모양 생성 */
    transform: rotate(45deg);
    position: absolute;
    top: 3px;
    left: 6px;
    opacity: 0; /* 체크 표시 숨김 */
  }

  /* 체크된 상태일 때 체크 표시 보이기 */
  &:checked:after {
    opacity: 1;
  }
`;

const AgreementLabel = styled.label`
  color: #000;
  font-size: 11px;
  font-weight: 500;
  margin-right: 10px;
  line-height: normal;
  display: flex;
  align-items: center;
`;

const SignUpCheckBox = ({ id, checkLabel, check015ItemHandler }: any) => {
  const [checked, setChecked] = useState(false);
  const handleAgreement = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
    check015ItemHandler(e.target.id, e.target.checked);
  };
  return (
    <AgreementLabel htmlFor={checkLabel}>
      <SignUpCheckBoxButton type="checkbox" />
      015-0000-0000
    </AgreementLabel>
  );
};

export default SignUpCheckBox;
