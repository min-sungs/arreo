import React from 'react';
import styled from 'styled-components';

interface Option {
  value: string | number;
  label: string;
}

interface SelectBoxProps {
  name: string;
  options: Option[];
  value: string | number;
  onChange: (value: string) => void;
}

const Select = styled.select`
  font-family: 'Pretendard', 'Noto Sans KR', Roboto, 'Nanum Gothic', 'Open Sans', sans-serif;
  border: 1px solid #e9ecef;
  border-radius: 0.8rem;
  background-color: #fff;
  outline: none;
  /* box-shadow: -3px -3px 8px #fff, 3px 3px 8px #babecc; */
  box-shadow:
    inset 0 1px 2px rgba(255, 255, 255, 0.3),
    0 1px 2px rgba(0, 0, 0, 0.4);
  text-shadow: 1px 1px 20px #babecc;
  font-size: 1.6rem;
  font-weight: 400;
  padding: 0.2rem 0.8rem 0.3rem;
  width: fit-content;

  /* border: 1px solid #333;
    border-radius: 4px;
    height: 3.2rem;
    outline: none;
    padding: 0.2rem 0.4rem;
    width: fit-content;
    font-size: 1.6rem;
    font-weight: 500; */
`;

const SelectBox: React.FC<SelectBoxProps> = ({ name, options, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <Select name={name} value={value} onChange={handleChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};

export default SelectBox;
