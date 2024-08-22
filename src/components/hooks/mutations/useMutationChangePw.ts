import { useMutation } from '@tanstack/react-query';
import { postChangePw } from '../../../apis/api/myPageApis';
import { pwDataProps } from '../../Organism/MyPage/types/MyPage.types';

export const useMutationChangePw = () => {
  const { mutate, isLoading, isError } = useMutation((props: pwDataProps) => postChangePw(props));

  return { mutate, isLoading, isError };
};
