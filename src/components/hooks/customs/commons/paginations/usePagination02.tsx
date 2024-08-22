import { useCallback, useMemo } from 'react';

import type { Dispatch, MouseEvent, SetStateAction } from 'react';

interface IUsePaginationArgs {
  count: number;
  pageSize: number;
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

export const usePagination02 = (args: IUsePaginationArgs): IUsePaginationReturns => {

  const {pageSize} = args;
  const lastPage = useMemo(() => Math.ceil((args.count === 0 ? pageSize : args.count ?? pageSize) / pageSize), [args.count, pageSize]);

  const onClickPage = useCallback((event: MouseEvent<HTMLSpanElement>): void => {
    const activePage = Number(event.currentTarget.id);
    args.setActivePage(activePage);
    args.eventHook(activePage);
  }, []);

  const onClickPrevPage = useCallback((): void => {
    if (args.startPage === 1) return;
    args.setStartPage((prevStartPage) => prevStartPage - pageSize);
    args.setActivePage((prevActivePage) => prevActivePage - pageSize);
    args.eventHook(args.startPage - pageSize);
  }, [args.activePage,pageSize]);

  const onClickNextPage = useCallback((): void => {
    if (args.startPage + pageSize > lastPage) return;
    args.setStartPage((prevStartPage) => prevStartPage + pageSize);
    args.setActivePage((prevActivePage) => prevActivePage + pageSize);
    args.eventHook(args.startPage + pageSize);
  }, [args.activePage, lastPage,pageSize]);

  return {
    lastPage,
    onClickPage,
    onClickPrevPage,
    onClickNextPage,
  };
};
