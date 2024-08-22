import { useQueryClient } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { usePost } from '../../../../apis/hooks/usePost';
import { checkGroupListState } from '../../../../recoil/atoms/addressList';
import { useModal } from '../useModal';
import { messageSendDataRecoil, messageSendViewListRecoil } from '../../../../recoil/atoms/messageSend/messageSend';

export const useDeleteGroup = () => {
  const [deleteGroupList, setDeleteGroupList] = useState<number[]>([]); // 삭제할 그룹 시퀀스넘버 담으면 됩니다.
  const [delGroupState, setdelGroupState] = useState(false); // 버튼 중복 클릭 방지
  const [, setCheckedGroupList] = useRecoilState(checkGroupListState);
  const setMessageSendDataState = useSetRecoilState(messageSendDataRecoil);
  const setMessageSendViewListState = useSetRecoilState(messageSendViewListRecoil);

  const { mutate: deleteDelGroups, isLoading: deleteDelGroupsIsLoading } = usePost('/group/delete', {
    params: 'groupList2',
  }); // 그룹 삭제

  const { confirmModal, warningModal, successModal } = useModal();
  const queryClient = useQueryClient();

  const deleteGroupOnClickHandler = useCallback(() => {
    setdelGroupState(true);
    if (!(deleteGroupList.length > 0)) {
      setdelGroupState(false);
      warningModal('그룹 삭제', '선택된 그룹이 없습니다. 삭제할 그룹을 선택해주세요.', true);
      return;
    }
    confirmModal(
      () =>
        deleteDelGroups(
          { groupSeqNos: deleteGroupList },
          {
            onSuccess: () => {
              setdelGroupState(false);
              setDeleteGroupList([]);
              setCheckedGroupList([]);

              setMessageSendDataState((prevState) => ({
                ...prevState,
                groupSeqList: [],
              }));

              setMessageSendViewListState((prevState: any) => {
                const updatedState = [...prevState.buddyViewList.buddyList];
                const filterBuddyList = updatedState
                  .map((el: any) => el)
                  .filter((el: any) => !deleteGroupList.includes(el.groupSeqNo));
                return {
                  ...prevState,
                  buddyViewList: {
                    buddyGroupName: '개별 추가 수신인 목록',
                    buddyList: filterBuddyList,
                  },
                };
              });

              queryClient.invalidateQueries(['groupList2']);
              queryClient.invalidateQueries(['newBuddyList']);
              successModal('그룹 삭제', '그룹을 삭제했습니다.', true);
            },
            onError: (error: any) => {
              setdelGroupState(false);
              warningModal('그룹 삭제', error.response.message, true);
            },
          },
        ),
      '그룹 삭제',
      '해당 그룹에 속한 연락처는 "휴지통"으로 이동합니다. 삭제 하시겠습니까?',
      true,
      undefined,
      () => setdelGroupState(false),
    );
  }, [deleteGroupList]);
  return { deleteGroupOnClickHandler, setDeleteGroupList, delGroupState, deleteDelGroupsIsLoading };
};
