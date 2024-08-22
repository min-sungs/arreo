import type { Dispatch, SetStateAction } from 'react';

export interface IPagination02Props {
  dataCount: number;
  pageSize: number;
  startPage: number;
  setStartPage: Dispatch<SetStateAction<number>>;
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
  eventHook: (pageNumber: any) => void;
}
