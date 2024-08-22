import React from 'react'
import * as S from './ExcelCalculator.styles.ts'
import {useExcelCalculator} from "../../../hooks/customs/excelMessenger/useExcelCalculator.ts";
import {IFileTypes, useDragDropFile} from "../../../hooks/customs/useDragDropFile.ts";
import {v4 as uuidv4} from "uuid"
import ExcelDownloadButton from "../excelDownloadButton/ExcelDownloadButton.index.tsx";

interface IExcelCalculatorIndex {
  readExcel: (file: any) => void
  dragRef: React.MutableRefObject<HTMLLabelElement | null>
  files: IFileTypes[]
  handleFilterFile: (e: any, id: number) => void
  onChangeFiles: (e: any) => void
  fileInputRef: React.RefObject<HTMLInputElement>
}

const ExcelCalculatorIndex = ({readExcel,onChangeFiles,files,handleFilterFile,dragRef,fileInputRef}: IExcelCalculatorIndex) => {

  const {sndMsg, setSndMsg, calMsglen} = useExcelCalculator();


  return (
    <S.Wrapper>
      <S.CalculatorWrapper>
        <S.ContentTextWrapper>
          {/*    바이트 계산    */}
          <S.ContentInfoTextArea name="" id="" cols={50} rows={15} value={sndMsg} onChange={(val) => setSndMsg(val.currentTarget.value)}/>
          <S.ContentInfoTextLength>
            {calMsglen(sndMsg)} /{'2000byte '}
          </S.ContentInfoTextLength>
        </S.ContentTextWrapper>
        {/*  설명서  */}
        <S.InfoWrapper>
          <S.InfoText>* 바이트 계산기에 전송할 내용을 입력 하시면 보낼 내용의 바이트 크기를 확인 가능 합니다.</S.InfoText>
          <S.InfoText>( 90Byte 초과시 장문 입니다.)</S.InfoText>
          <S.InfoText>( 90Byte 이하시 단문 입니다. )</S.InfoText>
        </S.InfoWrapper>
      </S.CalculatorWrapper>
      <S.ExcelWrapper>
        <input type="file" id={"fileUpload"} ref={fileInputRef} style={{display: "none"}} multiple={false} onChange={onChangeFiles} accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"/>
        <S.ExcelLabel htmlFor={"fileUpload"} ref={dragRef}>
          <S.ExcelText>{files.length > 0 ? (
              files.map((file: IFileTypes) => {
                const {
                  id,
                  object: {name}
                } = file;
                return (
                  <div key={uuidv4()}>
                    <span>{name}</span>
                    <span role={"button"}
                          tabIndex={0} onClick={(e) => handleFilterFile(e, id)}>&nbsp;&nbsp;닫기</span>
                  </div>
                )
              })) :
            (
              <>
                <span>EXCEL 파일 첨부</span> <br/>
                <span>( 클릭 또는 파일을 드래그 해서 파일을 첨부가 가능 합니다. )</span>
              </>
            )
          }
          </S.ExcelText>
        </S.ExcelLabel>
        <ExcelDownloadButton/>
      </S.ExcelWrapper>
    </S.Wrapper>
  )
}

export default ExcelCalculatorIndex;