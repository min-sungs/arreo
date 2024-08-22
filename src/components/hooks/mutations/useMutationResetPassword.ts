import { useMutation } from '@tanstack/react-query';
import { postResetPassword } from '../../../apis/api/Account/accountRecoveryApis';

export const useMutationResetPassword = () => {
  const { mutate: resetPasswordMutate, isLoading, isError } = useMutation((props: any) => postResetPassword(props));

  return { resetPasswordMutate, isLoading, isError };
};
