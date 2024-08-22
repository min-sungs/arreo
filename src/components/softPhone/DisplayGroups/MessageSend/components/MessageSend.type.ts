import React from "react";

export interface IMessageSendBottom {
  repeatCycle: {label: string, value: string}[]
  repeatDay: {label: string, value: string}[]
  toggleHand1: (e: any) => void
  handleDate(     date: any,     dateString: any): void
  sndDttm: string
setRepeatCycleState: React.Dispatch<React.SetStateAction<{label: string, value: string}>>
  repeatCycleState: {label: string, value: string}
  repeatDayState: {label: string, value: string}
  setRepeatDayState: React.Dispatch<React.SetStateAction<{label: string, value: string}>>
  repeatCountState: string
  setRepeatCountState: React.Dispatch<React.SetStateAction<string>>
  tab: number
  onClickSendValidation: any
  setBottModalSwitch: React.Dispatch<React.SetStateAction<boolean>>
  setTab: React.Dispatch<React.SetStateAction<number>>
  onClickSend: (tap: number) => void
  setSndDateState: React.Dispatch<React.SetStateAction<string>>
  sndDateState: string
  timeState: string
  setTimeState: React.Dispatch<React.SetStateAction<string>>
  handleTime(     time: any,     timeString: any): void
}