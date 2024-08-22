/**
 * @title 015 ARS 착신번호 Hooks
 * */
import React, {useEffect, useState} from "react";
import {NextItem} from "../say015ARS/use015ARS.ts";


interface IUseArsCall {
  node: NextItem
  nodeChild: NextItem
  updatedJsonFile(): void
}
export const useArsCall = ({nodeChild,node,updatedJsonFile}:IUseArsCall) => {
  /* 착신번호 STATE */
  const [callNumberState, setCallNumberState] = useState<string>("");
  /* 지역번호 토글 STATE */
  const [selectSwitch, setSelectSwitch] = useState(false); // select 누르면 oprions 나올 스위치 버튼 역할
  /* 지역번호 선택 STATE */
  const [selectState, setSelectState] = useState('선택'); // 검색항목 State

  /* 초기 */
  useEffect(() => {
    if(node.target.type !== "BLANK") setCallNumberState(node.target.level);
  }, [node]);
  /* 지역번호 핸들러 Hook */
  const onClickSelectListButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    // select option 클릭 이벤트
    const result = e.target as HTMLButtonElement;
    if (typeof result.textContent === 'string') {
      setSelectState(result.textContent);
    }
  };

  /* 착신번호 핸들러 Hook */
  const handleCallNumber = (e: any) => {
    setCallNumberState(e.currentTarget.value);
  }
  /* 착신번호 수정 핸들러 Hook */
  const handleArsCall = () => {
    node.s015Data.action = "착신전환";
    node.s015Data.type = "ROUTE";
    node.target.type = "ROUTE";
    node.target.level = `${selectState}${callNumberState}`;
    if(nodeChild.target.type === "BLANK") nodeChild.target.type = "BLANK_ADD"
    updatedJsonFile();
  }


  /* 착신번호 AFTER Items */
  const addressSelect = [
    {value: '010', label: '010'},
    {value: '02', label: '02'},
    {value: '031', label: '031'},
    {value: '032', label: '032'},
    {value: '033', label: '033'},
    {value: '041', label: '041'},
    {value: '042', label: '042'},
    {value: '043', label: '043'},
    {value: '044', label: '044'},
    {value: '051', label: '051'},
    {value: '052', label: '052'},
    {value: '053', label: '053'},
    {value: '054', label: '054'},
    {value: '055', label: '055'},
    {value: '061', label: '061'},
    {value: '062', label: '062'},
    {value: '064', label: '064'},
  ];

  return {
    callNumberState,
    handleCallNumber,
    addressSelect,
    onClickSelectListButton,
    selectState,
    selectSwitch,
    setSelectSwitch,
    handleArsCall,
  }
}