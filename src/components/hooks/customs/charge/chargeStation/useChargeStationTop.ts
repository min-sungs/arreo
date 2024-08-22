import { yupResolver } from '@hookform/resolvers/yup';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { chargeOnlienYupSchema } from '../../../../Molecules/Charge/charge/top/ChargeTop.validation';
import { useModal } from '../../useModal';

interface IHandleChargePointSale {
  amount: number;
  persent: string;
}

export const useChargeStationTop = () => {
  const [activeMenuState, setActiveMenuState] = useState<number>(0);
  const [chargeValueState, setChargeValueState] = useState<number>(0);
  const [pointValueState, setPointValueState] = useState<number>(0);
  const [pointPercentState, setPointPercentState] = useState<string | undefined>('0');
  const [chargeSaleValueState, setChargeSaleValueState] = useState<string>('0');
  const [customBooleanState, setCustomBooleanState] = useState<boolean>(false);
  const [customChargeValueState, setCustomChargeValueState] = useState<number>(0);
  const [payMethodTypeCodeState, setPayMethodTypeCodeState] = useState<string | undefined>('11');
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  const { warningModal } = useModal();

  const { register, handleSubmit, formState, getValues } = useForm({
    resolver: yupResolver(chargeOnlienYupSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      phoneNumber: '',
    },
  });

  // ? 건당 할인 계산 함수
  const handleChargePointSale = ({ amount, persent }: IHandleChargePointSale) => {
    // 원래가격
    const original = amount;

    // 포인트
    const point = original * (parseInt(persent ?? '0', 10) / 100);

    const result = (original + point) / 25;
    setChargeSaleValueState((original / result || 0).toFixed(1));
  };

  // ? 적립 포인트 계산 함수
  const handleChargePoint = (chargeValue: number, payMethodTypeCode?: string | undefined) => {
    let pointValue = 0;
    let pointPercent = 0;
    if (chargeValue >= 10000 && chargeValue < 100000) {
      pointValue = chargeValue * 0.05;
      pointPercent += 5;
    } else if (chargeValue >= 100000 && chargeValue < 500000) {
      pointValue = chargeValue * 0.1;
      pointPercent += 10;
    } else if (chargeValue >= 500000 && chargeValue < 1000000) {
      pointValue = chargeValue * 0.2;
      pointPercent += 20;
    } else if (chargeValue >= 1000000) {
      pointValue = chargeValue * 0.3;
      pointPercent += 30;
    }

    const typeCode = payMethodTypeCode ?? payMethodTypeCodeState;
    if (chargeValue >= 5000 && typeCode) {
      switch (typeCode) {
        case '11':
          pointValue += chargeValue * 0.01; // 신용카드
          pointPercent += 1;
          break;
        case '21':
          pointValue += chargeValue * 0.02; // 계좌이체
          pointPercent += 2;
          break;
        case '0':
          pointValue += chargeValue * 0.05; // 무통장
          pointPercent += 5;
          break;
        case '31':
          pointValue += chargeValue * 0; // 핸드폰
          pointPercent += 0;
          break;
        default:
          break;
      }
    }
    setPointValueState(Math.floor(pointValue));
    setPointPercentState(pointPercent.toString());
    return pointPercent.toString();
  };

  // ? 결재 방식 선택 함수
  const onChangeMenuFocus = (index: number, payMethodTypeCode: string | undefined) => {
    setActiveMenuState(index);
    setPayMethodTypeCodeState(payMethodTypeCode);
    handleChargePoint(chargeValueState, payMethodTypeCode);
    if (customBooleanState) {
      const pointPercent = handleChargePoint(customChargeValueState, payMethodTypeCode);
      handleChargePointSale({ amount: customChargeValueState, persent: pointPercent });
    }
  };

  // ? 결제 금액 설정 함수
  const handleChargeValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.id !== 'customRadio') {
      setCustomBooleanState(false);
      setCustomChargeValueState(0);
      setChargeValueState(parseInt(event?.target.value, 10));
      handleChargePoint(parseInt(event?.target.value, 10));
      setChargeSaleValueState('0.0');
    } else {
      setCustomBooleanState(true);
      handleChargePoint(0);
    }
  };

  // ? 직적입력 결제 금액 설정 함수
  const handleCustomInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    // 1000만원 이하, 0 으로 시작 방지.
    if (customBooleanState && !inputValue.startsWith('0') && inputValue.length < 8 && /^\d*$/.test(inputValue)) {
      setCustomChargeValueState(parseInt(inputValue, 10));
      const pointPercent = handleChargePoint(parseInt(inputValue, 10));
      handleChargePointSale({ amount: parseInt(inputValue, 10), persent: pointPercent });
    }
  };

  // ? 무통장 입금 요청서 작성하기 - 버튼
  const onClickChargeOnlien = (data: any) => {
    if (chargeValueState < 1000 && customChargeValueState < 1000) {
      warningModal('결제 실패', '결제 금액은 1,000원 이상만 가능합니다.', true);
    } else {
      setIsFormOpen(!isFormOpen);
    }
  };

  return {
    setIsFormOpen,
    chargeSaleValueState,
    handleChargePointSale,
    isFormOpen,
    getValues,
    onClickChargeOnlien,
    formState,
    payMethodTypeCodeState,
    pointPercentState,
    pointValueState,
    onChangeMenuFocus,
    activeMenuState,
    customBooleanState,
    handleChargeValueChange,
    chargeValueState,
    handleCustomInputChange,
    customChargeValueState,
    register,
    handleSubmit,
  };
};
