import React from 'react';
import {
  CertifyInner,
  CertifyTimer,
  CertifyTitle,
  CertifyWrap,
} from '../../../pages/SignUpPage/signUpRecovery/SignUpRecovery.style';
import BaseInput from '../../Atom/BaseInput';
import BaseButton from '../../Atom/BaseButton';

const CertifyMessageWrap = ({
  onChange,
  certifyNumber,
  sendCertifyMessage,
  handleCheckMessageClick,
  handleResendCMS,
  handleCMSClick,
  sec,
  min,
  isCertify,
}: any) => {
  return (
    <CertifyWrap>
      {isCertify === true ? null : (
        <CertifyInner>
          <CertifyTitle>인증번호</CertifyTitle>
          <BaseInput
            type="number"
            placeholder="인증번호를 입력하세요."
            width="20vw"
            height="50px"
            marginRight="20px"
            value={certifyNumber.value}
            onChange={(e) => onChange({ value: e.target.value, onChange: certifyNumber.onChange })}
          />
          {sec === 0 ? (
            <CertifyTimer>
              {min} : 0{sec} 만료시간
            </CertifyTimer>
          ) : (
            <CertifyTimer>
              {min} : {sec} 만료시간
            </CertifyTimer>
          )}
          {sendCertifyMessage ? (
            <>
              <BaseButton
                width="50px"
                height="39px"
                fontWeight="bold"
                backgroundColor="#0D42E5"
                color="#fff"
                onClick={() => handleResendCMS()}
              >
                인증번호 재요청
              </BaseButton>
              <BaseButton
                width="50px"
                height="39px"
                fontWeight="bold"
                backgroundColor="#0D42E5"
                color="#fff"
                onClick={() => handleCheckMessageClick()}
              >
                확인
              </BaseButton>
            </>
          ) : (
            <BaseButton
              width="50px"
              height="39px"
              fontWeight="bold"
              backgroundColor="#0D42E5"
              color="#fff"
              onClick={() => handleCMSClick()}
            >
              인증번호 요청
            </BaseButton>
          )}
        </CertifyInner>
      )}
    </CertifyWrap>
  );
};

export default CertifyMessageWrap;
