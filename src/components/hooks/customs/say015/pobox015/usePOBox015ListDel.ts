import { useQueryClient } from '@tanstack/react-query';
import { usePost } from 'apis/hooks/usePost';
import { useState } from 'react';
import { useModal } from '../../useModal';

interface IUsePOBox015ListDel {
  say015MessageListRefetch: any;
}

export const usePOBox015ListDel = ({ say015MessageListRefetch }: IUsePOBox015ListDel) => {
  const [msgDeleteState, setMsgDeleteState] = useState(false); // 버튼 중복 클릭 방지

  const { mutate: msgListDeleteMutate } = usePost('/say015/deleteMessage', { params: 'say015MessageList' }); // message 리스트 삭제

  const { confirmModal, warningModal } = useModal();

  const queryClient = useQueryClient();

  const msgDelMutateHandle = (item: any) => {
    msgListDeleteMutate([item.messageId], {
      onSuccess: () => {
        setMsgDeleteState((prev) => prev === true && false);
        // 여기서 get한 메세지리스트 리패치 해야함
        say015MessageListRefetch();
      },
      onError: (error: any) => {
        setMsgDeleteState((prev) => prev === true && false);
        warningModal('메시지 삭제', error.response.data, true);
      },
    });
  };

  const msgDeleteClickHandle = (item: any) => {
    setMsgDeleteState((prev) => prev === false && true);
    // 여기서 if 문으로 readCheck 상태에 따라서 true면 바로 로직실행 false면 삭제할건지 안할건지 컨펌모달로 물어봐야함
    if (!item.readCheck) {
      confirmModal(
        () => msgDelMutateHandle(item),
        '메시지 삭제',
        '읽지 않은 메시지입니다.</br>메시지를 삭제 하시겠습니까?',
        true,
        undefined,
        () => setMsgDeleteState(false),
      );
      return;
    }
    msgDelMutateHandle(item);
  };

  return { msgDeleteClickHandle, msgDeleteState };
};
