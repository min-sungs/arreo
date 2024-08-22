import React, { useEffect, useState } from 'react';

export interface ValiData {
  label: string | null;
  value: string | null;
  handleInputChange: any;
  rowIndex: number | null;
}

/** 벨리데이션 컴포넌트 */
const useInputValidation = ({ label, value, handleInputChange, rowIndex }: ValiData) => {
  const [error, setError] = useState('');

  useEffect(() => {
    switch (label) {
      case '이메일': {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value && !emailRegex.test(value)) {
          setError('유효하지 않은 이메일 주소입니다.');
        } else {
          setError('');
        }
        break;
      }
      case '휴대폰번호': {
        const phoneNumRegex = /^01([016789])-?([0-9]{3,4})-?([0-9]{4})$/;
        if (value && !phoneNumRegex.test(value)) {
          setError('유효하지 않은 휴대폰 번호입니다.');
        } else {
          setError('');
        }
        break;
      }
      // case '집우편번호':
      // case '회사우편번호': {
      //   const zipCdLength = value?.length;
      //   if (value && zipCdLength > 6)
      // }
      default:
        setError('');
        break;
    }
  }, [label, value]);

  return {
    error,
    inputProps: {
      type: 'text',
      width: '200px',
      name: label,
      placeholder: label,
      value: value ?? '',
      onChange: (e: any) => handleInputChange(label, rowIndex, e.target.value),
    },
  };
};
export default useInputValidation;
