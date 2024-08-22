import React, {memo} from 'react';
import 'tui-grid/dist/tui-grid.css';
import Grid from "@toast-ui/react-grid"
import * as S from './Grid.styles'
import BlueButton from "../../../commons/buttons/BlueButton.tsx";
import BlackButton from "../../../commons/buttons/BlackButton.tsx";
import Loader from "../../../common/Loding.tsx";
import {useGrid} from "../../../hooks/customs/excelMessenger/useGrid.tsx";
import ExcelMessengerModal from "../../../commons/modals/excelMessengerModal/ExcelMessengerModal.tsx";
import {v4 as uuidv4} from "uuid"
import {SelectedCallback, SelectedText, SelectedWrapper} from "./Grid.styles";
import {formatPhoneNumberTest} from "../../../../apis/utils/formats/phoneNumberFormatUtil.ts";
import {IFileTypes} from "../../../hooks/customs/useDragDropFile.ts";

interface IGridIndex {
  items: never[]
  files: IFileTypes[]
  fileInputRef: React.RefObject<HTMLInputElement>
  setFiles: React.Dispatch<React.SetStateAction<IFileTypes[]>>
}

const GridIndex = ({items,files,fileInputRef,setFiles}: IGridIndex) => {


  const {
    setPopupToggle,
    handlerReset,
    popupToggle,
    handlerPopup,
    gridData,
    gridRef,
    columns,
    onClickSendMessenger,
    onClickAddRow,
    manualState,
    handlerManual,
    sendLoading,
    onClickRemoveRow,
    selectedCallback,
    handleChangeCallback,
    callingNumberList,
    estimateData
  } = useGrid({items,fileInputRef,setFiles,files});

  return (
    <>
      {/*{manualState && <ExcelMessengerManualIndex handlerManual={handlerManual}/>}*/}
      <SelectedWrapper>
        <SelectedText>발신 번호 : </SelectedText>
        <SelectedCallback value={selectedCallback} onChange={handleChangeCallback}>
          {callingNumberList && callingNumberList.map((el) => (
            <option value={el.callback} key={uuidv4()}>{formatPhoneNumberTest(el.callback)}</option>
          ))}
        </SelectedCallback>
      </SelectedWrapper>
      <S.Wrapper>
        {sendLoading && <Loader/>}
        {popupToggle && <ExcelMessengerModal estimateData={estimateData} sendEventFnc={onClickSendMessenger}
                                             cancelEventFnc={() => {
                                               setPopupToggle((prev: any) => !prev)
                                             }}
        />}
        <Grid
          ref={gridRef}
          data={gridData}
          columns={columns}
          rowHeight={25}
          bodyHeight={500}
          draggable
          scrollX={false}
          rowHeaders={["rowNum", "checkbox"]}
          oneTimeBindingProps={['data', 'columns']}
          // pageOptions={{
          //   useClient: true,
          //   perPage: 5
          // }}
        />
        <S.ButtonWrapper>
          <BlueButton text={'전송'} eventFun={handlerPopup}/>
          <BlackButton text={'추가'} eventFun={onClickAddRow} marginLeft={'10px'}/>
          <BlackButton text={'삭제'} eventFun={onClickRemoveRow} marginLeft={'10px'}/>
          <BlackButton text={'초기화'} eventFun={handlerReset} marginLeft={'10px'}/>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
};
export default memo(GridIndex);