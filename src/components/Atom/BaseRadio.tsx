import React from 'react';

const BaseRadio = ({ children, value, name, defaultChecked, disabled, register, registerField }: any) => {
  return (
    <label>
      <input
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled}
        {...register(registerField)}
      />
      {children}
    </label>
  );
};

export default BaseRadio;
