import React, { Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Link, useLocation } from 'react-router-dom';
import BaseButton from '../../../components/Atom/BaseButton';
import { useSignUpIdCheck } from '../../../components/hooks/customs/signUp/useSignUpIdCheck';
import { SignUpContainer } from '../signUp/SignUp.style';
import {
  AgreementButtonWrap,
  IdCheckBigWrap,
  IdCheckSmallWrap,
  Say015ApplyServiceGuide,
  Say015ApplyTitle,
  SignUpFormWrapper,
  SignUpLine,
  SignUpSubTitle,
  SignUpSubTitleWrap,
} from './SignUpIdCheck.style';
import { PhnIdProps } from './SignUpIdCheck.types';
import { LoadingComponent } from '../../../apis/utils/LoadingComponent';

const SignUpIdCheck = () => {
  const { handleIdRecovery, keepSignUp, handleAccountDelete, signUpInfo, fetchData, dataListLoading } =
    useSignUpIdCheck();

  return (
    <SignUpContainer>
      <Suspense fallback={<LoadingComponent />}>
        <SignUpFormWrapper>
          <Say015ApplyTitle>
            <span style={{ color: '#0D42E5' }}>아이디 조회결과 </span>입력하신 정보와 일치하는 아이디는 아래와 같습니다.
          </Say015ApplyTitle>
          <SignUpLine />

          {fetchData?.phnIds?.map((number: PhnIdProps, id: number) => {
            return (
              <SignUpSubTitleWrap key={number.phnId}>
                <IdCheckSmallWrap>
                  <SignUpSubTitle>아이디{id + 1}</SignUpSubTitle>
                </IdCheckSmallWrap>
                <IdCheckBigWrap>
                  <SignUpSubTitle>
                    {number.phnId.replace(/(\d{7})\d{4}(\D*)/, (match, group1, group2) => {
                      const lastFourDigits = group1; // 숫자 중 마지막 4자리
                      const remainingChars = group2; // 숫자 이후의 문자열
                      if (group2 === '') {
                        return `${lastFourDigits}****`; // 마지막 4자리 외의 숫자를 ****로 변경
                      }
                      return `${lastFourDigits}****${remainingChars}`; // 마지막 4자리 외의 숫자를 ****로 변경
                    })}
                    (가입일 : {number.regDate}){number.dealGb !== '1' && ' -- 휴면아이디'}
                  </SignUpSubTitle>
                </IdCheckBigWrap>
                <IdCheckBigWrap>
                  {number.dealGb === '1' ? (
                    <>
                      <Link to="/signin">
                        <BaseButton
                          width="5.7vw"
                          height="2.2vh"
                          backgroundColor="#0D42E5"
                          color="#fff"
                          marginLeft="20px"
                        >
                          로그인
                        </BaseButton>
                      </Link>

                      <BaseButton
                        width="5.7vw"
                        height="2.2vh"
                        backgroundColor="#000"
                        color="#fff"
                        marginLeft="20px"
                        name="findPw"
                        value={number.phnId}
                        onClick={
                          (e: React.MouseEvent<HTMLElement>) =>
                            handleIdRecovery(
                              e,
                              number.rsrvdId,
                              fetchData.encodeData,
                              fetchData.inputNumber,
                              number.dealGb,
                            )
                          // handleIdRecovery(e, fetchData.encodeData, fetchData.inputNumber, number.dealGb)
                        }
                      >
                        비밀번호 찾기
                      </BaseButton>
                    </>
                  ) : (
                    <>
                      <BaseButton
                        height="2.2vh"
                        width="5.7vw"
                        backgroundColor="#0D42E5"
                        color="#fff"
                        marginLeft="20px"
                        name="RecoveryId"
                        value={number.phnId}
                        onClick={(e: React.MouseEvent<HTMLElement>) =>
                          handleIdRecovery(
                            e,
                            number.rsrvdId,
                            fetchData.encodeData,
                            fetchData.inputNumber,
                            number.dealGb,
                          )
                        }
                      >
                        아이디 복원
                      </BaseButton>
                      <BaseButton
                        width="5.7vw"
                        height="2.2vh"
                        backgroundColor="#000"
                        color="#fff"
                        marginLeft="20px"
                        value={number.phnId}
                        onClick={(e) => handleAccountDelete({ e, data: signUpInfo.data.encodeData })}
                      >
                        아이디 삭제
                      </BaseButton>
                    </>
                  )}
                </IdCheckBigWrap>
              </SignUpSubTitleWrap>
            );
          })}
          <SignUpLine />
          <Say015ApplyServiceGuide>
            개인정보 도용에 따른 피해방지를 위해 끝4자리는 *로 표시합니다.
            <br /> 만일 도용으로 가입된 아이디가 있는 경우, 고객센터(015-8504-0006)를 통해 본인 확인 절차를 거친 후
            탈퇴도 가능합니다.
            <br /> 휴면아이디란?
            <br /> 아이디는 가입이 되어 있으나 사용 할 수 없는 아이디를 말합니다.
            <br /> 1. 사이트를 오랫동안 방문하지 않은 회원의 아이디
            <br /> 2. 휴대폰번호가 변경이 되었으나 변경하지 못해, 이미 다른 회원이 동일한 휴대폰번호로 가입한 경우
            <br /> * 사용하시려면 아이디 복원을, 더 이상 사용을 원치 않을 경우 아이디 삭제 버튼을 클릭하여 주세요.
            <br /> 아이디 삭제와 동시에 현재 회원님의 아레오 캐쉬 및 포인트,
            <br /> 그리고 주소록 내의 연락처가 모두 삭제되며 회원님이 이용하셨던 모든 정보서비스 이용이 불가능하게
            됩니다.
            <br /> 또한 회원약관에 따라 아이디 삭제 후, 1개월 동안은 동일한 번호로 재가입이 불가능하오니 이점 양지하시기
            바랍니다.
          </Say015ApplyServiceGuide>
          <AgreementButtonWrap>
            <BaseButton
              width="138px"
              height="39px"
              marginLeft="2vw"
              backgroundColor="#0D42E5"
              fontWeight="bold"
              color="#fff"
              onClick={keepSignUp}
            >
              계속 가입
            </BaseButton>
          </AgreementButtonWrap>
        </SignUpFormWrapper>
      </Suspense>
    </SignUpContainer>
  );
};

export default SignUpIdCheck;
