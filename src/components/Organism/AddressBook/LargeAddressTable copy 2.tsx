import React from 'react';

import BaseButton from '../../Atom/BaseButton';
import BaseSelect from '../../Atom/BaseSelect';
import AddressAddColumModal from '../../Modal/AddressAddColumModal';
import LargeTableRow from '../../Molecules/addressbookLarge/LargeTableRow';
import Loader from '../../common/Loader';
import * as S from './styles/LargeAddressTable.styles';
import { useLargeAddressTable } from '../../hooks/customs/addressBookLarge/useLargeAddressTable';
import { v4 as uuidv4 } from 'uuid';

const LargeAddressTable = () => {
  const {
    groupListIsLoading,
    columnVisibility,
    headerSelect,
    handleGroupChange,
    groupDetail,
    addData,
    handleInputChange,
    handleAddColumn,
    handleAddRow,
    handleAdd10Row,
    handleRemoveRow,
    handleSaveChanges,
    isPostting,
    isModalOpen,
    setIsModalOpen,
    selectedItems,
    setSelectedItems,
    handleDeleteRow,
    register,
    handleSubmit,
    fields,
    defaultAddData,
    selectedKey,
    setSelectedKey,
    defaultRow,
  } = useLargeAddressTable();

  return (
    <S.Container>
      <S.TableWrap>
        <S.TableInner>
          {groupListIsLoading ? (
            <S.TableSheet>
              <Loader />
            </S.TableSheet>
          ) : (
            <S.TableSheet>
              <S.TableHeadWrap>
                <S.TableHeaderRow>
                  {defaultRow?.map((row: any, id) => {
                    return (
                      <S.TableHeader
                        key={uuidv4()}
                        style={{ display: selectedKey?.has(row.key) ? 'table-cell' : 'none' }}
                      >
                        {row.label === '그룹' ? (
                          <S.SelectAllWrap>
                            {row.label}
                            <BaseSelect
                              value={headerSelect}
                              onChange={(e) => handleGroupChange(e)}
                              options={[
                                { label: '그룹선택', value: '' }, // '그룹선택' 옵션 추가
                                ...groupDetail,
                              ]}
                            />
                          </S.SelectAllWrap>
                        ) : (
                          <div>{row.label}</div>
                        )}
                      </S.TableHeader>
                    );
                  })}
                  <S.TableLastHeader>
                    <strong style={{ whiteSpace: 'nowrap' }}>삭제</strong>
                  </S.TableLastHeader>
                </S.TableHeaderRow>
              </S.TableHeadWrap>
              <S.TableBodyWrap>
                {fields?.map((row, rowIndex) => {
                  return (
                    <LargeTableRow
                      key={row.id}
                      rowIndex={rowIndex}
                      columnVisibility={columnVisibility}
                      addData={row}
                      handleInputChange={handleInputChange}
                      groupDetail={groupDetail}
                      handleDeleteRow={handleDeleteRow}
                      register={register}
                      selectedItems={selectedItems}
                      selectedKey={selectedKey}
                    />
                  );
                })}
              </S.TableBodyWrap>
            </S.TableSheet>
          )}
        </S.TableInner>
      </S.TableWrap>
      <S.ButtonWrap>
        <BaseButton
          onClick={handleAddColumn}
          width="8rem"
          height="4rem"
          color="#fff"
          backgroundColor="#000000"
          borderRadius="10px"
        >
          Add Column
        </BaseButton>
        <BaseButton
          onClick={handleAddRow}
          width="8rem"
          height="4rem"
          color="#fff"
          backgroundColor="#000000"
          borderRadius="10px"
        >
          Add Row
        </BaseButton>
        <BaseButton
          onClick={handleAdd10Row}
          width="8rem"
          height="4rem"
          color="#fff"
          backgroundColor="#000000"
          borderRadius="10px"
        >
          Add Row + 10
        </BaseButton>
        <BaseButton
          onClick={handleRemoveRow}
          width="8rem"
          height="4rem"
          color="#fff"
          backgroundColor="#000000"
          borderRadius="10px"
        >
          Remove Row
        </BaseButton>
        <BaseButton
          onClick={handleSubmit(handleSaveChanges)}
          width="8rem"
          height="4rem"
          color="#fff"
          backgroundColor="#000000"
          borderRadius="10px"
          disabled={isPostting}
        >
          주소록 저장
        </BaseButton>
      </S.ButtonWrap>
      <AddressAddColumModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        selectedKey={selectedKey}
        setSelectedKey={setSelectedKey}
      />
    </S.Container>
  );
};

export default LargeAddressTable;
