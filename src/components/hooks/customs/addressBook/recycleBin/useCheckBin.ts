import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { checkedBinListState } from '../../../../../recoil/atoms/addressList';

interface IUseCheckBin {
  recycleBinList: any;
  setRestoreBinList: any;
  setDeleteBinList: any;
}

export const useCheckBin = ({ recycleBinList, setRestoreBinList, setDeleteBinList }: IUseCheckBin) => {
  const [binSelectAll, setBinSelectAll] = useState(false);
  const [checkedBinList, setCheckedBinList] = useRecoilState(checkedBinListState);

  const checkedBinListHandle = (buddySeqNo: number) => {
    setCheckedBinList((prevList: any) =>
      prevList.includes(buddySeqNo) ? prevList.filter((id: any) => id !== buddySeqNo) : [...prevList, buddySeqNo],
    );
  };

  const checkedAllBinListHandle = (binSelectAll: boolean) => {
    if (binSelectAll) {
      const allBuddySeqNos =
        recycleBinList?.pages.flatMap((page: any) => page.content.map((el: any) => el.buddySeqNo)) || [];
      const updatedBinBuddyList = Array.from(new Set([...checkedBinList, ...allBuddySeqNos])); // 중복 제거
      setCheckedBinList(updatedBinBuddyList);
    } else {
      setCheckedBinList([]);
    }
  };

  useEffect(() => {
    setBinSelectAll(checkedBinList?.length > 0);
    setRestoreBinList(checkedBinList);
    setDeleteBinList(checkedBinList);
  }, [checkedBinList, setRestoreBinList, setDeleteBinList]);

  useEffect(() => {
    let allChecked = false;
    if (checkedBinList.length > 0) {
      allChecked = recycleBinList?.pages?.every((page: any) =>
        page.content.every((el: any) => checkedBinList.includes(el.buddySeqNo)),
      );
    }
    setBinSelectAll(!!allChecked);
  }, [checkedBinList, recycleBinList]);

  const toggleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newBinSelectAll = event.target.checked;
    setBinSelectAll(newBinSelectAll);

    if (newBinSelectAll) {
      // 전체 선택일 경우
      checkedAllBinListHandle(true);
    } else {
      // 전체 선택이 아닐 경우
      setCheckedBinList([]);
    }
  };

  return { checkedBinListHandle, toggleSelectAll, binSelectAll, checkedBinList };
};
