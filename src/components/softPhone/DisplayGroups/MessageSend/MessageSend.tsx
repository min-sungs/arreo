/* eslint-disable */
import React from 'react';
import {v4 as uuidv4} from 'uuid';
import {useMessageSend} from '../../../hooks/customs/addressBook/useMessageSend.ts';
import * as S from './MessageSend.styles.ts'
import {useMessageSender} from '../../../hooks/customs/addressBook/useMessageSender.ts';
import {useMessageSendPublishHook} from "./useMessageSendPublishHook.ts";
import {calMsgByte} from "../../../hooks/utils/byteCalculatorUtil.ts";
import MessageSendBottom from "./components/MessageSend.bottom.tsx";
import Loader from "../../../common/Loader.tsx";
import {useRecoilState, useRecoilValue} from "recoil";
import {addressOpenToggleRecoil} from "../../../../recoil/atoms/messageSend/messageSend.ts";
import {softPhoneTopTap} from "../../../../recoil/atoms/common/commonRecoil.ts";
import SendMsgByte from "../../commons/SendMsgByte.tsx";

interface IMessageSend {
  gridRef?: React.MutableRefObject<any>
}

const MessageSend = ({gridRef}: IMessageSend) => {

  // publish hook
  const publishHook = useMessageSendPublishHook();
  //  custom hook
  const {callbackNumbers, selectNumber, callbackNumHandle, addCallbackNumHandle} = useMessageSender();
  const hooks = useMessageSend({selectNumber, gridRef});

  const [addressOpenToggleState, setAddressOpenToggleState] = useRecoilState(addressOpenToggleRecoil);
  const softPhoneTopTapState = useRecoilValue(softPhoneTopTap);
  const onClickTap = () => {
    setAddressOpenToggleState((prevState: boolean) => !prevState);
  }
  /* 모달 예약 / 반복 컴포넌트 */
  return (
    <S.MessageSendWrap>
      {hooks.sendMsgLoading && (<Loader/>)}
      <S.AddressDestinationGroup>
        <S.TextTitle>
          <h3>수신인</h3>
          {
            softPhoneTopTapState === "2" && (
              <S.Toggle onClick={onClickTap}>
                <button className={addressOpenToggleState ? 'active' : ''}>{addressOpenToggleState ? '주소록 닫기' : '주소록 열기'}</button>
              </S.Toggle>
            )
          }
        </S.TextTitle>
        {/* 수신인 */}
        <S.RecipientsList className={`${publishHook.liVisibilities.buttonActive ? 'active' : ''}`}>
          {/* active */}
          <ol className={`recipientsGroup ${publishHook.liVisibilities.buttonActive ? 'active' : ''}`}>
            {/* 그룹 수신인 */}
            {hooks.messageSendViewList.groupViewList?.map((item: any, index: number) => (
              <li className={item.groupSeqNo === publishHook.activeTag ? 'active' : ''} key={uuidv4()}>
                <div className="smallContents">
                  <div className={`RecipientTitle`} role="button" onClick={(e: any) => publishHook.toggleHandler(e, item.groupSeqNo)} tabIndex={0}>
                    <p>{item?.buddyGroupName}</p>
                  </div>
                  <div className="state">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" viewBox="0 0 11 14" fill="none">
                      <path
                        d="M9.15034 7.28C9.57823 7.28 9.9886 7.457 10.2912 7.77206C10.5937 8.08712 10.7637 8.51444 10.7637 8.96V9.52C10.7637 11.7275 8.76312 14 5.38577 14C2.00841 14 0.0078125 11.7275 0.0078125 9.52V8.96C0.0078125 8.51444 0.177794 8.08712 0.480363 7.77206C0.782931 7.457 1.1933 7.28 1.6212 7.28H9.15034ZM5.38577 0C6.17024 0 6.92259 0.324499 7.4773 0.902111C8.03201 1.47972 8.34364 2.26313 8.34364 3.08C8.34364 3.89687 8.03201 4.68028 7.4773 5.25789C6.92259 5.8355 6.17024 6.16 5.38577 6.16C4.60129 6.16 3.84894 5.8355 3.29423 5.25789C2.73952 4.68028 2.42789 3.89687 2.42789 3.08C2.42789 2.26313 2.73952 1.47972 3.29423 0.902111C3.84894 0.324499 4.60129 0 5.38577 0Z"
                        fill="#908F90"
                      />
                    </svg>
                    <p>{item?.buddyList ? item?.buddyList.length : '0'}명</p>
                    <S.BtnWhiteGray>
                      <button className="eraseButton" onClick={() => hooks.deleteSendTopList(hooks.messageSendData?.groupSeqList[index])}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path
                            d="M1.31059 6.81748C1.22606 6.90202 1.1114 6.94951 0.991844 6.94951C0.87229 6.94951 0.757632 6.90202 0.673094 6.81748C0.588557 6.73294 0.541063 6.61828 0.541063 6.49873C0.541064 6.37917 0.588557 6.26452 0.673094 6.17998L3.05472 3.7991L0.673844 1.41748C0.589307 1.33294 0.541814 1.21828 0.541814 1.09873C0.541814 0.979175 0.589307 0.864517 0.673844 0.77998C0.758382 0.695442 0.87304 0.647949 0.992594 0.647949C1.11215 0.647949 1.22681 0.695442 1.31134 0.77998L3.69222 3.1616L6.07384 0.78073C6.15838 0.696192 6.27304 0.648699 6.39259 0.648699C6.51215 0.648699 6.62681 0.696192 6.71134 0.78073C6.79588 0.865267 6.84338 0.979925 6.84338 1.09948C6.84338 1.21903 6.79588 1.33369 6.71134 1.41823L4.32972 3.7991L6.71172 6.18073C6.79626 6.26527 6.84375 6.37992 6.84375 6.49948C6.84375 6.61903 6.79626 6.73369 6.71172 6.81823C6.62718 6.90277 6.51252 6.95026 6.39297 6.95026C6.27341 6.95026 6.15876 6.90277 6.07422 6.81823L3.69222 4.4366L1.31059 6.81748Z"
                            fill="#8C8C8C"
                            stroke="#8C8C8C"
                            strokeWidth="0.6"
                          />
                        </svg>
                      </button>
                      <button className="arrowDown">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                          <path
                            d="M5.24922 5.19001L8.90493 3.31538C8.96596 3.2841 9 3.24254 9 3.19933C9 3.15611 8.96596 3.11456 8.90493 3.08328L8.9008 3.08126C8.87121 3.06604 8.8356 3.05393 8.79613 3.04565C8.75666 3.03737 8.71415 3.0331 8.6712 3.0331C8.62824 3.0331 8.58574 3.03737 8.54626 3.04565C8.50679 3.05393 8.47118 3.06604 8.4416 3.08126L4.99931 4.84657L1.5584 3.08126C1.52882 3.06604 1.49321 3.05393 1.45374 3.04565C1.41427 3.03737 1.37176 3.0331 1.3288 3.0331C1.28585 3.0331 1.24334 3.03737 1.20387 3.04565C1.1644 3.05393 1.12879 3.06604 1.0992 3.08126L1.09507 3.08328C1.03404 3.11456 1 3.15611 1 3.19933C1 3.24254 1.03404 3.2841 1.09507 3.31538L4.75078 5.19001C4.78293 5.2065 4.82159 5.21963 4.86443 5.22859C4.90727 5.23756 4.95339 5.24219 5 5.24219C5.04661 5.24219 5.09273 5.23756 5.13557 5.22859C5.17841 5.21963 5.21707 5.2065 5.24922 5.19001Z"
                            fill="#8C8C8C"
                            stroke="#8C8C8C"
                          />
                          <path
                            d="M5.24922 2.70369L8.90493 0.82905C8.96596 0.797771 9 0.756214 9 0.713C9 0.669785 8.96596 0.628228 8.90493 0.596949L8.9008 0.594931C8.87121 0.579715 8.8356 0.567599 8.79613 0.559319C8.75666 0.551039 8.71415 0.54677 8.6712 0.54677C8.62824 0.54677 8.58574 0.551039 8.54626 0.559319C8.50679 0.567599 8.47118 0.579715 8.4416 0.594931L4.99931 2.36024L1.5584 0.59493C1.52882 0.579714 1.49321 0.567598 1.45374 0.559319C1.41427 0.551039 1.37176 0.546769 1.3288 0.546769C1.28585 0.546769 1.24334 0.551039 1.20387 0.559318C1.1644 0.567598 1.12879 0.579714 1.0992 0.59493L1.09507 0.596949C1.03404 0.628228 1 0.669784 1 0.712999C1 0.756214 1.03404 0.79777 1.09507 0.82905L4.75078 2.70369C4.78293 2.72017 4.82159 2.7333 4.86443 2.74227C4.90727 2.75123 4.95339 2.75586 5 2.75586C5.04661 2.75586 5.09273 2.75123 5.13557 2.74227C5.17841 2.7333 5.21707 2.72017 5.24922 2.70369Z"
                            fill="#8C8C8C"
                            stroke="#8C8C8C"
                          />
                        </svg>
                      </button>
                    </S.BtnWhiteGray>
                  </div>
                </div>
                <ul className={'numberList'}>
                  {item?.buddyList.map((item: any) => (
                    <li key={uuidv4()}>
                      <div className="moreDetails">
                        <p className="name">{item?.buddyNm}</p>
                        <p className="tel">{item?.keyCommNo}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            {/* 개별 추가 수신인 목록 */}
            {hooks.messageSendViewList.buddyViewList.buddyList.length > 0 && (
              <li className={publishHook.activeTag === "individual" ? 'active' : ''}>

                <div className="smallContents">
                  <div className="RecipientTitle" role="button" onClick={(e: any) => publishHook.toggleHandler(e, 'individual')} tabIndex={0}>
                    <p>{hooks.messageSendViewList.buddyViewList.buddyGroupName ?? "개별"}</p>
                  </div>
                  <div className="state">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" viewBox="0 0 11 14" fill="none">
                      <path
                        d="M9.15034 7.28C9.57823 7.28 9.9886 7.457 10.2912 7.77206C10.5937 8.08712 10.7637 8.51444 10.7637 8.96V9.52C10.7637 11.7275 8.76312 14 5.38577 14C2.00841 14 0.0078125 11.7275 0.0078125 9.52V8.96C0.0078125 8.51444 0.177794 8.08712 0.480363 7.77206C0.782931 7.457 1.1933 7.28 1.6212 7.28H9.15034ZM5.38577 0C6.17024 0 6.92259 0.324499 7.4773 0.902111C8.03201 1.47972 8.34364 2.26313 8.34364 3.08C8.34364 3.89687 8.03201 4.68028 7.4773 5.25789C6.92259 5.8355 6.17024 6.16 5.38577 6.16C4.60129 6.16 3.84894 5.8355 3.29423 5.25789C2.73952 4.68028 2.42789 3.89687 2.42789 3.08C2.42789 2.26313 2.73952 1.47972 3.29423 0.902111C3.84894 0.324499 4.60129 0 5.38577 0Z"
                        fill="#908F90"
                      />
                    </svg>
                    <p>{hooks.messageSendViewList.buddyViewList.buddyList.length}명</p>
                    <S.BtnWhiteGray>
                      <button className="eraseButton" onClick={() => hooks.deleteSendTopList()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path
                            d="M1.31059 6.81748C1.22606 6.90202 1.1114 6.94951 0.991844 6.94951C0.87229 6.94951 0.757632 6.90202 0.673094 6.81748C0.588557 6.73294 0.541063 6.61828 0.541063 6.49873C0.541064 6.37917 0.588557 6.26452 0.673094 6.17998L3.05472 3.7991L0.673844 1.41748C0.589307 1.33294 0.541814 1.21828 0.541814 1.09873C0.541814 0.979175 0.589307 0.864517 0.673844 0.77998C0.758382 0.695442 0.87304 0.647949 0.992594 0.647949C1.11215 0.647949 1.22681 0.695442 1.31134 0.77998L3.69222 3.1616L6.07384 0.78073C6.15838 0.696192 6.27304 0.648699 6.39259 0.648699C6.51215 0.648699 6.62681 0.696192 6.71134 0.78073C6.79588 0.865267 6.84338 0.979925 6.84338 1.09948C6.84338 1.21903 6.79588 1.33369 6.71134 1.41823L4.32972 3.7991L6.71172 6.18073C6.79626 6.26527 6.84375 6.37992 6.84375 6.49948C6.84375 6.61903 6.79626 6.73369 6.71172 6.81823C6.62718 6.90277 6.51252 6.95026 6.39297 6.95026C6.27341 6.95026 6.15876 6.90277 6.07422 6.81823L3.69222 4.4366L1.31059 6.81748Z"
                            fill="#8C8C8C"
                            stroke="#8C8C8C"
                            strokeWidth="0.6"
                          />
                        </svg>
                      </button>
                      <button className="arrowDown">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                          <path
                            d="M5.24922 5.19001L8.90493 3.31538C8.96596 3.2841 9 3.24254 9 3.19933C9 3.15611 8.96596 3.11456 8.90493 3.08328L8.9008 3.08126C8.87121 3.06604 8.8356 3.05393 8.79613 3.04565C8.75666 3.03737 8.71415 3.0331 8.6712 3.0331C8.62824 3.0331 8.58574 3.03737 8.54626 3.04565C8.50679 3.05393 8.47118 3.06604 8.4416 3.08126L4.99931 4.84657L1.5584 3.08126C1.52882 3.06604 1.49321 3.05393 1.45374 3.04565C1.41427 3.03737 1.37176 3.0331 1.3288 3.0331C1.28585 3.0331 1.24334 3.03737 1.20387 3.04565C1.1644 3.05393 1.12879 3.06604 1.0992 3.08126L1.09507 3.08328C1.03404 3.11456 1 3.15611 1 3.19933C1 3.24254 1.03404 3.2841 1.09507 3.31538L4.75078 5.19001C4.78293 5.2065 4.82159 5.21963 4.86443 5.22859C4.90727 5.23756 4.95339 5.24219 5 5.24219C5.04661 5.24219 5.09273 5.23756 5.13557 5.22859C5.17841 5.21963 5.21707 5.2065 5.24922 5.19001Z"
                            fill="#8C8C8C"
                            stroke="#8C8C8C"
                          />
                          <path
                            d="M5.24922 2.70369L8.90493 0.82905C8.96596 0.797771 9 0.756214 9 0.713C9 0.669785 8.96596 0.628228 8.90493 0.596949L8.9008 0.594931C8.87121 0.579715 8.8356 0.567599 8.79613 0.559319C8.75666 0.551039 8.71415 0.54677 8.6712 0.54677C8.62824 0.54677 8.58574 0.551039 8.54626 0.559319C8.50679 0.567599 8.47118 0.579715 8.4416 0.594931L4.99931 2.36024L1.5584 0.59493C1.52882 0.579714 1.49321 0.567598 1.45374 0.559319C1.41427 0.551039 1.37176 0.546769 1.3288 0.546769C1.28585 0.546769 1.24334 0.551039 1.20387 0.559318C1.1644 0.567598 1.12879 0.579714 1.0992 0.59493L1.09507 0.596949C1.03404 0.628228 1 0.669784 1 0.712999C1 0.756214 1.03404 0.79777 1.09507 0.82905L4.75078 2.70369C4.78293 2.72017 4.82159 2.7333 4.86443 2.74227C4.90727 2.75123 4.95339 2.75586 5 2.75586C5.04661 2.75586 5.09273 2.75123 5.13557 2.74227C5.17841 2.7333 5.21707 2.72017 5.24922 2.70369Z"
                            fill="#8C8C8C"
                            stroke="#8C8C8C"
                          />
                        </svg>
                      </button>
                    </S.BtnWhiteGray>
                  </div>
                </div>
                <ul className={'numberList'}>
                  {hooks.messageSendViewList.buddyViewList.buddyList.map((item: any) => (
                    <li key={uuidv4()}>
                      <div className="moreDetails">
                        <p className="name">{item?.buddyNm}</p>
                        <p className="tel">{item?.keyCommNo}</p>
                        <S.BtnWhiteGray>
                          <button className="deleteBtn" onClick={() => hooks.deleteSendBottomSeqList(item.buddySeqNo, item.rowKey)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                              <path
                                d="M1.31059 6.81748C1.22606 6.90202 1.1114 6.94951 0.991844 6.94951C0.87229 6.94951 0.757632 6.90202 0.673094 6.81748C0.588557 6.73294 0.541063 6.61828 0.541063 6.49873C0.541064 6.37917 0.588557 6.26452 0.673094 6.17998L3.05472 3.7991L0.673844 1.41748C0.589307 1.33294 0.541814 1.21828 0.541814 1.09873C0.541814 0.979175 0.589307 0.864517 0.673844 0.77998C0.758382 0.695442 0.87304 0.647949 0.992594 0.647949C1.11215 0.647949 1.22681 0.695442 1.31134 0.77998L3.69222 3.1616L6.07384 0.78073C6.15838 0.696192 6.27304 0.648699 6.39259 0.648699C6.51215 0.648699 6.62681 0.696192 6.71134 0.78073C6.79588 0.865267 6.84338 0.979925 6.84338 1.09948C6.84338 1.21903 6.79588 1.33369 6.71134 1.41823L4.32972 3.7991L6.71172 6.18073C6.79626 6.26527 6.84375 6.37992 6.84375 6.49948C6.84375 6.61903 6.79626 6.73369 6.71172 6.81823C6.62718 6.90277 6.51252 6.95026 6.39297 6.95026C6.27341 6.95026 6.15876 6.90277 6.07422 6.81823L3.69222 4.4366L1.31059 6.81748Z"
                                fill="#8C8C8C"
                                stroke="#8C8C8C"
                                strokeWidth="0.6"
                              />
                            </svg>
                          </button>
                        </S.BtnWhiteGray>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            )
            }
            {/* 재전송 수신인 목록 */}
            {hooks.messageSendViewList.etcViewList.buddyList.length > 0 && (
              <li className={publishHook.activeTag === "reSend" ? 'active' : ''}>

                <div className="smallContents">
                  <div className="RecipientTitle" role="button" onClick={(e: any) => publishHook.toggleHandler(e, 'reSend')} tabIndex={0}>
                    <p>{hooks.messageSendViewList.etcViewList.buddyGroupName ?? "재전송 수신인 목록"}</p>
                  </div>
                  <div className="state">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" viewBox="0 0 11 14" fill="none">
                      <path
                        d="M9.15034 7.28C9.57823 7.28 9.9886 7.457 10.2912 7.77206C10.5937 8.08712 10.7637 8.51444 10.7637 8.96V9.52C10.7637 11.7275 8.76312 14 5.38577 14C2.00841 14 0.0078125 11.7275 0.0078125 9.52V8.96C0.0078125 8.51444 0.177794 8.08712 0.480363 7.77206C0.782931 7.457 1.1933 7.28 1.6212 7.28H9.15034ZM5.38577 0C6.17024 0 6.92259 0.324499 7.4773 0.902111C8.03201 1.47972 8.34364 2.26313 8.34364 3.08C8.34364 3.89687 8.03201 4.68028 7.4773 5.25789C6.92259 5.8355 6.17024 6.16 5.38577 6.16C4.60129 6.16 3.84894 5.8355 3.29423 5.25789C2.73952 4.68028 2.42789 3.89687 2.42789 3.08C2.42789 2.26313 2.73952 1.47972 3.29423 0.902111C3.84894 0.324499 4.60129 0 5.38577 0Z"
                        fill="#908F90"
                      />
                    </svg>
                    <p>{hooks.messageSendViewList.etcViewList.buddyList.length}명</p>
                    <S.BtnWhiteGray>
                      <button className="eraseButton" onClick={() => hooks.deleteSendTopEtcList()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path
                            d="M1.31059 6.81748C1.22606 6.90202 1.1114 6.94951 0.991844 6.94951C0.87229 6.94951 0.757632 6.90202 0.673094 6.81748C0.588557 6.73294 0.541063 6.61828 0.541063 6.49873C0.541064 6.37917 0.588557 6.26452 0.673094 6.17998L3.05472 3.7991L0.673844 1.41748C0.589307 1.33294 0.541814 1.21828 0.541814 1.09873C0.541814 0.979175 0.589307 0.864517 0.673844 0.77998C0.758382 0.695442 0.87304 0.647949 0.992594 0.647949C1.11215 0.647949 1.22681 0.695442 1.31134 0.77998L3.69222 3.1616L6.07384 0.78073C6.15838 0.696192 6.27304 0.648699 6.39259 0.648699C6.51215 0.648699 6.62681 0.696192 6.71134 0.78073C6.79588 0.865267 6.84338 0.979925 6.84338 1.09948C6.84338 1.21903 6.79588 1.33369 6.71134 1.41823L4.32972 3.7991L6.71172 6.18073C6.79626 6.26527 6.84375 6.37992 6.84375 6.49948C6.84375 6.61903 6.79626 6.73369 6.71172 6.81823C6.62718 6.90277 6.51252 6.95026 6.39297 6.95026C6.27341 6.95026 6.15876 6.90277 6.07422 6.81823L3.69222 4.4366L1.31059 6.81748Z"
                            fill="#8C8C8C"
                            stroke="#8C8C8C"
                            strokeWidth="0.6"
                          />
                        </svg>
                      </button>
                      <button className="arrowDown">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                          <path
                            d="M5.24922 5.19001L8.90493 3.31538C8.96596 3.2841 9 3.24254 9 3.19933C9 3.15611 8.96596 3.11456 8.90493 3.08328L8.9008 3.08126C8.87121 3.06604 8.8356 3.05393 8.79613 3.04565C8.75666 3.03737 8.71415 3.0331 8.6712 3.0331C8.62824 3.0331 8.58574 3.03737 8.54626 3.04565C8.50679 3.05393 8.47118 3.06604 8.4416 3.08126L4.99931 4.84657L1.5584 3.08126C1.52882 3.06604 1.49321 3.05393 1.45374 3.04565C1.41427 3.03737 1.37176 3.0331 1.3288 3.0331C1.28585 3.0331 1.24334 3.03737 1.20387 3.04565C1.1644 3.05393 1.12879 3.06604 1.0992 3.08126L1.09507 3.08328C1.03404 3.11456 1 3.15611 1 3.19933C1 3.24254 1.03404 3.2841 1.09507 3.31538L4.75078 5.19001C4.78293 5.2065 4.82159 5.21963 4.86443 5.22859C4.90727 5.23756 4.95339 5.24219 5 5.24219C5.04661 5.24219 5.09273 5.23756 5.13557 5.22859C5.17841 5.21963 5.21707 5.2065 5.24922 5.19001Z"
                            fill="#8C8C8C"
                            stroke="#8C8C8C"
                          />
                          <path
                            d="M5.24922 2.70369L8.90493 0.82905C8.96596 0.797771 9 0.756214 9 0.713C9 0.669785 8.96596 0.628228 8.90493 0.596949L8.9008 0.594931C8.87121 0.579715 8.8356 0.567599 8.79613 0.559319C8.75666 0.551039 8.71415 0.54677 8.6712 0.54677C8.62824 0.54677 8.58574 0.551039 8.54626 0.559319C8.50679 0.567599 8.47118 0.579715 8.4416 0.594931L4.99931 2.36024L1.5584 0.59493C1.52882 0.579714 1.49321 0.567598 1.45374 0.559319C1.41427 0.551039 1.37176 0.546769 1.3288 0.546769C1.28585 0.546769 1.24334 0.551039 1.20387 0.559318C1.1644 0.567598 1.12879 0.579714 1.0992 0.59493L1.09507 0.596949C1.03404 0.628228 1 0.669784 1 0.712999C1 0.756214 1.03404 0.79777 1.09507 0.82905L4.75078 2.70369C4.78293 2.72017 4.82159 2.7333 4.86443 2.74227C4.90727 2.75123 4.95339 2.75586 5 2.75586C5.04661 2.75586 5.09273 2.75123 5.13557 2.74227C5.17841 2.7333 5.21707 2.72017 5.24922 2.70369Z"
                            fill="#8C8C8C"
                            stroke="#8C8C8C"
                          />
                        </svg>
                      </button>
                    </S.BtnWhiteGray>
                  </div>
                </div>
                <ul className={'numberList'}>
                  {hooks.messageSendViewList.etcViewList.buddyList.map((item: any) => (
                    <li key={uuidv4()}>
                      <div className="moreDetails">
                        <p className="name">{item?.buddyNm}</p>
                        <p className="tel">{item?.keyCommNo}</p>
                        <S.BtnWhiteGray>
                          <button className="deleteBtn" onClick={() => hooks.deleteSendBottomEtcList(item.keyCommNo)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                              <path
                                d="M1.31059 6.81748C1.22606 6.90202 1.1114 6.94951 0.991844 6.94951C0.87229 6.94951 0.757632 6.90202 0.673094 6.81748C0.588557 6.73294 0.541063 6.61828 0.541063 6.49873C0.541064 6.37917 0.588557 6.26452 0.673094 6.17998L3.05472 3.7991L0.673844 1.41748C0.589307 1.33294 0.541814 1.21828 0.541814 1.09873C0.541814 0.979175 0.589307 0.864517 0.673844 0.77998C0.758382 0.695442 0.87304 0.647949 0.992594 0.647949C1.11215 0.647949 1.22681 0.695442 1.31134 0.77998L3.69222 3.1616L6.07384 0.78073C6.15838 0.696192 6.27304 0.648699 6.39259 0.648699C6.51215 0.648699 6.62681 0.696192 6.71134 0.78073C6.79588 0.865267 6.84338 0.979925 6.84338 1.09948C6.84338 1.21903 6.79588 1.33369 6.71134 1.41823L4.32972 3.7991L6.71172 6.18073C6.79626 6.26527 6.84375 6.37992 6.84375 6.49948C6.84375 6.61903 6.79626 6.73369 6.71172 6.81823C6.62718 6.90277 6.51252 6.95026 6.39297 6.95026C6.27341 6.95026 6.15876 6.90277 6.07422 6.81823L3.69222 4.4366L1.31059 6.81748Z"
                                fill="#8C8C8C"
                                stroke="#8C8C8C"
                                strokeWidth="0.6"
                              />
                            </svg>
                          </button>
                        </S.BtnWhiteGray>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            )
            }
          </ol>
        </S.RecipientsList>
        <button className={`OpenArrowBtn ${publishHook.buttonActive ? '' : 'active'}`} onClick={publishHook.toggleRecipientsGroup}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
            <path
              d="M8.3646 7.91734L14.5427 4.94724C14.6458 4.89768 14.7034 4.83184 14.7034 4.76337C14.7034 4.6949 14.6458 4.62906 14.5427 4.5795L14.5357 4.57631C14.4857 4.5522 14.4255 4.533 14.3588 4.51988C14.2921 4.50677 14.2203 4.5 14.1477 4.5C14.0751 4.5 14.0033 4.50677 13.9366 4.51988C13.8699 4.533 13.8097 4.5522 13.7597 4.57631L7.94226 7.3732L2.12717 4.5763C2.07717 4.5522 2.01699 4.533 1.95028 4.51988C1.88358 4.50677 1.81174 4.5 1.73915 4.5C1.66656 4.5 1.59472 4.50677 1.52802 4.51988C1.46131 4.533 1.40113 4.5522 1.35113 4.5763L1.34415 4.5795C1.24101 4.62906 1.18347 4.6949 1.18347 4.76337C1.18347 4.83184 1.24101 4.89768 1.34415 4.94723L7.52224 7.91734C7.57657 7.94346 7.64192 7.96426 7.71432 7.97846C7.78671 7.99267 7.86466 8 7.94342 8C8.02219 8 8.10013 7.99267 8.17253 7.97846C8.24493 7.96426 8.31027 7.94346 8.3646 7.91734Z"
              fill="#191919"
              stroke="#191919"
            />
            <path
              d="M8.3646 4.41734L14.5427 1.44724C14.6458 1.39768 14.7034 1.33184 14.7034 1.26337C14.7034 1.1949 14.6458 1.12906 14.5427 1.0795L14.5357 1.07631C14.4857 1.0522 14.4255 1.033 14.3588 1.01988C14.2921 1.00677 14.2203 1 14.1477 1C14.0751 1 14.0033 1.00677 13.9366 1.01988C13.8699 1.033 13.8097 1.0522 13.7597 1.07631L7.94226 3.8732L2.12717 1.0763C2.07717 1.0522 2.01699 1.033 1.95028 1.01988C1.88358 1.00676 1.81174 1 1.73915 1C1.66656 1 1.59472 1.00676 1.52802 1.01988C1.46131 1.033 1.40113 1.0522 1.35113 1.0763L1.34415 1.0795C1.24101 1.12906 1.18347 1.1949 1.18347 1.26337C1.18347 1.33184 1.24101 1.39768 1.34415 1.44723L7.52224 4.41734C7.57657 4.44346 7.64192 4.46426 7.71432 4.47846C7.78671 4.49267 7.86466 4.5 7.94342 4.5C8.02219 4.5 8.10013 4.49267 8.17253 4.47846C8.24493 4.46426 8.31027 4.44346 8.3646 4.41734Z"
              fill="#191919"
              stroke="#191919"
            />
          </svg>
        </button>
      </S.AddressDestinationGroup>

      {/* 발신인 */}
      {publishHook.buttonActive ? (
        <>
          <S.AddresSenderGroup className={publishHook.liVisibilities.arrowOpen ? 'active' : ''}>
            <h3>발신인</h3>
            <S.SenderList className="SenderList">
              <S.AddressNumberGroup className="AddressNumberGroup" onClick={publishHook.toggleSenderGroup}>
                <div className="numberList">
                  <p>{callbackNumbers && selectNumber}</p>
                  <ul>
                    {callbackNumbers &&
                      callbackNumbers?.map((el: any) => (
                        <li key={uuidv4()} onClick={() => callbackNumHandle(el)}>
                          {el}
                        </li>
                      ))}
                  </ul>
                </div>
                <button className="arrowDown">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="5" viewBox="0 0 15 5" fill="none">
                    <path
                      d="M8.04405 3.91734L14.2221 0.947236C14.3253 0.897678 14.3828 0.831837 14.3828 0.763369C14.3828 0.694901 14.3253 0.629061 14.2221 0.579504L14.2152 0.576306C14.1652 0.552198 14.105 0.533001 14.0383 0.519884C13.9716 0.506766 13.8997 0.500001 13.8271 0.500001C13.7545 0.500001 13.6827 0.506766 13.616 0.519884C13.5493 0.533001 13.4891 0.552198 13.4391 0.576306L7.6217 3.3732L1.80661 0.576305C1.75662 0.552197 1.69643 0.533001 1.62973 0.519883C1.56302 0.506765 1.49119 0.5 1.41859 0.5C1.346 0.5 1.27416 0.506765 1.20746 0.519883C1.14075 0.533001 1.08057 0.552197 1.03057 0.576305L1.02359 0.579503C0.920453 0.62906 0.862917 0.694901 0.862917 0.763368C0.862917 0.831836 0.920452 0.897677 1.02359 0.947235L7.20168 3.91734C7.25602 3.94346 7.32136 3.96426 7.39376 3.97846C7.46616 3.99267 7.5441 4 7.62287 4C7.70163 4 7.77957 3.99267 7.85197 3.97846C7.92437 3.96426 7.98971 3.94346 8.04405 3.91734Z"
                      fill="#191919"
                      stroke="#191919"
                    />
                  </svg>
                </button>
              </S.AddressNumberGroup>
              <button className="registerNumber" onClick={addCallbackNumHandle}>
                번호등록
              </button>
            </S.SenderList>
          </S.AddresSenderGroup>

          {/* 전송내용 */}
          <S.AddresContentGroup>
            <S.TextTitle>
              <h3>전송내용</h3>
            </S.TextTitle>
            <S.Transmissiondetails subjectBoolean={calMsgByte(hooks.sndMsgState) > 90} maxByte={calMsgByte(hooks.sndMsgState) < 2000}>
								{ (calMsgByte(hooks.sndMsgState) > 90 || hooks.fileResult) && (
									<div className='titleGroup'>
										<p>제목 : </p>
										<input type="text" onChange={(e) => hooks.setSndMsgSubjectState(e.currentTarget.value)}/>
									</div>
								)}
              <div className="SendTextBox">
                <div className='sendContentGroup'>
                  {hooks.fileResult ? (
                    <div className="sendImage">
                      <img src={hooks.fileResult} alt=""/>
                      <img src={`data:image/jpeg;base64,${hooks.fileResult}`} alt=""/>

                      <button className="deleteButton" onClick={hooks.deleteInputFile}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path
                            d="M1.76958 7.16953C1.68504 7.25407 1.57038 7.30156 1.45083 7.30156C1.33127 7.30156 1.21662 7.25407 1.13208 7.16953C1.04754 7.08499 1.00005 6.97033 1.00005 6.85078C1.00005 6.73123 1.04754 6.61657 1.13208 6.53203L3.5137 4.15116L1.13283 1.76953C1.04829 1.68499 1.0008 1.57033 1.0008 1.45078C1.0008 1.33123 1.04829 1.21657 1.13283 1.13203C1.21737 1.04749 1.33202 1 1.45158 1C1.57113 1 1.68579 1.04749 1.77033 1.13203L4.1512 3.51366L6.53283 1.13278C6.61737 1.04824 6.73202 1.00075 6.85158 1.00075C6.97113 1.00075 7.08579 1.04824 7.17033 1.13278C7.25487 1.21732 7.30236 1.33198 7.30236 1.45153C7.30236 1.57108 7.25487 1.68574 7.17033 1.77028L4.7887 4.15116L7.1707 6.53278C7.25524 6.61732 7.30273 6.73198 7.30273 6.85153C7.30273 6.97108 7.25524 7.08574 7.1707 7.17028C7.08617 7.25482 6.97151 7.30231 6.85195 7.30231C6.7324 7.30231 6.61774 7.25482 6.5332 7.17028L4.1512 4.78866L1.76958 7.16953Z"
                            fill="white" stroke="white" strokeWidth="0.6"/>
                        </svg>
                      </button>
                    </div>
                  ) : null}

                  <textarea name="comment" value={hooks.sndMsgState} onChange={hooks.handleSendMsg}/>
                </div>
              </div>
              <div className="imageBox">
                <input type="file" id={"fileUpload"} ref={hooks.fileInputRef} onChange={hooks.uploadFileHandler} accept=".jpg" style={{display: 'none'}}/>
                <button onClick={hooks.onClickInputFile}>이미지 첨부</button>
              </div>
              <SendMsgByte sndMsg={hooks.sndMsgState} file={hooks.fileResult} type={"LMS"}/>
              {/*<p className="ByteCount">{*/}
              {/*  hooks.fileResult ? "MMS " : calMsgByte(hooks.sndMsgState) > 90 ? "LMS " : "SMS "}*/}
              {/*  <span>{calMsgByte(hooks.sndMsgState)} / 2,000</span> Byte</p>*/}
            </S.Transmissiondetails>
          </S.AddresContentGroup>

          <S.ActionButtonGroup>
            <button
              className="immediate grayactive"
              onClick={() => {
                publishHook.setTab(0);
                publishHook.setBottModalSwitch(true);
              }}
            >
              <p>즉시</p>
            </button>
            <button
              className="reservation"
              onClick={() => {
                publishHook.setTab(1);
                publishHook.setBottModalSwitch(true);
              }}
            >
              <p>예약</p>
            </button>
            <button
              className="repeat"
              onClick={() => {
                publishHook.setTab(2);
                publishHook.setBottModalSwitch(true);
              }}
            >
              <p>반복</p>
            </button>
            {/* 만약에 즉시, 예약, 반복 버튼이 active 가 아닐 경우 backgroundColor 색상 변경 */}
            <button className="transmit unactive">
              <p>전송</p>
            </button>
          </S.ActionButtonGroup>
        </>
      ) : null}

      {publishHook.bottModalSwitch ? (
        <S.HigherContent>
          <div className="activeGroup reservationGroup">
            <div className="higherWrap">
              <div className="dateGroup">
                <MessageSendBottom
                  sndDttm={hooks.sndDttm}
                  handleDate={hooks.handleDate}
                  repeatCycle={publishHook.repeatCycle}
                  repeatDay={publishHook.repeatDay}
                  setRepeatCycleState={hooks.setRepeatCycleState}
                  repeatCycleState={hooks.repeatCycleState}
                  toggleHand1={publishHook.toggleHand1}
                  repeatDayState={hooks.repeatDayState}
                  setRepeatDayState={hooks.setRepeatDayState}
                  repeatCountState={hooks.repeatCountState}
                  setRepeatCountState={hooks.setRepeatCountState}
                  tab={publishHook.tab}
                  onClickSendValidation={hooks.onClickSendValidation}
                  setBottModalSwitch={publishHook.setBottModalSwitch}
                  setTab={publishHook.setTab}
                  onClickSend={hooks.onClickSend}
                  setSndDateState={hooks.setSndDateState}
                  sndDateState={hooks.sndDateState}
                  timeState={hooks.timeState}
                  setTimeState={hooks.setTimeState}
                  handleTime={hooks.handleTime}
                />
              </div>
            </div>
          </div>
        </S.HigherContent>
      ) : null}
    </S.MessageSendWrap>
  );
};

export default MessageSend;
