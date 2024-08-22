import React from 'react';
import ATitle from '../../Atom/ATitle';
import BaseButton from '../../Atom/BaseButton';
import BaseGuide from '../../Atom/BaseGuide';
import { usePhoneNumberChange } from '../../hooks/customs/myPage/usePhoneNumberChange';
import * as S from './styles/PhoneNumberChange.styles';

const PhoneNumberChange = () => {
  const { popupFunc } = usePhoneNumberChange();

  return (
    <>
      <S.AWrapper>
        <ATitle type="sub" text="휴대폰번호 변경" color="#0D42E5" />
        <S.AContents>
          <S.AContentsHead>
            <S.AContentsRow>
              <S.AContentsHeadCell>번호인증</S.AContentsHeadCell>
            </S.AContentsRow>
          </S.AContentsHead>
          <S.AContentsBody>
            <S.AContentsRow>
              <S.AContentsBodyCell>
                <BaseButton
                  width="200px"
                  height="30px"
                  fontSize="14px"
                  fontWeight="bold"
                  color="#FFFFFF"
                  backgroundColor="#0D42E5"
                  onClick={() => popupFunc()}
                >
                  휴대폰 인증하기
                </BaseButton>
              </S.AContentsBodyCell>
            </S.AContentsRow>
          </S.AContentsBody>
        </S.AContents>
      </S.AWrapper>
      <S.ButtonWrapper />
      <BaseGuide
        text="아레오에서는 휴대폰번호를 아이디로 이용하고 있습니다.
                <br />따라서 휴대폰번호가 변경될 경우 아이디를 변경할 수 있습니다.
                <br />소지하고 계시는 휴대폰번호를 통해 인증을 받은 후 아이디(휴대폰번호)가 변경됩니다.
                <br />휴대폰번호 변경 전 ID로 메일이 도착하더라도수신된 메일을 변경 후 ID로 전달할 수 없습니다.
                <br />메일도착알림이 설정되어 있을 경우 꼭 `받지않음`으로 변경해 주시기 바랍니다.
                <br />본인이 아닌 타인 휴대폰을 이용하여 회원정보를 임의로 변경할 경우, 개인정보도용에 의해 형사처벌 받을 수 있습니다."
      />
    </>
  );
};
export default PhoneNumberChange;
