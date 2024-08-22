import { useMutation, useQueryClient } from '@tanstack/react-query';
import { saveMsgStorage } from '../../../apis/api/transferResultApi';
import React from 'react';
import { useModal } from '../customs/useModal';

interface IUseMutationSaveMsgStorage {
  checkedId: string[];
  setCheckedId: React.Dispatch<React.SetStateAction<string[]>>;
  setAllChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * 상세페이지
 *
 * @param props
 * @returns 장기보관함 저장에 대한 String 문자
 */
export const useMutationSaveMsgStorage = (props: IUseMutationSaveMsgStorage) => {
  const queryClient = useQueryClient();
  const { successModal, warningModal } = useModal();
  // 장기보관함 저장 Mutation
  const {
    mutate: mutationSaveMsgStorage,
    data: saveMsgData,
    isLoading: isSaveLoading,
  } = useMutation(() => saveMsgStorage("",""), {
    onSuccess: (response: any) => {
      queryClient.removeQueries(['getLongTimeStorageList']);
      props.setCheckedId([]);
      props.setAllChecked(false);
      successModal('장기보관', `${response.data}`, true);
      return response.data;
    },
    onError: () => {
      warningModal('장기보관', '장기보관에 실패했습니다.', true);
    },
  });

  return { mutationSaveMsgStorage, saveMsgData, isSaveLoading };
};
