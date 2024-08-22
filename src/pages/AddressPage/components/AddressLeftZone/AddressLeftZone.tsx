import * as S from '../../AddressBook.styles.ts';
import { Link } from 'react-router-dom';
import AddAddressBook from '../AddressHead/GobackAddressbook.tsx';
import AddressFunBtnBox from '../AddressHead/AddressFunBtnBox.tsx';
import GroupList from '../../../../components/Organism/AddressBook/GroupList.tsx';
import MainTable from '../../../../components/Organism/AddressBook/MainTable.tsx';
import React from 'react';
import { useNewGroupList } from '../../../../components/hooks/customs/newAddressBook/useNewGroupList.ts';
import { useDeleteGroup } from '../../../../components/hooks/customs/addressBook/useDeleteGroup.ts';
import { useEditGroup } from '../../../../components/hooks/customs/addressBook/useEditGroup.ts';
import { useLargeAddressTable } from '../../../../components/hooks/customs/addressBookLarge/useLargeAddressTable.ts';
import { useRecycleBin } from '../../../../components/hooks/customs/addressBook/recycleBin/useRecycleBin.ts';
import { useAddTable } from '../../../../components/hooks/customs/addressBook/useAddTable.ts';
import { useDeleteTableList } from '../../../../components/hooks/customs/addressBook/useDeleteTableList.ts';
import TrashBoxPopup from '../trashBox/TrashBoxPopup.tsx';
import AddressAddLarge from 'pages/AddressPage/AddressAddLarge.tsx';
import LargeBtntopGroup from 'components/Molecules/addressbookLarge/LargeBtntopGroup.tsx';

interface IAddressLeftZone {
  gridRef: React.MutableRefObject<any>;
  addressOpenToggleState: boolean;
  softPhoneTopTapState: string;
}

const AddressLeftZone = ({ gridRef, softPhoneTopTapState, addressOpenToggleState }: IAddressLeftZone) => {
  // 좌측 그룹 리스트 SIDE BAR HOOK
  const {
    groupArr,
    groupList,
    checkedGroup,
    setCheckedGroup,
    addGroupOpenHandle,
    addGroupOpen,
    setGroupClickStyles,
    clickGroupStyles,
    childrenClickStyle,
    clickStyle,
  } = useNewGroupList();

  const { deleteGroupOnClickHandler, setDeleteGroupList, delGroupState, deleteDelGroupsIsLoading } = useDeleteGroup();
  const { editOpen, groupDoubleClickHandle, groupEditOnkeyDownHandle, groupEditValueHandle, groupEditValue } =
    useEditGroup({ gridRef });
  const {
    isModalOpen,
    setIsModalOpen,
    selectedItems,
    setSelectedItems,
    selectedKey,
    setSelectedKey,
    handleAddColumn,
    handleAddRow,
    handleAdd10Row,
    handleRemoveRow,
    handleSaveChanges,
    isPostting,
    handleSubmit,
    groupListIsLoading,
    columnVisibility,
    headerSelect,
    handleGroupChange,
    groupDetail,
    addData,
    handleInputChange,
    handleDeleteRow,
    register,
    fields,
    defaultAddData,
    defaultRow,
  } = useLargeAddressTable();
  const {
    deleteBinAllListOnClick,
    recycleBinClickHandle,
    recycleBinOpen,
    restoreBinAllListOnClick,
    binAllBtnState,
    postAdressBinAllListIsLoading,
  } = useRecycleBin();

  const {
    tableAddOpenHandle,
    tableAddOpen,
    setTableAddOpen,
    addressAddSwitch,
    setAddressAddSwitch,
    addressAddSelectArr,
    onClickAddressAddClick,
    openLargeToggle,
    setOpenLargeToggle,
    onClickBackBtnHandle,
  } = useAddTable();

  const { onCheckedTableList, onDeleteTableList } = useDeleteTableList({ gridRef });

  return (
    <>
      {recycleBinOpen && (
        <TrashBoxPopup
          recycleBinClickHandle={recycleBinClickHandle}
          groupList={groupList}
          recycleBinOpen={recycleBinOpen}
        />
      )}
      {/*<S.AddressLeftZone style={{opacity: (addressOpenToggleState) ? '1' : '0', position: (addressOpenToggleState) ? 'inherit' : 'absolute'}}>*/}
      <S.AddressLeftZone
        style={{
          opacity: softPhoneTopTapState === '0' || (softPhoneTopTapState === '2' && addressOpenToggleState) ? '1' : '0',
          position:
            softPhoneTopTapState === '0' || (softPhoneTopTapState === '2' && addressOpenToggleState)
              ? 'inherit'
              : 'absolute',
          zIndex:
            softPhoneTopTapState === '0' || (softPhoneTopTapState === '2' && addressOpenToggleState) ? '9001' : '9000',
        }}
      >
        {/* head 링크 / 버튼 영역 */}
        {softPhoneTopTapState === '0' && (
          <S.GobackHistoryWrap>
            <h1>
              <Link to={'/'} onClick={() => window.location.reload()} style={{ color: '#0D42E5' }}>
                ARREO
              </Link>
            </h1>
            <S.AddressHeadGroup>
              {openLargeToggle ? (
                <LargeBtntopGroup
                  handleAddColumn={handleAddColumn}
                  handleAddRow={handleAddRow}
                  handleAdd10Row={handleAdd10Row}
                  handleRemoveRow={handleRemoveRow}
                  handleSaveChanges={handleSaveChanges}
                  isPostting={isPostting}
                  handleSubmit={handleSubmit}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                  selectedItems={selectedItems}
                  setSelectedItems={setSelectedItems}
                  selectedKey={selectedKey}
                  setSelectedKey={setSelectedKey}
                  onClickBackBtnHandle={onClickBackBtnHandle}
                />
              ) : (
                <>
                  <AddAddressBook
                    addGroupOpenHandle={addGroupOpenHandle}
                    deleteGroupOnClickHandler={deleteGroupOnClickHandler}
                    onDeleteTableList={onDeleteTableList}
                    tableAddOpenHandle={tableAddOpenHandle}
                    delGroupState={delGroupState}
                    addressAddSwitch={addressAddSwitch}
                    setAddressAddSwitch={setAddressAddSwitch}
                    addressAddSelectArr={addressAddSelectArr}
                    onClickAddressAddClick={onClickAddressAddClick}
                  />
                  <AddressFunBtnBox
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    selectedItems={selectedItems}
                    setSelectedItems={setSelectedItems}
                    selectedKey={selectedKey}
                    setSelectedKey={setSelectedKey}
                    handleAddColumn={handleAddColumn}
                  />
                </>
              )}
            </S.AddressHeadGroup>
          </S.GobackHistoryWrap>
        )}
        {/* end head 링크 / 버튼 영역 */}
        <S.AddressLeftMiddle>
          {/* 전체 그룹 영역 */}
          <GroupList
            clickStyle={clickStyle}
            childrenClickStyle={childrenClickStyle}
            groupList={groupList}
            setCheckedGroup={setCheckedGroup}
            addGroupOpenHandle={addGroupOpenHandle}
            addGroupOpen={addGroupOpen}
            setDeleteGroupList={setDeleteGroupList}
            editOpen={editOpen}
            groupDoubleClickHandle={groupDoubleClickHandle}
            groupEditOnkeyDownHandle={groupEditOnkeyDownHandle}
            groupEditValueHandle={groupEditValueHandle}
            groupEditValue={groupEditValue}
            deleteBinAllListOnClick={deleteBinAllListOnClick}
            recycleBinClickHandle={recycleBinClickHandle}
            setGroupClickStyles={setGroupClickStyles}
            clickGroupStyles={clickGroupStyles}
            recycleBinOpen={recycleBinOpen}
            restoreBinAllListOnClick={restoreBinAllListOnClick}
            binAllBtnState={binAllBtnState}
            deleteDelGroupsIsLoading={deleteDelGroupsIsLoading}
            postAdressBinAllListIsLoading={postAdressBinAllListIsLoading}
            setOpenLargeToggle={setOpenLargeToggle}
          />
          {/* end 전체 그룹 영역 */}
          {/* 테이블 영역 */}
          <MainTable
            selectedItems={selectedItems}
            selectedKey={selectedKey}
            checkedGroup={checkedGroup}
            onCheckedTableList={onCheckedTableList}
            gridRef={gridRef}
            tableAddOpen={tableAddOpen}
            setTableAddOpen={setTableAddOpen}
            groupArr={groupArr}
            openLargeToggle={openLargeToggle}
          />
          {/* Start 대량추가 테스트 */}
          <AddressAddLarge
            openLargeToggle={openLargeToggle}
            groupListIsLoading={groupListIsLoading}
            columnVisibility={columnVisibility}
            headerSelect={headerSelect}
            handleGroupChange={handleGroupChange}
            groupDetail={groupDetail}
            addData={addData}
            handleInputChange={handleInputChange}
            handleDeleteRow={handleDeleteRow}
            register={register}
            fields={fields}
            defaultAddData={defaultAddData}
            defaultRow={defaultRow}
            selectedKey={selectedKey}
            selectedItems={selectedItems}
            setOpenLargeToggle={setOpenLargeToggle}
          />
          {/* End 대량추가 테스트 */}
          {/* end 테이블 영역 */}
        </S.AddressLeftMiddle>
      </S.AddressLeftZone>
    </>
  );
};

export default AddressLeftZone;
