import React, {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";
import {ScrollToPlugin} from "gsap/ScrollToPlugin"
import {useModal} from "../useModal.tsx";
import {useMutationMessageSend} from "../../mutations/excelMessenger/useMutationMessageSend";
import {sendMessageValidation} from "../../../../apis/utils/sendMsgValidation.ts";
import {useFetch} from "../../../../apis/utils/reactQuery.ts";
import {useMutationMessageEstimate} from "../../mutations/excelMessenger/useMutationMessageEstimate.ts";
import {IFileTypes} from "../useDragDropFile.ts";

gsap.registerPlugin(ScrollToPlugin)

// ? 발신 번호 response
interface callingNumberListType {
  callback: string;
  phnId: string;
  regMethod: string;
  rsrvdId: string;
  usedDttm: string;
  verifiedYn: string;
  wrtDttm: string;
}

interface IUseGrid {
  items: never[]
  fileInputRef: React.RefObject<HTMLInputElement>
  setFiles: React.Dispatch<React.SetStateAction<IFileTypes[]>>
  files: IFileTypes[]
}

export const useGrid = ({items, fileInputRef, setFiles, files}: IUseGrid) => {

  const gridRef = useRef<any>(null);
  const [instance, setInstance] = useState(gridRef.current?.getInstance());
  const [gridData, setGridData] = useState<any>([{}]);
  const editCellRef = useRef({rowKey: null, columnName: null});
  const [popupToggle, setPopupToggle] = useState<boolean>(false);
  const [selectedCallback, setSelectedCallback] = useState<string>('');

  // ? 메시지 전송
  const {sendMutation, sendLoading} = useMutationMessageSend({setPopupToggle});

  // ? 결제 정보
  const {estimateData, estimateMutate} = useMutationMessageEstimate();

  // ? 사용자 발신번호 리스트
  const {data: callingNumberList, isLoading: callbackLoading} = useFetch<callingNumberListType[]>('/message/getCallbackList', undefined, {
    retry: false,
  });

  const [manualState, setManualState] = useState<boolean>(false);
  const {warningModal} = useModal();

  // ? 파일 첨부 및 초기화 트리거
  useEffect(() => {
    if (instance) {
      if ((items.length > 0) && (files.length > 0)) {
        const transformItems = items.map((el: any, index: number) => {
          if (!el) return null;
          el.rowKey = index;
          el.sortKey = index;
          return el;
        });
        instance.resetData(transformItems);
        setGridData((prev: any) => transformItems);
      } else {
        instance.resetData([{}]);
        setGridData([{}]);
      }
    }
  }, [items, files]);


  // ? 발신 번호 리스트
  useEffect(() => {
    if (callingNumberList && !callbackLoading) {
      setSelectedCallback(callingNumberList[0].callback);
    }
  }, [callingNumberList, callbackLoading]);

  // ? 엑셀 메신저 이벤트 트리거 생성
  useEffect(() => {
    setInstance((prev: any) => gridRef.current.getInstance());
    const instance = gridRef.current.getInstance();

    instance.on("mousedown", (e: any) => {
      if (instance.getData().length === 1 && e.targetType === 'columnHeader') {
        instance.appendRow();
        const rowKey = instance.getData()[1]?.rowKey || 0;
        instance.addRowClassName(rowKey, 'my-row-class');
      }
    });

    instance.on("click", (e: any) => {
      const myRowClass = document.getElementsByClassName('my-row-class');
      if (myRowClass.length > 0) {
        const rowKey = instance.getData()[1]?.rowKey || 0;
        instance.removeRow(rowKey);
      }
    });
    instance.on("drag", (e: any) => {
      const myRowClass = document.getElementsByClassName('my-row-class');
      if (myRowClass.length > 0) {
        const rowKey = instance.getData()[1]?.rowKey || 0;
        instance.removeRow(rowKey);
      }
    })

    instance.on('focusChange', (ev: any) => {
      const {rowKey, columnName} = ev;
      editCellRef.current = {rowKey, columnName};
    });

    // ? row 를 복사붙여넣기 및 수정될 때 발생하는 트리거 함수 ()
    // ? event.origin 이 cell 일경우 하나의 로우를 수정했을때 paste 는 복사 붙여넣기 했을 때
    instance.on('afterChange', (event: any) => {
      const rowKey = event?.changes[0]?.rowKey;
      const selectionRange = [instance?.getSelectionRange()?.start[1], instance?.getSelectionRange()?.end[1]];
      const groupedData = event?.changes?.reduce((acc: any, obj: any) => {

        const {rowKey} = obj;
        // ? acc 배열에서 해당 rowKey에 대한 객체 찾기
        let existingRow = acc.find((row: any) => row.rowKey === rowKey);

        if (!existingRow) {
          // ? 해당 rowKey에 대한 객체가 없으면 새로 생성
          existingRow = {
            rowKey,
            _attributes: {
              rowNum: rowKey + 1,
              className: {
                row: [],
                column: {},
              },
            },
          };
          acc.push(existingRow);
        }

        existingRow[obj.columnName] = obj.value;
        return acc;
      }, []);

      // ? column 모두 선택 했을시
      if (event.origin === 'paste' && rowKey === 0 && JSON.stringify(selectionRange) === JSON.stringify([0, 2])) {
        // if (event.origin === 'paste') {
        instance.setRows(groupedData);
        setGridData(instance.getData());
      }
    });

  }, []);

  // ? 발신 번호 함수
  const handleChangeCallback = (event: any) => {
    setSelectedCallback(event.target.value);
  };


  // ? 전송 확인 팝업 표출 함수
  const handlerPopup = () => {
    const {rowKey, columnName} = editCellRef.current;
    if (rowKey !== null && columnName !== null) {
      instance.finishEditing(rowKey, columnName);
    }
    const data = instance.getData();

    const sendDataArr = data?.map((item: any) => ({
      rowKey: String(item.rowKey),
      receiver: item?.receiver,
      message: item?.message,
      sendDateTime: item?.sendDateTime
    }));

    const msgCheckState = sendMessageValidation(sendDataArr);
    if (typeof msgCheckState === "boolean" && msgCheckState) {
      estimateMutate({selectedCallback, sendDataArr})
      setPopupToggle((prev) => !prev);
      setGridData(data);
    } else {
      warningModal('전송', msgCheckState, true);
    }
  }

  // ? 엑셀 메신저 초기화
  const handlerReset = () => {
    instance.resetData([{}]);
    setGridData([{}]);
    if(fileInputRef.current) {
      fileInputRef.current.value = ""
      setFiles((prev) => []);
    }
  }

  // ? 로우 추가 함수
  const onClickAddRow = () => {
    instance.appendRow({});
    const data = instance.getData();
    setGridData(data);
  };

  // ? 로우 삭제 함수
  const onClickRemoveRow = () => {

    // ? 삭제 하려는 로우가 현재 모든 로우의 갯수와 동일시 reset
    if (instance.getCheckedRows().length === instance.getData().length) {
      instance.resetData([{}]);
    } else {
      instance.removeRows(instance.getCheckedRowKeys());
    }
  }

  // ? 메세지 전송 함수
  const onClickSendMessenger = () => {
    if (gridData) {
      const sendDataArr = gridData?.map((item: any) => ({
        rowKey: String(item.rowKey),
        receiver: item?.receiver,
        message: item?.message,
        sendDateTime: item?.sendDateTime
      }));

      const msgCheckState = sendMessageValidation(sendDataArr);
      if (typeof msgCheckState === "boolean" && msgCheckState) {
        sendMutation({selectedCallback, sendDataArr})
      } else {
        setPopupToggle(false);
        warningModal('전송', msgCheckState, true);
      }
    }
  }

  // ? 설명서 팝업창
  const handlerManual = () => {
    setManualState((prev) => !prev);
  }
  // ? toast 컬럼( header ) 설정
  const columns = [];
  columns.push(
    {name: 'receiver', header: '휴대폰 번호', editor: 'text', resizable: true, sortable: true, align: "center" as const, ellipsis: false},
    {name: 'message', header: '내용', editor: 'text', resizable: true, sortable: true, align: "center" as const, ellipsis: false},
    {name: 'sendDateTime', header: '예약시간', editor: 'text', resizable: true, sortable: true, align: "center" as const, ellipsis: true},
  );


  return {
    onClickRemoveRow,
    setPopupToggle,
    sendLoading,
    popupToggle,
    gridRef,
    columns,
    onClickAddRow,
    onClickSendMessenger,
    gridData,
    handlerPopup,
    handlerReset,
    handlerManual,
    manualState,
    selectedCallback,
    handleChangeCallback,
    callingNumberList,
    estimateData
  }

}