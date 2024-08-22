// 주소록 좌측 그룹 리스트 사이드 바 HOOK
import React, { useCallback, useEffect, useState } from 'react';
import { useFetch } from '../../../../apis/utils/reactQuery.ts';

export const useNewGroupList = () => {
  // 클릭시 스타일
  const clickStyle = {
    borderRadius: '5px',
    backgroundColor: '#FEFEFF',
    boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.07)',
  };
  const childrenClickStyle = {
    fontWeight: '600',
  };
  const [checkedGroup, setCheckedGroup] = useState<number | null>(null);
  const [addGroupOpen, setAddGroupOpen] = useState(false); // 그룹 추가 컴포넌트 토글 상태
  const { data: groupList, isLoading: groupListIsLoading }: any = useFetch('groupList2');
  const [clickGroupStyles, setGroupClickStyles] = useState<Record<number, boolean>>({}); // 그룹이름 클릭시 클릭 아이템 스타일
  const [groupArr, setGroupArr] = useState<any>(null);

  useEffect(() => {
    if (groupList && !groupListIsLoading) {
      const arr = groupList?.groupList?.map((el: any) => {
        return { groupSeqNo: el.groupSeqNo, groupNm: el.groupNm };
      });
      if (JSON.stringify(groupArr) !== JSON.stringify(arr)) {
        setGroupArr(arr);
      }
    }
  }, [groupList, groupListIsLoading]);

  const addGroupOpenHandle: React.MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    setAddGroupOpen(!addGroupOpen);
  }, [addGroupOpen]);

  return {
    groupArr,
    clickStyle,
    childrenClickStyle,
    clickGroupStyles,
    setGroupClickStyles,
    groupList,
    setCheckedGroup,
    checkedGroup,
    addGroupOpenHandle,
    addGroupOpen,
  };
};
