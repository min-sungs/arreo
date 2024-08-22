import React from 'react';
import ATitle from '../../Atom/ATitle';
import BaseGuide from '../../Atom/BaseGuide';
import ManagementSubmit from '../../Molecules/MessageManagement/ManagementSubmit';
import BaseInput from '../../Atom/BaseInput';
import * as S from './styles/PwChange.styles';

import { AiFillEye } from 'react-icons/ai';
import { RiEyeOffFill } from 'react-icons/ri';
import { usePwChange } from '../../hooks/customs/myPage/usePwChange';

const PwChange = () => {
  const {
    profileInfo,
    visible,
    register,
    originPwHandleVisible,
    visible1,
    newPwHandleVisible,
    errors,
    visible2,
    checkNewPwHandleVisible,
    pwNewOriginCheck,
    buttonList,
  } = usePwChange();

  return (
    <>
      <S.AWrapper>
        <ATitle type="sub" text="기본정보" color="#0D42E5" />
        <S.AContents>
          <S.AContentsHead>
            <S.AContentsRow>
              <S.AContentsHeadCell>이름</S.AContentsHeadCell>
              <S.AContentsHeadCell>아이디</S.AContentsHeadCell>
            </S.AContentsRow>
          </S.AContentsHead>
          <S.AContentsBody>
            <S.AContentsRow>
              <S.AContentsBodyCell>{profileInfo?.usrNm}</S.AContentsBodyCell>
              <S.AContentsBodyCell>{profileInfo?.phnId}</S.AContentsBodyCell>
            </S.AContentsRow>
          </S.AContentsBody>
        </S.AContents>
      </S.AWrapper>
      <S.BWrapper>
        <S.TitleWrapper>
          <ATitle type="sub" text="비밀번호 변경" color="#0D42E5" />
          <span>_최소 8자, 최대 16자 이내(영문,숫자 조합)</span>
        </S.TitleWrapper>

        <S.BContents>
          <S.BContentsHead>
            <S.BContentsRow>
              <S.BContentsHeadCell>*기존 비밀번호</S.BContentsHeadCell>
              <S.BContentsHeadCell>*새 비밀번호</S.BContentsHeadCell>
              <S.BContentsHeadCell>*새 비밀번호 확인</S.BContentsHeadCell>
            </S.BContentsRow>
          </S.BContentsHead>
          <S.BContentsBody>
            <S.BContentsRow>
              <S.BContentsBodyCell>
                <BaseInput
                  type={visible ? 'text' : 'password'}
                  width="10vw"
                  height="2.2vh"
                  {...register('originPw', {
                    required: true,
                  })}
                />
                {visible ? (
                  <div style={{ marginLeft: '10px', fontSize: '22px' }}>
                    <AiFillEye onClick={originPwHandleVisible} />
                  </div>
                ) : (
                  <div style={{ marginLeft: '10px', fontSize: '20px' }}>
                    <RiEyeOffFill onClick={originPwHandleVisible} />
                  </div>
                )}
              </S.BContentsBodyCell>
              <S.BContentsBodyCell>
                <BaseInput type={visible1 ? 'text' : 'password'} width="10vw" height="2.2vh" {...register('newPw')} />
                {visible1 ? (
                  <div style={{ marginLeft: '10px', fontSize: '22px' }}>
                    <AiFillEye onClick={newPwHandleVisible} />
                  </div>
                ) : (
                  <div style={{ marginLeft: '10px', fontSize: '20px' }}>
                    <RiEyeOffFill onClick={newPwHandleVisible} />
                  </div>
                )}
                {errors?.newPw ? <S.ValidationError>{errors.newPw?.message}</S.ValidationError> : null}
              </S.BContentsBodyCell>
              <S.BContentsBodyCell>
                <BaseInput
                  type={visible2 ? 'text' : 'password'}
                  width="10vw"
                  height="2.2vh"
                  {...register('checkNewPw')}
                />

                {visible2 ? (
                  <div style={{ marginLeft: '10px', fontSize: '22px' }}>
                    <AiFillEye onClick={checkNewPwHandleVisible} />
                  </div>
                ) : (
                  <div style={{ marginLeft: '10px', fontSize: '20px' }}>
                    <RiEyeOffFill onClick={checkNewPwHandleVisible} />
                  </div>
                )}
                {pwNewOriginCheck && <S.ValidationError>비밀번호가 일치하지 않습니다.</S.ValidationError>}
              </S.BContentsBodyCell>
            </S.BContentsRow>
          </S.BContentsBody>
        </S.BContents>
      </S.BWrapper>
      <S.ButtonWrapper>
        <ManagementSubmit buttonList={buttonList} />
      </S.ButtonWrapper>
      <BaseGuide
        text="개인정봅취급방침에 따라 개인정보를 보호하고, 회원님의 동의 없이 절대 외부에 유출하지 않을 것을 약속드립니다.
                <br />빠른 가입방법으로 가입하신 분들은 선택 항목 및 수신여부 선택 시 300ⓟ를 충전해 드립니다."
      />
    </>
  );
};
export default PwChange;
