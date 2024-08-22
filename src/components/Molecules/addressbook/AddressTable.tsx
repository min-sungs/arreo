import React from 'react';

import BaseButton from '../../Atom/BaseButton';
import BaseCheckBox from '../../Atom/BaseCheckBox';

import { FaSort } from 'react-icons/fa';
import Loader from '../../common/Loader';
import Paginations01Index from '../../common/paginations/Paginations01.index';
import { useAddressTable } from '../../hooks/customs/addressBook/useAddressTable';
import * as S from './styles/AddressTable.styles';
import { BuddyData, BinData } from './types/AddressTable.types';
import AddressListDetail from './AddressListDetail';

const AddressTable = () => {
  const {
    toggleSelectAll,
    selectAll,
    setItemAddOpen,
    addToggleBtnHandler,
    toggleInputItemsHandler,
    isLoading,
    itemEditOpen,
    setItemEditOpen,
    itemAddOpen,
    postItemSubmitHandler,
    itemAddGroupValue,
    groupMainList,
    groupList,
    itemAddNameValue,
    postItemNameInputChangeHandler,
    itemAddPhoneValue,
    postItemPhoneInputChangeHandler,
    itemAddEmailValue,
    postItemEmailInputChangeHandler,
    isSubmitting,
    checkedList,
    binCheckedList,
    postItemGroupSelectChangeHandler,
    patchItemInputChangeHandler,
    patchItemSubmitHandler,
    toggleCheckBox,
    addressTotalElement1,
    startPage1,
    setStartPage1,
    activePage1,
    setActivePage1,
    addressTotalElement2,
    startPage2,
    setStartPage2,
    activePage2,
    setActivePage2,
    handlePageChange,
    deleteItemOnClickHandler,
    recycleBinListToggle,
    recycleBinList,
    binListRestoreOnClick,
    binListDeleteOnClick,
    toggleNameSortListClick,
    togglePhoneSortListClick,
    toggleEmailSortListClick,
    isEditting,
  } = useAddressTable();

  return (
    <S.Container>
      <S.TableSheet>
        <S.TableHeadWrap>
          <S.TableHeaderRow>
            <S.TableHeader>
              <S.CheckBoxWrap>
                <BaseCheckBox onChange={toggleSelectAll} checked={selectAll} />
                <span>그룹</span>
              </S.CheckBoxWrap>
            </S.TableHeader>
            <S.TableHeader>
              <S.SortMenuWrap onClick={toggleNameSortListClick}>
                <span>이름</span>
                <FaSort />
              </S.SortMenuWrap>
            </S.TableHeader>
            <S.TableHeader>
              <S.SortMenuWrap onClick={togglePhoneSortListClick}>
                <span>휴대폰번호</span>
                <FaSort />
              </S.SortMenuWrap>
            </S.TableHeader>
            <S.TableHeader>
              <S.SortMenuWrap onClick={toggleEmailSortListClick}>
                <span>이메일</span>
                <FaSort />
              </S.SortMenuWrap>
            </S.TableHeader>
          </S.TableHeaderRow>
          <S.TableButtonWrap>
            {recycleBinListToggle ? (
              <td>
                <BaseButton
                  width=""
                  color="#6D6C6D"
                  fontSize="1.1rem"
                  fontWeight="300"
                  backgroundColor="rgb(245, 245, 245);"
                  onClick={binListRestoreOnClick}
                >
                  복원
                </BaseButton>
                <BaseButton
                  width=""
                  color="#6D6C6D"
                  fontSize="1.1rem"
                  fontWeight="300"
                  backgroundColor="rgb(245, 245, 245);"
                  onClick={binListDeleteOnClick}
                >
                  삭제
                </BaseButton>
              </td>
            ) : (
              <td>
                <BaseButton
                  width=""
                  color="#6D6C6D"
                  fontSize="1.1rem"
                  fontWeight="300"
                  backgroundColor="rgb(245, 245, 245);"
                  onClick={addToggleBtnHandler}
                >
                  추가
                </BaseButton>
                <BaseButton
                  width=""
                  color="#6D6C6D"
                  fontSize="1.1rem"
                  fontWeight="300"
                  backgroundColor="rgb(245, 245, 245);"
                  onClick={toggleInputItemsHandler}
                >
                  수정
                </BaseButton>
                <BaseButton
                  width=""
                  color="#6D6C6D"
                  fontSize="1.1rem"
                  fontWeight="300"
                  backgroundColor="rgb(245, 245, 245);"
                  onClick={deleteItemOnClickHandler}
                >
                  삭제
                </BaseButton>
              </td>
            )}
          </S.TableButtonWrap>
        </S.TableHeadWrap>
        {recycleBinListToggle ? (
          <S.TableBodyDiv>
            <S.TableBodyWrap>
              {!recycleBinList ? (
                <S.TableBodyWrap>
                  <td>
                    <Loader />
                  </td>
                </S.TableBodyWrap>
              ) : (
                recycleBinList &&
                recycleBinList?.content?.map((list: BinData) => {
                  return (
                    <S.TableRow key={list.buddySeqNo}>
                      <S.TableCell>
                        <S.CheckBoxWrap>
                          <BaseCheckBox
                            checked={binCheckedList?.includes(list)}
                            onChange={(e) => toggleCheckBox(e, list)}
                          />
                          <span>{list.groupNm}</span>
                        </S.CheckBoxWrap>
                      </S.TableCell>
                      <S.TableCell>{list.buddyNm}</S.TableCell>
                      <S.TableCell>{list.keyCommNo}</S.TableCell>
                      <S.TableCell>{list.emailId}</S.TableCell>
                    </S.TableRow>
                  );
                })
              )}
            </S.TableBodyWrap>
          </S.TableBodyDiv>
        ) : (
          <S.TableBodyDiv>
            {isLoading ? (
              <S.TableBodyWrap>
                <td>
                  <Loader />
                </td>
              </S.TableBodyWrap>
            ) : (
              <S.TableBodyWrap>
                {itemEditOpen && (
                  <S.ItemEditWrap>
                    <S.ItemEditForm>
                      <S.BaseButtonWrap>
                        <BaseButton
                          type="submit"
                          width=""
                          color="#6D6C6D"
                          fontSize="1.1rem"
                          fontWeight="300"
                          backgroundColor="rgb(245, 245, 245);"
                          onClick={(e) => patchItemSubmitHandler(e)}
                          disabled={isEditting}
                        >
                          수정완료
                        </BaseButton>
                        <BaseButton
                          type="button"
                          width=""
                          color="#6D6C6D"
                          fontSize="1.1rem"
                          fontWeight="300"
                          backgroundColor="rgb(245, 245, 245);"
                          onClick={() => setItemEditOpen(false)}
                        >
                          취소
                        </BaseButton>
                      </S.BaseButtonWrap>
                    </S.ItemEditForm>
                  </S.ItemEditWrap>
                )}
                {itemAddOpen && (
                  <S.ItemAddWrap>
                    <S.ItemAddForm onSubmit={postItemSubmitHandler} aria-label="리스트 추가">
                      <S.GroupSelect value={itemAddGroupValue} onChange={postItemGroupSelectChangeHandler}>
                        {!groupList ? (
                          <S.TableBodyWrap>
                            <td>
                              <Loader />
                            </td>
                          </S.TableBodyWrap>
                        ) : (
                          groupList?.groupList?.map((group: any) => (
                            <option key={group.groupSeqNo} value={group.groupNm}>
                              {group.groupNm}
                            </option>
                          ))
                        )}
                      </S.GroupSelect>
                      <S.ItemAddInput
                        type="text"
                        id="addpostname"
                        name="addpostname"
                        value={itemAddNameValue}
                        onChange={postItemNameInputChangeHandler}
                        placeholder="이름을 적어주세요"
                        autoFocus
                      />
                      <S.ItemAddPhoneInput
                        type="text"
                        id="addpostphonenum"
                        name="addpostphonenum"
                        value={itemAddPhoneValue}
                        onChange={postItemPhoneInputChangeHandler}
                        placeholder="휴대폰번호를 적어주세요"
                      />
                      <S.ItemAddEmailInput
                        type="text"
                        id="addpostmail"
                        name="addpostmail"
                        value={itemAddEmailValue}
                        onChange={postItemEmailInputChangeHandler}
                        placeholder="메일을 적어주세요"
                      />
                      <S.BaseButtonWrap>
                        <BaseButton
                          type="submit"
                          width=""
                          color="#6D6C6D"
                          fontSize="1.1rem"
                          fontWeight="300"
                          backgroundColor="rgb(245, 245, 245);"
                          disabled={isSubmitting}
                        >
                          저장
                        </BaseButton>
                        <BaseButton
                          type="button"
                          width=""
                          color="#6D6C6D"
                          fontSize="1.1rem"
                          fontWeight="300"
                          backgroundColor="rgb(245, 245, 245);"
                          onClick={() => setItemAddOpen(false)}
                        >
                          취소
                        </BaseButton>
                      </S.BaseButtonWrap>
                    </S.ItemAddForm>
                  </S.ItemAddWrap>
                )}
                {!groupMainList ? (
                  <S.TableBodyWrap>
                    <td>
                      <Loader />
                    </td>
                  </S.TableBodyWrap>
                ) : (
                  groupMainList &&
                  groupMainList?.content?.map((list: BuddyData, index: number) => {
                    return (
                      <S.TableRow key={list.buddySeqNo}>
                        {itemEditOpen && checkedList?.includes(list) ? (
                          <S.ItemAddWrap>
                            <BaseCheckBox
                              key={list.buddySeqNo}
                              checked={checkedList?.includes(list)}
                              onChange={(e) => toggleCheckBox(e, list)}
                            />
                            <S.ItemEditGroupSelected
                              name={`groupSeqNo-${list?.buddySeqNo}`}
                              defaultValue={list.groupNm}
                              onChange={(e) => patchItemInputChangeHandler(e, list?.buddySeqNo, 'groupSeqNo')}
                            >
                              {groupList &&
                                groupList?.groupList?.map((group: any) => (
                                  <option key={group.groupSeqNo} value={group.groupNm}>
                                    {group.groupNm}
                                  </option>
                                ))}
                            </S.ItemEditGroupSelected>
                            <S.ItemEditInput
                              type="text"
                              id={`name-${list?.buddySeqNo}`}
                              name={`name-${list?.buddySeqNo}`}
                              defaultValue={list.buddyNm}
                              onChange={(e) => patchItemInputChangeHandler(e, list?.buddySeqNo, 'name')}
                              placeholder="이름을 적어주세요"
                              autoFocus
                            />
                            <S.ItemEditInput
                              type="text"
                              id={`phone-${list?.buddySeqNo}`}
                              name={`phone-${list?.buddySeqNo}`}
                              defaultValue={list.keyCommNo}
                              onChange={(e) => patchItemInputChangeHandler(e, list?.buddySeqNo, 'phnNum')}
                              placeholder="휴대폰번호를 적어주세요"
                            />
                            <S.ItemEditInput
                              type="text"
                              id={`email-${list?.buddySeqNo}`}
                              name={`email-${list?.buddySeqNo}`}
                              defaultValue={list.emailId !== null ? list.emailId : undefined}
                              onChange={(e) => patchItemInputChangeHandler(e, list?.buddySeqNo, 'email')}
                              placeholder="이메일을 적어주세요"
                            />
                          </S.ItemAddWrap>
                        ) : (
                          <>
                            <S.TableCell>
                              <S.CheckBoxWrap>
                                <BaseCheckBox
                                  checked={checkedList?.includes(list)}
                                  onChange={(e) => toggleCheckBox(e, list)}
                                />
                                <span>{list.groupNm}</span>
                              </S.CheckBoxWrap>
                            </S.TableCell>
                            <S.TableCell>{list.buddyNm}</S.TableCell>
                            <S.TableCell>{list.keyCommNo}</S.TableCell>
                            <S.TableCell>
                              <AddressListDetail list={list} />
                              {list.emailId}
                            </S.TableCell>
                          </>
                        )}
                      </S.TableRow>
                    );
                  })
                )}
              </S.TableBodyWrap>
            )}
          </S.TableBodyDiv>
        )}
      </S.TableSheet>
      {recycleBinListToggle ? (
        <S.PainationInner>
          <Paginations01Index
            dataCount={addressTotalElement2}
            startPage={startPage2}
            setStartPage={setStartPage2}
            activePage={activePage2}
            setActivePage={setActivePage2}
            eventHook={handlePageChange}
          />
        </S.PainationInner>
      ) : (
        <S.PainationInner>
          <Paginations01Index
            dataCount={addressTotalElement1}
            startPage={startPage1}
            setStartPage={setStartPage1}
            activePage={activePage1}
            setActivePage={setActivePage1}
            eventHook={handlePageChange}
          />
        </S.PainationInner>
      )}
    </S.Container>
  );
};

export default AddressTable;
