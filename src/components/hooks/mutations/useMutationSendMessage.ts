import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useModal } from '../customs/useModal';
import { postMessageSend } from '../../../apis/api/addressApis';

export const useMutationSendMessage = () => {
  const queryClient = useQueryClient();
  const { successModal, warningModal } = useModal();
  // 장기보관함 저장 Mutation
  const {
    mutate: sendMessageData,
  } = useMutation((props: any) => postMessageSend(props), {
    onSuccess: (response: any) => {
      successModal('메세지 전송', `메세지 전송에 성공하셨습니다.`, true);
      queryClient.invalidateQueries(['point']);
      return response.data;
    },
    onError: () => {
      warningModal('메세지 전송', '메세지 전송에 실패하셨습니다.', true);
    },
  });

  return { sendMessageData };
};
