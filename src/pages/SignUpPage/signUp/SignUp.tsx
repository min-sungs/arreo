import React, { Suspense, useEffect } from 'react';

import { AgreementProps } from '../../../apis/utils/typeGuard/signUpGuard';
import BaseButton from '../../../components/Atom/BaseButton';
import BaseCheckBox from '../../../components/Atom/BaseCheckBox';
import Agreement from '../../../components/Molecules/SignUp/Agreement';
import SignUpProcess from '../../../components/common/SignUpLayout/SignUpProcess';
import { useSignUp } from '../../../components/hooks/customs/signUp/useSignUp';
import {
  AgreementButtonWrap,
  AgreementWrap,
  SignUpContainer,
  SignUpFormWrapper,
  TermLine,
  TermsHeading,
  TermsSubHeading,
} from './SignUp.style';
import { LoadingComponent } from '../../../apis/utils/LoadingComponent';
import Loader from '../../../components/common/Loader';

const SignUp = () => {
  const process: string = '1';

  const {
    onClickCertify,
    checkItemHandler,
    isAble,
    toggleAllCheckedById,
    checkSize,
    checkItems,
    signUpData,
    signUpLoading,
  } = useSignUp();

  return (
    <SignUpContainer>
      {signUpLoading === true ? (
        <SignUpFormWrapper>
          <SignUpProcess process={process} />
          <div style={{ height: '100vw' }}>
            <Loader />
          </div>
        </SignUpFormWrapper>
      ) : (
        <SignUpFormWrapper>
          <SignUpProcess process={process} />
          <TermsHeading>
            아레오는 원활한 서비스 이용과 익명사용자로 인한 명예 훼손 등의 피해를 방지하기 위해 안심인증과 아이핀(i-PIN)
            인증을 통한 가입을 시행하고 있습니다. 입력하신 소중한 개인정보는 회원님의 동의없이 공개되거나 제3자에게
            제공되지 않으며, 개인정보 취급방침에 따라 보호하고 있습니다...
          </TermsHeading>
          <TermsSubHeading>
            14세 이상만 회원가입이 가능합니다. 타인의 개인정보를 부정 사용하는 자는 3년 이하의 징역 또는 1천만원 이하의
            벌금이 부과될 수 있습니다.
          </TermsSubHeading>
          <TermLine />

          <BaseCheckBox label="전체 동의" onChange={toggleAllCheckedById} checked={checkSize === 4} />
          <AgreementWrap>
            {signUpData.slice(0, 4).map((element: AgreementProps) => {
              return (
                <Agreement
                  key={element.id} // 각 요소에 고유한 키를 제공해야 합니다.
                  checkItemHandler={() => checkItemHandler(element.id)}
                  element={element}
                  checked={checkItems}
                />
              );
            })}
          </AgreementWrap>
          <AgreementButtonWrap>
            <BaseButton
              onClick={onClickCertify}
              width="138px"
              height="39px"
              disabled={isAble}
              backgroundColor="#0D42E5"
              fontWeight="bold"
              color="#fff"
            >
              안심 인증
            </BaseButton>
            <BaseButton
              width="138px"
              height="39px"
              disabled={isAble}
              backgroundColor="#000"
              fontWeight="bold"
              color="#fff"
              marginLeft="55px"
            >
              아이핀(i-PIN)
            </BaseButton>
          </AgreementButtonWrap>
        </SignUpFormWrapper>
      )}
    </SignUpContainer>
  );
};

export default SignUp;
