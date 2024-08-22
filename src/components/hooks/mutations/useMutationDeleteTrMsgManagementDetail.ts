import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTransferMsg } from '../../../apis/api/transferResultApi';
//
// /**
//  *  전송결과 조회 상세페이지 삭제 mutation
//  */
// interface IUseMutationDeleteMsgManagementDetail {
//   checkedId: string[];
// }
// export const useMutationDeleteMsgManagementDetail = (props: IUseMutationDeleteMsgManagementDetail) => {
//   const queryClient = useQueryClient();
//   const { mutate: mutationDeleteMsgDetail, isLoading: isDeleteLoading } = useMutation(
//     () => deleteTransferMsg(props.checkedId),
//     {
//       onSuccess: () => {
//         // 전송결과 조회 api
//         queryClient.invalidateQueries(['getMessageDataResultAll']);
//       },
//     },
//   );
//
//   return { mutationDeleteMsgDetail, isDeleteLoading };
// };
