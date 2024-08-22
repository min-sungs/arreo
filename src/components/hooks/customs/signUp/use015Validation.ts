import * as yup from 'yup';

const use015Validation = () => {
  const schema = yup.object().shape({
    // 비밀번호 확인
    phoneNumber: yup.string().required('반드시 입력해주세요'),

    // 전화번호
    phone1: yup.string().required('반드시 입력해주세요.'),
    phone2: yup.string().required('반드시 입력해주세요.'),
    phone3: yup.string().required('반드시 입력해주세요.'),

    // 비밀번호
    password: yup
      .string()
      .required('반드시 입력해주세요.')
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*]{8,16}$/,
        '최소 8자. 최대 16자 이내(영문, 숫자)필수 (특수문자 !, @, #, $, %, ^, &, * )선택으로 입력해주세요',
      )
      .min(8, '최소 8자. 최대 16자 이내(영문, 숫자 조합)으로 입력해주세요')
      .max(16, '최소 8자. 최대 16자 이내(영문, 숫자 조합)으로 입력해주세요'),

    // 이름
    name: yup.string().required('반드시 입력해주세요.').max(10, '최대 10글자까지 입력 가능합니다.'),

    // 015번호
    number015fir: yup.string().required('반드시 입력해주세요.'),
    number015sec: yup.string().required('반드시 입력해주세요.'),
    number015thr: yup.string().required('반드시 입력해주세요.'),

    // 주소
    // 전화번호
    adress1: yup.string().required('반드시 입력해주세요.'),
    adress2: yup.string().required('반드시 입력해주세요.'),
    adress3: yup.string().required('반드시 입력해주세요.'),
  });

  return { schema };
};

export default use015Validation;
