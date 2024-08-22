/* eslint-disable */
import React, { memo } from "react";
import { IPagination03Props } from "./Pagination03.types.ts";
import { v4 as uuidv4 } from "uuid";
import { usePagination03 } from "../../../hooks/customs/commons/paginations/usePagination03.tsx";
import * as S from './Pagination03.styles.ts'

const Pagination03Index = (props: IPagination03Props) => {

  const paginationArgs = usePagination03(
    {
      pageSize: props.pageSize,
      count: props.count,
      startPage: props.startPage,
      setStartPage: props.setStartPage,
      activePage: props.activePage,
      setActivePage: props.setActivePage,
      eventHook: props.eventHook,
    }
  );
  return (
    <S.PaginationStyle>
      {/* 페이징 */}
      <div className="sendResultPaging">
        {/* Prev Move Btn */}
        <button type="button" onClick={paginationArgs.onClickPrevPage}>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 7 12" fill="none">
            <path d="M0.338177 6.37383L5.28729 11.8574C5.36987 11.9489 5.47958 12 5.59367 12C5.70775 12 5.81746 11.9489 5.90004 11.8574L5.90537 11.8512C5.94554 11.8068 5.97753 11.7534 5.99939 11.6942C6.02125 11.635 6.03252 11.5712 6.03252 11.5068C6.03252 11.4424 6.02125 11.3786 5.99939 11.3194C5.97753 11.2602 5.94554 11.2068 5.90537 11.1624L1.24488 5.99897L5.90537 0.837607C5.94554 0.79323 5.97753 0.739813 5.99939 0.680606C6.02125 0.621399 6.03252 0.55764 6.03252 0.493207C6.03252 0.428775 6.02125 0.365016 5.99939 0.305809C5.97753 0.246602 5.94554 0.193185 5.90537 0.148807L5.90004 0.142611C5.81746 0.0510683 5.70775 9.87763e-07 5.59367 9.87057e-07C5.47958 9.86351e-07 5.36987 0.0510683 5.28729 0.142611L0.338177 5.62617C0.294651 5.67439 0.26 5.73239 0.236324 5.79665C0.212648 5.86091 0.20044 5.93009 0.20044 6C0.20044 6.06991 0.212648 6.13909 0.236324 6.20335C0.26 6.26761 0.294651 6.32561 0.338177 6.37383Z" fill="#0D42E5" />
          </svg>
        </button>
        {/* index Pageing */}
        <ol>
          {new Array(10).fill(1).map((_, index: number) => (
            Number(props.startPage) + index <= paginationArgs.lastPage && (
              <li
                className={Number(props.startPage) + index === props.activePage ? 'active' : ''}
                key={uuidv4()}
                id={String(Number(props.startPage) + index)}
                onClick={paginationArgs.onClickPage}
              >
                <button type="button"  >{Number(props.startPage) + index}</button>
              </li>
            ))
          )}
        </ol>
        {/* Next Move Btn */}
        <button type="button" onClick={paginationArgs.onClickNextPage}>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 6 12" fill="none">
            <path d="M5.8525 5.62617L0.903386 0.142609C0.820808 0.051067 0.711097 7.93141e-08 0.597008 8.10281e-08C0.48292 8.27422e-08 0.373209 0.0510671 0.290631 0.142609L0.285302 0.148805C0.245131 0.193183 0.213144 0.2466 0.191286 0.305807C0.169427 0.365014 0.158155 0.428773 0.158155 0.493206C0.158155 0.557638 0.169427 0.621397 0.191286 0.680604C0.213144 0.739811 0.245131 0.793228 0.285302 0.837606L4.9458 6.00103L0.285302 11.1624C0.245131 11.2068 0.213144 11.2602 0.191286 11.3194C0.169428 11.3786 0.158156 11.4424 0.158156 11.5068C0.158156 11.5712 0.169428 11.635 0.191286 11.6942C0.213144 11.7534 0.245131 11.8068 0.285302 11.8512L0.290631 11.8574C0.37321 11.9489 0.48292 12 0.597008 12C0.711097 12 0.820808 11.9489 0.903386 11.8574L5.8525 6.37383C5.89602 6.32561 5.93067 6.26761 5.95435 6.20335C5.97803 6.13909 5.99023 6.06991 5.99023 6C5.99023 5.93009 5.97803 5.86091 5.95435 5.79665C5.93067 5.73239 5.89602 5.67439 5.8525 5.62617Z" fill="#0D42E5" />
          </svg>
        </button>
      </div>
    </S.PaginationStyle>
  )
}

export default memo(Pagination03Index)