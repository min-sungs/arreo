import React, { JSX } from 'react';
import styled from 'styled-components';

interface BaseButtonProps {
  type?: 'button' | 'submit' | 'reset';
  width?: string;
  height?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  padding?: string;
  icon?: JSX.Element;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: string | JSX.Element;
  className?: string;
  marginLeft?: string;
  marginTop?: string;
  marginBottom?: string;
  border?: string;
  borderRadius?: string;
  boxShadow?: string;
  value?: string;
  name?: string;
}

const StyledButton = styled.button<BaseButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  margin-bottom: ${(props) => props.marginBottom};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  box-shadow: ${(props) => props.boxShadow};
  flex-shrink: 0;
  transition: all 0.5s;
  cursor: pointer;
  &:disabled {
    background: #ccc;
  }

  &:hover {
    /* box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc; */
  }

  &:active {
    /* box-shadow:
      inset 1px 1px 2px #babecc,
      inset -1px -1px 2px #fff; */
    color: #000;
    font-weight: bold;
  }
`;

const BaseButton = ({
                      type,
                      width,
                      height,
                      marginTop,
                      marginLeft,
                      marginBottom,
                      backgroundColor,
                      fontSize,
                      fontWeight,
                      padding,
                      color,
                      border,
                      borderRadius,
                      boxShadow,
                      onClick,
                      icon,
                      disabled,
                      className,
                      children,
                      value,
                      name,
                    }: BaseButtonProps) => {
  return (
    <StyledButton
      type={type}
      width={width}
      height={height}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginBottom={marginBottom}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      padding={padding}
      color={color}
      border={border}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      onClick={onClick}
      icon={icon}
      disabled={disabled}
      className={className}
      value={value}
      name={name}
    >
      {children}
    </StyledButton>
  );
};

BaseButton.defaultProps = {
  type: 'button',
  width: '60px',
  height: '20px',
  backgroundColor: '#fff',
  border:'0px',
  padding: '0',
  fontSize: '1.3rem',
  fontWeight: '400',
  color: '#000',
};

export default BaseButton;
