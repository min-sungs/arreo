import React, { useEffect, useState } from 'react';
import { usePost } from '../../../../../apis/hooks/usePost';
import { useFetch } from '../../../../../apis/utils/reactQuery';
import { useModalHook } from '../../../../commons/modals/useModalHook';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

interface ISubscribe015 {
  number015: string;
  subsPeriod?: number;
  certTerms1: boolean;
  serviceTerms1: boolean;
}

const checkedMessage = {
  success: '사용가능한 번호입니다.',
  error: '사용불가한 번호입니다.',
  pending: "015번호 입력(선택)후 '돋보기'를 눌러주세요.",
};

export const useCheck015Number = () => {
  const queryClient = useQueryClient();
  // radio 선택값
  const [, setSelectedValue] = useState<string>('');
  // input 값
  const [inputValue, setInputValue] = useState({ firstPart: '', secondPart: '' });
  // 선택 번호를 서버로 중복 요청할 값
  const [pickNumber, setPickNumber] = useState({ firstPart: '', secondPart: '' });
  // 서버에서 요청값이 거절일 때 실패 메세지 띄울것
  const [errorMessage, setErrorMessage] = useState<string>(checkedMessage.pending);
  // 메세지 스타일 적용
  const [messageStyle, setMessageStyle] = useState<any>(null);
  // 번호추천 셀렉트 모달 State
  const [selectOpen, setSelectOpen] = useState<string>('numberGroup');
  // 구독 요청할 state
  const [subscribe015, setSubscribe015] = useState<ISubscribe015>({
    number015: '',
    subsPeriod: 1,
    certTerms1: false,
    serviceTerms1: false,
  });
  // 가입하기 버튼 disabled State
  const [subscribe015Btn, setSubscribe015Btn] = useState<boolean>(true);
  // 가입완료 버튼 style State
  const [subscribe015BtnStyles, setSubscribe015BtnStyles] = useState<string>('startBtn unactive');
  // 구독 완료 후 표출할 모달 State
  const [complete, setComplete] = useState<boolean>(false);

  // 구독완료시 토큰 저장
  const updateTokensInLocalStorage = (authInfo: any) => {
    // 응답으로 받은 새로운 토큰과 리프레시 토큰을 로컬 스토리지에 저장합니다.
    localStorage.setItem('authorizationToken', authInfo?.token);
    localStorage.setItem('refreshToken', authInfo?.refreshToken);
    // localStorage.setItem('availabilityStatus', authInfo?.availabilityStatus);
    localStorage.setItem('say015User', authInfo?.say015User);
    setComplete((prev) => prev === false && true);
  };

  const navigate = useNavigate();

  const { confirmModal, warningModal } = useModalHook();

  // 015추천번호 10개 get api요청
  const {
    data: sug015NumList,
    isLoading: sug015NumListIsLoading,
    isError: sug015NumListIsError,
  }: any = useFetch('/015-numbers?size=10');

  // 015추천번호 보기 Click 핸들러
  const sug015NumViewHandle = () => {
    setSelectOpen((prev) => (prev === 'numberGroup active' ? 'numberGroup' : 'numberGroup active'));
  };

  // 입력받은 015번호 하이픈 처리
  const addHyphen = (str: string) => {
    return `015 - ${str.slice(0, 4)} - ${str.slice(4)}`;
  };

  // 선택한 015번호 사용 가능 여부 get api요청
  const {
    data: confirm015Num,
    isLoading: confirm015NumIsLoading,
    isError: confirm015NumIsError,
  } = useFetch(`/015-number/${pickNumber.firstPart}-${pickNumber.secondPart}`, undefined, {
    onSuccess: () => {
      setMessageStyle(true);
      setErrorMessage(checkedMessage.success);
      setSubscribe015((prevState) => ({
        ...prevState,
        number015: `015${pickNumber.firstPart}${pickNumber.secondPart}`,
      }));
    },
    onError: (error: any) => {
      setMessageStyle(false);
      setErrorMessage(`${error?.response?.data}`);
    },
  });

  // 가입 요청 mutate
  const { mutate: permit015 } = usePost('/say015/join');

  // 라디오 버튼이 변경될 때 호출되는 함수
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedNumber = event.target.value;
    setSelectedValue(selectedNumber); // 선택된 값 업데이트
    setInputValue({
      firstPart: selectedNumber.slice(0, 4),
      secondPart: selectedNumber.slice(4),
    });
    setErrorMessage(checkedMessage.pending);
    setSelectOpen('numberGroup');
  };

  // 입력 필드의 값이 변경될 때 호출되는 함수
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValue((prevState) => ({ ...prevState, [name]: value })); // 이전 상태값을 사용하여 업데이트
    setSelectedValue(`015${value.replace('-', '')}`); // 입력된 값으로 선택된 값 업데이트
  };

  // 적용Btn 클릭시 015를 붙이고 firstPart와 secondPart를 합쳐서 리턴하는 함수
  const generateFullNumber = () => {
    setPickNumber(inputValue);
  };

  // 성공, 실패 메세지 스타일 핸들
  const messageStyleHandle = () => {
    return messageStyle ? { color: 'green' } : { color: 'red' };
  };

  // 구독 완료 버튼 클릭시 핸들
  const subscribe015Handle = () => {
    if (inputValue !== pickNumber) {
      setErrorMessage(checkedMessage.pending);
      warningModal('Say015 번호확인', '입력하신 015번호를 확인해주세요.', true);
      return;
    }

    confirmModal(
      async () =>
        permit015(subscribe015, {
          onSuccess: (authInfo) => {
            if (authInfo && authInfo.data && authInfo.data.authInfo && authInfo.data.authInfo.refreshToken) {
              updateTokensInLocalStorage(authInfo?.data?.authInfo);
              queryClient.invalidateQueries(['point']);
            } else {
              console.error('Failed to retrieve refreshToken from authInfo');
            }
          },
          onError: (error: any) => {
            if (error.response.data === '충전이 필요합니다.') {
              confirmModal(async () => navigate('/charge'), '포인트 부족', '충전소로 이동하시겠습니까?', true);
            }
            // 현재 페이지에서 구독 거절된 이유 표시
          },
        }),
      'Say015 구독',
      `015-${pickNumber.firstPart}-${pickNumber.secondPart} 번호로</br>Say015 서비스를 구독 하시겠습니까?`,
      true,
    );
  };

  // 전체 동의 체크박스 상태 변경 핸들러
  const handleAllCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    if (name === 'allAgree' && checked === true) {
      setSubscribe015((prevState) => ({
        ...prevState,
        certTerms1: true,
        serviceTerms1: true,
      }));
    }
    if (name === 'allAgree' && checked === false) {
      setSubscribe015((prevState) => ({
        ...prevState,
        certTerms1: false,
        serviceTerms1: false,
      }));
    }
  };
  // 동의서 체크박스 상태 변경 핸들러
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setSubscribe015((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  useEffect(() => {
    if (subscribe015?.number015 && subscribe015?.certTerms1 && subscribe015?.serviceTerms1) {
      setSubscribe015BtnStyles('startBtn');
      setSubscribe015Btn(false);
    } else {
      setSubscribe015BtnStyles('startBtn unactive');
      setSubscribe015Btn(true);
    }
  }, [subscribe015.certTerms1, subscribe015.serviceTerms1, subscribe015.number015]);

  const completeHandle = () => {
    subscribe015Handle();
  };

  return {
    inputValue,
    handleInputChange,
    generateFullNumber,
    errorMessage,
    messageStyleHandle,
    sug015NumListIsLoading,
    sug015NumList,
    handleRadioChange,
    addHyphen,
    subscribe015,
    handleCheckboxChange,
    subscribe015Handle,
    subscribe015Btn,
    handleAllCheckboxChange,
    sug015NumViewHandle,
    selectOpen,
    subscribe015BtnStyles,
    complete,
    completeHandle,
    pickNumber,
  };
};
