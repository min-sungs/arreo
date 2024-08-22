import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import BaseButton from '../../components/Atom/BaseButton';
import { useSignUpIdCheck } from '../../components/hooks/customs/signUp/useSignUpIdCheck';
import { useMutationIdCheckList } from '../../components/hooks/mutations/useMutationIdCheckList';
import { useModal } from '../../components/hooks/customs/useModal';
import { LoadingComponent } from '../../apis/utils/LoadingComponent';

const SignUpContainer = styled.div`
  background: #f5f5f5;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-height: 750px) {
    position: relative;
    top: 4rem;
  }
`;

const SignUpFormWrapper = styled.div`
  width: 57.3vw;
  margin: 4.3vw 0;
  /* height: 1400px; */
  border-radius: 150px;
  background: #f5f5f5;
  position: relative;
  flex-shrink: 0;
  box-shadow: 0px 10px 15px 3px rgba(0, 0, 0, 0.13);
  /* box-shadow: inset 0px -10px 15px 3px rgba(0, 0, 0, 0.13); */
  padding: 0 8.86vw;
  box-sizing: border-box;

  &::before {
    content: 'ARREO 계정찾기';
    position: absolute;
    left: 50%;
    top: 0%;
    translate: -50% -50%;
    color: #000;
    text-align: center;
    font-family: 'Inter';
    font-size: 25px;
    font-style: normal;
    font-weight: 582;
    line-height: normal;
  }
`;

const Say015ApplyTitle = styled.h2`
  text-align: center;
  margin-top: 115px;
  color: #000;
  font-size: 2rem;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 0.1vw;
`;

const AgreementButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10vw;
  box-sizing: border-box;
  width: 500px;
  margin: 4vw auto;
`;

const Say015ApplyServiceGuide = styled.div`
  width: 98.6%;
  margin-top: 73px;
  margin-left: 5px;
  margin-bottom: 100px;
  font-size: 11px;
  line-height: 25px;
`;

interface EncodeDataProps {
  code: string;
  encodeData: string;
  inputName: string;
  inputNumber: string;
  // eslint-disable-next-line no-use-before-define
  phnIds: PhnIdProps[];
}

interface PhnIdProps {
  dealGb: string;
  phnId: string;
  regDate: string;
}

const FindAccountNiceCheck = () => {
  const [isEncData, setIsEncData] = useState<string>('');
  const { mutate, isLoading } = useMutationIdCheckList();
  const location = useLocation();
  const navigate = useNavigate();
  const { warningModal } = useModal();

  const query = new URLSearchParams(location.search);
  const sEncodeData = query.get('EncodeData');

  useEffect(() => {
    if (sEncodeData) {
      setIsEncData(sEncodeData);
    } else {
      warningModal('경고', '비정상적인 접근입니다.', true, '/signIn');
    }
  }, [sEncodeData]);

  const handleKeepFindId = () => {
    console.log('isEncData', isEncData);
    const encData = JSON.stringify(isEncData);

    console.log('encData', encData);
    if (encData) {
      console.log('유효성검사 시작');
      mutate(encData, {
        onSuccess: (response) => {
          console.log(response);
          navigate('/FindAccountList', {
            state: { data: response, encData },
          });
        },
        onError: (res) => {
          warningModal('아이디찾기 실패', '고객센터에 문의 바랍니다.', true);
        },
      });

      return null;
    }
    return sEncodeData;
  };

  return (
    <SignUpContainer>
      <SignUpFormWrapper>
        {isLoading ? <LoadingComponent /> : <Say015ApplyTitle>본인인증을 완료하셨습니다.</Say015ApplyTitle>}

        <Say015ApplyServiceGuide>
          개인정보 도용에 따른 피해방지를 위해 끝4자리는 *로 표시합니다.
          <br /> 만일 도용으로 가입된 아이디가 있는 경우, 고객센터(015-8504-0006)를 통해 본인 확인 절차를 거친 후 탈퇴도
          가능합니다.
          <br /> 휴면아이디란?
          <br /> 아이디는 가입이 되어 있으나 사용 할 수 없는 아이디를 말합니다.
          <br /> 1. 사이트를 오랫동안 방문하지 않은 회원의 아이디
          <br /> 2. 휴대폰번호가 변경이 되었으나 변경하지 못해, 이미 다른 회원이 동일한 휴대폰번호로 가입한 경우
          <br /> * 사용하시려면 아이디 복원을, 더 이상 사용을 원치 않을 경우 아이디 삭제 버튼을 클릭하여 주세요.
          <br /> 아이디 삭제와 동시에 현재 회원님의 아레오 캐쉬 및 포인트,
          <br /> 그리고 주소록 내의 연락처가 모두 삭제되며 회원님이 이용하셨던 모든 정보서비스 이용이 불가능하게 됩니다.
          <br /> 또한 회원약관에 따라 아이디 삭제 후, 1개월 동안은 동일한 번호로 재가입이 불가능하오니 이점 양지하시기
          바랍니다.
        </Say015ApplyServiceGuide>
        <AgreementButtonWrap>
          {isLoading ? (
            <LoadingComponent />
          ) : (
            <BaseButton
              width="138px"
              height="39px"
              marginLeft="2vw"
              backgroundColor="#0D42E5"
              fontWeight="bold"
              color="#fff"
              onClick={handleKeepFindId}
            >
              다음
            </BaseButton>
          )}
        </AgreementButtonWrap>
      </SignUpFormWrapper>
    </SignUpContainer>
  );
};

export default FindAccountNiceCheck;
