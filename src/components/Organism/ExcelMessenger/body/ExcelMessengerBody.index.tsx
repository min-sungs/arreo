import React, {useState} from 'react';
import 'tui-grid/dist/tui-grid.css';
import ExcelCalculatorIndex from "../calculator/ExcelCalculator.index.tsx";
import GridIndex from "../Grid/Grid.index.tsx";
import styled from "@emotion/styled";
import {useDragDropFile} from "../../../hooks/customs/useDragDropFile.ts";
import {useXlsx} from "../../../hooks/customs/useXlsx.ts";

const Wrapper = styled.div``

const ExcelMessengerBodyIndex = () => {

  const {readExcel,items} = useXlsx();
  const {dragRef, files, handleFilterFile, onChangeFiles,fileInputRef,setFiles} = useDragDropFile({
    readExcel
  });
  return (
    <Wrapper>
      <ExcelCalculatorIndex  readExcel={readExcel} dragRef={dragRef} files={files} handleFilterFile={handleFilterFile} onChangeFiles={onChangeFiles} fileInputRef={fileInputRef}/>
      <GridIndex items={items} files={files} fileInputRef={fileInputRef} setFiles={setFiles}/>
    </Wrapper>
  );
};

export default ExcelMessengerBodyIndex;

