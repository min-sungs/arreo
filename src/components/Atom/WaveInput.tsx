import React from 'react';
import styled from 'styled-components';

interface LabelCharProps {
  'data-index'?: number; // data-index 속성을 정의
}

const WaveGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
  font-size: 15px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 200px;
  border: none;
  border-bottom: 1px solid #515151;
  background: transparent;

  &:focus {
    outline: none;
    ~ .bar:before,
    ~ .bar:after {
      width: 50%;
    }
    ~ label .label-char {
      transform: translateY(-20px);
      font-size: 14px;
      color: #5264ae;
    }
  }

  &:valid {
    ~ label .label-char {
      transform: translateY(-20px);
      font-size: 14px;
      color: #5264ae;
    }
  }
`;

const Label = styled.label`
  color: #999;
  font-size: 15px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px; /* 라벨을 위로 이동시켜 더 작은 값으로 변경 */
  display: flex;
`;

const LabelChar = styled.span.attrs<LabelCharProps>((props) => ({
  'data-index': props['data-index'] || 0,
}))`
  transition: 0.2s ease all;
  transition-delay: calc(${(props: LabelCharProps) => props['data-index']} * 0.05s);
`;

const Bar = styled.span`
  position: relative;
  display: block;
  width: 100%;

  &:before,
  &:after {
    content: '';
    height: 1px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #5264ae;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  &:before {
    left: 50%;
    transform-origin: right;
  }

  &:after {
    right: 50%;
    transform-origin: left;
  }
`;

const WaveInput = () => {
  return (
    <WaveGroup>
      <Input required type="text" className="input" />
      <Label className="label">
        <LabelChar className="label-char" data-index={0}>
          S
        </LabelChar>
        <LabelChar className="label-char" data-index={1}>
          e
        </LabelChar>
        <LabelChar className="label-char" data-index={2}>
          a
        </LabelChar>
        <LabelChar className="label-char" data-index={3}>
          r
        </LabelChar>
        <LabelChar className="label-char" data-index={4}>
          c
        </LabelChar>
        <LabelChar className="label-char" data-index={5}>
          h
        </LabelChar>
      </Label>
      <Bar className="bar" />
    </WaveGroup>
  );
};

export default WaveInput;
