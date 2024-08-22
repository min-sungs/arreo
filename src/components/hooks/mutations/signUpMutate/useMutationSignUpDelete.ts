import { useMutation } from '@tanstack/react-query';
import { postDeleteId } from '../../../../apis/api/signUpApis';

export const useMutationSignUpDelete = () => {
  const { mutate: signUpDeleteMutate } = useMutation((props: any) => postDeleteId(props));

  return { signUpDeleteMutate };
};
