import React from 'react';
import { FaTimes } from 'react-icons/fa';
import BaseInput from '../../Atom/BaseInput';
import * as S from '../../Organism/AddressBook/styles/LargeAddressTable.styles';
import { useLargeAddressTable } from '../../hooks/customs/addressBookLarge/useLargeAddressTable';

const LargeTableRow = ({ rowIndex, addData, handleDeleteRow, register, selectedKey }: any) => {
  const { selectOptions2, largeGroupOption } = useLargeAddressTable();

  const keyArray = Object.keys(addData);

  return (
    <tr style={{ borderBottom: '1px solid gray', height: '52px;' }}>
      {keyArray?.map((el) => {
        switch (el) {
          case 'groupSeqNo':
            return (
              <S.TableCell>
                <S.SelectAllWrap>
                  <S.GroupSelect {...register(`largeColum.${rowIndex}.${el}`)} name={`largeColum.${rowIndex}.${el}`}>
                    {largeGroupOption?.map((option: any) => (
                      <option
                        style={{ backgroundColor: '#f5f5f5', color: '#333', border: 'none' }}
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </S.GroupSelect>
                </S.SelectAllWrap>
              </S.TableCell>
            );
          case 'genderFlag':
            return (
              <S.ToggleTableCell display={selectedKey.has(el)}>
                <S.SelectAllWrap>
                  <S.GroupSelect {...register(`largeColum.${rowIndex}.${el}`)} name={`largeColum.${rowIndex}.${el}`}>
                    {selectOptions2?.map((option: any) => (
                      <option
                        style={{ backgroundColor: '#f5f5f5', color: '#333', border: 'none' }}
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </S.GroupSelect>
                </S.SelectAllWrap>
              </S.ToggleTableCell>
            );
          case 'birthday':
            return (
              <S.ToggleTableCell display={selectedKey.has(el)}>
                <BaseInput
                  type="date"
                  name={`largeColum.${rowIndex}.${el}`}
                  // placeholder={addData}
                  {...register(`largeColum.${rowIndex}.${el}`)}
                />
              </S.ToggleTableCell>
            );
          case 'marriageDay':
            return (
              <S.ToggleTableCell display={selectedKey.has(el)}>
                <BaseInput
                  type="date"
                  name={`largeColum.${rowIndex}.${el}`}
                  // placeholder={addData}
                  {...register(`largeColum.${rowIndex}.${el}`)}
                />
              </S.ToggleTableCell>
            );
          default:
            return (
              <S.ToggleTableCell display={selectedKey.has(el)}>
                <BaseInput
                  type="text"
                  name={`largeColum.${rowIndex}.${el}`}
                  // width="200px"
                  // placeholder={header.label}
                  {...register(`largeColum.${rowIndex}.${el}`)}
                />
              </S.ToggleTableCell>
            );
        }
      })}
      <S.TableLastCell>
        <S.DeleteButton onClick={() => handleDeleteRow(rowIndex)}>
          <FaTimes size={16} color="gray" display="block" />
        </S.DeleteButton>
      </S.TableLastCell>
    </tr>
  );
};

export default LargeTableRow;
