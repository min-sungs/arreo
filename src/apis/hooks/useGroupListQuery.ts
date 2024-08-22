import { useQuery } from '@tanstack/react-query';

import { getAddressGroupList } from '../api/addressApis';

export const useGroupListQuery = () => {
  return useQuery(['addressbookGroupList'], () => getAddressGroupList(), { select: ({ data }) => data });
};
