import { useState } from 'react';
import { useModal } from '../useModal';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getUseLeaveInfo, postUserPw } from '../../../../apis/api/myPageApis';
import * as yup from 'yup';

export const useMemberLeave = () => {
  const [agreeItem, setAgreeItem] = useState(false);
  const [visible, setVisible] = useState(false);

  const { successModal, warningModal, confirmModal } = useModal();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const schema = yup.object().shape({
    originPw: yup
      .string()
      .required('값을 입력해주세요')
      .min(8, '최소 8자. 최대 16자 이내(영문, 숫자 조합)으로 입력해주세요')
      .max(16, '최소 8자. 최대 16자 이내(영문, 숫자 조합)으로 입력해주세요')
      .matches(
        /^(?=.*[a-z-AZ])(?=.*\d)[a-zA-Z\d]{8,16}$/,
        '최소 8자. 최대 16자 이내(영문, 숫자 조합)으로 입력해주세요',
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      originPw: '',
    },
  });

  // 회원탈퇴페이지 정보 get
  const {
    data: getUseInfo,
    isLoading,
    isError,
    refetch: getUseInfoRefetch,
  } = useQuery(['useleaveinfo'], () => getUseLeaveInfo());

  // 회원탈퇴 로직
  const { mutate: leaveUserPw }: any = useMutation(postUserPw, {
    onSuccess: () => {
      queryClient.removeQueries();
      localStorage.clear();
      navigate('/');
      successModal('회원 탈퇴', '회원 탈퇴가 완료되었습니다.</br>서비스를 이용해 주셔서 감사합니다.', true);
    },
    onError: (error: any) => {
      warningModal('회원 탈퇴', error.response.data, true);
    },
  });

  const checkedAgreeHandle = (e: any) => {
    setAgreeItem(e.target.checked);
  };

  const originPwHandleVisible = () => {
    setVisible(!visible);
  };

  const leaveConfirmHandle = () => {
    if (!agreeItem) {
      warningModal('회원 탈퇴', '동의항목을 확인해 주세요.', true);
      return;
    }
    const enteredOriginPw = getValues('originPw');
    confirmModal(
      () => leaveUserPw(enteredOriginPw),
      '회원 탈퇴',
      `주소록 ${getUseInfo?.buddyCnt}개의 연락처가 삭제되고,</br>잔여캐쉬 ${getUseInfo?.usePg}ⓒ, ${getUseInfo?.useCc}ⓟ가 소멸합니다.</br>회원 탈퇴하시겠습니까?`,
      true,
    );
  };

  const buttonList = [{ color: '#0D42E5', func: handleSubmit(leaveConfirmHandle), text: '확인' }];

  return {
    isLoading,
    getUseInfo,
    checkedAgreeHandle,
    agreeItem,
    visible,
    register,
    errors,
    originPwHandleVisible,
    buttonList,
    getUseInfoRefetch,
  };
};
