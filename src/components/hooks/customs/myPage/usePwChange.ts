import { useState } from 'react';
import { useMutationChangePw } from '../../mutations/useMutationChangePw';
import { useModal } from '../useModal';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQuery } from '@tanstack/react-query';
import { getProfileInfo } from '../../../../apis/api/myPageApis';
import * as yup from 'yup';
import { pwDataProps } from '../../../Organism/MyPage/types/MyPage.types';
import { useNavigate } from 'react-router-dom';

export const usePwChange = () => {
  const { mutate }: any = useMutationChangePw();
  const { successModal, warningModal } = useModal();
  const [pwOrigin, setPwOrigin] = useState('');
  const [pwNewOrigin, setPwNewOrigin] = useState('');
  const [pwNewOriginCheck, setPwNewOriginCheck] = useState(false);
  const [isValidation, setIsValidation] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const navigate = useNavigate();

  const schema = yup.object().shape({
    // 비밀번호
    originPw: yup.string().required('값을 입력해주세요'),
    // 새로운 비밀번호
    newPw: yup
      .string()
      .required('값을 입력해주세요')
      .min(8, '최소 8자. 최대 16자 이내(영문, 숫자 조합)으로 입력해주세요')
      .max(16, '최소 8자. 최대 16자 이내(영문, 숫자 조합)으로 입력해주세요')
      .matches(
        /^(?=.*[a-z-AZ])(?=.*\d)[a-zA-Z\d]{8,16}$/,
        '최소 8자. 최대 16자 이내(영문, 숫자 조합)으로 입력해주세요',
      ),

    // 새로운 비밀번호 확인
    checkNewPw: yup
      .string()
      .required('값을 입력해주세요')
      .min(8, '최소 8자. 최대 16자 이내(영문, 숫자 조합)으로 입력해주세요')
      .max(16, '최소 8자. 최대 16자 이내(영문, 숫자 조합)으로 입력해주세요'),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      originPw: '',
      newPw: '',
      checkNewPw: '',
    },
  });

  // const changePwOrign = (e: string) => {
  //   console.log(e);
  //   setPwOrigin(e);
  // };
  // const changePwNew = (e: string) => {
  //   console.log(e);
  //   setPwNewOrigin(e);
  // };
  // const changePwNewCheck = (e: string) => {
  //   console.log(e);
  //   setPwNewOriginCheck(e);
  // };

  const handleClick = (data: any) => {
    const pwData: pwDataProps = {
      inputPass: data.originPw,
      newPass: data.newPw,
    };
    /** 함수 커스텀 훅 파일분리 */
    // const pwCheck = validatePw();
    // const passwordCheck = validationPassword();

    if (data.checkNewPw === data.newPw) {
      mutate(pwData, {
        onSuccess: () => {
          successModal('성공', '비밀번호변경에 성공하셨습니다.', true, '/');
        },
        onError: (error: any) => {
          console.log(error);
          warningModal('실패', error.response.data, true);
        },
      });
    } else {
      setPwNewOriginCheck(true);
    }
  };

  const { data: profileInfo, isLoading, isError } = useQuery(['userProfileInfo'], () => getProfileInfo());

  const buttonList = [
    { color: '#0D42E5', func: handleSubmit(handleClick), text: '수정' },
    { color: '#000000', func: () => navigate(-1), text: '취소' },
  ];

  const originPwHandleVisible = (e: any) => {
    setVisible(!visible);
  };

  const newPwHandleVisible = (e: any) => {
    setVisible1(!visible1);
  };

  const checkNewPwHandleVisible = (e: any) => {
    setVisible2(!visible2);
  };
  return {
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
  };
};
