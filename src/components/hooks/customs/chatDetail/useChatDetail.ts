import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { instance } from '../../../../apis/api/clientAxios.ts';
import gsap from 'gsap';

interface ISEEDetail {
  chatRoomId: string;
  chatRoomRef: React.RefObject<HTMLDivElement>;
}
export const useChatDetail = ({ chatRoomId, chatRoomRef }: ISEEDetail) => {
  const [page, setPage] = useState(1);
  const [chatHisData, setChatHisData] = useState<any>([]);
  const [previousHeight, setPrviousHeight] = useState<any>(0);

  const fetchChatHistory = async () => {
    const response = await instance.get(`/chat/rooms/${chatRoomId}/${page}`);
    return response.data;
  };

  const {
    data,
    refetch: chatHisRefetch,
    isLoading,
  } = useQuery(['chatHistory', chatRoomId, page], fetchChatHistory, {
    // keepPreviousData: true, // 이전 데이터를 유지합니다.
    onSuccess: (newData) => {
      // 새로운 데이터를 추가합니다.
      if (newData?.length > 0) {
        setChatHisData((prev: any) => [...newData, ...prev]);
      }
    },
    staleTime: 0,
  });

  useEffect(() => {
    if (chatRoomRef.current && chatHisData && !isLoading && page === 1 && data.length > 0) {
      gsap.to(chatRoomRef.current, {
        duration: 1,
        scrollTop: chatRoomRef.current.scrollHeight,
      });
    } else if (chatRoomRef.current && chatHisData && !isLoading && data.length > 0) {
      gsap.to(chatRoomRef.current, {
        duration: 1,
        scrollTop: chatRoomRef.current.scrollHeight - previousHeight,
      });
    }
  }, [chatHisData, isLoading, data]);

  const loadMore = async () => {
    setPrviousHeight(chatRoomRef.current?.scrollHeight);
    setPage((prevPage) => prevPage + 1);
    await chatHisRefetch();
  };
  useEffect(() => {
    const handleScroll = () => {
      if (chatRoomRef.current && chatRoomRef.current.scrollTop === 0) {
        loadMore();
      }
    };

    chatRoomRef.current?.addEventListener('scroll', handleScroll);

    return () => {
      chatRoomRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, [chatRoomRef, loadMore]);

  return {
    loadMore,
    chatHisData,
  };
};
