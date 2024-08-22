/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';

interface IATitle {
  type: 'main' | 'sub';
  text?: string;
  color?: string;
}

const SubTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  color: ${(props) => props.color};
`;

const MainTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
  color: ${(props) => props.color};
`;

const ATitle = (props: IATitle) => {
  return props?.type === 'main' ? (
    <MainTitle color={props?.color}>{props?.text}</MainTitle>
  ) : (
    <SubTitle color={props?.color}>{props?.text}</SubTitle>
  );
};
ATitle.defaultProps = {
  color: '#000',
};

export default ATitle;
