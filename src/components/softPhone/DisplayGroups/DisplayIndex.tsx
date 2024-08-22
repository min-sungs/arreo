/* eslint-disable */
import React, { useEffect, useState } from 'react';
import * as S from './DisplayIndex.styles';
import MessageSendHistory from './MessageSendHistory/MessageSendHistory';
import MessageSend from './MessageSend/MessageSend';
import POBox015 from './POBox015/POBox015';
import MessageManagement from './MessageManagement/MessageManagement';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  addressOpenToggleRecoil,
  messageSendDataRecoil,
  reSendMsgToggleRecoil,
} from '../../../recoil/atoms/messageSend/messageSend.ts';
import { softPhoneTopTap } from '../../../recoil/atoms/common/commonRecoil.ts';
import { useDisplay } from '../../hooks/customs/softPhone/useDisplay.ts';
import CustomerService from './CustomerService/CustomerService.tsx';
import ReSubscription from './ReSubscription/ReSubscription.tsx';

interface IDisplayIndex {
  gridRef?: React.MutableRefObject<any>;
}

const DisplayIndex = ({ gridRef }: IDisplayIndex) => {
  useDisplay({ gridRef });
  const [componentToRender, setComponentToRender] = useState<any>();

  const messageSendDataState = useRecoilValue(messageSendDataRecoil);

  const reSendMsgToggleState = useRecoilValue(reSendMsgToggleRecoil);
  const addressOpenToggleState = useRecoilValue(addressOpenToggleRecoil);
  const groupSeqList = messageSendDataState.groupSeqList;
  const buddySeqList = messageSendDataState.buddySeqList;
  const etcPhoneNumberList = messageSendDataState.etcPhoneNumberList;
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.location.pathname === '/say015') {
        setComponentToRender(<POBox015 />);
      } else if (window.location.pathname === '/') {
        setComponentToRender(<MessageSendHistory />);
      } else if (window.location.pathname === '/sendresult') {
        setComponentToRender(<MessageManagement />);
      } else if (window.location.pathname === '/customer') {
        setComponentToRender(<CustomerService />);
      }
    }
  }, [window.location.pathname]);

  return (
    <S.MessageSendHistoryContainer>
      {componentToRender}
      {(groupSeqList.length > 0 ||
        buddySeqList.length > 0 ||
        etcPhoneNumberList.length > 0 ||
        reSendMsgToggleState ||
        addressOpenToggleState) && <MessageSend gridRef={gridRef} />}
      {/*{componentToRender}*/}
      {/* 문자 내역 */}
      {/* <MessageSendHistory /> */}

      {/* 문자 수신 발신탭 */}
      {/* <MessageSend />*/}

      {/* 015 사서함 */}
      {/* <POBox015 /> */}

      {/* 전송내역관리 */}
      {/* <MessageManagement />*/}

      {/* 고객센터 */}
      {/* <CustomerService /> */}

      {/* 가입절차 */}
      {/* <ServiceSignUp /> */}

      {/* 재구독 서비스 */}
      {/* <ReSubscription /> */}
    </S.MessageSendHistoryContainer>
  );
};

export default DisplayIndex;
