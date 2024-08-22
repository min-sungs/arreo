/* eslint-disable */
import React, {useEffect, useState} from "react";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {validateAddressRow} from "../../utils/AddressUtils.ts";
import {getMaintableList, patchEditDetail} from "../../../../apis/api/addressApis.ts";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {mainTableResetRecoil, searchTextState, selectValueState} from "../../../../recoil/atoms/addressList.ts";
import {messageSendDataRecoil, messageSendViewListRecoil, recentHistoryRecoil} from "../../../../recoil/atoms/messageSend/messageSend.ts";
import {formatPhoneNumber, removeHyphens} from "../../../../apis/utils/formats/phoneNumberFormatUtil.ts";
import {calScrollEvent} from "../../../../apis/hooks/useScrollInfinity.ts";

interface IUseToastAddressBook {
  selectedItems?: Set<string>
  selectedKey?: Set<string>
  checkedGroup: number | null
  onCheckedTableList: (checkedList: any) => void
  gridRef: React.MutableRefObject<any>
  groupArr: any
}

interface IReturnGridColumn {
  name: string,
  header: string,
  editorType: string
}

export const useToastAddressBook = ({
                                      gridRef, selectedItems, selectedKey, checkedGroup,
                                      groupArr: groupList,
                                      onCheckedTableList
                                    }: IUseToastAddressBook) => {
  const queryClient = useQueryClient();
  const [clickTimeout, setClickTimeout] = useState<any>(null); // 클릭, 더블클릭 제어
  const [clickAllowed, setClickAllowed] = useState<boolean>(true); // 클릭, 더블클릭 제어
  const [gridInstance, setInstance] = useState(gridRef.current?.getInstance());
  const [gridData, setGridData] = useState<any>();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState(0);
  const [gridHeight, setGridHeight] = useState<number>();
  const [keywordValue, setKeywordValue] = useRecoilState(selectValueState); // 검색항목
  const [keyword, setKeyword] = useRecoilState(searchTextState); // 검색어
  const mainTableResetState = useRecoilValue(mainTableResetRecoil);
  const setMainTableResetState = useSetRecoilState(mainTableResetRecoil); // 현재 mainTable 데이터를 초기화 하기 위함
  const setMessageSendDataRecoil = useSetRecoilState(messageSendDataRecoil); // 전송에 필요한 recoil
  const messageSendDataState = useRecoilValue(messageSendDataRecoil); // 전송에 필요한 recoil
  const messageSendViewListState = useRecoilValue(messageSendViewListRecoil);
  const setMessageSendViewListRecoil = useSetRecoilState(messageSendViewListRecoil); // 전송 수신인 리스트 표출에 필요한 Recoil
  const [checkedCellState, setCheckedCellState] = useState<any>(null); // 체크되어있는  row
  const setRecentHistoryState = useSetRecoilState(recentHistoryRecoil);
  let checkToggle: boolean = true;

  const updateDataFormat = (formatRow: any) => {
    formatRow.genderFlag = formatRow.genderFlag === "남자" ? 0 : 1;
    if (formatRow.keyCommNo) formatRow.keyCommNo = removeHyphens(formatRow.keyCommNo);
    if (formatRow.number015) formatRow.number015 = removeHyphens(formatRow.number015);

    return formatRow;
  }

  const resetData = () => {
    setCurrentPage(0);
    setKeywordValue("");
    setKeyword("");
    setTotalPages(0);
    queryClient.removeQueries(["newBuddyList"]);
    queryClient.invalidateQueries(["newBuddyList", checkedGroup, 0, "", ""])
  }

  useEffect(() => {
    resetData();
  }, [checkedGroup]);

  useEffect(() => {
    if (mainTableResetState) {
      resetData();
      setMainTableResetState(false);
    }
  }, [mainTableResetState]);

  useEffect(() => {
    setCurrentPage(0);
    setTotalPages(0);
  }, [checkedGroup, keywordValue, keyword]);

  // 주소록 수정
  const {mutate} = useMutation(patchEditDetail);
  const queryKey = ["newBuddyList", checkedGroup, currentPage, keywordValue, keyword];
  const {data, isLoading} = useQuery(queryKey, () => getMaintableList({currentPage, groupSeqNo: checkedGroup, keywordValue, keyword}))

  const tableRef = document.querySelector('.tui-grid-rside-area > div.tui-grid-body-area');
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [scrollTop, setScrollTop] = useState<number>(0);
  const [clientHeight, setClientHeight] = useState<number>(0);
  useEffect(() => {
    const handleScrollState = (event:any) => {
      // 스크롤 이벤트가 발생했을 때 실행되는 함수
      setScrollHeight(event?.currentTarget.scrollHeight);
      setScrollTop(event?.currentTarget.scrollTop);
      setClientHeight(event?.currentTarget.clientHeight);
    }

    if(tableRef){
      document.querySelector('.tui-grid-rside-area > div.tui-grid-body-area')?.addEventListener('scroll', (event:any) => handleScrollState(event));
    }
    return () => {
      document.querySelector('.tui-grid-rside-area > div.tui-grid-body-area')?.removeEventListener('scroll',handleScrollState);
    }
  }, [tableRef]);
  useEffect(() => {
    const handleResize = () => {
      const heightEl = document.getElementById('addressGrpList') as HTMLElement;
      const height = heightEl.clientHeight - 60;
      setGridHeight(height);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Grid 설정
  useEffect(() => {
    // 체크 박스 유지
    const initCheckRow = (data: any) => {
      checkToggle = false;
      const checkedRowsBuddySeqNo = messageSendViewListState.buddyViewList.buddyList.map((el: any) => el.buddySeqNo);
      for (const checkedRowSeqNo of checkedRowsBuddySeqNo) {
        const checkedRow = data?.content?.find((row: any) => row.buddySeqNo === checkedRowSeqNo);
        if (checkedRow) {
          gridInstance.check(checkedRow.rowKey);
        }
      }
      checkToggle = true;
    }

    if (gridRef.current && gridInstance && data && !isLoading) {
      setTotalPages(data.totalPages);
      const existingData = gridInstance.getData();
      data.content.map((list: any) => {
        list.genderFlag = list.genderFlag === "0" ? "남자" : list.genderFlag === "1" ? "여자" : null;
        if (list.keyCommNo) list.keyCommNo = formatPhoneNumber(list.keyCommNo);
        if (list.number015) list.number015 = formatPhoneNumber(list.number015);
        if (list.homeNumber) list.homeNumber = formatPhoneNumber(list.homeNumber);
      });
      if (existingData && data && currentPage !== 0) {
        const newData = [...existingData, ...data.content];
        gridInstance.appendRows(data.content);
        setGridData(newData);
      } else if (currentPage === 0) {
        gridInstance.resetData(data.content);
        setGridData(data.content);
      }
      initCheckRow(data);
    }
  }, [data?.content, isLoading, gridInstance]);

  useEffect(() => {
    setInstance(gridRef.current.getInstance())
  }, []);

  // 테이블 이벤트
  useEffect(() => {


    const instance = gridRef.current.getInstance();
    instance.on("checkAll", (e: any) => {
      onCheckedTableList(instance.getCheckedRows());
    })

    instance.on('beforeExport', (e: any) => {
      e.stop();
    })

    instance.on("beforeChange", (e: any) => {
      const beforeRow = instance.getRow(e.changes[0].rowKey);
      const updateRow = {...beforeRow};
      const changeColumn: any = {
        [e.changes[0].columnName]: e.changes[0].nextValue
      };
      const updatedRow = {...updateRow, ...changeColumn};
      // validation 검증
      if (!validateAddressRow(updatedRow)) {
        e.stop();
      } else if (groupList) {

        const filterList = groupList?.filter((el: any) => {
          return el.groupNm === updatedRow.groupNm;
        }).map((el: any) => el.groupSeqNo);
        updatedRow.groupSeqNo = filterList[0];
        let formatRow = {...updatedRow};
        formatRow = updateDataFormat(formatRow);
        mutate(formatRow, {
          onSuccess: () => {
            queryClient.invalidateQueries(['groupList2']);
          }
        });
      }
    });

  }, [groupList]);

  // Column 생성 함수
  const returnGridColumn = ({name, header, editorType}: IReturnGridColumn) => {
    let column;
    let listItems;
    const formatName = name === 'groupSeqNo' ? 'groupNm' : name;

    switch (header) {
      case "성별" :
        listItems = [{text: "남자", value: "남자"}, {text: "여자", value: "여자"}];
        break;
      case "그룹" :
        listItems = groupList?.map((el: any) => {
          return {text: el.groupNm, value: el.groupNm}
        });
        break;
      default:
        break;
    }

    if (editorType === 'select') {
      column = {
        name: formatName,
        header,
        editor: {
          type: editorType, options: {
            listItems
          },
        },
        resizable: true, sortable: true, align: "center" as const,
      }
    } else {
      column = {name: formatName, header, editor: editorType, resizable: true, sortable: true, align: "center" as const};
    }
    return column;
  }

  // ? 테이블 헤더 변경
  useEffect(() => {

    const selectColumn = ['그룹', '성별'];
    const column: any[] = [];

    if (selectedItems && gridInstance && selectedKey) {
      const selectedKeyArray = Array.from(selectedKey);
      const selectedItemsArray = Array.from(selectedItems);

      selectedItemsArray.forEach((el, index) => {
        if (selectColumn.includes(el)) {
          column.push(returnGridColumn({name: selectedKeyArray[index], header: el, editorType: 'select'}));
        } else {
          column.push(returnGridColumn({name: selectedKeyArray[index], header: el, editorType: 'text'}));
        }
      })
    }
    gridInstance?.setColumns(column);
  }, [selectedItems, gridInstance, selectedKey, groupList])
  
  useEffect(() => {
    if(calScrollEvent({scrollHeight,scrollTop,clientHeight})){
      if (currentPage < totalPages && !isLoading) {
        setCurrentPage((prev) => prev + 1);
      }
    }
  }, [scrollHeight,scrollTop,clientHeight]);

  // 셀 클릭
  const onClickCell = (e: any) => {
    if(e.columnName === '_checked'){
      e.stop();
      return;
    }
    setClickTimeout(setTimeout(() => {
      if(!clickAllowed) return;
      const row = gridInstance.getRow(e.rowKey);
      if (row) {
        setCheckedCellState(e.rowKey);
        const body: any = document.querySelector(".tui-grid-container");
        if (body.classList.contains("active") && e.rowKey === checkedCellState) {
          setRecentHistoryState((prevState: any) => {
            return {
              ...prevState,
              number: "all",
              name: ""
            }
          });
          body.classList.remove("active");
        } else {
          setRecentHistoryState((prevState: any) => {
            return {
              ...prevState,
              number: row.keyCommNo,
              name: row.buddyNm
            }
          });
          body.classList.add("active");
        }
      }
    }, 300))
  }

  const onDBClickCell = () => {
    // setClickAllowed(false);
    clearTimeout(clickTimeout);
    // setTimeout(()=>setClickAllowed(true),300);
  }

  // 체크 풀기
  const onUnCheckGrid = (e: any) => {
    if (e.rowKey === undefined) return;
    const checkedRow = gridInstance.getRow(e.rowKey);
    setMessageSendViewListRecoil((prevState: any) => {
      const updatedBuddyList = [
        ...prevState.buddyViewList.buddyList,
      ];
      const updatedBuddViewList = {
        ...prevState.buddyViewList,
        buddyList: updatedBuddyList.map((el: any) => el).filter((el: any) => (el.groupSeqNo !== checkedRow.groupSeqNo || el.buddySeqNo !== checkedRow.buddySeqNo))
      }
      const updatedMessageSendViewListRecoil = {
        ...prevState,
        buddyViewList: updatedBuddViewList
      }
      return updatedMessageSendViewListRecoil;
    });

    setMessageSendDataRecoil((prevState: any) => {
      const updatedBuddySeqList = [
        ...prevState.buddySeqList.map((el: any) => el).filter((el: any) => (el !== checkedRow.buddySeqNo))
      ]
      const updatedMessageSendDataRecoil = {
        ...prevState,
        buddySeqList: updatedBuddySeqList
      }
      return updatedMessageSendDataRecoil
    })
  }

  // 모든 체크박스 체크 풀기
  const onUnCheckAllGrid = () => {
    const unCheckedRows = gridInstance.getData();
    const unCheckedBuddySeqNo = unCheckedRows.map((el: any) => el.buddySeqNo); // 전체 체크 해제된 buddySeqNo 배열
    const buddySeqList: any = [...messageSendDataState.buddySeqList]; // 기존에 체크 되어 있던 buddySeqNo 배열
    const buddyViewList: any = [...messageSendViewListState.buddyViewList.buddyList]; // 기존에 체크 되어 있던 viewList 배열
    let formatSeqList: any = [];
    let formatViewList: any = [];
    if (buddySeqList) {
      formatSeqList = buddySeqList.map((el: any) => el).filter((el: any) => !unCheckedBuddySeqNo.includes(el)); // 해제된 buddySeqNo 을 이용해 기존 배열에서 해제된 값 제거
      formatViewList = buddyViewList.map((el: any) => el).filter((el: any) => !unCheckedBuddySeqNo.includes(el.buddySeqNo));
    }
    setMessageSendDataRecoil((prevState: any) => {
      return {...prevState, buddySeqList: formatSeqList};
    })
    setMessageSendViewListRecoil((prevState: any) => {
      return {
        ...prevState,
        buddyViewList: {
          buddyGroupName: prevState.buddyViewList.buddyGroupName,
          buddyList: formatViewList
        }
      };
    })
  }

  // 체크박스 체크
  const onCheckAllGrid = (e: any) => {
    if (checkToggle) {
      const checkedRows = e.instance.getCheckedRows();
      let formatSeqList: any = [];
      let formatViewList: any = [];
      const buddySeqList: any = [...messageSendDataState.buddySeqList]; // 기존에 체크 되어 있던 배열
      if (buddySeqList) {
        const notInCheckedRows = checkedRows.map((el: any) => el).filter((el: any) => !buddySeqList.includes(el.buddySeqNo)); // 전체 체크 했을 때 기존에 체크 되어있던 데이터 제거
        formatViewList = messageSendViewListState.buddyViewList.buddyList.concat(notInCheckedRows.map((el: any) => {
          return {buddyNm: el.buddyNm, keyCommNo: el.keyCommNo, groupSeqNo: el.groupSeqNo, buddySeqNo: el.buddySeqNo, rowKey: el.rowKey}
        }));
        formatSeqList = messageSendDataState.buddySeqList.concat(notInCheckedRows.map((el: any) => el.buddySeqNo));
      }
      setMessageSendDataRecoil((prevState: any) => {
        return {...prevState, buddySeqList: formatSeqList};
      })
      setMessageSendViewListRecoil((prevState: any) => {
        return {
          ...prevState,
          buddyViewList: {
            buddyGroupName: prevState.buddyViewList.buddyGroupName,
            buddyList: formatViewList
          }
        };
      });
    }
  }


  return {
    onClickCell,
    isLoading,
    gridHeight,
    gridData,
    onUnCheckGrid,
    onCheckAllGrid,
    onUnCheckAllGrid,
    onDBClickCell
  }
}


// ! 드래그 사용할 때 필요함
// instance.on("mousedown", (e: any) => {
//   if (instance.getData().length === 1 && e.targetType === 'columnHeader') {
//     instance.appendRow();
//     const rowKey = instance.getData()[1]?.rowKey || 0;
//     instance.addRowClassName(rowKey, 'my-row-class');
//   }
// });
//
// instance.on("click", (e: any) => {
//   const myRowClass = document.getElementsByClassName('my-row-class');
//   if (myRowClass.length > 0) {
//     const rowKey = instance.getData()[1]?.rowKey || 0;
//     instance.removeRow(rowKey);
//   }
// });
//
// instance.on("drag", (e: any) => {
//   const myRowClass = document.getElementsByClassName('my-row-class');
//   if (myRowClass.length > 0) {
//     const rowKey = instance.getData()[1]?.rowKey || 0;
//     instance.removeRow(rowKey);
//   }
// });