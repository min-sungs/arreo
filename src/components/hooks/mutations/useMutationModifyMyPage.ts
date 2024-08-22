import { useMutation } from '@tanstack/react-query';
import { postModifyInfo } from '../../../apis/api/myPageApis';

export const useMutationModifyMyPage = () => {
  const { mutate } = useMutation((props: any) => postModifyInfo(props));

  return { mutate };
};
