import { useMutation } from '@tanstack/react-query';
import { postCertifyNum } from '../../../apis/api/Account/accountRecoveryApis';

export const useMutationNumberCertify = () => {
  const { mutate: certifyNum } = useMutation((props: any) => postCertifyNum({ props }));

  return { certifyNum };
};
