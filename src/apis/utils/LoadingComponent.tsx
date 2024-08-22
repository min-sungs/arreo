import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import styled from 'styled-components';

const LoadingWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export const LoadingComponent = () => {
  return (
    <LoadingWrap>
      <TailSpin color="#10024d" height={100} width={100} />
    </LoadingWrap>
  );
};
