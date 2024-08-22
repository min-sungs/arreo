import { useMutation, useQueryClient } from '@tanstack/react-query';
import { cancelReserveXms } from '../../../apis/api/stContentApis';

interface IUseMutationStDelete {
  prepayPayNo: string[];
}

export const useMutationStDeleteDetail = () => {
  const queryClient = useQueryClient();

  const { mutate: mutationDelete, isLoading: isDeleteLoading } = useMutation(
    // ({ prepayPayNo }: IUseMutationStDelete) => cancelReserveXms({ prepayPayNo }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['getReserveSendList']);
      },
    },
  );

  return {
    mutationDelete,
    isDeleteLoading,
  };
};
