import { useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { usePost } from '../../../../apis/hooks/usePost';
import { useModal } from '../useModal';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { mainTableResetRecoil } from '../../../../recoil/atoms/addressList.ts';

interface IUseEditGroup {
  gridRef: React.MutableRefObject<any>;
}

export const useEditGroup = ({ gridRef }: IUseEditGroup) => {
  const [editOpen, setEditOpen] = useState<{ [key: number]: boolean }>({});
  const [groupEditValue, setGroupEditValue] = useState<{ [key: string]: string }>({}); // 수정 그룹 변경 이름
  const [activeGroupSeqNo, setActiveGroupSeqNo] = useState<number | null>(null);
  const { mutate: patchEditGroups } = usePost('/group/update', { params: 'groupList2' }); // 그룹 수정
  const setMainTableResetState = useSetRecoilState(mainTableResetRecoil);

  const { warningModal } = useModal();

  const queryClient = useQueryClient();

  const patchGroupOnClickHandler = (item: number) => {
    // 빈 값이면 제출하지 않고 토글하고 이전 값으로 표시
    const groupNm = groupEditValue[item]?.trim();
    if (!groupNm) {
      setEditOpen((prevStates) => ({ ...prevStates, [item]: false }));
      return;
    }

    const groupEditValuesArray = { groupSeqNo: item, groupNm };
    patchEditGroups([groupEditValuesArray], {
      onSuccess: (res: any) => {
        if (gridRef) {
          queryClient.invalidateQueries(['groupList2']);
          setMainTableResetState(true);
          setGroupEditValue((prevValues) => ({ ...prevValues, [item]: '' }));
          setEditOpen((prevStates) => ({ ...prevStates, [item]: false }));
        }
      },
      onError: (error: Error) => {
        warningModal('그룹 수정', `에러 발생: ${error.message}`, true);
      },
    });
  };

  // const groupDoubleClickHandle = (groupSeqNo: number) => {
  //   setEditOpen((prevStates) => ({
  //     ...prevStates,
  //     [groupSeqNo]: !prevStates[groupSeqNo],
  //   }));
  // };

  // const groupDoubleClickHandle = (groupSeqNo: number) => {
  //   setEditOpen((prevStates) => {
  //     const updatedStates = { ...prevStates };

  //     // 이전 그룹의 토글 상태를 false로 설정
  //     Object.keys(updatedStates).forEach((key: any) => {
  //       if (key !== groupSeqNo.toString()) {
  //         updatedStates[key] = false;
  //       }
  //     });

  //     // 현재 그룹의 토글 상태를 토글
  //     updatedStates[groupSeqNo] = !prevStates[groupSeqNo];

  //     return updatedStates;
  //   });
  // };

  const groupDoubleClickHandle = (groupSeqNo: number) => {
    // 이전 그룹의 입력 내용을 제출하고 토글
    if (activeGroupSeqNo !== null && activeGroupSeqNo !== groupSeqNo) {
      patchGroupOnClickHandler(activeGroupSeqNo);
    }
    setActiveGroupSeqNo(groupSeqNo);

    setEditOpen((prevStates) => ({
      ...prevStates,
      [groupSeqNo]: !prevStates[groupSeqNo],
    }));
  };

  const groupEditValueHandle = (value: string, groupSeqNo: any) => {
    setGroupEditValue((prevValues) => ({ ...prevValues, [groupSeqNo]: value }));
  };

  const groupEditOnkeyDownHandle = (e: React.KeyboardEvent<HTMLInputElement>, el: any) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Enter 키의 기본 동작 방지
      patchGroupOnClickHandler(el.groupSeqNo);
      groupDoubleClickHandle(el.groupSeqNo); // editOpen 상태를 토글
    }
    if (e.key === 'Escape') {
      e.preventDefault();
      setGroupEditValue((prevValues) => ({ ...prevValues, [el.groupSeqNo]: '' }));
      groupDoubleClickHandle(el.groupSeqNo); // editOpen 상태를 토글
    }
  };

  return {
    patchGroupOnClickHandler,
    editOpen,
    groupDoubleClickHandle,
    groupEditOnkeyDownHandle,
    groupEditValueHandle,
    groupEditValue,
  };
};
