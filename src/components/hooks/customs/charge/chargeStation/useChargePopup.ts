import axios from 'axios';
import { useEffect, useState } from 'react';
import { useModal } from '../../useModal';

interface IUseChargePopupProps {
  firstDataState: any;
  isChargeKiccLoading: boolean;
  closePopup: () => void;
}

export const useChargePopup = ({ firstDataState, isChargeKiccLoading, closePopup }: IUseChargePopupProps) => {
  // 이지페이 API Url
  const eazyPayUrl = process.env.REACT_APP_EASYPAY_UI_URL;
  const [paymentUIUrlState, setPaymentUIUrlState] = useState(null);
  const { warningModal } = useModal();

  // 이지페이 결재 UI 요청 API
  useEffect(() => {
    const fetchPaymentData = async () => {
      if (!eazyPayUrl) return;
      const response = await axios.post(eazyPayUrl, firstDataState);
      if (response.data?.resCd !== '0000') {
        closePopup();
        warningModal(
          '결제 실패',
          `결제를 실패했습니다.</br>다시 시도 부탁드립니다.</br>계속 실패가 될 경우 문의 부탁드립니다.</br>문의전화번호: 000-0000-0000</br>에러코드:${response?.data?.resCd}`,
          true,
        );
      } else {
        const url = response?.data?.authPageUrl;
        setPaymentUIUrlState(url);
      }
    };
    if (firstDataState && !isChargeKiccLoading) fetchPaymentData();
  }, [firstDataState, isChargeKiccLoading]);


  return {
    paymentUIUrlState,
  };
};
