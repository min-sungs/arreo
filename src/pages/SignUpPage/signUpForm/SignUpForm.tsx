import React, { forwardRef, useEffect, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import BaseCheckBox from '../../../components/Atom/BaseCheckBox';
import BaseInput from '../../../components/Atom/BaseInput';
import SignUpProcess from '../../../components/common/SignUpLayout/SignUpProcess';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useNoTokenPost } from '../../../apis/hooks/usePost';
import { useFetch } from '../../../apis/utils/reactQuery';
import BaseButton from '../../../components/Atom/BaseButton';
import BaseSelect from '../../../components/Atom/BaseSelect';
import { useGetSignUpForms } from '../../../components/hooks/customs/signUp/useGetSignUpForms';
import useValidation from '../../../components/hooks/customs/signUp/useValidation';
import { useModal } from '../../../components/hooks/customs/useModal';
import {
  AdAgreeLabel,
  AdLabelWrap,
  Label,
  Row,
  SignCustomButtonWrap,
  SignUpAdAgreeWrap,
  SignUpCheckEmail,
  SignUpContainer,
  SignUpEmailInputWrap,
  SignUpEmailSpan,
  SignUpFormWrapper,
  SignUpInputForm,
  SignUpInputSpan,
  SignUpPhoneInputWrap,
  SignUpSubTitle,
  TermLine,
  ValidationError,
  ValidationMessage,
} from './SignUpForm.style';
import { IForm } from './SignUpForm.types';

const SignUpForm = forwardRef(() => {
  const process: string = '2';
  const location = useLocation();
  const navigate = useNavigate();
  const info = location.state;
  const [selectEmail1, setSelectEmail1] = useState('');
  const [selectEmail2, setSelectEmail2] = useState('');
  const [checkMessage, setCheckMessage] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [numOne, setNumOne] = useState('010');
  const [numTwo, setNumTwo] = useState('');
  const [numThree, setNumThree] = useState('');
  const [checkInfo, setCheckInfo] = useState('');

  // /signup/confirm
  const { mutate, isError, isSuccess, isLoading } = useNoTokenPost('/signup/confirm');

  const { schema, emailData } = useValidation();
  const { warningModal, successModal } = useModal();

  const { data: niceData, isLoading: formDataLoading }: any = useFetch('/signup/form-data', {
    encodeData: `${checkInfo}`,
  });

  // encodeData 를 사용하여 state에 저장
  useEffect(() => {
    if (info && info.data2) {
      setCheckInfo(info.data);
    } else {
      setCheckInfo(info.data.encodeData);
    }
  }, [info]);

  // 받아온 전화번호 분할
  useEffect(() => {
    if (niceData) {
      setNumOne(niceData?.inputNumber.slice(0, 3));
      setNumTwo(niceData?.inputNumber.slice(3, 7));
      setNumThree(niceData?.inputNumber.slice(7, 11));
    }
  }, [niceData]);

  const handleSelectEmail = (email: any) => {
    setSelectEmail2(email);
  };
  // 체크박스 선택시 state 저장
  const handleDefaultArreo = (e: any) => {
    if (e.target.checked === true) {
      setSelectEmail2('arreo.com');
      setSelectEmail1(niceData.inputNumber);
    } else {
      setSelectEmail2('');
      setSelectEmail1('');
    }
  };

  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm<IForm>({
    resolver: yupResolver(schema),
    mode: 'onSubmit',

    defaultValues: {
      name: `${niceData?.inputName}`,
      password: ``,
      ispassword: ``,
      phone1: `${numOne}`,
      phone2: `${numTwo}`,
      phone3: `${numThree}`,
      email1: ``,
      email2: `${selectEmail2}`,
      checkMessage,
      checkEmail,
    },
  });

  useEffect(() => {
    if (niceData) {
      reset({
        name: `${niceData?.inputName}`,
        phone1: `${numOne}`,
        phone2: `${numTwo}`,
        phone3: `${numThree}`,
      });
    }
  }, [niceData, reset, numOne, numTwo, numThree]);

  // useform 커스텀 훅으로 변환하여 코드 단순화
  const { password, ispassword, phone1, phone2, phone3, email1, email2 } = useGetSignUpForms({ control });

  // 입력값을 받아서 value에 따른 분기처리
  const handleSignUpFormChange = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
    onChange(value);
  };

  React.useEffect(() => {
    setValue('email1', selectEmail1);
    setValue('email2', selectEmail2);
    setValue('checkMessage', checkMessage);
    setValue('checkEmail', checkEmail);
  }, [selectEmail2, checkMessage, checkEmail, setValue]);

  const onSubmit = (data: IForm) => {
    const signUpData: any = {
      phnId: data.phone1 + data.phone2 + data.phone3,
      usrNm: data?.name,
      usrEmail: `${data?.email1}@${data?.email2}`,
      smsRcvYn: data?.checkMessage ? 'Y' : 'N',
      emailRcvYn: data?.checkEmail ? 'Y' : 'N',
      usrPass: data?.password,
      encodeData: checkInfo,
    };

    mutate(signUpData, {
      onSuccess: (response) => {
        if (response) {
          // localStorage.setItem('authorizationToken', response.token);
          // localStorage.setItem('user', response.usrNm);
          // localStorage.setItem('refreshToken', response.refreshToken);
          // queryClient.invalidateQueries(['point']);
          successModal('회원가입', '회원가입에 성공하셨습니다.', true, '/');
        }
      },
      onError: (response: any) => {
        warningModal('회원가입', response, true);
      },
    });
  };

  return (
    <SignUpContainer>
      <SignUpFormWrapper>
        <SignUpProcess process={process} />
        <SignUpSubTitle>
          아레오는 회원님의 개인정보를 안전하게 보호하고 있으며, 회원님의 동의없이 공개되거나 제3자에게 제공되지
          않습니다. <br />
          <br />
          *로 표기된 값은 필수 값 입니다.
        </SignUpSubTitle>
        <TermLine />

        <SignUpInputForm>
          <Row>
            <Label>아이디: </Label>
            <SignUpPhoneInputWrap>
              <BaseInput
                type="number"
                width="3.5vw"
                height="30px"
                onChange={(e) => handleSignUpFormChange({ value: e.target.value, onChange: phone1.onChange })}
                value={phone1.value}
                disabled
              />
              <SignUpInputSpan>-</SignUpInputSpan>
              <BaseInput
                type="number"
                width="3.5vw"
                height="30px"
                onChange={(e) => handleSignUpFormChange({ value: e.target.value, onChange: phone2.onChange })}
                value={phone2.value}
                disabled
              />
              <SignUpInputSpan>-</SignUpInputSpan>
              <BaseInput
                type="number"
                width="3.5vw"
                height="30px"
                onChange={(e) => handleSignUpFormChange({ value: e.target.value, onChange: phone3.onChange })}
                value={phone3.value}
                disabled
              />
            </SignUpPhoneInputWrap>
            {errors?.phone3 ? <ValidationError className="phone">{errors.phone3?.message}</ValidationError> : null}
          </Row>
          <Row>
            <Label>이름: </Label>
            <BaseInput
              type="text"
              width="15vw"
              height="30px"
              disabled
              {...register('name', {
                required: '해당 필드는 필수입니다.',
                minLength: {
                  value: 3,
                  message: '3글자 이상 입력해주세요.',
                },
              })}
            />
            {errors?.name ? <ValidationError>{errors.name?.message}</ValidationError> : null}
          </Row>
          <Row>
            <Label>*비밀번호: </Label>
            <BaseInput
              type="password"
              width="15vw"
              height="30px"
              placeholder="비밀번호"
              onChange={(e) => handleSignUpFormChange({ value: e.target.value, onChange: password.onChange })}
              value={password.value}
              // {...register('password', {
              //   required: '해당 필드는 필수입니다.',
              // })}
            />
            {errors?.password ? (
              <ValidationError>{errors.password?.message}</ValidationError>
            ) : (
              <ValidationMessage>최소 8자. 최대 16자 이내(영문, 숫자 조합)으로 입력해주세요</ValidationMessage>
            )}
          </Row>
          <Row>
            <Label>*비밀번호 확인: </Label>
            <BaseInput
              type="password"
              width="15vw"
              height="30px"
              placeholder="비밀번호 확인"
              onChange={(e) => handleSignUpFormChange({ value: e.target.value, onChange: ispassword.onChange })}
              value={ispassword.value}
              ref={ispassword.ref}
            />
            {errors?.ispassword ? <ValidationError>{errors.ispassword?.message}</ValidationError> : null}
          </Row>

          <Row>
            <Label>*이메일 주소: </Label>
            <SignUpEmailInputWrap>
              <BaseInput
                type="text"
                width="6.5vw"
                height="30px"
                value={email1.value}
                onChange={(e) => handleSignUpFormChange({ value: e.target.value, onChange: email1.onChange })}
              />
              <SignUpEmailSpan>@</SignUpEmailSpan>
              <BaseInput
                type="text"
                width="6.5vw"
                height="30px"
                value={email2.value}
                onChange={(e) => handleSignUpFormChange({ value: e.target.value, onChange: email2.onChange })}

                // {...register('email2', {
                //   required: '해당 필드는 필수입니다.',
                // })}
              />
            </SignUpEmailInputWrap>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ marginRight: '1rem' }}>
                <BaseSelect options={emailData} value={selectEmail2} onChange={handleSelectEmail} />
              </div>
              {errors?.email1 ? <ValidationError>{errors.email1?.message}</ValidationError> : null}
            </div>
          </Row>

          <SignUpCheckEmail>
            <BaseCheckBox
              onChange={(e) => handleDefaultArreo(e)}
              label="아레오 메일(휴대폰번호@arreo.com)기본 메일 주소로 사용합니다."
            />
          </SignUpCheckEmail>
        </SignUpInputForm>
        <TermLine />
        <SignUpAdAgreeWrap>
          <AdAgreeLabel>
            문자메시지 수신 (광고메시지 1건 수신 시 SMS 1건 무료- 25P 충전)
            <AdLabelWrap>
              <BaseCheckBox
                label="동의"
                {...register('checkMessage', {})}
                onChange={(e) => setValue('checkMessage', e.target.checked)}
              />
            </AdLabelWrap>
          </AdAgreeLabel>
          <AdAgreeLabel>
            E-mail 수신 (메일을 통한 무료포인트 지급 및 사이트 내 중요정보 안내)
            <AdLabelWrap>
              <BaseCheckBox
                label="동의"
                {...register('checkEmail', {})}
                onChange={(e) => setValue('checkEmail', e.target.checked)}
              />
            </AdLabelWrap>
          </AdAgreeLabel>
        </SignUpAdAgreeWrap>

        <SignCustomButtonWrap>
          <BaseButton
            type="submit"
            width="138px"
            height="39px"
            backgroundColor="#0D42E5"
            fontWeight="bold"
            color="#fff"
            disabled={isLoading}
            onClick={handleSubmit(onSubmit)}
          >
            회원가입
          </BaseButton>
          <Link to="/signin">
            <BaseButton
              width="138px"
              height="39px"
              backgroundColor="#000"
              fontWeight="bold"
              color="#fff"
              marginLeft="55px"
              onClick={() => {
                return navigate('/signin');
              }}
            >
              취소
            </BaseButton>
          </Link>
        </SignCustomButtonWrap>
        {/* </form> */}
      </SignUpFormWrapper>
    </SignUpContainer>
  );
});

export default SignUpForm;
