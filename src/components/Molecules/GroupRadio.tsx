import React, { ReactNode } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface RadioGroupProps {
  children: ReactNode;
}

const GroupRadio = ({ children }: RadioGroupProps) => {
  return <fieldset>{children}</fieldset>;
};

export default GroupRadio;
