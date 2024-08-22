import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 24rem);
  background-color: #f5f5f5;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Inner = styled.div`
  width: 50.3vw;
  /* margin: 4.3vw 0; */
  /* height: 500px; */
  border-radius: 15rem;
  /* background: #f5f5f5;
  box-shadow: 0px 10px 15px 3px rgba(0, 0, 0, 0.13); */
  @media screen and (max-height: 750px) {
    padding: 5rem 4rem 2rem;
    position: relative;
    top: 5rem;
  }
`;

const Title = styled.h1`
  padding: 2rem 0 2rem 0;
  font-size: 2.6rem;
  font-weight: bold;
  position: relative;
  top: -36px;
  margin-left: 250px;
`;

const CardWrap = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 4vw;
`;

const FindIdCard = styled.div`
  width: 30rem;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 3vw 1vw 5vw 1vw;
  border-radius: 1rem;
  background-color: #fff;
  transition: all 0.1s ease;

  &:hover {
    transform: translateY(-20px); /* 호버 시 위로 5px 이동하는 효과 */
  }
`;

const FindPwCard = styled.div`
  width: 30rem;
  border: 1px solid #ccc;
  display: flex;

  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 3vw 1vw 5vw 1vw;

  border-radius: 1rem;
  background-color: #fff;
  transition: all 0.1s ease;
  &:hover {
    transform: translateY(-20px); /* 호버 시 위로 5px 이동하는 효과 */
  }
`;

const StyledIdImage = styled.div`
  width: 150px;
  height: 150px;
  background-image: url('https://lolstatic-a.akamaihd.net/derp-recovery-ui/2.1.63/assets/support_username_ico.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 50px;
`;

const StyledPwImage = styled.div`
  width: 150px;
  height: 150px;
  background-image: url('https://lolstatic-a.akamaihd.net/derp-recovery-ui/2.1.63/assets/support_password_ico.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 50px;
`;

const FindAccountName = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const FindAccountDocs = styled.p`
  color: #999;
  line-height: 1.2;
`;

// 아이디 찾기
const AccountFindResult = () => {
  return (
    <Container>
      <Inner>
        <Title>ARREO 계정찾기</Title>
        {/* <AccountWrap>
            
        </AccountWrap> */}
      </Inner>
    </Container>
  );
};

export default AccountFindResult;
