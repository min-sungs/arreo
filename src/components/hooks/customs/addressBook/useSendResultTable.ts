import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {resultDetailParamsRecoil, transTableDataRecoil} from '../../../../recoil/atoms/sendResult/sendResult.ts';
import { useMutationSaveMsgStorageDetail } from '../../mutations/useMutationSaveMsgStorageDetail.ts';
import {
  messageSendDataRecoil,
  messageSendViewListRecoil,
  reSendMsgToggleRecoil,
} from '../../../../recoil/atoms/messageSend/messageSend.ts';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import { useMutationReSend } from '../../mutations/sendResult/useMutationReSend.ts';
import {deleteTransferMsg} from "../../../../apis/api/transferResultApi.ts";

type SearchData = {
  prepayPayNo: string;
  pageSize: number;
  pageNumber: number;
  keywordValue: string | null;
  keyword: string | null;
  rsltVal: string | null;
  callback: string;
};

interface IUseSendResultTable {
  setSearchAllValue: React.Dispatch<React.SetStateAction<SearchData>>;
  lastPage: number;
  activePage: number;
  tableData: any;
  count: number;
  pageSize: number;
  setTableData: React.Dispatch<any>
}

export const useSendResultTable = ({
  setSearchAllValue,
  setTableData,
  lastPage,
  activePage,
  tableData,
  count,
  pageSize,
}: IUseSendResultTable) => {
  const queryClient = useQueryClient();
  const [leftSelectSwitch, setLeftSelectSwitch] = useState(false);
  const [rightSelectSwitch, setRightSelectSwitch] = useState(false);

  // 검색 내용 STATE
  const [keywordState, setKeywordState] = useState<string>('');
  // 검색 조건 STATE
  const [keywordValueState, setKeywordValueState] = useState<any>({ label: '연락처', value: 'number' }); // LeftState
  // 상태 조건 STATE
  const [rsltValState, setRsltValState] = useState<any>({ label: '전체', value: null }); // LeftState
  // callback, prePayNo RECOIL
  const [resultDetailParamsState,setResultDetailParamsState] = useRecoilState(resultDetailParamsRecoil);
  // 검색 조건 배열
  const keywordValueArr = [{ label: '연락처', value: 'number' }];
  // 상태 조건 배열
  const rsltValArr = [
    { label: '전체', value: null },
    { label: '성공', value: '-100' },
    { label: '전송 중', value: '99' },
    { label: '실패', value: '100' },
  ];
  const [transTableData, setTransTableData] = useRecoilState(transTableDataRecoil)
  // 전송결과 리스트 삭제
  const {mutate:mutationDelete} = useMutation(() => deleteTransferMsg({prepayPayNo: resultDetailParamsState.prepayPayNo,callback: resultDetailParamsState.callback}),{
    onSuccess: () => {
      let filterPrevState:any = [];
      let removeItemIndex:number = 0;
      setTransTableData((prevState:any) => {
        removeItemIndex = prevState.findIndex((item:any) => item.prepayPayNo === resultDetailParamsState.prepayPayNo);
        filterPrevState = prevState?.filter((item:any,index:number) => item.prepayPayNo !== resultDetailParamsState.prepayPayNo);
        prevState?.filter((item:any) => item.prepayPayNo !== resultDetailParamsState.prepayPayNo);
        return prevState?.filter((item:any) => item.prepayPayNo !== resultDetailParamsState.prepayPayNo);
      })
      if(filterPrevState.length > 0) {
        setResultDetailParamsState({prepayPayNo:filterPrevState[removeItemIndex-1].prepayPayNo, callback: filterPrevState[removeItemIndex-1].callback })
      }else{
        setResultDetailParamsState({prepayPayNo: "", callback: ""})
      }
    }
  });

  // 장기 보관함 저장 Mutation
  const { mutate: mutationSaveMsgStorageDetail, isSaveLoading } = useMutationSaveMsgStorageDetail({prepayPayNo: resultDetailParamsState.prepayPayNo, callback: resultDetailParamsState.callback});

  /* 전송결과 리스트 삭제 Hook */
  const deleteMsg = () => {
    mutationDelete();
  }
  /* 장기 보관함 저장 Hook */
  const saveMsgStorage = () => {
    mutationSaveMsgStorageDetail();
  };
  // 검색 조건 변경 함수
  const onChangeKeywordValue = (item: any) => {
    setKeywordValueState(item);
  };
  // 상태 조건 변경 함수
  const onChangeRsltValue = (item: any) => {
    setRsltValState(item);
    setSearchAllValue((prev: SearchData) => {
      const updatedData = { ...prev };
      updatedData.rsltVal = item.value;
      updatedData.pageNumber = 0;
      return updatedData;
    });
  };
  // 검색 버튼 클릭 or 엔터
  const onClickSearchButton = (e: any) => {
    e.preventDefault();
    setSearchAllValue((prev: SearchData) => {
      const updatedData = { ...prev };
      updatedData.keyword = keywordState === '' ? null : keywordState;
      updatedData.keywordValue = keywordValueState.value;
      updatedData.rsltVal = rsltValState.value;
      updatedData.pageNumber = 0;

      return updatedData;
    });
  };

  return {
    deleteMsg,
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
    rsltValState,
    rsltValArr,
    onChangeRsltValue,
    saveMsgStorage,
    isSaveLoading,
  };
};

// ! 내 피땀 눈물
// 체크 박스 전체 선택 STATE
// const [checkBoxAllState, setCheckBoxAllState] = useState<boolean>(false);
// 체크 박스 단일 선택 STATE
// const [checkBoxState, setCheckBoxState] = useState<any>([{index: 1, checked: Array(10).fill(false)}]);
// 체크 박스 선택된 값 VALUE ARR STATE
// const [, setCheckedBoxValue] = useState<any>([{page: 1, data: []}]);

// 체크 박스에 관련된 STATE  초기화
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
// }, [lastPage, resultDetailParamsState, count, pageSize]);

// Active Page 가 달라질 때 전체 체크 박스 STATE 변경
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
// const onCheckBox = (item:any,index: number) => {
//   console.log(item);
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
// }
