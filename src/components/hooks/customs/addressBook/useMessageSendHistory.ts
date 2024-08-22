import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { instance } from '../../../../apis/api/clientAxios.ts';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { recentHistoryRecoil } from '../../../../recoil/atoms/messageSend/messageSend.ts';
import { removeHyphens } from '../../../../apis/utils/formats/phoneNumberFormatUtil.ts';
import {calScrollEvent} from "../../../../apis/hooks/useScrollInfinity.ts";

export const useMessageSendHistory = () => {
  const [recentHistoryState, setRecentHistoryState] = useRecoilState(recentHistoryRecoil);

  const handleFocus = () => {
    const body: any = document.querySelector('.tui-grid-container');
    body.classList.remove('active');
  };

  const onClickFrequentlySent = (number: string, name: string) => {
    // 테이블 focus 제거
    handleFocus();
    setRecentHistoryState((prevState: any) => {
      return {
        ...prevState,
        number,
        name,
      };
    });
  };

  const onClickReset = () => {
    handleFocus();
    setRecentHistoryState((prevState: any) => {
      return {
        ...prevState,
        number: 'all',
        name: '',
      };
    });
  };

  // 자주 보낸 주소 리스트 조회 Query
  const { data: legacyData } = useQuery(
    ['/contacts/frequently-sent'],
    async () => {
      const response = await instance.get('/contacts/frequently-sent');
      return response.data;
    },
    {
      staleTime: 6000,
      // refetchInterval: 6000,
      // refetchIntervalInBackground: true,
      // refetchOnWindowFocus: false,
    },
  );

  // 이력 조회 Query
  const {
    data: sendResultData,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['/send-result', recentHistoryState.number],
    async ({ pageParam = 0 }) => {
      const response = await instance.get('/send-result', {
        params: {
          number: recentHistoryState.number ? removeHyphens(recentHistoryState.number) : '',
          pageSize: recentHistoryState.pageSize,
          pageNumber: pageParam,
        },
      });
      return response.data;
    },
    {
      staleTime: 6000,
      refetchInterval: 6000,
      refetchIntervalInBackground: true,
      getNextPageParam: (lastPage: any) => {
        const nextPage = lastPage.pageable.pageNumber + 1;
        return nextPage < lastPage.totalPages ? nextPage : undefined;
      },
    },
  );

  const handleScroll = async (event: any) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (calScrollEvent({scrollHeight,scrollTop,clientHeight}) && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  return {
    onClickReset,
    recentHistoryState,
    legacyData,
    sendResultData,
    handleScroll,
    onClickFrequentlySent,
  };
};
