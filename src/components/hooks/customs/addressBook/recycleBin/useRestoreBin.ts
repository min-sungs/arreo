import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { usePost } from '../../../../../apis/hooks/usePost';
import { checkedBinListState } from '../../../../../recoil/atoms/addressList';
import { useModal } from '../../useModal';

interface IUseRestoreBin {
  recycleBinRefetch: any;
}

export const useRestoreBin = ({ recycleBinRefetch }: IUseRestoreBin) => {
  const [restoreBinList, setRestoreBinList] = useState<number[]>([]); // 복원할 버디시퀀스넘버 담으면 됩니다.
  const [binRestoreState, setBinRestoreState] = useState(false); // 버튼 중복 클릭 방지
  const [, setCheckedBinList] = useRecoilState(checkedBinListState);

  const { mutate: binListRestoreMutate } = usePost('/contacts/recycle/restore', { params: 'groupList2' }); // 휴지통 복원

  const { confirmModal, successModal, warningModal } = useModal();

  const queryClient = useQueryClient();

  const binListRestoreHandle = () => {
    setBinRestoreState(true);
    if (!(restoreBinList.length > 0)) {
      setBinRestoreState(false);
      warningModal('연락처 복원', '선택된 연락처가 없습니다.</br>복원할 연락처를 선택해주세요.', true);
      return;
    }
    confirmModal(
      () =>
        binListRestoreMutate(restoreBinList, {
          onSuccess: () => {
            setBinRestoreState(false);
            setRestoreBinList([]);
            setCheckedBinList([]);
            recycleBinRefetch();
            queryClient.invalidateQueries(['groupList2']);
            queryClient.invalidateQueries(['newBuddyList']);
            successModal('연락처 복원', '연락처를 이전 그룹으로 복원하였습니다.', true);
          },
          onError: (error: any) => {
            setBinRestoreState(false);
            warningModal('연락처 복원', error.response.message, true);
          },
        }),
      '연락처 복원',
      '해당 연락처를 이전 그룹으로 복원 하시겠습니까?',
      true,
      undefined,
      () => setBinRestoreState(false),
    );
  };

  return { binListRestoreHandle, setRestoreBinList, binRestoreState };
};
