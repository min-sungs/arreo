/* eslint-disable */

import React, {useRef, useState} from 'react';
import * as S from './SendReservation.styles'
import * as MHS from '../../MessageSendHistory/MessageSendHistory.styles'
import * as SBS from '../../styles/selectButton.styles'
import {ISendReservationTypes} from "./SendReservation.types.ts";
import TopButton from "../TopButton/TopButton.index.tsx";
import {useSendReservation} from "../../../../hooks/customs/sendResult/sendReservation/useSendReservation.ts";
import {v4 as uuidv4} from "uuid"
import {formatDateDate, formatDateTime} from "../../../../../apis/utils/formats/dateFormatUtil.ts";
import Loader from "../../../../common/Loader.tsx";


// 예약전송 관리 탭
const SendReservation = ({handleChangeComponent}: ISendReservationTypes) => {

  const contactBtnRef = useRef<HTMLButtonElement>(null);
  const contactBoxRef = useRef<HTMLUListElement>(null);

  const [isActive, setIsActive] = useState<boolean>(false);
  const sendReservationHooks = useSendReservation();


  return (
    <S.SendReservationWrap>
      {sendReservationHooks.isLoading && (<Loader/>)}
      {sendReservationHooks.isDeleteLoading && (<Loader/>)}
      <TopButton handleChangeComponent={handleChangeComponent} focusNm={"schedule"}/>
      <div className="searchGroup">
        {/*	전송결과 조회 */}
        <SBS.Inquiry>
          <div className={`contactGroup ${isActive ? 'active' : ''}`}>
            <button className="contactBtn" onClick={() => setIsActive(prev => !prev)} ref={contactBtnRef}>{sendReservationHooks.searchSelectState.label} <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="6" viewBox="0 0 14 6"
                                                                                                                         fill="none"><path
              d="M12.9144 0.156925L7.44885 4.76826C7.32959 4.8694 7.16862 4.92613 7.00087 4.92613C6.83312 4.92613 6.67214 4.8694 6.55289 4.76826L1.08615 0.157925C0.965866 0.057316 0.804471 0.00100048 0.636419 0.00100048C0.468366 0.00100048 0.306971 0.057316 0.18669 0.157925C0.127602 0.207306 0.0806439 0.266326 0.0485811 0.331507C0.0165183 0.396689 0 0.466713 0 0.537453C0 0.608192 0.0165183 0.678216 0.0485811 0.743398C0.0806439 0.80858 0.127602 0.8676 0.18669 0.91698L5.6511 5.52732C6.01102 5.83027 6.49529 6 6.9997 6C7.50412 6 7.98838 5.83027 8.3483 5.52732L13.8127 0.91698C13.872 0.867584 13.9191 0.808502 13.9513 0.743228C13.9834 0.677954 14 0.607813 14 0.536953C14 0.466093 13.9834 0.395951 13.9513 0.330677C13.9191 0.265403 13.872 0.206321 13.8127 0.156925C13.6924 0.056316 13.531 0 13.363 0C13.1949 0 13.0335 0.056316 12.9133 0.156925"
              fill="#5B5B5C"/></svg></span></button>
            <ul className='contactBox' ref={contactBoxRef}>
              {sendReservationHooks.messageSelect.map((el:any)=> (
                <li key={uuidv4()} onClick={() => setIsActive(false)}>
                  <button className='contact' onClick={()=> sendReservationHooks.handleSearchSelect(el)}>{el.label}</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="searchBox">
            <input type="text" placeholder='SEARCH' onChange={(e) => sendReservationHooks.handleSearchInput(e.currentTarget.value)} onKeyDown={sendReservationHooks.onClickSearch}/>
            <button className='searchIcon' onClick={sendReservationHooks.onClickSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path
                  d="M6.80418 1.70017C5.45074 1.70017 4.15274 2.23785 3.19572 3.19493C2.2387 4.15201 1.70105 5.45008 1.70105 6.8036C1.70105 8.15711 2.2387 9.45519 3.19572 10.4123C4.15274 11.3693 5.45074 11.907 6.80418 11.907C8.15762 11.907 9.45562 11.3693 10.4126 10.4123C11.3697 9.45519 11.9073 8.15711 11.9073 6.8036C11.9073 5.45008 11.3697 4.15201 10.4126 3.19493C9.45562 2.23785 8.15762 1.70017 6.80418 1.70017ZM4.20296e-08 6.8036C0.000155072 5.7207 0.258744 4.65348 0.754277 3.69063C1.24981 2.72777 1.96797 1.8971 2.84908 1.26764C3.7302 0.638181 4.7488 0.228114 5.82026 0.0715213C6.89171 -0.0850715 7.98506 0.0163317 9.00945 0.367304C10.0338 0.718275 10.9597 1.30868 11.71 2.08945C12.4603 2.87022 13.0135 3.8188 13.3235 4.85636C13.6335 5.89393 13.6915 6.99051 13.4925 8.05496C13.2935 9.11942 12.8434 10.121 12.1795 10.9765L16.7612 15.5585C16.9162 15.7189 17.0019 15.9338 17 16.1568C16.998 16.3798 16.9086 16.5932 16.7509 16.7509C16.5932 16.9086 16.3799 16.998 16.1569 17C15.9339 17.0019 15.719 16.9162 15.5586 16.7612L10.9768 12.1792C9.97107 12.9601 8.76636 13.4431 7.49971 13.5733C6.23306 13.7034 4.95531 13.4756 3.81174 12.9155C2.66818 12.3555 1.70469 11.4858 1.03085 10.4053C0.357015 9.32487 -0.000141459 8.07699 4.20296e-08 6.8036Z"
                  fill="#ABABAD"/>
              </svg>
            </button>
          </div>
        </SBS.Inquiry>
      </div>
      {/* 예약전송 관리 */}
      <S.SendReservation className='SendReservation'>
        <MHS.TransferList className='TransferList' ref={sendReservationHooks.listRef} onScroll={sendReservationHooks.onScrollHandler}>
          {sendReservationHooks.tableData[0]?.prepayPayNo ? (
            sendReservationHooks.tableData.map((el: any) => (
              <div className={`groups ${sendReservationHooks.scheduleDetailParamsState.prepayPayNo === el.prepayPayNo ? "active" : ""}`} key={uuidv4()} onScroll={sendReservationHooks.onScrollHandler}>
                <div className={`checkButtonGroup ${sendReservationHooks.checkBoxState.some((value: { prepayPayNo: string; callback: string; }) => value.prepayPayNo === el.prepayPayNo && value.callback === el.callback) ? "active" : ""}`} onClick={() => sendReservationHooks.handleCheckBox(el.prepayPayNo, el.callback)}>
                  <button className='checkBtn'/>
                </div>
                  <div className="titleGroup" onClick={() => sendReservationHooks.handleActiveList(el.prepayPayNo, el.callback)}>
                    <h3>
                      <p className='messageTitle'>{el.subject}</p>
                      {el.imageData && (
                        <p className='iconImage'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="15" viewBox="0 0 13 15" fill="none">
                            <path
                              d="M1.25147 2.68853C0.988417 2.87172 0.771812 3.12505 0.621811 3.42495C0.47181 3.72485 0.393289 4.06157 0.393555 4.40378V10.972C0.393555 12.7861 1.73138 14.2562 3.38231 14.2562H9.35983C9.67146 14.2564 9.97809 14.17 10.2512 14.0051C10.5243 13.8401 10.755 13.602 10.922 13.3128L10.8525 13.3166L10.783 13.3178H3.38231C2.81612 13.3178 2.27312 13.0707 1.87276 12.6308C1.4724 12.1908 1.24749 11.5942 1.24749 10.972V2.83992C1.24749 2.78925 1.24862 2.73858 1.25147 2.68853ZM6.97907 7.78049L6.92613 7.82928L2.69746 12.3914C2.98889 12.5888 3.32462 12.693 3.66696 12.6923H10.783C11.1389 12.6923 11.4707 12.5822 11.7525 12.3914L7.52445 7.82928L7.47663 7.7855C7.41384 7.73511 7.33972 7.70451 7.26227 7.69702C7.18482 7.68952 7.10697 7.70541 7.03714 7.74296L6.97907 7.78049ZM3.66696 0.806885C3.17626 0.806885 2.70566 1.02108 2.35868 1.40235C2.0117 1.78361 1.81677 2.30072 1.81677 2.83992V10.6593C1.81677 11.0515 1.91811 11.4181 2.09288 11.7289L6.3278 7.15995L6.40067 7.08676C6.63081 6.87411 6.9217 6.75721 7.22239 6.75652C7.52308 6.75584 7.8144 6.87141 8.04534 7.08301L8.12277 7.15995L12.3571 11.7283C12.5381 11.4073 12.6338 11.0369 12.6332 10.6593V2.83992C12.6332 2.30072 12.4383 1.78361 12.0913 1.40235C11.7443 1.02108 11.2737 0.806885 10.783 0.806885H3.66696ZM4.94785 3.46546C5.04296 3.46251 5.13764 3.48054 5.22629 3.51849C5.31495 3.55644 5.39577 3.61354 5.46399 3.68641C5.53222 3.75928 5.58645 3.84645 5.62348 3.94275C5.66051 4.03905 5.67959 4.14254 5.67959 4.24709C5.67959 4.35163 5.66051 4.45512 5.62348 4.55142C5.58645 4.64772 5.53222 4.73489 5.46399 4.80776C5.39577 4.88063 5.31495 4.93773 5.22629 4.97568C5.13764 5.01363 5.04296 5.03166 4.94785 5.02871C4.76268 5.02295 4.58685 4.93808 4.45773 4.79212C4.32861 4.64617 4.25637 4.45064 4.25637 4.24709C4.25637 4.04353 4.32861 3.848 4.45773 3.70205C4.58685 3.55609 4.76268 3.47122 4.94785 3.46546Z"
                              fill="#0D42E5"/>
                          </svg>
                        </p>
                      )}
                      {el.rcvPhnId && (<p className='peopleNumber'>(<span className='peoleNum'>{el.rcvPhnId}</span><span>)</span></p>)}
                    </h3>
                    <div className="dateGroup">
                      <p className='clockIcon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                          <path
                            d="M5.4987 0.0820312C8.49032 0.0820312 10.9154 2.50707 10.9154 5.4987C10.9154 8.49032 8.49032 10.9154 5.4987 10.9154C2.50707 10.9154 0.0820312 8.49032 0.0820312 5.4987C0.0820312 2.50707 2.50707 0.0820312 5.4987 0.0820312ZM5.4987 1.16536C4.34943 1.16536 3.24723 1.62191 2.43457 2.43457C1.62191 3.24723 1.16536 4.34943 1.16536 5.4987C1.16536 6.64797 1.62191 7.75017 2.43457 8.56283C3.24723 9.37549 4.34943 9.83203 5.4987 9.83203C6.64797 9.83203 7.75017 9.37549 8.56283 8.56283C9.37549 7.75017 9.83203 6.64797 9.83203 5.4987C9.83203 4.34943 9.37549 3.24723 8.56283 2.43457C7.75017 1.62191 6.64797 1.16536 5.4987 1.16536ZM5.4987 2.2487C5.63137 2.24872 5.75942 2.29742 5.85857 2.38559C5.95771 2.47375 6.02105 2.59523 6.03657 2.72699L6.04036 2.79036V5.27445L7.50666 6.74074C7.6038 6.83822 7.6602 6.96902 7.66441 7.10657C7.66861 7.24413 7.62029 7.37813 7.52927 7.48135C7.43825 7.58457 7.31136 7.64928 7.17436 7.66233C7.03736 7.67538 6.90053 7.6358 6.79166 7.55161L6.74074 7.50666L5.11574 5.88166C5.03155 5.7974 4.97749 5.68774 4.96191 5.56966L4.95703 5.4987V2.79036C4.95703 2.64671 5.0141 2.50893 5.11568 2.40735C5.21726 2.30577 5.35504 2.2487 5.4987 2.2487Z"
                            fill="#0D42E5"/>
                        </svg>
                      </p>
                      <p className="date">{formatDateDate(el?.sndDttm)} </p>
                      <p className="time">{formatDateTime(el?.sndDttm)}</p>
                    </div>
                  </div>
                  <div className="cancellationGroup">
                    <button className='cancellation' onClick={() => sendReservationHooks.onDelete({deleteRequests:[{ prepayPayNo: el.prepayPayNo, callback: el.callback }]})}>예약 취소</button>
                  </div>
              </div>
            ))
          ) : null}
        </MHS.TransferList>
        <S.CancelTextButton>
          <div className="CancelTextButtonGroup">
            <button className='cancelBtn' onClick={!sendReservationHooks.isDeleteLoading ? sendReservationHooks.onCheckedListDelete : ()=>{}}>선택한 예약 문자 취소</button>
          </div>
        </S.CancelTextButton>
      </S.SendReservation>


    </S.SendReservationWrap>
  );
};

export default SendReservation;
