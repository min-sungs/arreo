import React from "react";
import * as S from "./Schedule.styles";
import ScheduleLeftDataView from "./components/ScheduleLeftDataView.tsx";
import ScheduleTable from "./components/ScheduleTable.tsx";
import {useSchedule} from "../../../../../components/hooks/customs/sendResult/sendReservation/useSchedule.ts";

const Schedule = () => {

  const scheduleHooks = useSchedule();

  return (
    <S.ScheduleWrap>
      <h2>예약전송 관리</h2>
      <ScheduleLeftDataView
        detailInfo={scheduleHooks.detailInfo}
        setDatePicker={scheduleHooks.setDatePicker}
        setSndMsg={scheduleHooks.setSndMsg}
        datePicker={scheduleHooks.datePicker}
        sndMsg={scheduleHooks.sndMsg}
      />
      {/* Start Table */}
      <ScheduleTable
        pageSize={scheduleHooks.pageSize}
        listNumber={scheduleHooks.listNumber}
        tableData={scheduleHooks.tableData}
        totalElements={scheduleHooks.totalElements}
        datePicker={scheduleHooks.datePicker}
        sndMsg={scheduleHooks.sndMsg}
        startPage={scheduleHooks.startPage}
        setStartPage={scheduleHooks.setStartPage}
        activePage={scheduleHooks.activePage}
        setActivePage={scheduleHooks.setActivePage}
        setCurrentPage={scheduleHooks.setCurrentPage}
        setSearchAllValue={scheduleHooks.setSearchAllValue}
        eventHook={scheduleHooks.handlePageChange}
      />
      {/* End Table */}
    </S.ScheduleWrap>


  )
}

export default Schedule;