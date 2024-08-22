import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useMutationChargeKicc } from '../../../mutations/useMutationChargeKicc';
import { useMutationChargeProcessKicc } from '../../../mutations/useMutationChargeProcessKicc';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useModal } from '../../useModal';

export const usePageCharge = () => {
  const FRONT_URL = process.env.REACT_APP_FRONT_URL;
  const EASYPAY_APPROVE_URL = process.env.REACT_APP_EASYPAY_APPROVE_URL;
  const EASYPAY_REVISE_URL = process.env.REACT_APP_EASYPAY_REVISE_URL;

  const location = useLocation();
  const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
  const [firstDataState, setFirstDataState] = useState<any>('');
  const [backgroundToggle, setBackgroundToggle] = useState(true);
  const { warningModal, successModal } = useModal();
  const queryClient = useQueryClient();

  // ? 결재 ui 요청 api 에 필요한 데이터 요청 mutation
  const {
    mutate: chargeKiccMutation,
    data: chargeKiccData,
    isLoading: isChargeKiccLoading,
  } = useMutation(useMutationChargeKicc);
  // ? 결재 승인 api mutation
  const {
    mutate: chargeProcessKiccMutation,
    data: chargeProcessKiccData,
    isLoading: isChargeProcessKiccLoading,
  } = useMutation(useMutationChargeProcessKicc);

  // 결재창 열기
  const openPopup = () => {
    setPopupOpen(true);
  };
  // 결재창 닫기
  const closePopup = () => {
    setPopupOpen(false);
  };

  // ? 결재 승인 완료
  useEffect(() => {
    // ? 리다이렉션으로 URL 변경을 감지 하기 위한 로직
    if (window.location.href !== `${FRONT_URL}/charge`) {
      setBackgroundToggle(true);
      window.parent.postMessage(location.search, '*');
    } else {
      setBackgroundToggle(false);
    }

    // ? 결재 승인 API 로직
    const fetchPaymentData = async (obj: any) => {
      try {
        if (EASYPAY_APPROVE_URL) {
          const response = await axios.post(EASYPAY_APPROVE_URL, obj);
          // ? 결재 승인 완료 반환값 process-kicc api 에게 데이터 넘겨 DB 에 저장
          if (response?.data?.resCd === '0000') {
            chargeProcessKiccMutation(response.data);
          } else {
            warningModal(
              '결제 실패',
              `결제를 실패했습니다.</br>다시 시도 부탁드립니다.</br>계속 실패가 될 경우 문의 부탁드립니다.</br></br>문의전화번호: 000-0000-0000</br>에러코드: ${response?.data?.resCd}`,
              true,
            );
          }
        }
      } catch (error) {
        warningModal(
          '결제 실패',
          '결제를 실패했습니다.</br>다시 시도 부탁드립니다.</br>계속 실패가 될 경우 문의 부탁드립니다.</br></br>문의전화번호: 000-0000-0000</br>에러코드: 0002',
          true,
        );
      }
    };

    // ? iframe 에서 변경된 url 을 obj 형식으로 가공 후 결재 승인 로직 및 state 저장, 결재창 닫기
    const handleIframeMessage = (event: any) => {
      const params = new URLSearchParams(event.data);
      const obj: any = {};
      params.forEach((value, key) => {
        obj[key] = value;
      });
      if (params.size > 2) {
        fetchPaymentData(obj);
      }
      closePopup();
    };

    // ? iframe 리다이렉션으로 부터 값 받아오는 로직
    window.addEventListener('message', handleIframeMessage);

    return () => {
      window.removeEventListener('message', handleIframeMessage);
    };
  }, []);

  // ? /charge/kicc api 요청으로 이지페이 ui api 요청할때 필요한 data 받아오기
  useEffect(() => {
    if (!isChargeKiccLoading && chargeKiccData) {
      setFirstDataState(chargeKiccData.data);
      openPopup();
    }
  }, [chargeKiccData, isChargeKiccLoading]);

  // ? /charge/process-kicc api 반환값에 type 이 없을 경우 승인 취소 api ( type 이 없다는건 DB 오류 )
  useEffect(() => {
    if (!isChargeProcessKiccLoading && chargeProcessKiccData) {
      if (chargeProcessKiccData?.type === undefined && EASYPAY_REVISE_URL) {
        axios.post(EASYPAY_REVISE_URL, chargeProcessKiccData).then(() => {
          warningModal(
            '결제 실패',
            '결제를 실패했습니다.</br>다시 시도 부탁드립니다.</br>계속 실패가 될 경우 문의 부탁드립니다.</br></br>문의전화번호: 000-0000-0000</br>에러코드: 0001',
          );
        });
      } else {
        successModal(
          '결제 성공',
          `결제가 성공적으로 처리되었습니다.</br>결제한 금액: ${parseInt(
            chargeProcessKiccData?.amount,
            10,
          )?.toLocaleString('ko-KR')}원`,
          true,
        );
        queryClient.invalidateQueries(['point']);
      }
    }
  }, [chargeProcessKiccData, isChargeProcessKiccLoading]);

  interface IOnChargeApiProps {
    payMethodTypeCode: string | undefined;
    amount: number;
  }

  // ? /charge/kicc api 요청 data 가공
  const onChargeApi = async ({ payMethodTypeCode, amount }: IOnChargeApiProps) => {
    if (!payMethodTypeCode || amount < 1000) {
      warningModal('결제 실패', '결제 금액은 1,000원 이상만 가능합니다.', true);
    } else {
      const firstData = {
        payMethodTypeCode, // 결재 방식 11: 신용카드, 21: 계좌이체, 31: 휴대폰
        amount, // 상품 가격
        returnUrl: `${FRONT_URL}/charge`, // 리다이렉션 될 URL
      };
      chargeKiccMutation(firstData);
    }
  };

  return {
    isChargeProcessKiccLoading,
    onChargeApi,
    backgroundToggle,
    isPopupOpen,
    firstDataState,
    isChargeKiccLoading,
    closePopup,
  };
};
