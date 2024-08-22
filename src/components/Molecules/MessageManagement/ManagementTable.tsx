import React, { FC, ReactNode } from 'react';

import BaseCheckBox from '../../Atom/BaseCheckBox';

interface TableCellProps {
  content: string | ReactNode;
  width?: string;
}

const TableCell: FC<TableCellProps> = ({ content, width }) => <td style={{ width }}>{content}</td>;

interface TableRowProps {
  children: ReactNode;
  lineHeight?: string;
  fontSize?: string;
  fontWeight?: string;
  borderBottom?: string;
}

const TableRow: FC<TableRowProps> = ({ children, lineHeight, fontSize, fontWeight, borderBottom }) => (
  <tr style={{ lineHeight, fontSize, fontWeight, borderBottom }}>{children}</tr>
);

interface TableDataItem {
  id: string;
  [key: string]: string;
}

interface TableProps {
  data: TableDataItem[];
  selectedRows?: { [id: string]: boolean };
  onRowCheckboxChange?: (id: string) => void;
}

const ManagementTable: FC<TableProps> = ({ data, selectedRows = {}, onRowCheckboxChange }) => {
  const headerCells = [
    <TableCell key="checkbox" content="" />, // Add an empty cell for checkbox
    ...Object.keys(data[0])
      .filter((key) => key !== 'id')
      .map((key) => <TableCell key={key} content={key} />),
  ];

  const rows = data.map((row) => {
    const rowData = Object.keys(row).reduce((obj: Record<string, any>, key) => {
      if (key !== 'id') {
        obj[key] = row[key];
      }
      return obj;
    }, {});

    const cellCount = Object.values(rowData).length;
    const cellWidth = `${1024 / cellCount}px`;

    return (
      <TableRow key={row.id} lineHeight="32px" borderBottom="1px solid #A1A1A1">
        {/* 체크박스 추가 */}
        <TableCell
          content={
            <BaseCheckBox
              checked={!!selectedRows[row.id]}
              top="3px"
              onChange={() => onRowCheckboxChange && onRowCheckboxChange(row.id)}
            />
          }
        />

        {Object.values(rowData).map((cell, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <TableCell key={`${row.id}-${i}`} content={typeof cell === 'string' ? cell : ''} width={cellWidth} />
        ))}
      </TableRow>
    );
  });

  return (
    <table>
      <thead style={{ textAlign: 'center' }}>
        <TableRow lineHeight="32px" fontWeight="bold" fontSize="1.4rem" borderBottom="2px solid #A1A1A1">
          {headerCells}
        </TableRow>
      </thead>
      <tbody style={{ textAlign: 'center', fontSize: '1.3rem' }}>{rows}</tbody>
    </table>
  );
};

export default ManagementTable;
