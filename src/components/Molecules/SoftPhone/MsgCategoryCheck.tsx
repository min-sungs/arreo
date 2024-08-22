import React from 'react';
import {
  MessageSendSystemCheckBoxWarp,
  MesssageTypeBlock,
} from '../../Organism/AddressBook/styles/MessageSendSystem.styles';
import BaseCheckBox from '../../Atom/BaseCheckBox';

interface MsgTypeCheckProps {
  onChange: (value: { value: string; onChange: () => void }) => void;
  msgType: {
    value: string;
    onChange: () => void;
  };
}

const MsgCategoryCheck = ({ onChange, msgType }: MsgTypeCheckProps) => {
  return (
    <MessageSendSystemCheckBoxWarp>
      {/* // SMS 즉시전송 : 1 예약전송 : 01 LMS/MMS 즉시전송 : M0, 예약전송 : M2 */}
      <MesssageTypeBlock>
        <BaseCheckBox
          label="즉시전송"
          name="즉시전송"
          value="M0"
          onChange={(e) => onChange({ value: e.target.value, onChange: msgType.onChange })}
          checked={msgType.value === 'M0'}
        />
      </MesssageTypeBlock>
      <MesssageTypeBlock>
        <BaseCheckBox
          label="예약전송"
          name="예약전송"
          value="M1"
          onChange={(e) => onChange({ value: e.target.value, onChange: msgType.onChange })}
          checked={msgType.value === 'M1'}
        />
      </MesssageTypeBlock>
      <MesssageTypeBlock>
        <BaseCheckBox
          label="반복전송"
          name="반복전송"
          value="M2"
          onChange={(e) => onChange({ value: e.target.value, onChange: msgType.onChange })}
          checked={msgType.value === 'M2'}
        />
      </MesssageTypeBlock>
    </MessageSendSystemCheckBoxWarp>
  );
};

export default MsgCategoryCheck;
