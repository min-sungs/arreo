import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const RegisterSelect = styled.select``;

const RegisterOption = styled.option``;

interface optionsType {
  label: string;
  value: string;
}

interface resgisterProps {
  options: optionsType[];
  register: any;
  field: string;
  value?: string;
}

const RegisterSelectBox = ({ options, register, field, value }: resgisterProps) => {
  return (
    <RegisterSelect key={uuidv4()} {...register(field)} defaultValue={value}>
      {options.map((option) => {
        return (
          <RegisterOption key={uuidv4()} value={option.value}>
            {option?.label}
          </RegisterOption>
        );
      })}
    </RegisterSelect>
  );
};

export default RegisterSelectBox;
