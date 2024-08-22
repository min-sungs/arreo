/* eslint-disable */

import React, {useEffect, useState} from "react";
import DatePickerDateTime from "../../../../common/date/DatePickerDateTime.tsx";
import TimePickerComponent from "../../../../common/date/TimePickerComponent.tsx";
import {v4 as uuidv4} from "uuid";
import {IMessageSendBottom} from "./MessageSend.type.ts";
import {useQuery} from "@tanstack/react-query";
import {instance} from "../../../../../apis/api/clientAxios.ts";
import * as S from "../MessageSend.styles.ts";


const MessageSendBottom = (props: IMessageSendBottom) => {


  const [sendInfoParams, setSendInfoParams] = useState<any>(null);

  useEffect(() => {
    return () => {
      props.setRepeatCycleState({label: "매주", value: "week"})
      props.setRepeatDayState({label: '월', value: 'monday'});
      props.setRepeatCountState("2");
    }
  }, []);

  useEffect(() => {
    const sendInfo = props.onClickSendValidation(props.tab);
    setSendInfoParams({
      callback: sendInfo.dto.callback,
      usrCd: sendInfo.dto.usrCd,
      groupSeqList: sendInfo.dto.groupSeqList,
      buddySeqList: sendInfo.dto.buddySeqList,
      etcPhoneNumberList: sendInfo.dto.etcPhoneNumberList,
      repeatCount: props.repeatCountState,
    })
  }, [props.repeatCountState]);

  // 전송 정보 ( 가격 등등 ) api
  const {
    data,
    isLoading
  } = useQuery(['sendInfo', sendInfoParams?.callback, sendInfoParams?.usrCd, sendInfoParams?.groupSeqList, sendInfoParams?.buddySeqList, sendInfoParams?.etcPhoneNumberList], async () => {
    const response = await instance.post('/message/legacy/send-info', sendInfoParams)
    return response.data
  }, {
    enabled: sendInfoParams !== null
  })


  return (
    <>
      {!isLoading && (
        <div>
          {data?.pointEnough && (
            <div className="TotalNumber">
              <p>
                총 <span className="count">{data?.totalReceivers}</span>
                <span>명</span>에게 <span>즉시</span> 전송합니다.
              </p>
            </div>
          )}
          {props.tab === 0 && (
            data?.pointEnough ? null : (
              <div className={`dateTable reservationTable`}>
                <h4>충전 금액이 부족합니다.</h4>
                <button>충전하러 가기</button>
              </div>
            )
          )}
          {props.tab === 1 && (
            data?.pointEnough ? (
              <div className={`dateTable`}>
                <DatePickerDateTime onChange={props.handleDate} sndDttm={props.sndDttm}/>
              </div>
            ) : (
              <div className={`dateTable reservationTable`}>
                <h4>충전 금액이 부족합니다.</h4>
                <button>충전하러 가기</button>
              </div>
            )
          )}
          {props.tab === 2 && (
            data?.pointEnough ? (
              <div className="dateTable repetitionTable">
                <TimePickerComponent onChange={props.handleTime} sndDate={props.timeState}/>
                <div className="dateBox">
                  {/* 매주 , 매월 */}
                  <div className="repetitionBox cycleBox">
                    <h4>반복 주기</h4>
                    <div className="group">
                      <button className="actBtn" onClick={props.toggleHand1} tabIndex={0}>
                        <span>{props.repeatCycleState.label}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="6" viewBox="0 0 14 6" fill="none">
                          <path
                            d="M12.9144 0.156925L7.44885 4.76826C7.32959 4.8694 7.16862 4.92613 7.00087 4.92613C6.83312 4.92613 6.67214 4.8694 6.55289 4.76826L1.08615 0.157925C0.965866 0.057316 0.804471 0.00100048 0.636419 0.00100048C0.468366 0.00100048 0.306971 0.057316 0.18669 0.157925C0.127602 0.207306 0.0806439 0.266326 0.0485811 0.331507C0.0165183 0.396689 0 0.466713 0 0.537453C0 0.608192 0.0165183 0.678216 0.0485811 0.743398C0.0806439 0.80858 0.127602 0.8676 0.18669 0.916981L5.6511 5.52732C6.01102 5.83027 6.49529 6 6.9997 6C7.50412 6 7.98838 5.83027 8.3483 5.52732L13.8127 0.916981C13.872 0.867584 13.9191 0.808502 13.9513 0.743228C13.9834 0.677954 14 0.607813 14 0.536953C14 0.466093 13.9834 0.395951 13.9513 0.330677C13.9191 0.265403 13.872 0.206321 13.8127 0.156925C13.6924 0.056316 13.531 0 13.363 0C13.1949 0 13.0335 0.056316 12.9133 0.156925"
                            fill="#5B5B5C"
                          />
                        </svg>
                      </button>
                      <ul>
                        {props.repeatCycle.map((el) => (
                          <li value={el.value} key={uuidv4()}>
                            <button onClick={() => {
                              props.setRepeatCycleState(el);
                            }}>{el.label}</button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* 요일, 월 */}
                  <div className="repetitionBox dayBox">
                    <h4>{props.repeatCycleState.value === 'week' ? '요일' : '일'}</h4>
                    <div className="group">
                      <button className="actBtn" onClick={props.toggleHand1} tabIndex={0}>
                        <span>
                          {props.repeatCycleState.value === 'week' ? props.repeatDayState.label : props.sndDateState}
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="6" viewBox="0 0 14 6" fill="none">
                          <path
                            d="M12.9144 0.156925L7.44885 4.76826C7.32959 4.8694 7.16862 4.92613 7.00087 4.92613C6.83312 4.92613 6.67214 4.8694 6.55289 4.76826L1.08615 0.157925C0.965866 0.057316 0.804471 0.00100048 0.636419 0.00100048C0.468366 0.00100048 0.306971 0.057316 0.18669 0.157925C0.127602 0.207306 0.0806439 0.266326 0.0485811 0.331507C0.0165183 0.396689 0 0.466713 0 0.537453C0 0.608192 0.0165183 0.678216 0.0485811 0.743398C0.0806439 0.80858 0.127602 0.8676 0.18669 0.916981L5.6511 5.52732C6.01102 5.83027 6.49529 6 6.9997 6C7.50412 6 7.98838 5.83027 8.3483 5.52732L13.8127 0.916981C13.872 0.867584 13.9191 0.808502 13.9513 0.743228C13.9834 0.677954 14 0.607813 14 0.536953C14 0.466093 13.9834 0.395951 13.9513 0.330677C13.9191 0.265403 13.872 0.206321 13.8127 0.156925C13.6924 0.056316 13.531 0 13.363 0C13.1949 0 13.0335 0.056316 12.9133 0.156925"
                            fill="#5B5B5C"
                          />
                        </svg>
                      </button>
                      <ul>
                        {props.repeatCycleState.value === 'week'
                          ? props.repeatDay.map((el) => (
                            <li value={el.value} key={uuidv4()}>
                              <button onClick={() => props.setRepeatDayState(el)}>{el.label}</button>
                            </li>
                          ))
                          : Array(31)
                            .fill(1)
                            .map((_, index: number) => (
                              <li value={31 - index} key={uuidv4()}>
                                <button onClick={() => props.setSndDateState(String(31 - index))}>{31 - index}</button>
                              </li>
                            ))}
                      </ul>
                    </div>
                  </div>
                  {/* 반복 횟수 1,2,3,4 ...  */}
                  <div className="repetitionBox countBox">
                    <h4>반복 횟수</h4>
                    <div className="group">
                      <button className="actBtn" onClick={props.toggleHand1} tabIndex={0}>
                        <span>{props.repeatCountState}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="6" viewBox="0 0 14 6" fill="none">
                          <path
                            d="M12.9144 0.156925L7.44885 4.76826C7.32959 4.8694 7.16862 4.92613 7.00087 4.92613C6.83312 4.92613 6.67214 4.8694 6.55289 4.76826L1.08615 0.157925C0.965866 0.057316 0.804471 0.00100048 0.636419 0.00100048C0.468366 0.00100048 0.306971 0.057316 0.18669 0.157925C0.127602 0.207306 0.0806439 0.266326 0.0485811 0.331507C0.0165183 0.396689 0 0.466713 0 0.537453C0 0.608192 0.0165183 0.678216 0.0485811 0.743398C0.0806439 0.80858 0.127602 0.8676 0.18669 0.916981L5.6511 5.52732C6.01102 5.83027 6.49529 6 6.9997 6C7.50412 6 7.98838 5.83027 8.3483 5.52732L13.8127 0.916981C13.872 0.867584 13.9191 0.808502 13.9513 0.743228C13.9834 0.677954 14 0.607813 14 0.536953C14 0.466093 13.9834 0.395951 13.9513 0.330677C13.9191 0.265403 13.872 0.206321 13.8127 0.156925C13.6924 0.056316 13.531 0 13.363 0C13.1949 0 13.0335 0.056316 12.9133 0.156925"
                            fill="#5B5B5C"
                          />
                        </svg>
                      </button>
                      <ul>
                        {Array(9)
                          .fill(1)
                          .map((_, index: number) => (
                            <li value={index + 2} key={uuidv4()}>
                              <button onClick={() => props.setRepeatCountState(String(index + 2))}>{index + 2}</button>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={`dateTable reservationTable`}>
                <h4>충전 금액이 부족합니다.</h4>
                <button>충전하러 가기</button>
              </div>
            )
          )}

          {data?.pointEnough ? (
            <div className="cashGroups">
              <div className="transferGroup">
                <div className="cashBox allCashGroup">
                  <p>전송금액</p>
                  <p className="cash allCash">
                    {props.tab === 2 ? (
                        <> <span>{props.repeatCountState === "2" ? (data?.totalCost) : ((data?.totalCost / 2) * parseInt(props.repeatCountState))}</span> c</>
                      ) :
                      (<> <span>{data?.totalCost / 2}</span> c</>)
                    }

                  </p>
                </div>
              </div>
              <div className="retentionGroups">
                <h2>보유 포인트 · 캐쉬</h2>
                <div className="flexBox amountGroup">
                  <div className="cashBox remainingPoint">
                    <p>포인트 </p>
                    <p className="cash point_n">
                      <span>{data?.remainingPoint}</span> p
                    </p>
                  </div>
                  <div className="cashBox remainingCash">
                    <p>캐쉬 </p>
                    <p className="cash cash_n">
                      <span>{data?.remainingCash}</span> c
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flexBox-js cashGroups">
              <div className="cashBox allCashGroup">
                <p>전송 금액</p>
                <p className="cash allCash">
                  {props.tab === 2 ? (
                      <> <span>{props.repeatCountState === "2" ? (data?.totalCost) : ((data?.totalCost / 2) * parseInt(props.repeatCountState))}</span> c</>
                    ) :
                    (<> <span>{data?.totalCost / 2}</span> c</>)
                  }
                </p>
              </div>
              <div className="cashBox allCashGroup">
                <p>부족한 캐쉬</p>
                <p className="cash allCash">
                  {props.tab === 2 ? (
                      <> <span>{props.repeatCountState === "2" ? (data?.shortageCost) : ((data?.shortageCost / 2) * parseInt(props.repeatCountState))}</span> c</>
                    ) :
                    (<> <span>{data?.shortageCost / 2}</span> c</>)
                  }
                </p>
              </div>
            </div>
          )}
        </div>
      )}
      <S.ActionButtonGroup>
        <button
          className={`immediate ${props.tab === 0 ? 'active' : null}`}
          onClick={() => {
            props.onClickSendValidation(0)
            props.setBottModalSwitch(props.tab !== 0);
            props.setTab(0);
          }}
        >
          <p>즉시</p>
        </button>
        <button
          className={`reservation ${props.tab === 1 ? 'active' : null}`}
          onClick={() => {
            props.onClickSendValidation(1)
            props.setBottModalSwitch(props.tab !== 1);
            props.setTab(1);
          }}
        >
          <p>예약</p>
        </button>
        <button
          className={`repeat ${props.tab === 2 ? 'active' : null}`}
          onClick={() => {
            props.onClickSendValidation(2)
            props.setBottModalSwitch(props.tab !== 2);
            props.setTab(2);
          }}
        >
          <p>반복</p>
        </button>
        <button className={`transmit ${data?.pointEnough ? '' : 'unactive'}`} onClick={() => {
          if (data?.pointEnough) {
            props.onClickSend(props.tab);
            props.setBottModalSwitch(false);
          }
        }}>
          <p>전송</p>
        </button>
      </S.ActionButtonGroup>
    </>
  )
}

export default MessageSendBottom;