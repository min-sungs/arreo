// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { getCheckGroupList } from '../../../apis/api/addressApis';
// import { useRecoilState } from 'recoil';
// import { groupCheckBoxListState } from '../../../recoil/atoms/addressList';

// export const useMutationTest = () => {
//   const queryClient = useQueryClient();
//   const [groupCheckBoxList, _] = useRecoilState(groupCheckBoxListState); // 체크된 그룹 시퀀스넘버 배열
//   const { mutate: mutationTest, isLoading: isDeleteLoading } = useMutation(
//     (checkId: string[]) => getCheckGroupList(groupCheckBoxList),
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries(['getLongTimeStorageList']);
//       },
//     },
//   );

//   return { mutationTest, isDeleteLoading };
// };
