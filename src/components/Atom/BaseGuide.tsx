import React from 'react';
import styled from 'styled-components';

interface IBaseGuide {
  text: string;
}

const BaseGuide = (props: IBaseGuide) => {
  const ManagementGuide = styled.div`
    margin-top: 30px;
    color: #575657;
    line-height: 20px;
    font-size:1.3rem;
  `;

  return <ManagementGuide dangerouslySetInnerHTML={{ __html: props.text }} />;
};

export default BaseGuide;
