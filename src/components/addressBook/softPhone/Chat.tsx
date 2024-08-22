import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 40%;
  font-size: 2rem;
`;

const Chat = () => {
  return <Container>소프트폰 - Chat 페이지입니다.</Container>;
};

export default Chat;
