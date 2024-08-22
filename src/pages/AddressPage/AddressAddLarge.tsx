import React from 'react';

import LargeAddressTable from '../../components/Organism/AddressBook/LargeAddressTable';

interface IAddressAddLarge {
  openLargeToggle: boolean;
  groupListIsLoading: any;
  columnVisibility: any;
  headerSelect: any;
  handleGroupChange: any;
  groupDetail: any;
  addData: any;
  handleInputChange: any;
  handleDeleteRow: any;
  register: any;
  fields: any;
  defaultAddData: any;
  defaultRow: any;
  selectedKey: any;
  selectedItems: any;
  setOpenLargeToggle: any;
}

const AddressAddLarge = ({
  openLargeToggle,
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
  selectedKey,
  selectedItems,
  setOpenLargeToggle,
}: IAddressAddLarge) => {
  return (
    <LargeAddressTable
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
  );
};

export default AddressAddLarge;
