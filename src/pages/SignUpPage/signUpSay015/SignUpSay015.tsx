import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { useLocation } from 'react-router-dom';
import { AgreementProps } from '../../../apis/utils/typeGuard/signUpGuard';
import BaseButton from '../../../components/Atom/BaseButton';
import BaseCheckBox from '../../../components/Atom/BaseCheckBox';
import BaseInput from '../../../components/Atom/BaseInput';
import SignUpProcess from '../../../components/common/SignUpLayout/SignUpProcess';
import use015Validation from '../../../components/hooks/customs/signUp/use015Validation';

import { useQuery } from '@tanstack/react-query';
import DaumPostcode from 'react-daum-postcode';
import { get015ResNum } from '../../../apis/api/say015Apis';
import { useSignUp } from '../../../components/hooks/customs/signUp/useSignUp';

import { v4 as uuidv4 } from 'uuid';
import { useGet015Num } from '../../../components/hooks/customs/signUp/useGet015Num';
import {
  AgreementButtonWrap,
  ErrorWrap,
  Label,
  ModalOverlay,
  Say015ApplyInfo,
  Say015ApplyInput,
  Say015ApplyServiceGuide,
  Say015ApplySubTitle,
  Say015ApplyTitle,
  SignUpContainer,
  SignUpCustomButtonWrap,
  SignUpFormWrapper,
  SignUpLine,
  ValidationError,
} from './SignUpSay015.style';

const SignUpSay015 = () => {
  const process: string = '3';
  const url: string = 'FindAccountNiceCheck';
  const { schema } = use015Validation();
  const { signUpData } = useSignUp();
  // 동의 항목 체크박스 기능
  const [checkItems, setCheckItems] = useState(new Set());
  const [inputAddressValue, setInputAddressValue] = useState('');
  const [modalState, setModalState] = useState(false);
  const [inputZipCodeValue, setInputZipCodeValue] = useState('');
  const [inputBuildingCodeValue, setInputBuildingCodeValue] = useState('');
  const location = useLocation();
  const info = location.state;

  const checkItemHandler = (id: any, isChecked: any) => {
    if (isChecked) {
      checkItems.add(id);
      setCheckItems(new Set([...checkItems, id]));
    } else if (!isChecked) {
      setCheckItems(new Set([...checkItems].filter((item) => item !== id)));
    }
  };

  const postCodeStyle: any = {
    width: '400px',
    height: '400px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    zIndex: 1000,
    display: modalState ? 'block' : 'none',
    boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.75)',
  };

  const closeOverlay = () => {
    setModalState(false);
  };

  const onCompletePost = (data: any) => {
    setModalState(false);
    setInputAddressValue(data.address);
    setInputZipCodeValue(data.zonecode);
    setInputBuildingCodeValue(data.buildingName);
  }; // onCompletePost 함수

  // 015 번호 신청 버튼 활성화 기능
  const [isAble, setIsAble] = useState<boolean>(true);

  // todo : 015 체크박스 기능
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (value: any) => {
    setIsChecked(value);
  };

  // 015q번호 추천 리스트
  const {
    isLoading: recNumLoadings,
    data: recNum,
    isError,
    error,
  } = useQuery(['recommendedNum'], () => get015ResNum(), { select: ({ data }) => data.content });

  // 파일 다운로드 버튼
  const downloadFile = () => {
    const fileContent = '내려받을 파일의 내용';

    // Blob 생성
    const blob = new Blob([fileContent], { type: 'text/plain' });

    // URL 생성
    const applyUrl = URL.createObjectURL(blob);

    // 가상 링크 생성
    const link = document.createElement('a');
    link.href = applyUrl;
    link.download = '015신청서.txt'; // 파일명 설정

    // 링크를 클릭하여 다운로드 유도
    link.click();

    // 다운로드 후 URL 해제
    URL.revokeObjectURL(applyUrl);
  };

  // form 등록 기능
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      phoneNumber: `${info?.inputNumber}`,
      number015fir: '015',
      number015sec: '',
      number015thr: '',
      password: '',
      name: `${info?.inputName}`,
      adress1: '',
      adress2: '',
      adress3: '',
      //   email: "",
    },
  });

  // useform 커스텀 훅으로 변환하여 코드 단순화
  const { recNumber, number015fir, number015sec, number015thr } = useGet015Num({ control });

  // 입력값을 받아서 value에 따른 분기처리
  const handleRec015NumberChange = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
    onChange(value);
  };

  const onSubmit = (data: any) => {};

  return (
    <SignUpContainer>
      {modalState && (
        <ModalOverlay onClick={closeOverlay}>
          <DaumPostcode style={postCodeStyle} onComplete={onCompletePost} autoClose />
        </ModalOverlay>
      )}
      <SignUpFormWrapper>
        <SignUpProcess process={process} />
        <Say015ApplyTitle>015 번호 하나로 문자메시지, 음성사서함, 팩스 서비스를 편리하게 이용하세요.</Say015ApplyTitle>
        <Say015ApplySubTitle>
          단말기 보급 전까지 015번호 이용료는 무료이며, 문자 발송과 팩스 사용료만 건별로 과금됩니다.
        </Say015ApplySubTitle>
        <SignUpCustomButtonWrap>
          <BaseButton width="6.5vw" height="2.2vh" backgroundColor="#000" color="#fff">
            015 신청 안함
          </BaseButton>
        </SignUpCustomButtonWrap>
        <SignUpLine />
        <form>
          <Say015ApplyInfo>
            <Say015ApplyInput>
              <Label>연락처</Label>
              <BaseInput
                type="text"
                width="16.4vw"
                height="30px"
                backgroundColor="#fff"
                disabled
                {...register('phoneNumber', {
                  required: '해당 필드는 필수입니다.',
                  minLength: {
                    value: 11,
                    message: '11글자 이상 입력해주세요.',
                  },
                })}
              />
            </Say015ApplyInput>
            <Say015ApplyInput>
              <Label>번호 선택</Label>
              <ErrorWrap>
                <div
                  style={{
                    width: '16.4vw',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginRight: '18px',
                  }}
                >
                  {/* // todo: 밸류값 안나오는 문제 해결해야함 */}
                  <BaseInput type="text" width="30%" height="30px" backgroundColor="#F5F5F5" disabled value="015" />
                  <span
                    style={{
                      fontSize: '1.5rem',
                      margin: '0 10px',
                    }}
                  >
                    -
                  </span>
                  <BaseInput
                    type="text"
                    width="30%"
                    height="30px"
                    backgroundColor="#fff"
                    value={recNumber?.value?.match(/^.{0,4}/)?.[0]}
                    onChange={(event) =>
                      handleRec015NumberChange({ value: event.target.name, onChange: number015sec.onChange })
                    }
                  />
                  <span
                    style={{
                      fontSize: '1.5rem',
                      margin: '0 10px',
                    }}
                  >
                    -
                  </span>
                  <BaseInput
                    type="text"
                    width="30%"
                    height="30px"
                    backgroundColor="#fff"
                    value={recNumber.value?.match(/.{4}$/)?.[0]}
                    onChange={(event) =>
                      handleRec015NumberChange({ value: event.target.name, onChange: number015thr.onChange })
                    }
                  />
                </div>
                {errors?.number015sec ? <ValidationError>{errors.number015sec?.message}</ValidationError> : null}
              </ErrorWrap>
              <BaseButton width="5.7vw" height="2.2vh" backgroundColor="#8C8C8C" color="#fff">
                번호 찾기
              </BaseButton>
            </Say015ApplyInput>

            <Say015ApplyInput>
              <Label />
              <div>
                <p
                  style={{
                    color: '#0D42E5',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    marginBottom: '10px',
                    fontWeight: 700,
                  }}
                >
                  015 추천 번호
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {recNum?.map((e: string | null) => {
                    return (
                      <div key={uuidv4()} style={{ display: 'flex', alignItems: 'center' }}>
                        <label>
                          015-{e ? e?.match(/^.{0,4}/)?.[0] || '' : ''}-{e ? e?.match(/.{4}$/)?.[0] || '' : ''}
                        </label>
                        <BaseCheckBox
                          name={e ? e : ''}
                          checked={e === recNumber.value}
                          onChange={(event) =>
                            handleRec015NumberChange({ value: event.target.name, onChange: recNumber.onChange })
                          }
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </Say015ApplyInput>
            <Say015ApplyInput>
              <Label>비밀번호</Label>
              <ErrorWrap>
                <BaseInput
                  type="text"
                  width="16.4vw"
                  height="30px"
                  backgroundColor="#fff"
                  {...register('password', {
                    required: '해당 필드는 필수입니다.',
                    minLength: {
                      value: 11,
                      message: '11글자 이상 입력해주세요.',
                    },
                  })}
                />
                {errors?.password ? <ValidationError>{errors.password?.message}</ValidationError> : null}
              </ErrorWrap>
            </Say015ApplyInput>
            <Say015ApplyInput>
              <Label>이름</Label>
              <BaseInput
                type="text"
                width="16.4vw"
                height="30px"
                backgroundColor="#fff"
                disabled
                {...register('name', {
                  required: '해당 필드는 필수입니다.',
                  minLength: {
                    value: 11,
                    message: '11글자 이상 입력해주세요.',
                  },
                })}
              />
            </Say015ApplyInput>
            <Say015ApplyInput>
              <Label>주소</Label>
              <div
                style={{
                  width: '16.4vw',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginRight: '18px',
                }}
              >
                <BaseInput
                  type="text"
                  width="7.7vw"
                  height="30px"
                  backgroundColor="#fff"
                  value={inputZipCodeValue}
                  {...register('adress1', {
                    required: '해당 필드는 필수입니다.',
                    minLength: {
                      value: 11,
                      message: '11글자 이상 입력해주세요.',
                    },
                  })}
                />

                <BaseInput
                  type="text"
                  width="7.7vw"
                  height="30px"
                  backgroundColor="#fff"
                  marginLeft="15px"
                  placeholder="상세주소"
                  {...register('adress2', {
                    required: '해당 필드는 필수입니다.',
                    minLength: {
                      value: 11,
                      message: '11글자 이상 입력해주세요.',
                    },
                  })}
                />
              </div>
              {/*  컴포넌트 내에서 사용한 code */}

              <BaseButton
                width="5.7vw"
                height="2.2vh"
                backgroundColor="#0D42E5"
                color="#fff"
                onClick={() => setModalState(true)}
              >
                우편번호 검색
              </BaseButton>
            </Say015ApplyInput>
            <div
              style={{
                marginTop: '8px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Label />
              <BaseInput
                type="text"
                width="23.1vw"
                height="30px"
                backgroundColor="#fff"
                value={`${inputAddressValue}(${inputBuildingCodeValue})`}
                {...register('adress3', {
                  required: '해당 필드는 필수입니다.',
                  minLength: {
                    value: 11,
                    message: '11글자 이상 입력해주세요.',
                  },
                })}
              />
            </div>
            <Say015ApplyInput>
              <Label>신청서 등록</Label>

              <BaseInput
                type="file"
                marginRight="18px"
                backgroundColor="#f5f5f5"
                {...register('password', {
                  required: '해당 필드는 필수입니다.',
                  minLength: {
                    value: 11,
                    message: '11글자 이상 입력해주세요.',
                  },
                })}
              />
              <BaseButton width="5.7vw" height="2.2vh" backgroundColor="#8C8C8C" color="#fff" onClick={downloadFile}>
                신청서 다운받기
              </BaseButton>
            </Say015ApplyInput>
            <Say015ApplyServiceGuide>
              당 개인정보는 정보통신망 이용촉진 및 정보보호 등에 관한 법률의 법률규정에 따른 정보입니다.
              <br /> 주소정보가 정확하지 않을 경우, 존재하지 않는 번호로 오인 받을 수 있사오니 정확히 기재하여주시기
              바랍니다.
              <br />
              <br /> 서비스 안내
              <br /> 오픈기념 이벤트 기간은 2019.06.24부터 별도공지시까지입니다.
              <br /> 이벤트 기간 내 신규 가입 회원은 가입일로부터 2019.10.30까지 무상 서비스가 지원됩니다.
              <br />
              결제 후 환불은 회사에서 지정한 환불정책에 따라 진행됩니다.
              <br /> 서비스 이용약관 제8조(단말기의 확보)에 의거 단말기는 회원이 직접 구매해야 하며,
              <br /> 단말기 구매 후 가입 승인을 위해 캡코드와 일련번호를 등록해야 합니다.
              <br /> 회사가 대여한 단말기를 보유한 경우에는 가입 승인을 위해 가입신청서에 캡코드와 일련번호를 등록할
              필요가 없습니다.
            </Say015ApplyServiceGuide>
          </Say015ApplyInfo>
          <ul>
            {signUpData.map((element: AgreementProps, index: number) => {
              if (index === 4) {
                // return <Agreement key={element.id} checkItemHandler={checkItemHandler} element={element} />;
              }
              return null;
            })}
            {signUpData.map((element: AgreementProps, index: number) => {
              if (index === 4) {
                // return <Agreement key={element.id} checkItemHandler={checkItemHandler} element={element} />;
              }
              return null;
            })}
          </ul>
          <AgreementButtonWrap>
            <BaseButton
              width="138px"
              height="39px"
              backgroundColor="#0D42E5"
              fontWeight="bold"
              color="#fff"
              onClick={handleSubmit(onSubmit)}
            >
              015 번호 신청
            </BaseButton>
            <BaseButton
              width="138px"
              height="39px"
              backgroundColor="#000"
              fontWeight="bold"
              color="#fff"
              marginLeft="55px"
            >
              이용 신청 안함
            </BaseButton>
          </AgreementButtonWrap>
        </form>
      </SignUpFormWrapper>
    </SignUpContainer>
  );
};

export default SignUpSay015;
