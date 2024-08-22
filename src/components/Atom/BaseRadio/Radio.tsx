import React from 'react';
import { useRecoilState } from 'recoil';

const Radio = ({ children, value, name, setRadioValue, radioValue }: any) => {
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.target.value);
  };

  return (
    <label>
      <input type="radio" value={value} name={name} checked={value === radioValue} onChange={handleRadioChange} />
      {children}
    </label>
  );
};

export default Radio;
