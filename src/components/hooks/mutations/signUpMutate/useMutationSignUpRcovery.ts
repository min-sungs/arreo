import { useMutation } from '@tanstack/react-query';
import { postRecoveryId } from '../../../../apis/api/signUpApis';

export const useMutationSignUpRcovery = () => {
  const { mutate: signUpRecoveryMutate } = useMutation((props: any) => postRecoveryId(props));

  return { signUpRecoveryMutate };
};
