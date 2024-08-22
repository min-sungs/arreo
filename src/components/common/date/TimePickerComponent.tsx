/* eslint-disable */
import React from 'react';
import locale from 'antd/es/date-picker/locale/ko_KR';
import 'dayjs/locale/ko';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
interface ITimePickerComponent {
  onChange: any;
  sndDate: string;
}

const TimePickerComponent = ({ onChange, sndDate }: ITimePickerComponent) => {
  return <TimePicker onChange={onChange} locale={locale} value={dayjs(sndDate, 'HH:mm:ss')} />;
};

export default TimePickerComponent;
