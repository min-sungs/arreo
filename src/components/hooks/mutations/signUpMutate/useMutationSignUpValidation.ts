import { useMutation } from '@tanstack/react-query';
import { postNiceValidate } from '../../../../apis/api/signUpApis';

export const useMutationSignUpValidation = () => {
  const { mutate, isLoading } = useMutation((props: string) => postNiceValidate(props));

  return { mutate, isLoading };
};
