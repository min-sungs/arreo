import * as yup from 'yup';

const useSignInValidation = () => {
  const schema = yup.object().shape({
    // 이름
    SignInId: yup.string().required('반드시 입력해주세요.'),
    // 비밀번호
    SignInPassword: yup.string().required('반드시 입력해주세요.'),
  });

  return { schema };
};

export default useSignInValidation;
