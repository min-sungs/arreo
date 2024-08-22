import {useEffect, useState} from 'react';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import {checkGroupListState} from '../../../../recoil/atoms/addressList';
import {messageSendDataRecoil, messageSendViewListRecoil} from '../../../../recoil/atoms/messageSend/messageSend.ts';
import {softPhoneTopTap} from "../../../../recoil/atoms/common/commonRecoil.ts";

export const useCheckGroup = ({groupList, setDeleteGroupList}: any) => {
  const [selectAll, setSelectAll] = useState(false);
  const [checkedGroupList, setCheckedGroupList] = useRecoilState(checkGroupListState);
  const setMessageSendDataState = useSetRecoilState(messageSendDataRecoil);
  const setMessageSendViewState = useSetRecoilState(messageSendViewListRecoil);
  const softPhoneTopTapState = useRecoilValue(softPhoneTopTap);


  // 체크여부 확인 후 토글
  const updateDeleteGroupList = (groupSeqNo: number) => {
    const updatedGroupList = checkedGroupList.includes(groupSeqNo)
      ? checkedGroupList.filter((id: any) => id !== groupSeqNo)
      : [...checkedGroupList, groupSeqNo];
    setCheckedGroupList(updatedGroupList);
    setMessageSendDataState((prevState: any) => {
      const updatedState = {...prevState};
      updatedState.groupSeqList = updatedGroupList;
      return updatedState;
    });
  };

  // 전체 체크 - 모든 groupSeqNo 추가 또는 빈배열로 제거
  const updateAllGroups = (selectAll: boolean) => {
    if (selectAll) {
      const allGroupSeqNos = groupList?.groupList?.map((el: any) => el.groupSeqNo) || [];
      const updatedGroupList = Array.from(new Set([...checkedGroupList, ...allGroupSeqNos])); // 중복 제거
      setCheckedGroupList(updatedGroupList);
      setMessageSendDataState((prevState: any) => {
        const updatedState = {...prevState};
        updatedState.groupSeqList = updatedGroupList;
        return updatedState;
      });
    } else {
      setCheckedGroupList([]);
      setMessageSendDataState((prevState) => ({
        ...prevState,
        groupSeqList: [],
      }));
    }
  };

  useEffect(() => {
    setDeleteGroupList(checkedGroupList);
  }, [checkedGroupList, setDeleteGroupList]);

  useEffect(() => {
    // 모든 하위 체크박스가 체크된 경우 전체 체크박스도 체크되도록 설정
    setSelectAll(groupList?.groupList?.every((el: any) => checkedGroupList.includes(el.groupSeqNo)) || false);
  }, [checkedGroupList, groupList]);

  const toggleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSelectAll = event.target.checked;
    setSelectAll(newSelectAll);

    if (newSelectAll) {
      // 전체 선택일 경우
      updateAllGroups(true);
    } else {
      // 전체 선택이 아닐 경우
      updateAllGroups(false);
    }
  };

  return {selectAll, toggleSelectAll, updateDeleteGroupList, checkedGroupList};
};
