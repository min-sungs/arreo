import React, {memo} from 'react';
import {v4 as uuidv4} from 'uuid';
import * as S from './Pagination02.styles.ts';
import {usePagination02} from "../../../hooks/customs/commons/paginations/usePagination02.tsx";
import {IPagination02Props} from "./Pagination02.types.ts";


const Pagination02 = (props: IPagination02Props) => {

  const paginationArgs = usePagination02({

    pageSize: props.pageSize,
    count: props.dataCount,
    startPage: props.startPage,
    setStartPage: props.setStartPage,
    activePage: props.activePage,
    setActivePage: props.setActivePage,
    eventHook: props.eventHook,

  });

  return (
    <div>
      <S.Page onClick={paginationArgs.onClickPrevPage}>{`<`}</S.Page>
      {new Array(10).fill(1).map(
        (_, index) =>
          Number(props.startPage) + index <= paginationArgs.lastPage && (
            <S.Page
              key={uuidv4()}
              id={String(Number(props.startPage) + index)}
              onClick={paginationArgs.onClickPage}
              isActive={Number(props.startPage) + index === props.activePage}
            >
              {Number(props.startPage) + index}
            </S.Page>
          ),
      )}
      <S.Page onClick={paginationArgs.onClickNextPage}>{`>`}</S.Page>
    </div>
  );
};

export default memo(Pagination02);
