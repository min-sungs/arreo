import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';
import ATitle from '../../Atom/ATitle';
import BaseButton from '../../Atom/BaseButton';
import BaseGuide from '../../Atom/BaseGuide';
import BaseInput from '../../Atom/BaseInput';
import BaseRadio from '../../Atom/BaseRadio';
import BaseSelect from '../../Atom/BaseSelect';
import RegisterSelectBox from '../../Atom/RegisterSelectBox';
import GroupRadio from '../../Molecules/GroupRadio';
import ManagementSubmit from '../../Molecules/MessageManagement/ManagementSubmit';
import Loader from '../../common/Loader';
import { useUserInfoChange } from '../../hooks/customs/myPage/useUserInfoChange';
import * as S from './styles/UserInfoChange.styles';

interface MyPageInfoProps {
  addr: string;
  birthDt: string;
  cpAddr: string;
  cpZipCd: string;
  domain: string;
  emailRcvYn: string;
  jobGb: string;
  lunGb: string;
  marryDt: string;
  marryGb: string;
  nickNm: string;
  phnId: string;
  smsRcvYn: string;
  userTel1: string;
  userTel2: string;
  userTel3: string;
  usrEmail: string;
  usrNm: string;
  zipCd: string;
}

interface MypageProps {
  profileInfo: MyPageInfoProps | undefined;
  isError: boolean;
  isLoading: boolean;
}

const ModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 999;
  overflow: auto;
`;

export const domainList = [
  { value: '선택하세요', label: '선택하세요' },
  { value: '직접입력', label: '직접입력' },
  { value: 'arreo.com', label: 'arreo.com' },
  { value: 'netian.com', label: 'netian.com' },
  { value: 'chol.com', label: 'chol.com' },
  { value: 'empal.com', label: 'empal.com' },
  { value: 'freechal.com', label: 'freechal.com' },
  { value: 'gmail.com', label: 'gmail.com' },
  { value: 'hanafos.com', label: 'hanafos.com' },
  { value: 'hanmail.net', label: 'hanmail.net' },
  { value: 'hotmail.com', label: 'hotmail.com' },
  { value: 'korea.com', label: 'korea.com' },
  { value: 'nate.com', label: 'nate.com' },
  { value: 'naver.com', label: 'naver.com' },
  { value: 'paran.com', label: 'paran.com' },
  { value: 'yahoo.co.kr', label: 'yahoo.co.kr' },
  { value: 'yahoo.com', label: 'yahoo.com' },
];

export const phoneNumberList = [
  { label: '010', value: '010' },
  { label: '011', value: '011' },
  { label: '016', value: '016' },
  { label: '017', value: '017' },
  { label: '018', value: '018' },
  { label: '019', value: '019' },
  { label: '02', value: '02' },
  { label: '031', value: '031' },
  { label: '032', value: '032' },
  { label: '033', value: '033' },
  { label: '041', value: '041' },
  { label: '042', value: '042' },
  { label: '043', value: '043' },
  { label: '051', value: '051' },
  { label: '052', value: '052' },
  { label: '053', value: '053' },
  { label: '054', value: '054' },
  { label: '055', value: '055' },
  { label: '061', value: '061' },
  { label: '062', value: '062' },
  { label: '063', value: '063' },
  { label: '064', value: '064' },
  { label: '070', value: '070' },
];

export const jobList = [
  { label: '선택해 주세요', value: '' },
  { label: '초중고등학생', value: '01' },
  { label: '대학생', value: '02' },
  { label: '대학원생', value: '03' },
  { label: '무직', value: '04' },
  { label: '가정주부', value: '05' },
  { label: '자영업', value: '06' },
  { label: '의료계', value: '07' },
  { label: '언론,출판', value: '08' },
  { label: '법조인', value: '09' },
  { label: '초중고교사', value: '10' },
  { label: '대학교수', value: '11' },
  { label: '종교인', value: '12' },
  { label: '방송,연예,예술,스포츠', value: '13' },
  { label: '서비스', value: '14' },
  { label: '공무원', value: '15' },
  { label: '회사원', value: '16' },
  { label: '농축수임업', value: '17' },
  { label: '단순노무일용직', value: '18' },
  { label: '기타', value: '19' },
];

const UserInfoChange = () => {
  const {
    isLoading,
    modalState,
    closeOverlay,
    postCodeStyle,
    postCodeStyle1,
    onCompletePost,
    modalState1,
    onCompletePost1,
    profileInfo,
    register,
    handleKeyPress,
    emailDomain,
    handleDomain,
    setModalState,
    setModalState1,
    phoneSelectedOption,
    handleNumberFirst,
    buttonList,
  } = useUserInfoChange();

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <S.AWrapper>
            {modalState && (
              <ModalOverlay onClick={closeOverlay}>
                <DaumPostcode style={postCodeStyle} onComplete={onCompletePost} autoClose />
              </ModalOverlay>
            )}
            {modalState1 && (
              <ModalOverlay onClick={closeOverlay}>
                <DaumPostcode style={postCodeStyle1} onComplete={onCompletePost1} autoClose />
              </ModalOverlay>
            )}

            <ATitle type="sub" text="필수항목" color="#0D42E5" />
            <S.AContents>
              <S.AContentsBody>
                <S.AContentsRow>
                  <S.AContentsHeadCell>아이디</S.AContentsHeadCell>
                  <S.AContentsBodyCell>
                    {profileInfo?.phnId.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')}
                  </S.AContentsBodyCell>
                </S.AContentsRow>

                <S.AContentsRow>
                  <S.AContentsHeadCell>이름</S.AContentsHeadCell>
                  <S.AContentsBodyCell>{profileInfo?.usrNm}</S.AContentsBodyCell>
                </S.AContentsRow>

                <S.AContentsRow>
                  <S.AContentsHeadCell rowSpan={2}>이메일주소</S.AContentsHeadCell>
                  <S.AContentsBodyCell>
                    <S.EmailBoxForm>
                      <S.EmailInput
                        type="text"
                        placeholder="이메일을 입력해주세요."
                        {...register('usrEmail', {})}
                        onKeyPress={handleKeyPress}
                      />
                      <p>@</p>
                      <S.EmailInput {...register('domain', {})} />
                      <BaseSelect options={domainList} value={emailDomain} onChange={handleDomain} />
                    </S.EmailBoxForm>
                  </S.AContentsBodyCell>
                </S.AContentsRow>

                <S.AContentsRow>
                  <S.AContentsBodyCell style={{ padding: 6 }}>
                    <S.AgreeCheckBoxWrapper>
                      <input type="checkbox" id="agree" />
                      <label htmlFor="agree">아레오 메일(휴대폰번호@arreo.com)을 기본메일 주소로 사용합니다.</label>
                    </S.AgreeCheckBoxWrapper>
                  </S.AContentsBodyCell>
                </S.AContentsRow>
              </S.AContentsBody>
            </S.AContents>
          </S.AWrapper>

          <S.BWrapper>
            <ATitle type="sub" text="선택항목" color="#0D42E5" />
            <S.BContents>
              <S.BContentsBody>
                <S.BContentsRow>
                  <S.BContentsHeadCell rowSpan={2}>주소</S.BContentsHeadCell>
                  <S.BContentsBodyCell>
                    <S.AddressContainer>
                      <S.AddressWrap>
                        <S.InputName>자택</S.InputName>
                        {/* <KakaoPostcode
                            // address={profileInfo?.zipCd}
                            // postCode={profileInfo?.addr}
                            // onChange={handleAddress}
                            setFirstValueAddress={setFirstValueAddress1}
                            setSecondValueAddress={setSecondValueAddress1}
                            // firstValueAddress={firstValueAddress1}
                            // secondValueAddress={secondValueAddress1}
                            register={register}
                            nameRegister="zipCd"
                            postRegister="addr"
                          /> */}
                        <div
                          style={{
                            width: '30vw',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginRight: '18px',
                          }}
                        >
                          <BaseInput
                            type="text"
                            width="7.7vw"
                            height="24px"
                            backgroundColor="#fff"
                            {...register('zipCd', {})}
                            disabled
                          />
                          <BaseInput
                            type="text"
                            width="20vw"
                            height="24px"
                            backgroundColor="#fff"
                            {...register('addr')}
                          />
                        </div>
                        <BaseButton
                          width="5.7vw"
                          height="24px"
                          backgroundColor="#0D42E5"
                          color="#fff"
                          onClick={() => setModalState(true)}
                        >
                          우편번호 검색
                        </BaseButton>
                      </S.AddressWrap>
                    </S.AddressContainer>
                  </S.BContentsBodyCell>
                </S.BContentsRow>

                <S.BContentsRow>
                  <S.BContentsBodyCell>
                    <S.AddressContainer>
                      <S.AddressWrap>
                        <S.InputName>직장</S.InputName>
                        <div
                          style={{
                            width: '30vw',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginRight: '18px',
                          }}
                        >
                          <BaseInput
                            type="text"
                            width="7.7vw"
                            height="24px"
                            backgroundColor="#fff"
                            {...register('cpZipCd')}
                            disabled
                          />
                          <BaseInput
                            type="text"
                            width="20vw"
                            height="24px"
                            backgroundColor="#fff"
                            {...register('cpAddr')}
                          />
                        </div>
                        <BaseButton
                          width="5.7vw"
                          height="24px"
                          backgroundColor="#0D42E5"
                          color="#fff"
                          onClick={() => setModalState1(true)}
                        >
                          우편번호 검색
                        </BaseButton>
                        {/* <KakaoPostcode
                            // address={profileInfo?.cpAddr}
                            // postCode={profileInfo?.cpZipCd}
                            // onChange={handleAddress}
                            setFirstValueAddress={setFirstValueAddress2}
                            setSecondValueAddress={setSecondValueAddress2}
                            // firstValueAddress={firstValueAddress2}
                            // secondValueAddress={secondValueAddress2}
                            register={register}
                            nameRegister="cpAddr"
                            postRegister="cpZipCd"
                          /> */}
                      </S.AddressWrap>
                    </S.AddressContainer>
                  </S.BContentsBodyCell>
                </S.BContentsRow>

                <S.BContentsRow>
                  <S.BContentsHeadCell>닉네임</S.BContentsHeadCell>
                  <S.BContentsBodyCell>
                    <S.NicknameWrapper>
                      <S.NicknameInput
                        type="text"
                        id="nickname"
                        placeholder="사용하실 닉네임을 입력해주세요."
                        {...register('nickNm', {})}
                      />
                      <span>
                        닉네임은 그림문자 혹은 포토문자 등록 시 글쓴이로 사용됩니다. (닉네임 미지정시, 회원님의 이름으로
                        표기)
                        <br /> 최소 3자, 최대 10자(한글 10자, 영수자 포함 20자)까지 작성 가능합니다.
                      </span>
                    </S.NicknameWrapper>
                  </S.BContentsBodyCell>
                </S.BContentsRow>

                <S.BContentsRow>
                  <S.BContentsHeadCell>연락처</S.BContentsHeadCell>
                  <S.BContentsBodyCell>
                    <S.PhonenumberWrap>
                      <BaseSelect options={phoneNumberList} value={phoneSelectedOption} onChange={handleNumberFirst} />
                      <div>-</div>
                      <BaseInput type="text" height="24px" width="6%" placeholder="" {...register('userTel2', {})} />
                      <div>-</div>
                      <BaseInput type="text" height="24px" width="6%" placeholder="" {...register('userTel3', {})} />
                      <span>(휴대폰 외에 연락가능한 전화번호)</span>
                    </S.PhonenumberWrap>
                  </S.BContentsBodyCell>
                </S.BContentsRow>

                <S.BContentsRow>
                  <S.BContentsHeadCell>생일</S.BContentsHeadCell>
                  <S.BContentsBodyCell>
                    <S.BirthDateWrap>
                      {profileInfo?.birthDt.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')}
                    </S.BirthDateWrap>
                  </S.BContentsBodyCell>
                </S.BContentsRow>

                <S.BContentsRow>
                  <S.BContentsHeadCell>직업</S.BContentsHeadCell>
                  <S.BContentsBodyCell>
                    {/* <BaseSelect
                        options={jobList}
                        value={jobSelectedOption}
                        // onChange={handleJob}
                        {...register('jobGb')}
                      /> */}
                    <RegisterSelectBox options={jobList} value={profileInfo?.jobGb} register={register} field="jobGb" />
                  </S.BContentsBodyCell>
                </S.BContentsRow>
              </S.BContentsBody>
            </S.BContents>
          </S.BWrapper>

          <S.CWrapper>
            <ATitle type="sub" text="수신여부" color="#0D42E5" />
            <S.CContents>
              <S.CContentsBody>
                <S.CContentsRow>
                  <S.CContentsHeadCell style={{ flex: 1 }}>광고 문자</S.CContentsHeadCell>
                  <S.CContentsBodyCell>
                    <S.AdsmsWrap>
                      <GroupRadio>
                        <BaseRadio name="smsRcv" value="Y" defaultChecked register={register} registerField="smsRcvYn">
                          수신
                        </BaseRadio>
                        <BaseRadio name="smsRcv" value="N" register={register} registerField="smsRcvYn">
                          미수신
                        </BaseRadio>
                        <span>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;아레오에서 발송되는 광고문자 1건 수신시, 25ⓟ 적립
                        </span>
                      </GroupRadio>
                    </S.AdsmsWrap>
                  </S.CContentsBodyCell>
                </S.CContentsRow>

                <S.CContentsRow>
                  <S.CContentsHeadCell style={{ flex: 1 }}>이메일</S.CContentsHeadCell>
                  <S.CContentsBodyCell>
                    <S.CCheckboxWrapper>
                      <GroupRadio>
                        <BaseRadio
                          name="emailRcv"
                          value="Y"
                          defaultChecked
                          register={register}
                          registerField="emailRcvYn"
                        >
                          수신
                        </BaseRadio>
                        <BaseRadio name="emailRcv" value="N" register={register} registerField="emailRcvYn">
                          미수신
                        </BaseRadio>
                        <span>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;아레오에서 발송되는 광고문자 1건 수신시, 25ⓟ 적립
                        </span>
                      </GroupRadio>
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;중요한 공지내용 안내</span>
                    </S.CCheckboxWrapper>
                  </S.CContentsBodyCell>
                </S.CContentsRow>
              </S.CContentsBody>
            </S.CContents>
          </S.CWrapper>
          <S.ButtonWrapper>
            {/* <button type="button" onClick={handleSubmit(onSubmit)} /> */}
            <ManagementSubmit buttonList={buttonList} />
          </S.ButtonWrapper>
          <BaseGuide
            text="개인정보취급방침에 따라 개인정보를 보호하고, 회원님의 동의 없이 절대 외부에 유출하지 않을 것을 약속드립니다.
                <br />빠른 가입방법으로 가입하신 분들은 선택 항목 및 수신여부 선택 시 300ⓟ를 충전해 드립니다."
          />
        </>
      )}
    </div>
  );
};
export default UserInfoChange;
