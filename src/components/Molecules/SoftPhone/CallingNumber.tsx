import { Space } from 'antd';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import BaseButton from '../../Atom/BaseButton';
import { CallerNumberSelectBox } from '../../Organism/AddressBook/styles/MessageSendSystem.styles';

interface Callback {
  value: string;
  onChange: (value: string) => void;
}

interface CallerNumber {
  callback: string;
}

interface CallingNumberProps {
  callback: Callback;
  handleOnChange: (callback: Callback) => void;
  callerNumberList: CallerNumber[];
}

const CallingNumber = ({ callback, handleOnChange, callerNumberList }: CallingNumberProps) => {
  return (
    <Space size={12}>
      <CallerNumberSelectBox
        value={callback.value}
        onChange={(e) => handleOnChange({ value: e.target.value, onChange: callback.onChange })}
      >
        {callerNumberList &&
          callerNumberList?.map((number: any) => {
            return (
              <option key={uuidv4()} value={number.callback}>
                {number.callback}
              </option>
            );
          })}
      </CallerNumberSelectBox>
      <BaseButton width="7rem" height="20px" backgroundColor="#383838" color="#fff" fontSize="1rem">
        번호등록
      </BaseButton>
    </Space>
  );
};

export default CallingNumber;
