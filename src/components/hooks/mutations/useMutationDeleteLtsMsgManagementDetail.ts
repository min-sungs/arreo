import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteMsgStorage } from '../../../apis/api/ltsContentApis';

/**
 *  전송/예약관리 페이지 공통 삭제 mutation
 * 
 * @param   
 * queryKeyName: string;
  currentPage: number;
  pageSize: number;
  apiFunc: Function;
 * @returns 성공 메시지
 */
export const useMutationDeleteLtsMsgManagementDetail = () => {
  const queryClient = useQueryClient();
  const { mutate: mutationDeleteLtsMsgDetail, isLoading: isDeleteLoading } = useMutation(
    ({msgGroupId}:{msgGroupId: string}) => deleteMsgStorage({msgGroupId}),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['getLongTimeStorageList']);
      },
    },
  );

  return { mutationDeleteLtsMsgDetail, isDeleteLoading };
};
