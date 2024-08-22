import { useMutation } from '@tanstack/react-query';
import { postCertifyMessage } from '../../../apis/api/Account/accountRecoveryApis';

export const useMutationCertifyMessageSend = () => {
  const { mutate: certifyMessageMutate, isLoading, isError } = useMutation((props: any) => postCertifyMessage(props));

  return { certifyMessageMutate, isLoading, isError };
};
