import * as S from "../TransmissionResult/TransmissionResult.styles.ts";
import React, {useState} from "react";
import {ITopButton} from './TopButton.types.ts'

const TopButton = ({handleChangeComponent,focusNm}:ITopButton) => {

  return (
    <div className="menuGroup">
      <S.ManagementBtnGroup>
        <button className={`${focusNm === "send" ? 'active' : ""}`} onClick={() => handleChangeComponent("send")}>전송결과 조회</button>
        <button className={`${focusNm === "schedule" ? 'active' : ""}`} onClick={() => handleChangeComponent("schedule")}>예약전송 관리</button>
        <button className={`${focusNm === "long" ? 'active' : ""}`} onClick={() => handleChangeComponent("long")}>장기보관함</button>
      </S.ManagementBtnGroup>
    </div>
  )
}

export default TopButton