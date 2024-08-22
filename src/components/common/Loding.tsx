import React from 'react';

import { MutatingDots } from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Loader = () => {
  return (
    <LoaderBox>
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
