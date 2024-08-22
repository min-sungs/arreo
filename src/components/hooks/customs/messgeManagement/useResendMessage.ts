import { useEffect, useState } from 'react';

import { useRecoilState, useSetRecoilState } from 'recoil';
import { ResendAddressBookOff } from '../../../../recoil/atoms/TrcMessageAtom';
import { itemCheckBoxListState } from '../../../../recoil/atoms/addressList';
import { useModal } from '../useModal';
import { BuddyData } from '../../../Molecules/addressbook/types/AddressTable.types';

export const useResendMessage = ({
  type,
  etcPhoneNumberList,
  sndMsg,
  resendDetailData,
  detailInfoMessage,
  setCheckList,
  setCheckAll,
  setAllChecked,
  setCheckedId,
}: any) => {
  const { warningModal, confirmModal } = useModal();
  const setResendAddressBook = useSetRecoilState<boolean>(ResendAddressBookOff);
  const [etcNum, setEtcNum] = useRecoilState<BuddyData[]>(itemCheckBoxListState);
  const [resendMsg, setResendMsg] = useState('');

  const handleCloseClick = () => {
    if (etcNum.length !== 0 || resendMsg) {
      confirmModal(
        () => {
          setEtcNum([]);
          setResendMsg('');
          setResendAddressBook(false);
          if (type === 'detail') {
            setCheckList([]);
            setCheckAll(false);
          } else {
            setAllChecked(false);
            setCheckedId([]);
          }
        },
        '경고',
        '재전송중인 내용은 저장되지 않습니다.',
        true,
      );
    } else {
      setResendAddressBook(false);
    }
  };

  // 메세지 타입에 따른 분기 처리
  useEffect(() => {
    if (type === 'main' && sndMsg) {
      setResendMsg(sndMsg);
      setEtcNum(etcPhoneNumberList);
    } else if (type === 'detail' && detailInfoMessage) {
      setResendMsg(detailInfoMessage);
      const newLtsDetailNum = resendDetailData.map((el: any) => el.phoneNumber);
      setEtcNum(newLtsDetailNum);
    } else {
      warningModal('실패', '메세지 내용이 존재하지 않습니다.', true);
    }
  }, [setEtcNum, setResendMsg]);

  return { handleCloseClick, resendMsg };
};
