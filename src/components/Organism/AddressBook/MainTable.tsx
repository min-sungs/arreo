import React, { memo, Suspense } from 'react';

import { LoadingComponent } from '../../../apis/utils/LoadingComponent';
import * as S from './styles/MainTable.styles';
import ToastAddressBookIndex from '../ToastAddressBook/ToastAddressBook.index.tsx';

interface IMainTable {
  selectedItems?: Set<string>;
  selectedKey?: Set<string>;
  checkedGroup: number | null;
  onCheckedTableList: (checkedList: any) => void;
  gridRef: React.MutableRefObject<any>;
  tableAddOpen: boolean;
  setTableAddOpen: React.Dispatch<React.SetStateAction<boolean>>;
  groupArr: any;
  openLargeToggle: boolean;
}

const MainTable = ({
  selectedItems,
  selectedKey,
  checkedGroup,
  onCheckedTableList,
  gridRef,
  tableAddOpen,
  setTableAddOpen,
  groupArr,
  openLargeToggle,
}: IMainTable) => {
  return (
    <S.Container id={'mainTable'} style={{ display: openLargeToggle ? 'none' : '' }}>
      <S.Block>
        <Suspense fallback={<LoadingComponent />}>
          <ToastAddressBookIndex
            selectedItems={selectedItems}
            selectedKey={selectedKey}
            checkedGroup={checkedGroup}
            onCheckedTableList={onCheckedTableList}
            gridRef={gridRef}
            tableAddOpen={tableAddOpen}
            setTableAddOpen={setTableAddOpen}
            groupArr={groupArr}
          />
        </Suspense>
      </S.Block>
    </S.Container>
  );
};

export default memo(MainTable);
