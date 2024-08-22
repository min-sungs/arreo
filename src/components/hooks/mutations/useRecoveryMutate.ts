import { useMutation } from '@tanstack/react-query';
import { accountRecovery } from '../../../apis/api/Account/accountRecoveryApis';

export const useRecoveryMutate = () => {
  const { mutate: recoveryMessage, isLoading } = useMutation((props: any) => accountRecovery(props));

  return { recoveryMessage, isLoading };
};
