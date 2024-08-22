import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { get015Message } from '../../../../../apis/api/say015Apis';
import {
  detailMassageIdState,
  msgArsToggleState,
  say015SearchTextState,
  say015SelectValueState,
} from '../../../../../recoil/atoms/say015Atom';
import { calScrollEvent } from '../../../../../apis/hooks/useScrollInfinity.ts';

export const usePOBox015List = () => {
  const [say015SelectValue] = useRecoilState(say015SelectValueState); // 검색 항목
  const [say015SearchText] = useRecoilState(say015SearchTextState); // 검색어
  const [messages, setMessages] = useState<any>([]); // 메시지 목록 상태
  const [detailMassageId, setDetailMassageId] = useRecoilState(detailMassageIdState); // 클릭된 아이템의 ID를 저장할 state
  const [msgArsToggle, setMsgArsToggle] = useRecoilState(msgArsToggleState);

  const {
    data: say015MessageList,
    isLoading: say015MessageListIsLoading,
    refetch: say015MessageListRefetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['say015MessageList'],
    async ({ pageParam = 0 }) => {
      return get015Message({
        currentPage: pageParam,
        keyword: say015SearchText,
        keywordValue: say015SelectValue,
      });
    },
    {
      staleTime: 6000,
      refetchInterval: 6000,
      refetchIntervalInBackground: true,
      refetchOnWindowFocus: false,
      // enabled: , //  true일 때만 쿼리 활성화
      // refetchOnWindowFocus: false, // 윈도우 포커스 시 자동으로 다시 가져오지 않음
      getNextPageParam: (lastPage: any) => {
        const nextPage = lastPage.pageable.pageNumber + 1;
        return nextPage < lastPage.totalPages ? nextPage : undefined;
      },
    },
  );

  const handleScroll = (event: any) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (calScrollEvent({ scrollTop, scrollHeight, clientHeight }) && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    say015MessageListRefetch();
  }, [say015SearchText, say015SelectValue, say015MessageList, say015MessageListRefetch]);

  // useEffect(() => {
  //   if (say015MessageList) {
  //     const newMessages = say015MessageList.pages.flatMap((page) => page.content);
  //     setMessages(newMessages);
  //     say015MessageListRefetch();
  //   }
  // }, [say015MessageList, itemClickStyle]);

  const ltemOnClickHandle = (item: any) => {
    setDetailMassageId((prevItemId: any) => {
      const updatedState = prevItemId === item.messageId ? null : item.messageId;
      return updatedState;
    });
    setMsgArsToggle(() => true);
    if (detailMassageId === item?.messageId) setMsgArsToggle((prev) => prev && false);
    //  해당번호 수신내역 표출할 로직 여기 추가. tsx파일에서 messageId말고 전체 받아와서 수정해도 됌.
  };

  // const ltemOnClickHandle = (item: any) => {
  //   console.log('detail : 1. 클릭 :', item);
  //   setItemClickStyle((prevItemId) => (prevItemId === item.messageId ? null : item.messageId));
  //   const updatedMessages = messages.map((message: any) => {
  //     if (message.messageId === item.messageId) {
  //       return { ...message, readCheck: true };
  //     }
  //     return message;
  //   });
  //   setMessages(updatedMessages);
  // };

  return {
    messages,
    say015MessageList,
    say015MessageListIsLoading,
    handleScroll,
    say015MessageListRefetch,
    ltemOnClickHandle,
    detailMassageId,
  };
};
