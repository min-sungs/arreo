import React from 'react';

import { MutatingDots } from 'react-loader-spinner';
import styled from 'styled-components';

interface ILoaderBox{
  height?: string
}

const LoaderBox = styled.div<ILoaderBox>`
  display: flex;
  width: 100%;
  height: 100%;
   // height: ${props => `${props.height}px`};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.1);
  z-index: 9999;
`;

interface ILoader {
  height?: string;
}

const Loader = ({height}:ILoader) => {
  return (
    <LoaderBox height={height}>
      <MutatingDots
        height="140"
        width="140"
        color="#a1a1a1"
        secondaryColor="#a1a1a1"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </LoaderBox>
  );
};
export default Loader;
