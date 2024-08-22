import * as yup from 'yup';

const useValidation = () => {
  const emailData = [
    { label: '선택', value: '선택' },
    { label: 'naver.com', value: 'naver.com' },
    { label: 'hanmail.net', value: 'hanmail.net' },
    { label: 'gmail.com', value: 'gmail.com' },
    { label: 'kakao.com', value: 'kakao.com' },
    { label: 'arreo.com', value: 'arreo.com' },
  ];

  const schema = yup.object().shape({
    // 이름
    name: yup.string().required('반드시 입력해주세요.').max(10, '최대 10글자까지 입력 가능합니다.'),
    // 비밀번호
    password: yup
      .string()
      .required('반드시 입력해주세요.')
      .matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/, '최소 8자. 최대 16자 이내(영문, 숫자 조합)으로 입력해주세요')
      .min(8, '최소 8자. 최대 16자 이내(영문, 숫자 조합)으로 입력해주세요')
      .max(16, '최소 8자. 최대 16자 이내(영문, 숫자 조합)으로 입력해주세요'),
    // 비밀번호 확인
    ispassword: yup
      .string()
      .test('password-match', '비밀번호와 일치해야 합니다.', function (value) {
        return value === this.resolve(yup.ref('password'));
      })
      .min(8, '최소 8자. 최대 16자 이내(영문, 숫자 조합)으로 입력해주세요')
      .max(16, '최소 8자. 최대 16자 이내(영문, 숫자 조합)으로 입력해주세요')
      .required('반드시 입력해주세요'),

    // 이메일
    email1: yup.string().required('반드시 입력해주세요.'),
    email2: yup.string().required('반드시 입력해주세요.'),
    // .matches(
    //   /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
    //   '이메일 형식에 맞지 않습니다.',
    // )

    // 전화번호
    phone1: yup.string().required('반드시 입력해주세요.'),
    phone2: yup.string().required('반드시 입력해주세요.'),
    phone3: yup.string().required('반드시 입력해주세요.'),

    checkMessage: yup.boolean().required('반드시 입력해주세요.'),
    checkEmail: yup.boolean().required('반드시 입력해주세요.'),
  });

  return { schema, emailData };
};

export default useValidation;
