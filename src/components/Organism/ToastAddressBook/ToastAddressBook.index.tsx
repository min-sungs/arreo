import React, {memo} from 'react';

import * as S from './ToastAddressBook.styles.ts';
import "./Grid.css"
import Grid from '@toast-ui/react-grid';

import Loader from '../../common/Loader.tsx';
import {useToastAddressBook} from '../../hooks/customs/toastAddressBook/useToastAddressBook.ts';
import TableDataAdd from '../../../pages/AddressPage/components/addTable/tableDataAdd.tsx';

interface IToastAddressBookIndex {
  selectedItems?: Set<string>;
  selectedKey?: Set<string>;
  checkedGroup: number | null;
  onCheckedTableList: (checkedList: any) => void;
  gridRef: React.MutableRefObject<any>;
  tableAddOpen: boolean;
  setTableAddOpen: React.Dispatch<React.SetStateAction<boolean>>;
  groupArr: any
}

const ToastAddressBookIndex = ({
                                 selectedItems,
                                 selectedKey,
                                 checkedGroup,
                                 onCheckedTableList,
                                 gridRef,
                                 tableAddOpen,
                                 setTableAddOpen,
                                 groupArr,
                               }: IToastAddressBookIndex) => {
  const {gridData, gridHeight, isLoading, onUnCheckGrid,onCheckAllGrid,onUnCheckAllGrid,onClickCell,onDBClickCell} = useToastAddressBook({
    gridRef,
    selectedItems,
    selectedKey,
    checkedGroup,
    groupArr,
    onCheckedTableList,
  });



  return (
    <S.Wrapper id={'gridWrapper'}>
      {isLoading && <Loader height={String(gridHeight)}/>}
      {tableAddOpen && <TableDataAdd setTableAddOpen={setTableAddOpen}/>}
      {/*<AddressListDetail list={detailData}/>*/}
      <Grid
        ref={gridRef}
        data={gridData}
        columns={[]}
        bodyHeight={gridHeight}
        scrollX
        rowHeaders={['checkbox']}
        oneTimeBindingProps={['data', 'columns']}
        onDoubleClick={onDBClickCell}
        onCheck={onCheckAllGrid}
        onCheckAll={onCheckAllGrid}
        onUncheck={onUnCheckGrid}
        onUncheckAll={onUnCheckAllGrid}
        onClick={onClickCell}
      />
    </S.Wrapper>
  );
};

export default memo(ToastAddressBookIndex);
