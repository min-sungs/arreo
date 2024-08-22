import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateStcMsgApi } from '../../../apis/api/stContentDetailApis';
import { useModal } from '../customs/useModal';

interface IUseMutationUpdateStMsgDetail {
  sndMsg: string;
  sndDttm: string;
  prepayPayNo: string;
  callback: string;
}
export const useMutationUpdateStMsgDetail = ({ sndMsg, sndDttm, prepayPayNo,callback }: IUseMutationUpdateStMsgDetail) => {
  const queryClient = useQueryClient();
  const { successModal, warningModal } = useModal();
  const { mutate: mutationUpdateMsg, isLoading: isUpdateLoading } = useMutation(
    () => updateStcMsgApi({ sndMsg, sndDttm, prepayPayNo,callback }),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(['getReserveSendList']);
        await queryClient.invalidateQueries(['getReserveSendDetail']);
        successModal('예약전송 수정', '메시지 수정이 완료되었습니다.', true);
      },
      onError: () => {
        warningModal('예약전송 수정', '메시지 수정이 실패했습니다.</br>다시 시도해주세요.', true);
      },
    },
  );
  return {
    mutationUpdateMsg,
    isUpdateLoading,
  };
};
