import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useModal } from '../customs/useModal';
// import { deleteTransferMsg } from '../../../apis/api/transferResultApi';

interface IUseMutationDeleteMsgManagement {
  queryKeyName: string;
  currentPage?: number;
  pageSize?: number;
  apiFunc: Function;
}

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

export const useMutationDeleteMsgManagement = (props: IUseMutationDeleteMsgManagement) => {
  const queryClient = useQueryClient();
  const { successModal, warningModal } = useModal();
  const { mutate: mutationDeleteMsg, isLoading: isDeleteLoading } = useMutation(() => props.apiFunc(), {
    onSuccess: async () => {
      try {
        await queryClient.invalidateQueries([props.queryKeyName]);
        successModal('메세지 삭제', '선택하신 메세지가 성공적으로</br> 삭제되었습니다.', true);
      } catch (error) {
        warningModal('메세지 삭제', '삭제가 실패했습니다.', true);
      }
    },
  });

  return { mutationDeleteMsg, isDeleteLoading };
};

// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { useModal } from '../customs/useModal';
// // import { deleteTransferMsg } from '../../../apis/api/transferResultApi';

// interface IUseMutationDeleteMsgManagement {
//   queryKeyName: string;
//   currentPage: number;
//   pageSize?: number;
//   handlePageChange?: (pageNumber: any) => void;
//   apiFunc: Function;
// }

// /**
//  *  전송/예약관리 페이지 공통 삭제 mutation
//  *
//  * @param
//  * queryKeyName: string;
//   currentPage: number;
//   pageSize: number;
//   apiFunc: Function;
//  * @returns 성공 메시지
//  */

// export const useMutationDeleteMsgManagement = (props: IUseMutationDeleteMsgManagement) => {
//   const queryClient = useQueryClient();
//   const { successModal, warningModal } = useModal();
//   const { mutate: mutationDeleteMsg, isLoading: isDeleteLoading } = useMutation(() => props.apiFunc(), {
//     onSuccess: async () => {
//       try {
//         await queryClient.invalidateQueries([props.queryKeyName]);
//         const currentPageData = await queryClient.getQueryData([props.queryKeyName]);
//         console.log(currentPageData);
//         if (currentPageData) {
//           if (props.currentPage > 1 && props.handlePageChange !== undefined) {
//             props.handlePageChange(props.currentPage - 1);
//           }
//         }
//         successModal('메세지 삭제', '선택하신 메세지가 성공적으로</br> 삭제되었습니다.', true);
//       } catch (error) {
//         warningModal('메세지 삭제', '삭제가 실패했습니다.', true);
//       }
//     },
//   });

//   return { mutationDeleteMsg, isDeleteLoading };
// };
