import { useMutation, useQueryClient } from '@tanstack/react-query';
import { saveMsgStorage } from '../../../apis/api/transferResultApi';
import { useModal } from '../customs/useModal';

interface IUseMutationSaveMsgStorage {
  prepayPayNo: string;
  callback: string;
}

export const useMutationSaveMsgStorageDetail = (props: IUseMutationSaveMsgStorage) => {
  const queryClient = useQueryClient();
  const { successModal, warningModal } = useModal();
  // 장기보관함 저장 Mutation
  const {
    mutate,
    data: saveMsgData,
    isLoading: isSaveLoading,
  } = useMutation(() => saveMsgStorage(props.prepayPayNo,props.callback ), {
    onSuccess: (response: any) => {
      queryClient.invalidateQueries(['getLongTimeStorageList']);
      // successModal('장기보관', `장기보관 성공`, true);
      return response.data;
    },
    onError: () => {
      warningModal('장기보관', '장기보관에 실패했습니다.', true);
    },
  });

  return { mutate, saveMsgData, isSaveLoading };
};
