import React from 'react';

export interface ILTSContentDetailMidComponentProps {
  totalPage: number;
  tableData: any;
  setSearchKeywordValue: React.Dispatch<React.SetStateAction<string | null>>;
  setSearchKeyword: React.Dispatch<React.SetStateAction<string | null>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
  setStartPage: React.Dispatch<React.SetStateAction<number>>;
  startPage: number;
  detailInfoMessage: string;
  checkList: string[];
  setCheckList: React.Dispatch<React.SetStateAction<string[]>>;
  checkAll: boolean;
  setCheckAll: React.Dispatch<React.SetStateAction<boolean>>;
  // handlePageChange: (pageNumber: any) => void;
}
