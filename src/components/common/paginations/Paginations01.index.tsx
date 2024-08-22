import React, { memo } from 'react';

// eslint-disable-next-line import/order
import { usePagination } from '../../hooks/customs/usePagination';
// eslint-disable-next-line import/order
import { v4 as uuidv4 } from 'uuid';

import type { IPaginations01Props } from './Paginations01.types';

import * as S from './Paginations01.styles';

const Paginations01 = (props: IPaginations01Props) => {
  const paginationArgs = usePagination({
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

export default memo(Paginations01);
