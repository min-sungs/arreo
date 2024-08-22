// import { api } from './api';
// import { useInfiniteQuery, useMutation, useQuery, useQueryClient, UseQueryOptions } from 'react-query';
// import { QueryFunctionContext } from 'react-query/types/core/types';
import { AxiosError, AxiosResponse } from 'axios';
// import { GetInfinitePagesInterface } from '../interfaces';
import {
  QueryFunctionContext,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query';
import { api } from '../api/api';

interface GetInfinitePagesInterface<T> {
  nextId?: number;
  previousId?: number;
  data: T;
  count: number;
}

type QueryKeyT = [string, object | undefined];

export const fetcher = <T>({ queryKey, pageParam }: QueryFunctionContext<QueryKeyT>): Promise<T> => {
  const [url, params] = queryKey;
  return api.get<T>(url, { params: { ...params, pageParam } }).then((res) => res.data);
};

// export const useLoadMore = <T>(url: string | null, params?: object) => {
//   const context = useInfiniteQuery<GetInfinitePagesInterface<T>, Error, GetInfinitePagesInterface<T>, QueryKeyT>(
//     [url!, params],
//     ({ queryKey, pageParam = 1 }) => fetcher({ queryKey, pageParam }),
//     {
//       getPreviousPageParam: (firstPage) => firstPage.previousId ?? false,
//       getNextPageParam: (lastPage) => {
//         return lastPage.nextId ?? false;
//       },
//     },
//   );

//   return context;
// };

export const usePrefetch = <T>(url: string | null, params?: object) => {
  const queryClient = useQueryClient();

  return () => {
    if (!url) {
      return;
    }

    queryClient.prefetchQuery<T, Error, T, QueryKeyT>([url!, params], ({ queryKey }) =>
      fetcher({
        queryKey,
        meta: undefined,
      }),
    );
  };
};

export const useFetch = <T>(url: string | null, params?: object, config?: UseQueryOptions<T, Error, T, QueryKeyT>) => {
  const context = useQuery<T, Error, T, QueryKeyT>(
    [url!, params],
    ({ queryKey }) =>
      fetcher({
        queryKey,
        meta: undefined,
      }),
    {
      enabled: !!url,
      ...config,
    },
  );

  return context;
};

export const useGenericMutation = <T, S>(
  func: (data: T | S) => Promise<AxiosResponse<S>>,
  url: string,
  params?: object,
  updater?: ((oldData: T, newData: S) => T) | undefined,
) => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, AxiosError, T | S>(func, {
    onMutate: async (data) => {
      await queryClient.cancelQueries([url!, params]);
      const previousData = queryClient.getQueryData([url!, params]);
      queryClient.setQueryData<T>([params], (oldData) => {
        return updater ? updater(oldData!, data as S) : (data as T);
      });
      return previousData;
    },
    onError: (err, _, context) => {
      queryClient.setQueryData([params], context);
    },
    onSettled: () => {
      queryClient.invalidateQueries([params]);
    },
  });
};

export const useDelete = <T>(
  url: string,
  params?: object,
  all?: string,
  updater?: (oldData: T, id: string | number) => T,
) => {
  if (all === 'all') {
    return useGenericMutation<T, string | number>((data) => api.delete(`${url}`, data), url, params, updater);
  }
  return useGenericMutation<T, string | number>((id) => api.delete(`${url}/${id}`), url, params, updater);
};

export const useUpdate = <T, S>(url: string, params?: object, updater?: (oldData: T, newData: S) => T) => {
  return useGenericMutation<T, S>((data) => api.patch<S>(url, data), url, params, updater);
};
