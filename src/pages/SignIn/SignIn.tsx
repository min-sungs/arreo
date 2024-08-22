/* eslint-disable */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import BaseButton from '../../components/Atom/BaseButton';
import BaseInput from '../../components/Atom/BaseInput';
import { useSignIn } from '../../components/hooks/customs/signIn/useSignIn.ts';
import * as S from './SignIn.style.ts';

// import required modules

// import {
//   AgreementButtonWrap,
//   ArreoIdInputWrap,
//   ArreoLoginError,
//   ArreoLoginInfo,
//   ArreoLoginInput,
//   ArreoPasswordInputWrap,
//   Container,
//   Finder,
//   Inner,s
//   Label,
//   Title,
//   ValidationError,
// } from './SignIn.style';

const SignIn = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);
  const { SignInId, SignInPassword, handleSignInFormChange, handleSubmit, onClickLogin, isLoading, errors } =
    useSignIn();

  return (
    <S.SigninWrap>
      <S.Container>
        {/* Start Content Zone */}
        <S.Content>
          <S.ContentInfoWrap>
            <S.ContentTitle>
              <h2>Say 015</h2>
              <p>Open Beta Service</p>
            </S.ContentTitle>
            <S.ContentText>
              <p>스마트폰을 더 스마트하게, 015 사서함</p>
              <p>
                수신자가 남긴 음성을 텍스트로 전환하여 내역별로 간편한 확인이
                <br />
                가능하며 착신 전환, 웹링크 발송, 문자 발송, 안내 멘트, 음성 녹음 등<br />
                다이얼 입력에 따른 다양한 설정이 가능해요.
              </p>
            </S.ContentText>
          </S.ContentInfoWrap>
        </S.Content>

        {/* End Content Zone */}

        {/* Start NoneSoftPhoneWrap Zone */}
        <S.NoneSoftPhoneWrap>
          <form onSubmit={handleSubmit(onClickLogin)}>
            <S.TitleZone>
              <S.Title>ARREO</S.Title>
            </S.TitleZone>
            <S.GreetingText>
              안녕하세요.
              <br />
              ARREO입니다.
            </S.GreetingText>
            <S.GuideText>회원 서비스 이용을 위해 로그인 해주세요.</S.GuideText>
            <S.ArreoLoginInfo>
              <S.ArreoIdInputWrap>
                <S.ArreoLoginInput className={'' + (errors?.SignInId ? 'active' : '')}>
                  <S.Label>ID</S.Label>
                  <BaseInput
                    type="text"
                    paddingLeft="0"
                    paddingRight="0"
                    width="100%"
                    height="30px"
                    backgroundColor="transparent"
                    placeholder="Ex. 01012345678"
                    onChange={(e) => handleSignInFormChange({ value: e.target.value, onChange: SignInId.onChange })}
                    value={SignInId.value}
                  />
                </S.ArreoLoginInput>
                {/* <S.ArreoLoginError>
                  {errors?.SignInId ? <S.ValidationError>{errors.SignInId?.message}</S.ValidationError> : null}
                </S.ArreoLoginError> */}
              </S.ArreoIdInputWrap>
              <S.ArreoPasswordInputWrap>
                <S.ArreoLoginInput className={'' + (errors?.SignInPassword ? 'active' : '')}>
                  <S.Label>PW</S.Label>
                  <BaseInput
                    type="password"
                    paddingLeft="0"
                    paddingRight="0"
                    width="100%"
                    height="30px"
                    backgroundColor="transparent"
                    placeholder="Enter your password"
                    onChange={(e) =>
                      handleSignInFormChange({ value: e.target.value, onChange: SignInPassword.onChange })
                    }
                    value={SignInPassword.value}
                  />
                </S.ArreoLoginInput>
                {/* <S.ArreoLoginError>
                  {errors?.SignInPassword ? <S.ValidationError>{errors.SignInPassword?.message}</S.ValidationError> : null}
                </S.ArreoLoginError> */}
              </S.ArreoPasswordInputWrap>
            </S.ArreoLoginInfo>
            <S.AgreementButtonWrap>
              <BaseButton
                type="submit"
                width="100%"
                height="70px"
                fontSize="2rem"
                fontWeight="800"
                backgroundColor="#191919"
                borderRadius="5rem"
                boxShadow="0px 0px 10px 0px rgba(76, 54, 178, 0.20)"
                color="#fff"
                onClick={handleSubmit(onClickLogin)}
                disabled={isLoading && true}
              >
                로그인
              </BaseButton>
            </S.AgreementButtonWrap>
            <S.DataFunZone>
              <Link to="/findaccount">ID / PW 찾기</Link>
              <span></span>
              <Link to="/signup">회원가입</Link>
            </S.DataFunZone>
          </form>
        </S.NoneSoftPhoneWrap>
        {/* End NoneSoftPhoneWrap Zone */}
      </S.Container>
    </S.SigninWrap>
  );
};

export default SignIn;
