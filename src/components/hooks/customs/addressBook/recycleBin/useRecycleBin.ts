import { useState } from 'react';
import { useDelete } from '../../../../../apis/utils/reactQuery';
import { useModal } from '../../useModal';
import { useQueryClient } from '@tanstack/react-query';
import { usePost } from '../../../../../apis/hooks/usePost';
import { useRecoilState } from 'recoil';
import { binSearchTextState, binSelectValueState } from '../../../../../recoil/atoms/addressList';

export const useRecycleBin = () => {
  const [recycleBinOpen, setRecycleBinOpen] = useState<boolean>(false);
  const [binAllBtnState, setBinAllBtnState] = useState(false); // 버튼 중복 클릭 방지
  const [, setBinSelectValue] = useRecoilState(binSelectValueState);
  const [, setBinSearchText] = useRecoilState(binSearchTextState);

  const { mutate: postAdressBinAllList, isLoading: postAdressBinAllListIsLoading } = usePost(
    '/contacts/recycle/restore/all',
    {
      params: 'groupList2',
    },
  ); // 휴지통 전체 복원
  const { mutate: deleteAddressBinAllList } = useDelete('/contacts/recycle/delete', { params: 'groupList2' }, 'all'); // 휴지통 비우기

  const { confirmModal, successModal, warningModal } = useModal();

  const queryClient = useQueryClient();

  // 휴지통 토글
  const recycleBinClickHandle = () => {
    setBinSearchText('');
    setBinSelectValue('name');
    setRecycleBinOpen((prev) => !prev);
  };
  ``;

  // 휴지통 전체복원 클릭
  const restoreBinAllListOnClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setBinAllBtnState(true);
    confirmModal(
      () =>
        postAdressBinAllList('', {
          onSuccess: () => {
            setBinAllBtnState(false);
            queryClient.invalidateQueries(['groupList2']);
            queryClient.invalidateQueries(['newBuddyList']);
            successModal('연락처 복원', '휴지통의 전체 연락처를 복원했습니다.', true);
          },
          onError: (error: any) => {
            setBinAllBtnState(false);
            warningModal('연락처 복원', error.response.message, true);
          },
        }),
      '연락처 복원',
      '휴지통의 전체 연락처를 복원하시겠습니까?',
      true,
      undefined,
      () => setBinAllBtnState(false),
    );
  };

  // 휴지통 비우기 클릭
  const deleteBinAllListOnClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setBinAllBtnState(true);
    confirmModal(
      () =>
        deleteAddressBinAllList('', {
          onSuccess: () => {
            setBinAllBtnState(false);
            queryClient.invalidateQueries(['groupList2']);
            successModal('연락처 삭제', '휴지통의 전체 연락처를 삭제했습니다.', true);
          },
          onError: (error: any) => {
            setBinAllBtnState(false);
            warningModal('연락처 삭제', error.response.message, true);
          },
        }),
      '연락처 삭제',
      '휴지통의 전체 연락처를 영구 삭제하시겠습니까?',
      true,
      undefined,
      () => setBinAllBtnState(false),
    );
  };

  return {
    deleteBinAllListOnClick,
    recycleBinClickHandle,
    recycleBinOpen,
    restoreBinAllListOnClick,
    binAllBtnState,
    postAdressBinAllListIsLoading,
  };
};
