import BaseButton from 'components/Atom/BaseButton';
import AddressAddColumModal from 'components/Modal/AddressAddColumModal.tsx';
import React from 'react';
import * as S from './styles/LargeBtntopGroup.styles.ts';

interface ILargeBtntopGroup {
  handleAddColumn: any;
  handleAddRow: any;
  handleAdd10Row: any;
  handleRemoveRow: any;
  handleSaveChanges: any;
  isPostting: boolean;
  handleSubmit: any;
  isModalOpen: any;
  setIsModalOpen: any;
  selectedItems: any;
  setSelectedItems: any;
  selectedKey: any;
  setSelectedKey: any;
  onClickBackBtnHandle: any;
}

const LargeBtntopGroup = ({
  handleAddColumn,
  handleAddRow,
  handleAdd10Row,
  handleRemoveRow,
  handleSaveChanges,
  isPostting,
  handleSubmit,
  isModalOpen,
  setIsModalOpen,
  selectedItems,
  setSelectedItems,
  selectedKey,
  setSelectedKey,
  onClickBackBtnHandle,
}: ILargeBtntopGroup) => {
  return (
    <>
      <S.LargeLeftBtnGroup>
        <BaseButton
          onClick={onClickBackBtnHandle}
          width="8rem"
          height="4rem"
          color="#fff"
          backgroundColor="#000000"
          borderRadius="10px"
        >
          취소하기
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
          저장하기
        </BaseButton>
      </S.LargeLeftBtnGroup>
      <S.LargeRightBtnGroup>
        <BaseButton
          onClick={handleAddRow}
          width="8rem"
          height="4rem"
          color="#fff"
          backgroundColor="#000000"
          borderRadius="10px"
        >
          1줄 추가
        </BaseButton>
        <BaseButton
          onClick={handleAdd10Row}
          width="8rem"
          height="4rem"
          color="#fff"
          backgroundColor="#000000"
          borderRadius="10px"
        >
          10줄 추가
        </BaseButton>
        <BaseButton
          onClick={handleRemoveRow}
          width="8rem"
          height="4rem"
          color="#fff"
          backgroundColor="#000000"
          borderRadius="10px"
        >
          1줄 삭제
        </BaseButton>
        <BaseButton
          onClick={handleAddColumn}
          width="8rem"
          height="4rem"
          color="#fff"
          backgroundColor="#000000"
          borderRadius="10px"
        >
          항목 편집
        </BaseButton>
      </S.LargeRightBtnGroup>

      <AddressAddColumModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        selectedKey={selectedKey}
        setSelectedKey={setSelectedKey}
      />
    </>
  );
};

export default LargeBtntopGroup;
