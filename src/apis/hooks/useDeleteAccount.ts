import React from 'react';
import { useNoTokenPost, usePost } from './usePost';
import { useDelete } from '../utils/reactQuery';
import { useModal } from '../../components/hooks/customs/useModal';
import { useQueryClient } from '@tanstack/react-query';

export const useDeleteAccount = () => {
  const { successModal, warningModal, confirmModal } = useModal();
  const { mutate, isLoading: deleteLoading, isError } = usePost('/sleep/leave');
  const queryClient = useQueryClient();

  const postDeleteData = ({ datas }: any) => {
    mutate(datas, {
      onSuccess: (res) => {
        if (res.data.code === '200') {
          queryClient.invalidateQueries(['/users/id']);
          successModal('성공', '아이디 삭제에 성공하셨습니다.', true);
        } else {
          warningModal('실패', '아이디 삭제에 실패하셨습니다.', true);
        }
      },
      onError: (error: any) => {
        console.error('error', error);
      },
    });
  };

  const handleAccountDelete = ({ e, data }: any) => {
    const datas = {
      encodeData: data,
      phnId: e.target.value,
    };
    confirmModal(() => postDeleteData({ datas }), '경고', '아이디를 삭제하시겠습니까?', true);
  };

  return { handleAccountDelete, deleteLoading };
};
