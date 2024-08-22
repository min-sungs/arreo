import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';
import { useModal } from '../../customs/useModal.tsx';
import { messageSendApi } from '../../../../apis/api/excelMessenger/excelMessengerApis.ts';

interface IUseMutationMessageSend {
  setPopupToggle: Dispatch<SetStateAction<boolean>>;
}

export const useMutationMessageSend = ({ setPopupToggle }: IUseMutationMessageSend) => {
  const { successModal, warningModal } = useModal();
  const queryClient = useQueryClient();

  const {
    mutate: sendMutation,
    data: sendData,
    isLoading: sendLoading,
    isError: sendError,
  } = useMutation((data: any) => messageSendApi(data), {
    onSuccess: (res: any) => {
      queryClient.invalidateQueries(['getMessageDataResultAll']);
      queryClient.invalidateQueries(['getReserveSendList']);
      queryClient.invalidateQueries(['point']);
      setPopupToggle(false);
      successModal('전송 성공', '메세지 전송 성공', true);
    },
    onError: (err: any) => {
      setPopupToggle(false);
      const msg = err.response.data[0];
      const rowKeyArr = err.response.data;
      // warningModal('전송 실패', err.message, true);
      warningModal(
        '전송 실패',
        `메세지 전송에 실패했습니다. </br>${msg.rowKey}번째 줄 ${msg.errorMessage}</br>수정 후 다시 전송해주시기 바랍니다.`,
        true,
      );
    },
  });

  return {
    sendMutation,
    sendData,
    sendLoading,
    sendError,
  };
};
