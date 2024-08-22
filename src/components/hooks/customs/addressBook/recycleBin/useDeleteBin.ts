import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { usePost } from '../../../../../apis/hooks/usePost';
import { checkedBinListState } from '../../../../../recoil/atoms/addressList';
import { useModal } from '../../useModal';

interface IUseDeleteBin {
  recycleBinRefetch: any;
}

export const useDeleteBin = ({ recycleBinRefetch }: IUseDeleteBin) => {
  const [deleteBinList, setDeleteBinList] = useState<number[]>([]); // 삭제할 버디시퀀스넘버 담으면 됩니다.
  const [binDeleteState, setBinDeleteState] = useState(false); // 버튼 중복 클릭 방지
  const [, setCheckedBinList] = useRecoilState(checkedBinListState);

  const { mutate: binListDeleteMutate } = usePost('/contacts/recycle/delete', { params: 'groupList2' }); // 휴지통 삭제

  const { confirmModal, successModal, warningModal } = useModal();

  const queryClient = useQueryClient();

  const binListDeleteHandle = () => {
    setBinDeleteState((prev) => prev === false && true);

    if (!(deleteBinList.length > 0)) {
      setBinDeleteState((prev) => prev === true && false);
      warningModal('연락처 삭제', '선택된 연락처가 없습니다.</br>삭제할 연락처를 선택해주세요.', true);
      return;
    }
    confirmModal(
      () =>
        binListDeleteMutate(deleteBinList, {
          onSuccess: () => {
            setBinDeleteState((prev) => prev === true && false);
            setDeleteBinList([]);
            setCheckedBinList([]);
            recycleBinRefetch();
            queryClient.invalidateQueries(['groupList2']);
            successModal('연락처 삭제', '연락처를 삭제하였습니다.', true);
          },
          onError: (error: any) => {
            setBinDeleteState((prev) => prev === true && false);
            warningModal('연락처 삭제', error.response.data, true);
          },
        }),
      '연락처 삭제',
      '선택한 연락처를 영구 삭제 하시겠습니까?',
      true,
      undefined,
      () => setBinDeleteState(false),
    );
  };

  return { binListDeleteHandle, setDeleteBinList, binDeleteState };
};
