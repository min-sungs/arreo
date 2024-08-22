import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { getUserAddressRecycleBinList } from '../../../../../apis/api/addressApis';
import { useRecoilState } from 'recoil';
import { binSearchTextState, binSelectValueState } from '../../../../../recoil/atoms/addressList';
import {calScrollEvent} from "../../../../../apis/hooks/useScrollInfinity.ts";

interface IUseGetBinList {
  recycleBinOpen: boolean;
}

export const useGetBinList = ({ recycleBinOpen }: IUseGetBinList) => {
  const [binSelectValue] = useRecoilState(binSelectValueState);
  const [binSearchText] = useRecoilState(binSearchTextState);

  const {
    data: recycleBinList,
    isLoading: recycleBinListLoading,
    refetch: recycleBinRefetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['recycleBinList'],
    async ({ pageParam = 0 }) => {
      if (recycleBinOpen) {
        return getUserAddressRecycleBinList({
          currentPage: pageParam,
          keyword: binSearchText,
          keywordValue: binSelectValue,
        });
      }
      return null;
    },
    {
      enabled: recycleBinOpen, // recycleBinOpen이 true일 때만 쿼리 활성화
      getNextPageParam: (lastPage: any) => {
        const nextPage = lastPage.pageable.pageNumber + 1;
        return nextPage < lastPage.totalPages ? nextPage : undefined;
      },
    },
  );

  const handleScroll = (event: any) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (calScrollEvent({scrollHeight,clientHeight,scrollTop}) && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    if (recycleBinOpen) {
      // 페이지를 처음부터 다시 불러옵니다.
      // fetchNextPage({ pageParam: 0 });
      recycleBinRefetch();
    }
  }, [recycleBinOpen, binSearchText, binSelectValue, recycleBinRefetch]);

  return {
    recycleBinList,
    recycleBinListLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    recycleBinRefetch,
    handleScroll,
  };
};
