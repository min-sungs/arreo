import React from 'react';

export interface ISTContentDetailMidComponentProps {
  totalPage: number;
  tableData: any;
  setSearchKeywordValue: React.Dispatch<React.SetStateAction<string | null>>;
  setSearchKeyword: React.Dispatch<React.SetStateAction<string | null>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  sndMsg: string;
  datePicker: string | undefined;
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
  setStartPage: React.Dispatch<React.SetStateAction<number>>;
  startPage: number;
}
