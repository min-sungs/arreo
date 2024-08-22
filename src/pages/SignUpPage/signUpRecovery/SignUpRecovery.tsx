import React, { useEffect, useRef, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import BaseButton from '../../../components/Atom/BaseButton';
import { useRecoveryId } from '../../../components/hooks/customs/signUp/useRecoveryId';

import * as yup from 'yup';
import { useNoTokenPost } from '../../../apis/hooks/usePost';
import BaseInput from '../../../components/Atom/BaseInput';
import RecoveryTitle from '../../../components/Organism/Recovery/RecoveryTitle';
import { useModal } from '../../../components/hooks/customs/useModal';
import {
  AgreementButtonWrap,
  RecoveryPwInner,
  RecoveryPwWrap,
  SignUpContainer,
  SignUpFormWrapper,
  SignUpLine,
  ValidationError,
  ValidationMessage,
} from './SignUpRecovery.style';
import { checkDataProps } from './SignUpRecovery.types';
import CertifyMessageWrap from '../../../components/Organism/Recovery/CertifyMessageWrap';

interface sendMessageResType {
  authNum: string;
  sendCount: number;
}

const SignUpRecovery = () => {
  const location = useLocation();
  const usernameRef: any = useRef(null); // useRef로 ref 생성

  const [certifiNum, setCertifiNum] = useState<any>('');
  // 인증 문자 전송여부
  const [sendCertifyMessage, setSendCertifyMessage] = useState(false);

  // 인증 input 활성화 상태
  const [isCertify, setIsCertify] = useState<boolean>(false);

  // 만료시간 데이터
  const [min, setMin] = useState<any>(3);
  const [sec, setSec] = useState<any>(0);

  const time: any = useRef(180); // useRef hook time   변수 저장
  const timerId: any = useRef(0);

  const number = location.state.certifyData.phnId;
  const isCertifyCate = location.state.cert;
  const isSame = location.state.sameNumber;
  const isDealGb = location.state.certifyData.dealGb;
  const isType = location.state.type;

  // 휴면아이디 인증 메세지 전송 /sleep/restore/send-message
  const { mutate: certifyNum } = useNoTokenPost('/sleep/restore/send-message');

  // 인증 메세지 전송 확인 /sleep/restore/check-message
  const { mutate: certifyMessageMutate } = useNoTokenPost('/sleep/restore/check-message');

  // 비밀번호 재설정 /users/password
  const { mutate: resetPasswordMutate } = useNoTokenPost('/users/password');

  const { warningModal, successModal } = useModal();

  // 타이머 일시정지 함수
  function stopTimer() {
    clearInterval(timerId.current);
  }

  // 인증메세지 만료시간 계산 함수
  function timers() {
    timerId.current = setInterval(() => {
      const times = time.current / 60;
      setMin(Math.floor(times));
      setSec(time.current % 60);
      time.current -= 1;
    }, 1000);

    if (time.current <= 0) {
      stopTimer(); // 시간이 종료되면 타이머 중지
    }
  }

  // 타이머 다시 시작 함수
  function restartTimer() {
    stopTimer(); // 타이머 중지
    time.current = 180; // 초기값 설정 (원하는 초로 설정)
    setMin(3); // 초기값 설정 (원하는 분으로 설정)
    setSec(0); // 초기값 설정 (원하는 초로 설정)
    timers();
  }

  useEffect(() => {
    if (time.current <= 0) {
      stopTimer();
    }
  }, [time.current]);

  const schema = yup.object().shape({
    certifyNumber: yup.string(),

    // 비밀번호
    password: yup
      .string()
      .min(8, '최소 8자 이상 작성해야 합니다.')
      .max(16, '최대 16자까지 작성 가능합니다.')
      .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?!.*[\s!@#$%^&*()_+{}|:"<>?]).{8,}$/, '형식에 알맞지 않은 비밀번호입니다.')
      .required('비밀번호를 입력해 주세요!'),

    // 비밀번호 확인
    ispassword: yup
      .string()
      .oneOf([yup.ref('password'), ''], '비밀번호가 일치하지 않습니다.')
      .required('반드시 입력해주세요'),
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      certifyNumber: '',
      password: '',
      ispassword: '',
    },
  });

  const { password, ispassword, certifyNumber } = useRecoveryId({ control });

  // 입력값을 받아서 value에 따른 분기처리
  const handleUseFormInputChange = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
    onChange(value);
  };

  // 인증번호 문자 전송요청
  const handleCMSClick = () => {
    certifyNum(location.state.certifyData, {
      onSuccess: (res) => {
        timers();
        setCertifiNum(res.data.authNum);
        setSendCertifyMessage(true);
      },
      onError: (error: any) => {
        console.log(error);
        warningModal('실패', error.response.data, true);
      },
    });
  };

  useEffect(() => {
    setIsCertify(isCertifyCate);
  }, [isCertifyCate]);

  // 문자 재전송
  const handleResendCMS = () => {
    certifyNum(location.state.certifyData, {
      onSuccess: (res) => {
        successModal('성공', ' 인증번호 발송에 성공하였습니다.', true);
        restartTimer();
        setCertifiNum(res.data.authNum);
        setSendCertifyMessage(true);
      },
      onError: (error) => {
        warningModal('실패', '인증번호 발송에 실패하셨습니다.', true);
        console.log(error);
      },
    });
  };

  // 인증번호 확인 함수
  const handleCheckMessageClick = () => {
    const checkData: checkDataProps = {
      authNum: certifiNum,
      inputNum: certifyNumber.value,
    };
    certifyMessageMutate(checkData, {
      onSuccess: (res) => {
        if (res.data) {
          successModal('성공', '인증번호를 확인하였습니다.', true);
          setIsCertify(true);
          stopTimer();
        } else {
          warningModal('실패', '인증번호가 잘못되었습니다.', true);
        }
      },
      onError: (error) => {
        console.log(error);
        return error;
      },
    });
  };

  // 비밀번호 변경
  const handlePwChangeClick = (data: any) => {
    //   {
    //     "phnId" : "01045197434" //회원 ID
    //     "dealGb" : "1", //회원 구분
    //     "rsrvdId" : "000000006756114" // 회원 키값
    //     "usrPass" : "password123", //회원이 새로 입력한 비밀번호
    // }

    const resetData = {
      phnId: location.state.certifyData.phnId,
      dealGb: isDealGb,
      rsrvdId: location.state.certifyData.rsrvdId,
      usrPass: data.password,
    };

    resetPasswordMutate(resetData, {
      onSuccess: (res: any) => {
        if (res.data === 'success') {
          successModal('성공', '비밀번호 변경에 성공하셨습니다.', true, '/signIn');
        }
      },
      onError: () => {
        warningModal('실패', '비밀번호 변경에 실패하셨습니다.', true);
      },
    });

    // 에러가 발생한 경우 ref를 이용하여 해당 input 요소에 focus를 줄 수 있습니다.
  };

  return (
    <SignUpContainer>
      <SignUpFormWrapper>
        <RecoveryTitle number={number} isType={isType} isSame={isSame} isCertifyCate={isCertifyCate} />

        <SignUpLine />

        <CertifyMessageWrap
          onChange={handleUseFormInputChange}
          handleResndCMS={handleResendCMS}
          handleCheckMessageClick={handleCheckMessageClick}
          certifyNumber={certifyNumber}
          sendCertifyMessage={sendCertifyMessage}
          handleCMSClick={handleCMSClick}
          isCertifyCate={isCertifyCate}
          sec={sec}
          min={min}
          isCertify={isCertify}
        />

        <>
          {isCertify === true ? (
            <RecoveryPwWrap>
              <RecoveryPwInner>
                <div style={{ marginBottom: '40px' }}>
                  <BaseInput
                    type="password"
                    placeholder="비밀번호를 입력하세요."
                    width="20vw"
                    height="50px"
                    marginBotttom="10px"
                    onChange={(e) => handleUseFormInputChange({ value: e.target.value, onChange: password.onChange })}
                    value={password.value}
                    ref={usernameRef}
                  />

                  <ValidationMessage>❗️ 최소 8자. 최대 16자 이내(영문, 숫자 조합)으로 입력해주세요</ValidationMessage>
                  <ValidationError>{errors.password?.message}</ValidationError>
                </div>

                <div style={{ marginBottom: '40px' }}>
                  <BaseInput
                    type="password"
                    placeholder="비밀번호를 확인해주세요."
                    width="20vw"
                    height="50px"
                    marginBotttom="10px"
                    onChange={(e) => handleUseFormInputChange({ value: e.target.value, onChange: ispassword.onChange })}
                    value={ispassword.value}
                  />
                  <ValidationError>{errors.ispassword?.message}</ValidationError>
                </div>
              </RecoveryPwInner>
            </RecoveryPwWrap>
          ) : null}

          <AgreementButtonWrap>
            <BaseButton
              width="138px"
              height="39px"
              fontWeight="bold"
              backgroundColor="#0D42E5"
              color="#fff"
              disabled={!isCertify}
              onClick={handleSubmit(handlePwChangeClick)}
            >
              비밀번호 변경
            </BaseButton>
          </AgreementButtonWrap>
        </>
      </SignUpFormWrapper>
    </SignUpContainer>
  );
};

export default SignUpRecovery;
