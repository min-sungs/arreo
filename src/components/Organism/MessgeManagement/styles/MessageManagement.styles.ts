import styled from 'styled-components';

import { ITableColumn } from '../types/MessageManagement.types';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const SubmitWrap = styled.div`
  /* display: flex; */
  /* justify-content: flex-end; */
`;

export const TableWrapper = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
  height: 40vh;
  display: flex;
  flex-direction: column;
`;

export const TableHeader = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  border-bottom: 2px solid gray;
  padding-bottom: 5px;
`;

export const CheckBoxAll = styled.input`
  margin-right: 3%;
`;

export const TableHeaderColumn = styled.span<ITableColumn>`
  font-size: 13px;
  font-weight: bold;
  /* width: 16.6%; */
  width: ${(props) => 100 / props.menuLength - 3}%;
`;

export const TableBody = styled.div`
  text-align: center;
  margin-bottom: 50px;
  height: 280px;
`;
export const TableBodyRow = styled.div`
  display: flex;
  padding: 5px 0px;
  align-items: center;
  border-bottom: 1px solid gray;
`;

export const TableBodyColumn = styled.span<ITableColumn>`
  font-size: 13px;
  width: ${(props) => 100 / props.menuLength - 3}%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const CheckBox = styled.input`
  margin-right: 3%;
`;

export const TableFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
export const PaginationWrapper = styled.div`
  flex: 2;
`;

export const Footer = styled.div``;

export const TableSearchBox = styled.div`
  margin-bottom: 10px;
`;
export const LoadingDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;
