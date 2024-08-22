import * as yup from 'yup';

const useCallingValidation = () => {
  const schema = yup.object().shape({
    // 등록할 발신번호
    callbackNo: yup
      .string()
      .required('반드시 입력해주세요')
      .test('is-valid-length', '등록할 발신번호를 확인해주세요.', (value) => {
        // 13자리인 경우 유효
        if (value && !/^\d+$/.test(value)) {
          // 숫자가 아닌 경우 에러 메시지 반환
          return new yup.ValidationError('숫자만 입력해주세요', null, 'callbackNo');
        }

        return value.length === 11;
      }),
    alarmPhone: yup
      .string()
      .required('반드시 입력해주세요')
      .test('is-valid-length', '결과통지번호를 확인해주세요.', (value) => {
        // 13자리인 경우 유효
        if (value && !/^\d+$/.test(value)) {
          // 숫자가 아닌 경우 에러 메시지 반환
          return new yup.ValidationError('숫자만 입력해주세요', null, 'callbackNo');
        }

        return value.length === 11;
      }),
  });

  return { schema };
};

export default useCallingValidation;
