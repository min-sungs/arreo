import useSignInValidation from './useSignInValidation.ts';
import { useModal } from '../useModal.tsx';
import { usePost } from '../../../../apis/hooks/usePost.ts';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFormController } from '../../../../apis/hooks/useFormController.ts';
import { datasProps, useInfoProps } from '../../../../pages/SignIn/SignIn.types.ts';
import {signInRecoil} from "../../../../recoil/atoms/signInAtom.ts";
import {useRecoilState} from "recoil";

export const useSignIn = () => {
  const { schema } = useSignInValidation();
  const { warningModal } = useModal();
  const { data: loginData, mutate, isLoading, isError } = usePost<any, any>('/signin/say_arreo');
const [,setSignInState] = useRecoilState(signInRecoil);

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  // 쿼리 캐쉬 삭제
  useEffect(() => {
    queryClient.removeQueries();
  }, []);

  // form 등록 기능
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  // useform 커스텀 훅으로 변환하여 코드 단순화
  const { SignInId, SignInPassword } = useFormController({ control });

  // 입력값을 받아서 value에 따른 분기처리
  const handleSignInFormChange = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
    onChange(value);
  };

  const onClickLogin = async (data: useInfoProps) => {
    if (!data.SignInId || !data.SignInPassword) {
      alert('아이디 또는 비밀번호를 입력해주세요.');
    }
    const datas: datasProps = {};
    datas.loginId = data.SignInId;
    datas.loginPassword = data.SignInPassword;
    const url: string = '/signin/say_arreo';

    mutate(datas, {
      onSuccess: (response) => {
        if (response.data?.failMsg) {
          warningModal('로그인 실패', response.data?.failMsg, true);
        } else {
          setSignInState(true);
          // 성공한 경우 로직 작성
          localStorage.setItem('authorizationToken', response.data.token);
          localStorage.setItem('user', response.data.usrNm);
          localStorage.setItem('refreshToken', response.data.refreshToken);
          localStorage.setItem('msgCount', String(response.data?.msgCount) || '0');
          localStorage.setItem('say015User', String(response.data?.say015User));
          localStorage.setItem('availabilityStatus', String(response.data?.availabilityStatus));
          // if (parseInt(response.data?.msgCount, 10) > 0) {
          //   warningModal('문자', `${response.data?.msgCount}건 메세지가 도착했습니다.`, true);
          // }
          queryClient.invalidateQueries(['point']);
          queryClient.invalidateQueries(['groupList2']);
          navigate('/');
        }
      },
    });
  };

  return {
    handleSubmit,
    onClickLogin,
    handleSignInFormChange,
    SignInId,
    errors,
    SignInPassword,
    isLoading,
  };
};
