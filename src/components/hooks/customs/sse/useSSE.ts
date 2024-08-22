import { useEffect, useState } from 'react';
import { useFetch } from '../../../../apis/utils/reactQuery.ts';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { instanceSSE } from '../../../../apis/api/clientAxios.ts';

interface IChatCount {
  totalCount: number;
}

export const useSSE = () => {
  const queryClient = useQueryClient();
  const [token, setToken] = useState(localStorage.getItem('authorizationToken') || '');

  // ? 확인 안한 문자 메세지 갯수
  const {
    data: chatCountData,
    refetch: totalCntRefetch,
    isLoading,
  } = useFetch<IChatCount>('/chat/count', undefined, {
    retry: false,
  });

  const useDisConnectSSE = async () => {
    const data = new FormData();
    data.append('token', token);
    await instanceSSE.post('/sse/disconnect', data);
  };

  const { mutate: disConnectSSE } = useMutation(useDisConnectSSE);

  useEffect(() => {
    if (chatCountData && !isLoading) {
      localStorage.setItem('msgCount', String(chatCountData?.totalCount) || '0');
      // if (chatCountData.totalCount > 0) {
      //   warningModal("문자", `${chatCountData.totalCount}건 메세지가 도착했습니다.`, true)
      // }
    }
  }, [chatCountData, isLoading]);

  useEffect(() => {
    const sseUrl = process.env.REACT_APP_SSE_URL || '';
    const token = localStorage.getItem('authorizationToken');
    const say015User = localStorage.getItem('say015User');
    const availabilityStatus = localStorage.getItem('availabilityStatus');
    setToken(token as string);

    const eventSource = new EventSource(`${sseUrl}/sse/subscribe/${token}`);

    // ? SSE 데이터
    eventSource.addEventListener('message', async (event: any) => {
      await totalCntRefetch().then((res: any) => {
        localStorage.setItem('msgCount', res.data.totalCount);
      });
      await queryClient.invalidateQueries(['/chat/rooms']);
    });

    // ? 탭 or 페이지 닫아 지면 sse 연결 끊기
    window.addEventListener('beforeunload', (event) => {
      const url = `${sseUrl}/sse/disconnect`;
      const data = new FormData();
      data.append('token', token as string);

      navigator.sendBeacon(url, data);
    });

    return () => {
      eventSource.close();
    };
  }, [
    localStorage.getItem('authorizationToken'),
    localStorage.getItem('availabilityStatus'),
    localStorage.getItem('say015User'),
  ]);

  return {
    disConnectSSE,
  };
};
