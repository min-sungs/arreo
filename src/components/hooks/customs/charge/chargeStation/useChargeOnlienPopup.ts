import { UseFormGetValues } from 'react-hook-form';
import { formatPhoneNumber } from '../../../../../apis/utils/formats/phoneNumberFormatUtil';
import React, { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useMutationSaveOnlienCharge } from '../../../mutations/useMutationSaveOnlienCharge';
import { useModal } from '../../useModal';

interface IChargeOnlienPopupProps {
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  amount: number;
  yupGetValues: UseFormGetValues<{
    phoneNumber?: string | undefined;
    name: string;
  }>;
}

export const useChargeOnlienPopup = ({ amount, yupGetValues, setIsFormOpen }: IChargeOnlienPopupProps) => {
  const { isLoading, isError, mutate, data: mutationData } = useMutation(useMutationSaveOnlienCharge);
  const { successModal } = useModal();

  useEffect(() => {
    if (!isLoading && mutationData) {
      successModal('무통장 입금', mutationData, true);
      setIsFormOpen(false);
    }
  }, [isLoading, mutationData]);

  // ? 무통장입금 처리 api
  const onClickAccountPayment = () => {
    const accountNm = yupGetValues('name');
    const receiptAmount = amount;
    const alarmPhnId = yupGetValues('phoneNumber') ?? '';
    const enableAlarm = yupGetValues('phoneNumber') !== '';

    mutate({ accountNm, alarmPhnId, enableAlarm, receiptAmount });
  };

  // ? 무통장입금 요청서 닫기
  const onClosePopup = () => {
    setIsFormOpen(false);
  };

  const data = [
    { type: '입금자명', value: yupGetValues('name') },
    { type: '입금 예정액', value: amount },
    {
      type: '입금확인 알림 수신번호',
      value: yupGetValues('phoneNumber') ? formatPhoneNumber(yupGetValues('phoneNumber')) : '알림 거부',
    },
    { type: '입금 계좌', value: '신한은행 100-022-175288' },
    { type: '예금주', value: '서울이동통신' },
  ];

  return {
    isLoading,
    isError,
    onClickAccountPayment,
    data,
    onClosePopup,
  };
};
