import React from 'react';
import * as S from '../../Organism/AddressBook/styles/LargeAddressTable.styles';
import BaseSelect from '../../Atom/BaseSelect';
import BaseInput from '../../Atom/BaseInput';
import { FaTimes } from 'react-icons/fa';
import { TableRowData, useLargeAddressTable } from '../../hooks/customs/addressBookLarge/useLargeAddressTable';

const LargeTableRow = ({
  key,
  tableRows,
  rowIndex,
  columnVisibility,
  addData,
  handleInputChange,
  groupDetail,
  handleDeleteRow,
}: any) => {
  const { selectOptions2 } = useLargeAddressTable();
  return (
    <S.TableRow key={key}>
      {tableRows?.map((header: TableRowData) => (
        <S.TableCell key={header.key} style={{ display: columnVisibility[header.label] ? 'table-cell' : 'none' }}>
          {(() => {
            switch (header.label) {
              case '그룹':
              case '성별':
                return (
                  <BaseSelect
                    value={addData[rowIndex][header.key] ?? ''}
                    onChange={(e) => handleInputChange(header.key, rowIndex, e)}
                    options={
                      header.label === '그룹' ? [{ label: '그룹선택', value: '' }, ...groupDetail] : selectOptions2
                    }
                  />
                );
              case '생일':
              case '결혼기념일':
                return (
                  <BaseInput
                    type="date"
                    value={addData[rowIndex][header.key] ?? ''}
                    onChange={(e) => handleInputChange(header.key, rowIndex, e.target.value)}
                  />
                );
              case '삭제':
                return (
                  <S.DeleteButton onClick={() => handleDeleteRow(addData, rowIndex)}>
                    <FaTimes size={14} color="gray" />
                  </S.DeleteButton>
                );
              default:
                return (
                  <BaseInput
                    type="text"
                    width="200px"
                    name={header.key}
                    placeholder={header.label}
                    value={addData[rowIndex][header.key] ?? ''}
                    onChange={(e) => handleInputChange(header.key, rowIndex, e.target.value)}
                  />
                );
            }
          })()}
        </S.TableCell>
      ))}
    </S.TableRow>
  );
};

export default LargeTableRow;
