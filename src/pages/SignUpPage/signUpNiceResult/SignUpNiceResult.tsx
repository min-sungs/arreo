import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import BaseButton from '../../../components/Atom/BaseButton';
import { useSignUpIdCheck } from '../../../components/hooks/customs/signUp/useSignUpIdCheck';
import { useMutationSignUpValidation } from '../../../components/hooks/mutations/signUpMutate/useMutationSignUpValidation';
import { useModal } from '../../../components/hooks/customs/useModal';
import { LoadingComponent } from '../../../apis/utils/LoadingComponent';
import {
  AgreementButtonWrap,
  Say015ApplyServiceGuide,
  Say015ApplyTitle,
  SignUpContainer,
  SignUpFormWrapper,
} from './SignUpNiceResult.style';

const SignUpNiceResult = () => {
  const [isEncData, setIsEncData] = useState<string>('');
  const { mutate, isLoading } = useMutationSignUpValidation();
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

  const handleKeepSignIn = () => {
    const encData = JSON.stringify(isEncData);
    const data: any = {
      EncodeData: sEncodeData,
    };
    if (encData) {
      mutate(encData, {
        onSuccess: (response) => {
          if (response.code === '200') {
            navigate('/signUpForm', {
              state: { data: response },
            });
          } else if (response.code === '201') {
            navigate('/SignUpIdCheck', {
              state: { data: response },
            });
          } else if (response.code === '202') {
            warningModal('회원가입 실패', '14세 미만의 회원은 가입하실 수 없습니다.', true);
          } else if (response.code === '203') {
            warningModal('회원가입 실패', '동일한 가입정보로 1일 1회 가입이 가능합니다.', true);

            navigate('/SignUp');
          } else if (response.code === '204') {
            warningModal('회원가입 실패', '동일한 주민등록번호로 4개까지 가입할 수 있습니다.', true);

            navigate('/SignUp');
          } else if (response.code === '205') {
            warningModal('회원가입 실패', '가입 후 한달안에 재가입이 불가능합니다.', true);

            navigate('/SignUpIdCheck', {
              state: { data: response },
            });
          } else if (response.code === '206') {
            warningModal('회원가입 실패', '탈퇴 후 한달안에 재가입이 불가능합니다.', true);
            navigate('/SignUpIdCheck', {
              state: { data: response },
            });
          }
        },
        onError: (res) => {
          warningModal('회원가입 실패', '고객센터에 문의 바랍니다.', true);
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
              onClick={handleKeepSignIn}
            >
              계속 가입
            </BaseButton>
          )}
        </AgreementButtonWrap>
      </SignUpFormWrapper>
    </SignUpContainer>
  );
};

export default SignUpNiceResult;
