import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import { RiEyeOffFill } from 'react-icons/ri';
import ATitle from '../../Atom/ATitle';
import BaseCheckBox from '../../Atom/BaseCheckBox';
import BaseInput from '../../Atom/BaseInput';
import ManagementSubmit from '../../Molecules/MessageManagement/ManagementSubmit';
import Loader from '../../common/Loader';
import { useMemberLeave } from '../../hooks/customs/myPage/useMemberLeave';
import * as S from './styles/MemberLeave.styles';

const MemberLeave = () => {
  const {
    isLoading,
    getUseInfo,
    checkedAgreeHandle,
    agreeItem,
    visible,
    register,
    errors,
    originPwHandleVisible,
    buttonList,
  } = useMemberLeave();

  return (
    <>
      <S.AWrapper>
        <S.ATitleWrapper>
          <S.ATitleBox>
            <ATitle type="sub" text="회원탈퇴" color="#0D42E5" />
          </S.ATitleBox>
          <S.TextWrapper>
            <S.TextBox>회원탈퇴 신청에 앞서 아래의 사항을 반드시 확인하시기 바랍니다.</S.TextBox>
            <S.LiStyle>
              회원탈퇴 신청을 통해 아이디를 해지하시면 해당 아이디는 즉시 탈퇴 처리됩니다. 또한 회원님의 캐쉬/포인트,
              주소록, 기타 서비스 이용내역이 모두 자동 삭제되고, 아레오의 모든 서비스를 이용하실 수 없게 됩니다.
            </S.LiStyle>
            <S.LiStyle>
              이용약관에 따라 탈퇴 후 1개월 동안 동일한 번호로 재가입이 불가능하오니 이점 양지하시기 바랍니다.
            </S.LiStyle>
          </S.TextWrapper>
        </S.ATitleWrapper>
      </S.AWrapper>
      <S.BWrapper>
        <ATitle type="sub" text="기본정보" color="#0D42E5" />
        {isLoading ? (
          <Loader />
        ) : (
          <S.BContents>
            <S.BContentsHead>
              <S.BContentsRow>
                <S.BContentsHeadCell>이름</S.BContentsHeadCell>
                <S.BContentsHeadCell>아이디</S.BContentsHeadCell>
                <S.BContentsHeadCell>잔여캐쉬</S.BContentsHeadCell>
                <S.BContentsHeadCell>주소록</S.BContentsHeadCell>
              </S.BContentsRow>
            </S.BContentsHead>
            <S.BContentsBody>
              <S.BContentsRow>
                <S.BContentsBodyCell>{getUseInfo?.usrNm}</S.BContentsBodyCell>
                <S.BContentsBodyCell>{getUseInfo?.phnId}</S.BContentsBodyCell>
                <S.BContentsBodyCell>
                  <S.CashWrap>
                    <S.CashDiv>{getUseInfo?.usePg} ⓒ</S.CashDiv>
                    <S.PointDiv> {getUseInfo?.useCc} ⓟ</S.PointDiv>
                  </S.CashWrap>
                </S.BContentsBodyCell>
                <S.BContentsBodyCell>{getUseInfo?.buddyCnt}명</S.BContentsBodyCell>
              </S.BContentsRow>
            </S.BContentsBody>
          </S.BContents>
        )}
      </S.BWrapper>
      <S.CWrapper>
        <ATitle type="sub" text="동의항목" color="#0D42E5" />
        <S.CContents>
          <S.AgreeList type="1">
            <S.AgreeItem>포인트 환불 불가</S.AgreeItem>
            <S.AgreeItem>주소록에 보관중인 모든 주소 데이터 자동 삭제 및 공유중인 주소록 업데이트 중단</S.AgreeItem>
            <S.AgreeItem>
              신청한 015번호 관련 서비스 이용 불가 및 문자/팩스/음성보관함 보관함에 저장중인 모든 데이터 삭제
            </S.AgreeItem>
            <S.AgreeItem>이메일 계정 및 보관중인 메일 데이터 삭제</S.AgreeItem>
            <S.AgreeItem>015 삐삐앱 사용 불가</S.AgreeItem>
          </S.AgreeList>
          <S.AgreeCheckBoxWrapper>
            <BaseCheckBox
              name="agree"
              label="위의 내용을 숙지하였으며, 5가지 항목에 대해 모두 동의합니다."
              onChange={(e) => checkedAgreeHandle(e)}
              checked={agreeItem}
            />
          </S.AgreeCheckBoxWrapper>
        </S.CContents>
      </S.CWrapper>
      <S.DWrapper>
        <S.DTitleWrapper>
          <ATitle type="sub" text="동의항목" color="#0D42E5" />
          <span>회원탈퇴 신청을 진행하기에 앞서 패스워드 인증을 확인합니다.회원탈퇴 신청을 하시겠습니까?</span>
        </S.DTitleWrapper>
        <S.DContents>
          <S.DContentsHead>
            <S.DContentsRow>
              <S.DContentsHeadCell>비밀번호 확인</S.DContentsHeadCell>
            </S.DContentsRow>
          </S.DContentsHead>
          <S.DContentsBody>
            <S.DContentsRow>
              <S.DContentsBodyCell>
                <BaseInput
                  type={visible ? 'text' : 'password'}
                  width="10vw"
                  height="2.2vh"
                  {...register('originPw', {
                    required: true,
                  })}
                  border={errors.originPw ? '1px solid red' : '0px solid'}
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
                <S.ValidSpan>{errors.originPw?.message}</S.ValidSpan>
              </S.DContentsBodyCell>
            </S.DContentsRow>
          </S.DContentsBody>
        </S.DContents>
      </S.DWrapper>
      <S.ButtonWrapper>
        <ManagementSubmit buttonList={buttonList} />
      </S.ButtonWrapper>
    </>
  );
};

export default MemberLeave;
