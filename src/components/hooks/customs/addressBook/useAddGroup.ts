import { useQueryClient } from '@tanstack/react-query';
import React, { useCallback, useState } from 'react';
import { usePost } from '../../../../apis/hooks/usePost';
import { useModal } from '../useModal';

export const useAddGroup = () => {
  const [addGroupValue, setAddgroupValue] = useState('');
  const [addGroupState, setAddGroupState] = useState(false); // 버튼 중복 클릭 방지

  const { mutate: postAddGroup } = usePost('/group/create', { params: 'groupList2' }); // 그룹 추가

  const queryClient = useQueryClient();

  const { warningModal } = useModal();

  // onChange
  const addGroupValueHandle = useCallback((e: any) => {
    setAddgroupValue(e.target.value);
  }, []);

  // submit
  const addGroupSubmitHandle = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setAddGroupState(true);

      const addNewGroup = addGroupValue?.trim();
      if (!addNewGroup) {
        setAddGroupState(false);
        setAddgroupValue('');
        return;
      }

      const newGroup = {
        groupNm: addNewGroup,
      };

      postAddGroup(newGroup, {
        onSuccess: () => {
          setAddGroupState(false);
          setAddgroupValue('');
          queryClient.invalidateQueries(['groupList2']);
          // groupList();
        },
        onError: (error: Error) => {
          setAddGroupState(false);
          warningModal('그룹 등록', `에러 발생: ${error.message}`, true);
        },
      });
    },
    [addGroupValue],
  );

  return { addGroupSubmitHandle, addGroupValueHandle, addGroupValue, addGroupState };
};
