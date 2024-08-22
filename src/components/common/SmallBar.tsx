import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  width: 1px;
  height: 1.4rem;
  margin: 0px 0.2rem;
  background-color: rgb(217, 217, 217);
`;

const SmallBar = () => {
  return <Bar />;
};

export default SmallBar;
