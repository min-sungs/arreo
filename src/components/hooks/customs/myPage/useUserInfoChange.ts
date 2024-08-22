import { useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { getProfileInfo } from '../../../../apis/api/myPageApis';
import { useMutationModifyMyPage } from '../../mutations/useMutationModifyMyPage';
import { useModal } from '../useModal';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

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

export const useUserInfoChange = () => {
  /** 함수 커스텀 훅 파일분리 */
  const {
    data: profileInfo,
    isLoading,
    isError,
  } = useQuery<MyPageInfoProps | undefined>(['userProfileInfo'], () => getProfileInfo());
  // const { data: profileInfo, isLoading, isError }: any = useQuery(['userProfileInfo'], () => getProfileInfo());
  const { mutate } = useMutationModifyMyPage();
  const { successModal, warningModal } = useModal();
  const queryClient = useQueryClient();
  const [emailDomain, setEmailDomain] = useState(''); // @ 이후 부분 저장 상태
  const [phoneSelectedOption, setPhoneSelectedOption] = useState(''); // 폰번호 선택한 옵션 저장 상태

  const [modalState, setModalState] = useState(false);
  const [modalState1, setModalState1] = useState(false);

  const navigate = useNavigate();

  const closeOverlay = () => {
    setModalState(false);
    setModalState1(false);
  };

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    // getValues,
    // setError,
    // setFocus,
    setValue,
  } = useForm({
    // resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: profileInfo,
    resetOptions: {
      keepDirtyValues: true, // keep dirty fields unchanged, but update defaultValues
    },
    // phnId: profileInfo?.phnId ? profileInfo?.phnId : '',
    // usrNm: profileInfo?.usrNm,
    // nickNm: profileInfo?.nickNm,
    // usrEmail1: profileInfo?.usrEmail.replace(/@.*/, ''),
    // usrEmail2: profileInfo?.usrEmail.replace(/.*@/, ''),
    // zipCd: profileInfo?.zipCd,
    // addr: profileInfo?.addr,
    // cpZipCd: profileInfo?.cpZipCd,
    // cpAddr: profileInfo?.cpAddr,
    // userTel1: profileInfo?.userTel1,
    // userTel2: profileInfo?.userTel2,
    // userTel3: profileInfo?.userTel3,
    // birthDt: profileInfo?.birthDt,
    // marryGb: profileInfo?.marryGb,
    // marryDt: profileInfo?.marryDt,
    // jobGb: profileInfo?.jobGb,
    // smsRcvYn: 'Y', // 광고문자 수신 동의 여부 (동의 = "Y" , 거부 ="N")
    // emailRcvYn: 'N', // 이메일 수신 동의 여부 (동의 = "Y" , 거부 ="N")
  });

  // useEffect(() => {
  //   reset();
  // }, [profileInfo]);

  // myPage 이메일에 특수문자 금지 코드
  const handleKeyPress = (event: any) => {
    const regex = /[!@#$%^&*(),.?":{}|<>]/g; // 여기에 특수 문자를 원하는 대로 추가하세요
    const { key } = event;

    if (regex.test(key)) {
      event.preventDefault();
    }
  };

  // 도메인 선택
  const handleDomain = (e: string) => {
    setEmailDomain(e);
    setValue('domain', e);
  };

  React.useEffect(() => {
    if (profileInfo) {
      reset(profileInfo, { keepDirtyValues: true });
    }
  }, [profileInfo, reset]);

  // 이메일 선택
  const handleNumberFirst = (e: string) => {
    setPhoneSelectedOption(e);
  };

  // home
  const onCompletePost = (data: any) => {
    setModalState(false);

    setValue('addr', data.address + data.buildingName);
    setValue('zipCd', data.zonecode);
  }; // onCompletePost 함수

  // company
  const onCompletePost1 = (data: any) => {
    setModalState1(false);

    setValue('cpAddr', data.address + data.buildingName);
    setValue('cpZipCd', data.zonecode);
  }; // onCompletePost 함수

  const onSubmit = (data: MyPageInfoProps) => {
    mutate(JSON.stringify(data), {
      onError: () => {
        warningModal('마이페이지 수정', '마이페이지 수정에 실패하셨습니다.', true);
      },
      onSuccess: () => {
        queryClient.invalidateQueries(['userProfileInfo']);
        successModal('마이페이지 수정', '마이페이지 수정에 성공하셨습니다.', true);
      },
    });
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
  const postCodeStyle1: any = {
    width: '400px',
    height: '400px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    zIndex: 1000,
    display: modalState1 ? 'block' : 'none',
    boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.75)',
  };

  const buttonList = [
    { type: 'submit', color: '#0D42E5', text: '수정', func: handleSubmit(onSubmit) },
    {
      type: 'button',
      color: '#000000',
      text: '취소',
      func: () => navigate(-1),
    },
  ];

  return {
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
  };
};
