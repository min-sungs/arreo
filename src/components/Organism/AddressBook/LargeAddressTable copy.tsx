import React, { useState } from 'react';

import BaseButton from '../../Atom/BaseButton';
import BaseSelect from '../../Atom/BaseSelect';
import AddressAddColumModal from '../../Modal/AddressAddColumModal';
import LargeTableRow from '../../Molecules/addressbookLarge/LargeTableRow';
import Loader from '../../common/Loader';
import * as S from './styles/LargeAddressTable.styles';
import { useLargeAddressTable } from '../../hooks/customs/addressBookLarge/useLargeAddressTable';
import { v4 as uuidv4 } from 'uuid';

const LargeAddressTable = () => {
  const [selectSwitch, SetSelectSwitch] = useState(false);
  const [keywordValueArr, SetKeywordValueArr] = useState([
    { id: 0, label: '그룹' },
    { id: 1, label: '그룹' },
    { id: 2, label: '그룹' },
    { id: 3, label: '그룹' },
  ]);

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
          {/* {groupListIsLoading ? (
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
                          <S.SelectWrapper style={{ width: '112px' }}>
                            <button type='button' onClick={(e) => {
                              e.preventDefault()
                            }}>

                              <img src="/img/LargeAdd/icon/selectarrow.svg" alt="selectArrow" width={17} height={6} />
                            </button>
                            <S.SelectOptions>
                              <li>
                                <button type='button' onClick={() => { }}>
                                  {row.label}
                                </button>
                              </li>
                            </S.SelectOptions>
                          </S.SelectWrapper>
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
          )} */}

          {/* 
            { key: 'groupSeqNo', label: '그룹', value: '' },
            { key: 'buddyNm', label: '이름', value: '' },
            { key: 'keyCommNo', label: '휴대폰번호', value: '' },
            { key: 'emailId', label: '이메일', value: '' },
            { key: 'birthday', label: '생일', value: '' },
            { key: 'coNm', label: '회사이름', value: '' },
            { key: 'coHandle', label: '직함', value: '' },
            { key: 'coDept', label: '부서', value: '' },
            { key: 'genderFlag', label: '성별', value: '' },
            { key: 'homeZipCd', label: '집우편번호', value: '' },
            { key: 'homeAddr', label: '집주소', value: '' },
            { key: 'homeNumber', label: '집전화', value: '' },
            { key: 'coZipCd', label: '회사우편번호', value: '' },
            { key: 'coAddr', label: '회사주소', value: '' },
            { key: 'coNumber', label: '회사전화', value: '' },
            { key: 'faxNumber', label: '팩스', value: '' },
            { key: 'homepageUrl', label: '홈페이지', value: '' },
            { key: 'accountNo', label: '계좌번호', value: '' },
            { key: 'marriageDay', label: '결혼기념일', value: '' },
            { key: 'messenger', label: '메신저', value: '' },
            { key: 'number015', label: '015번호', value: '' },
            { key: 'etcInfo', label: '메모', value: '' },
            { key: 'residentNo', label: '주민번호', value: '' },
          
          */}

          <S.CustomTableWrap>
            <S.CustomTableHead>
              <div className="CustomTableTr">
                {/* <div className='CustomItem w5'>Image</div>
                <div className='CustomItem w10'>그룹</div>
                <div className='CustomItem w15'>이름</div>
                <div className='CustomItem w20'>연락처</div>
                <div className='CustomItem w20'>이메일</div>
                <div className='CustomItem w30'>생일</div> */}

                <div className="CustomItem w5">Image</div>
                <div className="CustomItem w10">
                  <S.SelectWrapper style={{ width: '112px' }}>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        SetSelectSwitch(!selectSwitch);
                      }}
                    >
                      <img src="/img/largeAdd/icon/selectarrow.svg" alt="selectArrow" width={17} height={6} />
                    </button>
                    {selectSwitch ? (
                      <S.SelectOptions>
                        {keywordValueArr.map((item, index) => {
                          return (
                            <li key={item.id}>
                              <button
                                type="button"
                                onClick={() => {
                                  SetSelectSwitch(false);
                                }}
                              >
                                {item.label}
                              </button>
                            </li>
                          );
                        })}
                      </S.SelectOptions>
                    ) : null}
                  </S.SelectWrapper>
                </div>
                <div className="CustomItem w15">이름</div>
                <div className="CustomItem w20">연락처</div>
                <div className="CustomItem w20">이메일</div>
                <div className="CustomItem w30">메모</div>

                <div className="CustomItem">회사이름</div>
                <div className="CustomItem">직함</div>
                <div className="CustomItem">부서</div>
                <div className="CustomItem">성별</div>
                <div className="CustomItem">집우편번호</div>
                <div className="CustomItem">집주소</div>
                <div className="CustomItem">집전화</div>
                <div className="CustomItem">회사우편번호</div>
                <div className="CustomItem">회사주소</div>
                <div className="CustomItem">회사전화</div>
                <div className="CustomItem">팩스</div>
                <div className="CustomItem">홈페이지</div>
                <div className="CustomItem">계좌번호</div>
                <div className="CustomItem">결혼기념일</div>
                <div className="CustomItem">메신저</div>
                <div className="CustomItem">015번호</div>
                <div className="CustomItem">결혼기념일</div>
              </div>
            </S.CustomTableHead>
            <S.CustomTableBdoy>
              <div className="CustomTableTr">
                {/* <div className='CustomItem w5'><img src='/img/largeAdd/Noteandpen.svg' alt='NoteandpenImage' /></div>
                <div className='CustomItem w10'>2</div>
                <div className='CustomItem w15'>3</div>
                <div className='CustomItem w20'>4</div>
                <div className='CustomItem w20'>5</div>
                <div className='CustomItem w30'>6</div> */}

                <div className="CustomItem w5">
                  <img src="/img/largeAdd/Noteandpen.svg" alt="NoteandpenImage" />
                </div>
                <div className="CustomItem w10">2</div>
                <div className="CustomItem w15">3</div>
                <div className="CustomItem w20">4</div>
                <div className="CustomItem w20">5</div>
                <div className="CustomItem w30">6</div>
                <div className="CustomItem">회사이름</div>
                <div className="CustomItem">직함</div>
                <div className="CustomItem">부서</div>
                <div className="CustomItem">성별</div>
                <div className="CustomItem">집우편번호</div>
                <div className="CustomItem">집주소</div>
                <div className="CustomItem">집전화</div>
                <div className="CustomItem">회사우편번호</div>
                <div className="CustomItem">회사주소</div>
                <div className="CustomItem">회사전화</div>
                <div className="CustomItem">팩스</div>
                <div className="CustomItem">홈페이지</div>
                <div className="CustomItem">계좌번호</div>
                <div className="CustomItem">결혼기념일</div>
                <div className="CustomItem">메신저</div>
                <div className="CustomItem">015번호</div>
                <div className="CustomItem">결혼기념일</div>
              </div>
            </S.CustomTableBdoy>
          </S.CustomTableWrap>
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
