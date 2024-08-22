import React, { useEffect } from 'react';
import {
  MessageTypeRsv,
  RepeatLabel,
  RepeatMessageWrap,
} from '../../Organism/AddressBook/styles/MessageSendSystem.styles';
import { DatePicker, DatePickerProps, Space } from 'antd';
import BaseSelect from '../../Atom/BaseSelect';
import { RangePickerProps } from 'antd/es/date-picker';

import { v4 as uuidv4 } from 'uuid';
import { register } from 'module';

type SelectType = {
  value: string;
  onChange: (value: string) => void;
};

type MessageTypeRsvProps = {
  msgType: SelectType;
  //   handleResSendChange: (date: any, dateString: string) => void;
  //   onOk: (value: any) => void;
  register: any;
  sndInterval: SelectType;
  handleOnChange: (param: { value: string; onChange: (value: string) => void }) => void;
  dayOfWeek: SelectType;
  sndDate: SelectType;
  sndHour: SelectType;
  sndMinute: SelectType;
  repeatCount: SelectType;
  setValue: any;
};

const SndMsgTypeCheck = ({
  msgType,
  register,
  sndInterval,
  handleOnChange,
  dayOfWeek,
  sndDate,
  sndHour,
  sndMinute,
  repeatCount,
  setValue,
}: MessageTypeRsvProps) => {
  const cycleTimeOption = [
    { value: 'week', label: '매주' },
    { value: 'month', label: '매월' },
  ];

  const cycleTimeClock = Array.from({ length: 23 }, (_, i) => ({
    value: `${i + 1}`,
    label: `${i + 1}`,
  }));

  const cycleMinute = Array.from({ length: 58 }, (_, i) => ({
    value: `${i + 2}`,
    label: `${i + 2}`,
  }));

  const cycleDate = Array.from({ length: 30 }, (_, i) => ({
    value: `${i + 1}`,
    label: `${i + 1}`,
  }));

  const timeOption = [
    { value: 'Monday', label: '월요일' },
    { value: 'Tuesday', label: '화요일' },
    { value: 'Wednesday', label: '수요일' },
    { value: 'Thursday', label: '목요일' },
    { value: 'Friday', label: '금요일' },
    { value: 'Saturday', label: '토요일' },
    { value: 'Sunday', label: '일요일' },
  ];

  const cycleCount = Array.from({ length: 20 }, (_, i) => ({
    value: `${i + 2}`,
    label: `${i + 2}`,
  }));

  // antd datepicker
  const handleResSendChange = (
    value: DatePickerProps['value'] | RangePickerProps['value'],
    dateString: [string, string] | string,
  ) => {
    if (typeof dateString === 'string') {
      setValue('sndDttm', dateString.replace(/[-:\s]/g, ''));
    }
  };

  const onOk = (value: DatePickerProps['value'] | RangePickerProps['value']) => {};

  // useEffect(() => {
  //   console.log('msgType 값이 설정됨');
  //   console.log(msgType);
  //   return () => {
  //     console.log('msgType 가 바뀌기 전..');
  //     console.log(msgType);
  //   };
  // }, [msgType]);

  return (
    <>
      {(() => {
        switch (msgType.value) {
          case 'M1':
            return (
              <MessageTypeRsv>
                <Space direction="vertical" size={15}>
                  {/* defaultValue={defaultDateTime}  */}
                  <DatePicker showTime onChange={handleResSendChange} onOk={onOk} />
                </Space>
              </MessageTypeRsv>
            );
          case 'M2':
            return (
              <RepeatMessageWrap>
                {/* {fields.map()} */}
                {/* sndInterval, dayOfWeek, sndDate, sndHour, sndMinute, repeatCount */}
                <select
                  // customStyle={{ width: 180 }}
                  // onChange={(e) => handleOnChange({ value: e, onChange: sndInterval.onChange })}
                  key={uuidv4()}
                  {...register(`sndInterval`)}
                  defaultValue="week"
                  // options={cycleTimeOption}
                >
                  {cycleTimeOption.map((el) => {
                    return (
                      <option key={uuidv4()} value={el.value}>
                        {el.label}
                      </option>
                    );
                  })}
                </select>
                <RepeatLabel>반복주기</RepeatLabel>
                {sndInterval.value === 'week' ? (
                  <>
                    <select
                      // customStyle={{ width: 180 }}
                      // onChange={(e) => handleOnChange({ value: e, onChange: dayOfWeek.onChange })}
                      value={dayOfWeek.value}
                      {...register(`dayOfWeek`)}
                      // options={timeOption}
                    >
                      {timeOption.map((el) => {
                        return (
                          <option key={uuidv4()} value={el.value}>
                            {el.label}
                          </option>
                        );
                      })}
                    </select>
                    <RepeatLabel> 요일</RepeatLabel>
                  </>
                ) : (
                  <>
                    <BaseSelect
                      // customStyle={{ width: 180 }}
                      value={sndDate.value}
                      onChange={(e) => handleOnChange({ value: e, onChange: sndDate.onChange })}
                      options={cycleDate}
                    />
                    <RepeatLabel> 일</RepeatLabel>
                  </>
                )}
                <BaseSelect
                  // customStyle={{ width: 180 }}
                  value={sndHour.value}
                  onChange={(e) => handleOnChange({ value: e, onChange: sndHour.onChange })}
                  options={cycleMinute}
                />
                <RepeatLabel> 시</RepeatLabel>

                <BaseSelect
                  // customStyle={{ width: 180 }}
                  value={sndMinute.value}
                  onChange={(e) => handleOnChange({ value: e, onChange: sndMinute.onChange })}
                  options={cycleTimeClock}
                />
                <RepeatLabel> 분</RepeatLabel>

                <BaseSelect
                  // customStyle={{ width: 180 }}
                  value={repeatCount.value}
                  onChange={(e) => handleOnChange({ value: e, onChange: repeatCount.onChange })}
                  options={cycleCount}
                />
                <RepeatLabel> 반복횟수</RepeatLabel>
              </RepeatMessageWrap>
            );
          default:
            return null;
        }
      })()}
    </>
  );
};

export default SndMsgTypeCheck;
