import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 6rem;
  color: #adb5bd;
  width: 100%;
  height: calc(100vh - 28rem);
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-height: 750px) {
    position: relative;
    top: 4rem;
  }
`;

const FindId = () => {
  return <Container>페이지 준비중 입니다.</Container>;
};

export default FindId;
