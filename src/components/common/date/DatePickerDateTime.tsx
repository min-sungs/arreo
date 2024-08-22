/* eslint-disable */
import React from 'react'
import dayjs, { Dayjs } from 'dayjs';
import locale from 'antd/es/date-picker/locale/ko_KR';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generatePicker from 'antd/es/date-picker/generatePicker';
import 'dayjs/locale/ko';
const DatePicker = generatePicker<Dayjs>(dayjsGenerateConfig);
interface IDatePickerDateTime {
  onChange: any
  sndDttm: string
}


const DatePickerDateTime = ({onChange,sndDttm}: IDatePickerDateTime) => {
  return (
      <DatePicker onChange={onChange} showTime locale={locale} value={dayjs(sndDttm)}/>
  )
}

export default DatePickerDateTime