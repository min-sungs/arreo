import React from 'react';

export interface ITRContentDetailMidProps {
  totalElements: number;
  tableData: any;
  setSearchKeywordValue: React.Dispatch<React.SetStateAction<string | null>>;
  setSearchKeyword: React.Dispatch<React.SetStateAction<string | null>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
  setStartPage: React.Dispatch<React.SetStateAction<number>>;
  startPage: number;
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
  pageSize: number;
  setSelectSendState:React.Dispatch<React.SetStateAction<string>>;
  selectSendState: string;
}
