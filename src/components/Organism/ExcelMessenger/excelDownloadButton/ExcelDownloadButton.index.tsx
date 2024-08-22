import React from 'react';
import * as XLSX from 'xlsx-js-style';
import styled from "@emotion/styled";

const Button = styled.span`
  border: 1px solid #a1a1a1;
  padding: 5px 10px;
  box-sizing: border-box;
  background-color: #000;
  color: #fff;
  cursor: pointer;
`

const ExcelDownloadButton = () => {
  const handleClick = () => {
    const wb = XLSX.utils.book_new();

    const rowHeader = [
      {v: "receiver", t: "s", s: {font: {sz: 18, bold: true, color: {rgb: "000"}}, fill: {fgColor: {rgb: "FFFF00"}}}},
      {v: "message", t: "s", s: {font: {sz: 18, bold: true, color: {rgb: "000"}}, fill: {fgColor: {rgb: "FFFF00"}}}},
      {v: "sendDateTime", t: "s", s: {font: {sz: 18, bold: true, color: {rgb: "000"}}, fill: {fgColor: {rgb: "FFFF00"}}}},
    ];

    const row1 = [
      {v: "이 열은 휴대폰 번호을 입력 하는 열 입니다.  ( 필수 값 )", t: "s", s: {font: { sz: 12}}},
      {v: "이 열은 내용을 입력 하는 열 입니다. ( 필수 값 )", t: "s", s: {font: { sz: 12}}},
      {v: "이 열은 예약 일시을 입력 하는 열 입니다.", t: "s", s: {font: { sz: 12}}},
    ]

    const row2 = [
      {v: "01000000000", t: "s", s: {font: { sz: 12}}},
      {v: "안녕하세요. 스탠다드 네트웍스입니다. 예약 일시를 설정해 1월 29일 18시 00분에 보내집니다.", t: "s", s: {font: { sz: 12}}},
      {v: "202401291800", t: "s", s: {font: { sz: 12}}},
    ]
    const row3 = [
      {v: "01000000000", t: "s", s: {font: { sz: 12}}},
      {v: "안녕하세요. 스탠다드 네트웍스입니다. 예약 일시를 입력 하지 않아 즉시 전송 됩니다.", t: "s", s: {font: { sz: 12}}},
      {v: "", t: "s", s: {font: { sz: 12}}},
    ]

    const ws = XLSX.utils.aoa_to_sheet([rowHeader, row1,row2,row3]);
    XLSX.utils.book_append_sheet(wb, ws, "readme demo");

    XLSX.writeFile(wb, "arreo_demo.xlsx");

  };

  return (
    <Button onClick={handleClick}>
      엑셀 양식 파일 다운로드
    </Button>
  );
}

export default ExcelDownloadButton;