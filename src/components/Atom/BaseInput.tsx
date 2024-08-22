import React, { forwardRef } from 'react';
import styled from 'styled-components';

interface BaseInputProps {
  type?: string;
  name?: string;
  disabled?: boolean;
  width?: string;
  height?: string;
  backgroundColor?: string;
  marginBotttom?: string;
  marginLeft?: string;
  marginRight?: string;
  paddingLeft?: string;
  paddingRight?: string;
  border?: string;
  borderBottom?: string;
  hidden?: boolean;
  value?: string | number | string[];
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  borderColor?: any;
  autoFocus?: boolean;
  maxLength?: number;
}

const StyledInput = styled.input<BaseInputProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBotttom};
  border: ${(props) => props.border};
  border-bottom: ${(props) => props.borderBottom};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};
  box-sizing: border-box;
  outline: none;
  border-color: ${(props) => props.borderColor};
  transition: all 0.1s;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    border: 2px solid #1500ff;
  }
`;

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  (
    {
      type,
      name,
      width,
      height,
      backgroundColor,
      placeholder,
      marginLeft,
      marginRight,
      marginBotttom,
      paddingLeft,
      paddingRight,
      border,
      borderBottom,
      hidden,
      value,
      onChange,
      onKeyPress,
      onKeyDown,
      disabled,
      borderColor,
      autoFocus,
      maxLength,
    },
    ref,
  ) => {
    return (
      <StyledInput
        ref={ref}
        type={type}
        name={name}
        disabled={disabled}
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        placeholder={placeholder}
        marginLeft={marginLeft}
        marginRight={marginRight}
        marginBotttom={marginBotttom}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        border={border}
        borderBottom={borderBottom}
        hidden={hidden}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        onKeyDown={onKeyDown}
        borderColor={borderColor}
        autoFocus={autoFocus}
        maxLength={maxLength}
      />
    );
  },
);

BaseInput.defaultProps = {
  backgroundColor: '#e4e4e4',
  marginLeft: '0px',
  marginRight: '0px',
  paddingLeft: '0.5vw',
  paddingRight: '0.5vw',
  border: '0px solid',
};

export default BaseInput;
