import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postSignUpComplete } from '../../../../apis/api/signUpApis';
import { useModal } from '../../customs/useModal';

interface IUseMutationSignUpComplete {
  phnId: string;
  usrNm: string;
  usrEmail: string;
  smsRcvYn: string;
  emailRcvYn: string;
  usrPass: string;
  encodeData: string;
}

export const useMutationSignUpComplete = () => {
  const { mutate, isLoading, isError, error, isSuccess } = useMutation((props: IUseMutationSignUpComplete) =>
    postSignUpComplete(props),
  );
  return { mutate, isLoading, isError, error, isSuccess };
};
