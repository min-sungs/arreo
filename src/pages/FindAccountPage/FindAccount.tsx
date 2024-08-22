import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { useNiceCertification } from '../../apis/hooks/useNiceCertification';
import { useModal } from '../../components/hooks/customs/useModal';
import { useNoTokenPost, usePost } from '../../apis/hooks/usePost';
import { useNavigate } from 'react-router-dom';
import { client } from '../../apis/api/clientAxios';

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 24rem);
  background-color: rgb(255, 255, 255);
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
  background-color: rgb(255, 255, 255);
  /*box-shadow: 0px 10px 15px 3px rgba(0, 0, 0, 0.13); */
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
  padding:3vw 1vw;
  border-radius: 1rem;
  background-color: #fff;
  transition: all 0.1s ease;
  text-align:center;
  &:hover {
    transform: translateY(-20px); /* 호버 시 위로 5px 이동하는 효과 */
    box-shadow:0 5px 15px 5px rgba(0, 0, 0, 0.03);
  }
  cursor: pointer;
`;

const FindPwCard = styled.div`
  width: 30rem;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding:3vw 1vw;
  border-radius: 1rem;
  background-color: #fff;
  transition: all 0.1s ease;
  text-align:center;
  &:hover {
    transform: translateY(-20px); /* 호버 시 위로 5px 이동하는 효과 */
    box-shadow:0 5px 15px 5px rgba(0, 0, 0, 0.03);
    
  }
  cursor: pointer;
`;

const StyledIdImage = styled.div`
  width: 150px;
  height: 150px;
  /* background-image: url('https://lolstatic-a.akamaihd.net/derp-recovery-ui/2.1.63/assets/support_username_ico.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover; */
  margin-bottom: 50px;
`;

const StyledPwImage = styled.div`
  width: 150px;
  height: 150px;
  /* background-image: url('https://lolstatic-a.akamaihd.net/derp-recovery-ui/2.1.63/assets/support_password_ico.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover; */
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
const FindAccount = () => {
  const [popupData, setPopupData] = useState(null);
  const { niceCertification } = useNiceCertification();
  const { warningModal, successModal } = useModal();
  const navigate = useNavigate();
  const { mutate, isLoading } = useNoTokenPost('/signup/identity-verification');
  const handleFindIdClick = async () => {
    await niceCertification();
  };
  const isFindIdhanlder = async () => {
    try {
      if (popupData !== null) {
        const encData = {
          encodeData: popupData,
        };

        navigate('/FindAccountList', {
          state: encData,
        });
        // mutate(encData, {
        //   onSuccess: (response) => {
        //     console.log(response);
        //     if (response.status === 200) {
        //       warningModal('경고', '아이디가 존재하지 않습니다.</br> 회원가입을 진행해주세요.', true, '/signup');
        //     } else {
        //       successModal('성공', '인증이 완료되었습니다.', true);
        //       navigate('/FindAccountList', {
        //         state: { data: response.data },
        //       });
        //     }
        //   },
        //   onError: (res: any) => {
        //     console.error('인증실패', res);
        //   },
        // });

        return null;
      }
    } catch (error) {
      return error;
    }
    return null;
  };

  // 팝업에서 보내온 메시지를 받는 이벤트 리스너
  const messageListener = (event: any) => {
    if (event.data.sEncodeData) {
      setPopupData(event.data.sEncodeData);
    }
  };

  useEffect(() => {
    // message 이벤트 리스너를 등록
    window.addEventListener('message', messageListener);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
    return () => {
      window.removeEventListener('message', messageListener);
    };
  }, []);

  useEffect(() => {
    if (popupData) {
      isFindIdhanlder();
    }
  }, [popupData]);

  return (
    <Container>
      <Inner>
        <Title>ARREO 계정찾기</Title>
        <CardWrap>
          <FindIdCard onClick={handleFindIdClick}>
            {/* <StyledIdImage /> */}
            <FindAccountName>아이디 찾기</FindAccountName>
            <FindAccountDocs>
              잘 기억나지 않으신가요? <br />
              여기서 아이디를 찾으실 수 있습니다.
            </FindAccountDocs>
          </FindIdCard>
          <FindPwCard onClick={handleFindIdClick}>
            {/* <StyledPwImage /> */}
            <FindAccountName>비밀번호 찾기</FindAccountName>
            <FindAccountDocs>비밀번호를 잊어버리신 경우 여기에서 초기화할 수 있습니다.</FindAccountDocs>
          </FindPwCard>
        </CardWrap>
      </Inner>
    </Container>
  );
};

export default FindAccount;
