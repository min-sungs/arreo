import React, {useCallback, useState} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useMutationDeleteList} from "../../mutations/addressBook/useMutationDelete.ts";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {messageSendDataRecoil, messageSendViewListRecoil} from "../../../../recoil/atoms/messageSend/messageSend.ts";


interface IUseDeleteTableList {
  gridRef: React.MutableRefObject<any>
}

export const useDeleteTableList = ({gridRef}: IUseDeleteTableList) => {
  const queryClient = useQueryClient();
  const [, setCheckedTableList] = useState<any>([]);
  const {mutate, isLoading:deleteAddressLoading} = useMutation(useMutationDeleteList)
  const [messageSendViewList,setMessageSendViewList] = useRecoilState(messageSendViewListRecoil);
  const setMessageSendData = useSetRecoilState(messageSendDataRecoil);
  // setCheckedTableList
  const onCheckedTableList = useCallback((checkedList: any) => {
    setCheckedTableList(checkedList)
  },[])

  // 테이블 리스트 삭제
  const onDeleteTableList = useCallback(() => {
    const processedData = messageSendViewList.buddyViewList.buddyList.map((el:any) => el.buddySeqNo);
    const rowKeys = messageSendViewList.buddyViewList.buddyList.map((el:any) => el.rowKey);

    mutate(processedData, {
      onSuccess: () => {
        if(!gridRef) return ;
        rowKeys.map((el: any) => {
          gridRef?.current?.getInstance()?.removeRow(el);
          return ""
        })

        queryClient.invalidateQueries(['groupList2']);
        queryClient.invalidateQueries(['newBuddyList']);

        setMessageSendData((prevState:any) => {
          return {...prevState, buddySeqList: []}
        })

        setMessageSendViewList((prevState:any) => {
          return {
            ...prevState,
            buddyViewList: {
              buddyGroupName: "개별 추가 수신인 목록",
              buddyList: []
            }
          }
        })
      }
    });
  },[messageSendViewList]);


  return {
    onCheckedTableList,
    onDeleteTableList,
    deleteAddressLoading
  }
}


