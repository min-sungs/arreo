import { useMutation } from '@tanstack/react-query';
import { postFindId } from '../../../apis/api/findAccountApis';

export const useMutationIdCheckList = () => {
  const { mutate, isLoading } = useMutation((props: string) => postFindId(props));

  return { mutate, isLoading };
};
