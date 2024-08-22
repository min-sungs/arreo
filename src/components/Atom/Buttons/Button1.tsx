/**
 * SPAN 으로 이루어진 버튼
 * color 값을 props로 받아 변경이 가능.
 */

import React from 'react';
import styled from 'styled-components';

const SpanButton = styled.span`
  color: ${(props) => props.color};
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`;

interface IButton1 {
  color?: string;
  text: string;
}

const Button1 = ({ color, text }: IButton1) => {
  return <SpanButton color={color}>{text}</SpanButton>;
};

Button1.defaultProps = {
  color: '#000',
};

export default Button1;
