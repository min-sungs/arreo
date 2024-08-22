/* eslint-disable */
import {useQuery, useQueryClient} from '@tanstack/react-query';
import {useEffect, useRef, useState} from 'react';

import {useMutationStDelete} from '../../../mutations/useMutationStDelete';
import {getReserveSendList} from '../../../../../apis/api/stContentApis';
import {useModalHook} from "../../../../commons/modals/useModalHook.tsx";
import {throttle} from "lodash";
import {useRecoilState} from "recoil";
import {scheduleDetailParamsRecoil} from "../../../../../recoil/atoms/sendResult/sendResult.ts";
import {calScrollEvent} from "../../../../../apis/hooks/useScrollInfinity.ts";

interface MessageData {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface ApiResponse {
  data: MessageData[];
}

/**
 * 전송/예약 관리 => 예약전송 관리 페이지
 */
export const useSendReservation = () => {
  const queryClient = useQueryClient();
  const pageSize: number = 10;
  const listRef = useRef<any>(null);
  const [totalPage, setTotalPage] = useState(10);
  const [tableData, setTableData] = useState<any>([{}]);
  const [currentPage, setCurrentPage] = useState(0);
  const [checkBoxState, setCheckBoxState] = useState<{ prepayPayNo: string, callback: string }[]>([]);
  const [searchSelectState, setSearchSelectState] = useState<{ value: string, label: string }>({value: 'number', label: '연락처'});
  const [searchInputState, setSearchInputState] = useState<string>("");


  const [scheduleDetailParamsState, setScheduleDetailParamsState] = useRecoilState(scheduleDetailParamsRecoil);

  const [searchAllValue, setSearchAllValue] = useState<any>({currentPage, pageSize, searchCondition: null, keyword: null});


  const {confirmModal, warningModal} = useModalHook();


  // 페이싱네이션 - 페이지 변경
  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };
  // 예약전송 삭제 Mutation
  const {mutationDelete, isDeleteLoading} = useMutationStDelete();

  // 예약전송 조회페이지 리스트 조회 Query
  const queryKey = ['getReserveSendList', searchAllValue];
  const {data, isLoading, isError} = useQuery(
    queryKey,
    () => getReserveSendList(searchAllValue),
    {
      staleTime:6000,
      refetchInterval: 6000,
      refetchIntervalInBackground: true,
      refetchOnWindowFocus: false,
    },
  );

  // SCROLL INFINITY 함수
  const onScrollHandler = throttle((e: any) => {
    const container = listRef.current;
    if (container && totalPage !== searchAllValue.currentPage && !isLoading) {
      const {scrollTop, scrollHeight, clientHeight} = container;
      if (calScrollEvent({scrollTop,clientHeight,scrollHeight})) {
        setSearchAllValue((prev: any) => {
          const updatedData = {...prev};
          updatedData.currentPage = prev.currentPage + 1;
          return updatedData;
        })
      }
    }
  }, 500);


  useEffect(() => {
    if (!isLoading && !isError && data) {
      if (searchAllValue.currentPage !== 0) {
        setTableData((prev: any) => [...prev, ...data.content]);
      } else {
        setScheduleDetailParamsState({prepayPayNo: data.content[0]?.prepayPayNo ?? "", callback: data.content[0]?.callback ?? ""})
        setTableData(data.content);
      }
      setTotalPage(data.totalPages);
    }
  }, [data, isLoading, isError]);

  // 선택된 리스트 예약 취소 함수
  const onCheckedListDelete = (e: any) => {
    e.preventDefault();
    if (checkBoxState.length === 0) {
      warningModal('예약전송 취소', '예약전송 취소하실 메세지를 선택해주세요.', true);
    } else {
      // confirmModal(
      //   async () => {
      mutationDelete({deleteRequests: checkBoxState}, {
        onSuccess: () => {
          const removeData = tableData.filter((item: any) => !checkBoxState.some(value => value.prepayPayNo === item.prepayPayNo && value.callback === item.callback));
          setCheckBoxState([]);
          setTableData(removeData);
          queryClient.invalidateQueries(['getReserveSendList']);
          queryClient.invalidateQueries(['getReserveSendDetail']);
          if (!removeData[0]?.prepayPayNo) {
            // 예약 취소를 한 뒤 데이터가 없을 경우
            setScheduleDetailParamsState({prepayPayNo: "", callback: ""});
          } else {
            // 맨 첫번째 데이터
            const prepayPayNo = removeData[0].prepayPayNo;
            const callback = removeData[0].callback;
            setScheduleDetailParamsState({prepayPayNo, callback});
          }
        }
      });
    }
    // ,
    //     '예약전송 취소',
    //     '선택하신 메세지를 취소하시겠습니까?',
    //     true,
    //   );
  };
  // 단일 리스트 예약 취소 함수
  const onDelete = ({deleteRequests}: any) => {
    mutationDelete({deleteRequests}, {
      onSuccess: () => {
        setCheckBoxState([]);
        const removeData = tableData.filter((el: any) => deleteRequests[0].prepayPayNo !== el.prepayPayNo);
        setTableData(removeData);
        queryClient.invalidateQueries(['getReserveSendList']);
        queryClient.invalidateQueries(['getReserveSendDetail']);
        if (!removeData[0]?.prepayPayNo) {
          // 예약 취소를 한 뒤 데이터가 없을 경우
          setScheduleDetailParamsState({prepayPayNo: "", callback: ""});
        } else {
          // 맨 첫번째 데이터
          const prepayPayNo = removeData[0].prepayPayNo;
          const callback = removeData[0].callback;
          setScheduleDetailParamsState({prepayPayNo, callback});
        }
      }
    });
  }

  // 선택 리스트 ACTIVE 클래스 추가
  const handleActiveList = (prepayPayNo: string, callback: string) => {
    setScheduleDetailParamsState({prepayPayNo, callback})
  }
  // 체크 박스 STATE 변경
  const handleCheckBox = (prepayPayNo: string, callback: string) => {
    setCheckBoxState((prevState: any) => {
      if (prevState.some((obj: any) => obj.prepayPayNo === prepayPayNo)) {
        return prevState.filter((el: any) => (el.prepayPayNo !== prepayPayNo));
      }
      return [...prevState, {prepayPayNo, callback}]
    })
  }
  // 검색 SELECT 값 변경
  const handleSearchSelect = (value: { label: string, value: string }) => {
    setSearchSelectState(value);
  }
  // 검색 INPUT 값 변경
  const handleSearchInput = (value: string) => {
    setSearchInputState(value);
  }
  // 검색
  const onClickSearch = (e: any) => {
    if (e.type === "keydown" && e.code !== "Enter") return;
    const searchData = {currentPage: 0, pageSize, searchCondition: searchSelectState.value, keyword: searchInputState}
    setSearchAllValue(searchData)
  }

  // 검색 조건 선택 리스트
  const messageSelect = [
    {value: 'number', label: '연락처'},
    {value: 'content', label: '내용'},
  ];


  // 상세페이지 이동 테스트

  return {
    //! 새로
    tableData,
    handleActiveList,
    messageSelect,
    handleCheckBox,
    checkBoxState,
    onClickSearch,
    handleSearchSelect,
    handleSearchInput,
    searchSelectState,
    onCheckedListDelete,
    onDelete,
    listRef,
    onScrollHandler,
    scheduleDetailParamsState,
    //! 새로
    totalPage,
    pageSize,
    currentPage,
    handlePageChange,
    setCurrentPage,
    isLoading,
    isDeleteLoading
  };
};
