import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { getUserAddressRecycleBinList } from '../../../../../apis/api/addressApis';

interface IUseGetBinList {
  recycleBinOpen: boolean;
}

export const useGetBinList = ({ recycleBinOpen }: IUseGetBinList) => {
  const {
    data: recycleBinList,
    isLoading: recycleBinListLoading,
    refetch: recycleBinRefetch,
  } = useQuery(
    ['recycleBinList'],
    () => {
      if (recycleBinOpen) {
        return getUserAddressRecycleBinList({
          currentPage: 0,
          keyword: 'name',
          keywordValue: '',
        });
      }
      return null;
    },
    {
      enabled: recycleBinOpen, // recycleBinOpen이 true일 때만 쿼리 활성화
      refetchOnWindowFocus: false, // 윈도우 포커스 시 자동으로 다시 가져오지 않음
    },
  );

  useEffect(() => {
    if (recycleBinOpen) {
      recycleBinRefetch();
    }
  }, [recycleBinOpen, recycleBinRefetch]);

  return { recycleBinList, recycleBinListLoading, recycleBinRefetch };
};
