import React, {useState} from "react";
import * as S from '../../AddressBook.styles'
import BaseButton from "../../../../components/Atom/BaseButton";
import AddressDuplicateCheck from "../../../../components/Molecules/addressbook/AddressDuplicateCheck"; /* 중복정리 */
import AddressSearch from "../../../../components/Molecules/addressbook/AddressSearch";
import AddressAddColumModal from "../../../../components/Modal/AddressAddColumModal.tsx";
import {useLargeAddressTable} from "../../../../components/hooks/customs/addressBookLarge/useLargeAddressTable.ts"; /* 주소록 검색하기 ↓ */


interface IAddressFunBtnBox {
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  selectedItems: Set<string>
  setSelectedItems: React.Dispatch<React.SetStateAction<Set<string>>>
  selectedKey: Set<string>
  setSelectedKey: React.Dispatch<React.SetStateAction<Set<string>>>
  handleAddColumn(): void
}
const AddressFunBtnBox = ({selectedItems,setSelectedKey,selectedKey,setSelectedItems,setIsModalOpen,isModalOpen,handleAddColumn}:IAddressFunBtnBox) => {


  return (
    <S.AddressFunBtnBox>
      <AddressDuplicateCheck/>
      <BaseButton className="addressItemBtn" onClick={handleAddColumn}>보여질 항목 선택</BaseButton>

        <AddressAddColumModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          selectedKey={selectedKey}
          setSelectedKey={setSelectedKey}
        />
      <AddressSearch />
    </S.AddressFunBtnBox>
  )
}
export default AddressFunBtnBox