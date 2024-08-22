import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useModal } from '../customs/useModal';
import { cancelReserveXms } from '../../../apis/api/stContentApis';

interface IUseMutationStDelete {
  deleteRequests: {prepayPayNo:string, callback: string}[];
}

export const useMutationStDelete = () => {
  const queryClient = useQueryClient();
  const { successModal, warningModal } = useModal();

  const { mutate: mutationDelete, isLoading: isDeleteLoading } = useMutation(
    ({ deleteRequests }: IUseMutationStDelete) => cancelReserveXms({ deleteRequests }),
    {
      onSuccess: () => {
        // queryClient.invalidateQueries(['getReserveSendList']);
        queryClient.invalidateQueries(['point']);
        successModal('예약문자 취소', '선택하신 메세지가 성공적으로</br> 취소되었습니다.', true);
      },
      onError: () => {
        warningModal('예약문자 취소', '예약문자 취소가 실패했습니다.', true);
      },
    },
  );

  return {
    mutationDelete,
    isDeleteLoading,
  };
};
