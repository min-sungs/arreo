import React, {useEffect, useRef, useState} from "react";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {longDetailParamsRecoil} from "../../../../../recoil/atoms/sendResult/sendResult.ts";
import {useMutationDeleteLtsMsgManagementDetail} from "../../../mutations/useMutationDeleteLtsMsgManagementDetail.ts";


type  SearchData = {
  pageSize:number;
  msgGroupId: string;
  pageNumber: number;
  keywordValue: string | null;
  keyword: string | null;
  callback: string;
}

interface IUseSendResultTable {
  setSearchAllValue: React.Dispatch<React.SetStateAction<SearchData>>
  lastPage: number;
  activePage: number;
  tableData: any;
  count: number;
  pageSize: number;
}

export const useLongTable = ({setSearchAllValue, lastPage, activePage, tableData, count, pageSize}: IUseSendResultTable) => {
  const [leftSelectSwitch, setLeftSelectSwitch] = useState(false);

  const [rightSelectSwitch, setRightSelectSwitch] = useState(false);

  // 검색 내용 STATE
  const [keywordState, setKeywordState] = useState<string>("");
  // 검색 조건 STATE
  const [keywordValueState, setKeywordValueState] = useState<any>({label: "연락처", value: "number"}); // LeftState
  // callback, prePayNo RECOIL
  const [longDetailParamsState,setLongDetailParamsState] = useRecoilState(longDetailParamsRecoil);
  // 검색 조건 배열
  const keywordValueArr = [
    {label: "연락처", value: 'number'}
  ];

  /* 장기보관함 삭제 Api  */
  const { mutationDeleteLtsMsgDetail, isDeleteLoading } = useMutationDeleteLtsMsgManagementDetail();

  /* 장기보관함 삭제 Hook */
  const deleteMsgStorage = () => {
    mutationDeleteLtsMsgDetail({msgGroupId: longDetailParamsState.msgGroupId})
  }

  // 검색 조건 변경 함수
  const onChangeKeywordValue = (item: any) => {
    setKeywordValueState(item);
  }

  // 검색 버튼 클릭 or 엔터
  const onClickSearchButton = (e: any) => {
    e.preventDefault();
    setSearchAllValue((prev: SearchData) => {
      const updatedData = {...prev};
      updatedData.keyword = keywordState === "" ? null : keywordState;
      updatedData.keywordValue = keywordValueState.value;
      updatedData.pageNumber = 0;

      return updatedData;
    });
  }

  return {
    onClickSearchButton,
    leftSelectSwitch,
    setLeftSelectSwitch,
    keywordValueState,
    keywordValueArr,
    onChangeKeywordValue,
    keywordState,
    setKeywordState,
    rightSelectSwitch,
    setRightSelectSwitch,
    deleteMsgStorage
  }
}
// ! 내 피땀 눈물

// 체크 박스 전체 선택 STATE
// const [checkBoxAllState, setCheckBoxAllState] = useState<boolean>(false);
// 체크 박스 단일 선택 STATE
// const [checkBoxState, setCheckBoxState] = useState<any>([{index: 1, checked: Array(10).fill(false)}]);
// 체크 박스 선택된 값 VALUE ARR STATE
// const [, setCheckedBoxValue] = useState<any>([{page: 1, data: []}]);
// // 체크 박스에 관련된 STATE  초기화
// useEffect(() => {
//
//   if (count) {
//
//     setCheckedBoxValue(() => {
//       const initCheckedBoxValue = [];
//       for (let i = 0; i < lastPage; i++) {
//         initCheckedBoxValue[i] = {page: i + 1, data: []};
//       }
//       return initCheckedBoxValue;
//     });
//
//     setCheckBoxState(() => {
//       const initCheckedBoxState = [];
//       for (let i = 0; i < lastPage; i++) {
//         initCheckedBoxState[i] = {page: i + 1, checked: Array((pageSize - ((pageSize * (i + 1)) - count)) > pageSize ? pageSize : (pageSize - ((pageSize * (i + 1)) - count))).fill(false)};
//       }
//       return initCheckedBoxState;
//     });
//
//     setCheckBoxAllState(false);
//   }
// }, [lastPage, longDetailParamsState, count, pageSize]);
//
// // Active Page 가 달라질 때 전체 체크 박스 STATE 변경
// useEffect(() => {
//   if (checkBoxState?.[activePage - 1]?.checked.every((value: boolean) => value)) {
//     setCheckBoxAllState(true);
//   } else {
//     setCheckBoxAllState(false);
//   }
// }, [activePage]);
//
//
// // ! 전체 선택
// const onCheckBoxAll = (activePage: number) => {
//   setCheckBoxAllState((prev) => !prev);
//
//   const checkBox = document.querySelectorAll('.checkBox label > input');
//   const checkLi = document.querySelectorAll('.checkBox');
//
//
//   const checkBoxData: any = [];
//
//   setCheckBoxState((prev: any) => {
//     const newState = [...prev];
//     newState[activePage - 1] = {page: activePage, checked: Array(tableData.length).fill(!checkBoxAllState)};
//     return newState;
//   });
//
//
//   checkBox.forEach((box: any, index: number) => {
//     box.checked = !checkBoxAllState;
//     if (!checkBoxAllState) {
//       checkBoxData[index] = checkLi[index].getAttribute('data-value');
//     }
//   });
//
//   setCheckedBoxValue((prev: any) => {
//     const updatedValue = [...prev];
//     updatedValue[activePage - 1].data = checkBoxData;
//     return updatedValue;
//   })
// }
//
// // !  단일 체크 박스 클릭
// const onCheckBox = (index: number) => {
//   console.log(checkBoxState[activePage - 1]);
//   setCheckBoxState((prev: any) => {
//     const newState = [...prev];
//     newState[activePage - 1].checked[index] = !newState[activePage - 1].checked[index];
//     if (newState[activePage - 1].checked.every((value: boolean) => value)) {
//       setCheckBoxAllState(true);
//     } else {
//       setCheckBoxAllState(false);
//     }
//     return newState
//   })
//
// }
