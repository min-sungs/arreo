import React from 'react';
import styled, { css } from 'styled-components';

interface Option {
  value: string | number;
  label: string;
}

interface BaseSelectProps {
  name?: string;
  options: Option[];
  value?: string | number;
  onChange?: (value: string) => void;
  defaultValue?: string;

  customStyle?: any; // Add a new prop for styles
}

const StyledSelect = styled.select``;

const BaseSelect: React.FC<BaseSelectProps> = ({
  name,
  options,
  value = undefined,
  onChange,
  customStyle,
  defaultValue,
}): React.JSX.Element => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div>
      {/* Apply the custom style here */}
      <StyledSelect name={name} value={value} defaultValue={defaultValue} onChange={handleChange} style={customStyle}>
        {options.map((option) => (
          <option
            style={{ backgroundColor: '#f5f5f5', color: '#333', border: 'none' }}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </div> // Wrap the Styled Select with a div
  );
};

export default BaseSelect;
