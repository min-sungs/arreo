import React, { ChangeEvent, forwardRef, memo, useCallback } from 'react';
import styled from 'styled-components';

interface AddressCheckBoxProps {
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  top?: string;
  name?: string;
  value?: string;
}
const StyledCheckBox = styled.input<AddressCheckBoxProps>`
  /* 체크되지 않은 상태의 스타일 */
  appearance: none;
  width: 14px;
  height: 14px;
  border: none; /* 테두리 스타일 */
  /* background-color: #d2d2d2; */
  background-color: #D6D6DC; 
  border-radius: 3px; /* border-radius를 0으로 설정하여 직사각형 모양으로 만듭니다. */
  outline: none; /* 포커스 효과 제거 */
  margin: 0;
  margin-right: 5px;
  position: relative;

  /* 체크된 상태의 스타일 */
  &:checked {
    /* background-color: #4b36b1; 체크되었을 때 배경색 변경 */
		/* 임시 변경 */
		/* background-color: #747882; */
    background-color:transparent;
    border:2px solid #0D42E5;
  }

  /* 체크 표시 제거 */
  &:after {
    content: ''; /* 가상 요소 생성 */
    display: block;
    /* width: 6px;
    height: 12px; */
    width: 2px;
    height: 6px;
    border: solid #0D42E5;
    border-width: 0 2px 2px 0; /* 체크 모양 생성 */
    transform: rotate(45deg);
    position: absolute;
    /* top: 3px;
    left: 6px; */
    top: 0px;
    left: 3px;
    opacity: 0; /* 체크 표시 숨김 */
  }

  /* 체크된 상태일 때 체크 표시 보이기 */
  &:checked:after {
    opacity: 1;
  }
`;

const StyledCheckBoxLabel = styled.label`
  color: #000;
  font-size: 11px;
  font-weight: 500;
  margin-right: 20px;
  line-height: normal;
  display: flex;
  align-items: center;
`;

const AddressCheckBox = forwardRef<HTMLInputElement, AddressCheckBoxProps>((props, ref) => {
  return (
    <StyledCheckBoxLabel>
      <StyledCheckBox
        ref={ref}
        onChange={props.onChange}
        value={props.value}
        checked={props.checked}
        type="checkbox"
        top={props.top}
        name={props.name}
      />
      {props?.label}
    </StyledCheckBoxLabel>
  );
});

AddressCheckBox.defaultProps = {
  label: '',
  top: '3px',
};

export default memo(AddressCheckBox);
