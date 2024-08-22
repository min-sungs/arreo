import React, { useEffect, useState } from 'react';
import * as S from './tableDataAdd.styled.ts';
import BaseButton from '../../../../components/Atom/BaseButton';
import { useQueryClient } from '@tanstack/react-query';
import { useAddTable } from '../../../../components/hooks/customs/addressBook/useAddTable.ts';

interface IAddTableData {
  setTableAddOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddTableData = ({ setTableAddOpen }: IAddTableData) => {
  const {
    register,
    handleSubmit,
    onAddTableHandler,
    selectArrValue,
    setSelectSwitch,
    selectSwitch,
    selectState,
    onClickSelectListButton,
  } = useAddTable();
  return (
    <S.AddTalbeComponent>
      {/* Select / input / Fun Button Wrap */}
      <form action="/" method="POST">
        <div>
          <img src="/img/addressbook/Edit.svg" alt="add" width="14px" height="14px" />
        </div>
        <div>
          <p>그룹</p>
          {/* 그룹 Select */}
          <S.SelectWrapper>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setSelectSwitch(!selectSwitch);
              }}
            >
              {selectState.groupNm}
              <img src="/img/sendresult/icon/selectarrow.svg" alt="selectArrow" width={17} height={6} />
            </button>
            {selectSwitch === true ? (
              <S.SelectOptions>
                {selectArrValue.map((item, index) => {
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => {
                          onClickSelectListButton(item);
                          setSelectSwitch(false);
                        }}
                      >
                        {item.koname}
                      </button>
                    </li>
                  );
                })}
              </S.SelectOptions>
            ) : null}
          </S.SelectWrapper>
        </div>
        <div className="addTableInputWarp">
          <p>이름</p>
          <input type="text" placeholder="이름" {...register('buddyNm')} />
        </div>
        <div className="addTableInputWarp">
          <p>연락처</p>
          <input type="text" placeholder="연락처" {...register('keyCommNo')} />
        </div>
        <div className="addTableInputWarp">
          <p>이메일</p>
          <input type="text" placeholder="이메일" {...register('emailId')} />
        </div>
        <div className="addTableInputWarp">
          <p>메모</p>
          <input type="text" placeholder="메모" {...register('etcInfo')} />
        </div>
        <div className="rightFunWrap">
          <BaseButton
            width="40px"
            height="25px"
            fontSize="1.1rem"
            fontWeight="600"
            type="submit"
            border="none"
            borderRadius="5px"
            backgroundColor="#0D42E5"
            color="#fff"
            onClick={handleSubmit(onAddTableHandler)}
          >
            저장
          </BaseButton>
          <BaseButton
            marginLeft="5px"
            width="40px"
            height="25px"
            fontSize="1.1rem"
            fontWeight="600"
            border="none"
            borderRadius="5px"
            backgroundColor="#D6D6DC"
            color="#191919"
            onClick={() => setTableAddOpen(false)}
          >
            취소
          </BaseButton>
        </div>
      </form>
    </S.AddTalbeComponent>
  );
};

export default AddTableData;
