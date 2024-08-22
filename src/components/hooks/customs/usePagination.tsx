/* eslint-disable import/no-relative-packages */
import { useCallback, useMemo } from 'react';

import type { Dispatch, MouseEvent, SetStateAction } from 'react';

interface IUsePaginationArgs {
  count: number;
  startPage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
  eventHook: (pageNumber: any) => void;
}

interface IUsePaginationReturns {
  lastPage: number;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}

export const usePagination = (args: IUsePaginationArgs): IUsePaginationReturns => {
  const lastPage = useMemo(() => Math.ceil((args.count === 0 ? 10 : args.count ?? 10) / 10), [args.count]);

  const onClickPage = useCallback((event: MouseEvent<HTMLSpanElement>): void => {
    const activePage = Number(event.currentTarget.id);
    args.setActivePage(activePage);
    args.eventHook(activePage);
  }, []);

  const onClickPrevPage = useCallback((): void => {
    if (args.startPage === 1) return;
    args.setStartPage((prevStartPage) => prevStartPage - 10);
    args.setActivePage((prevActivePage) => prevActivePage - 10);
    args.eventHook(args.startPage - 10);
  }, [args.activePage]);

  const onClickNextPage = useCallback((): void => {
    if (args.startPage + 10 > lastPage) return;
    args.setStartPage((prevStartPage) => prevStartPage + 10);
    args.setActivePage((prevActivePage) => prevActivePage + 10);
    args.eventHook(args.startPage + 10);
  }, [args.activePage, lastPage]);

  return {
    lastPage,
    onClickPage,
    onClickPrevPage,
    onClickNextPage,
  };
};
