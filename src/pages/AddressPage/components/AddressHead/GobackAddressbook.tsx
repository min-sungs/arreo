import React, { useState } from 'react';
import BaseButton from '../../../../components/Atom/BaseButton';
import * as S from '../../AddressBook.styles';

interface IAddAddressBook {
  addGroupOpenHandle: React.MouseEventHandler<HTMLButtonElement>;
  deleteGroupOnClickHandler: () => void;
  onDeleteTableList: () => void;
  tableAddOpenHandle: React.MouseEventHandler<HTMLButtonElement>;
  delGroupState: boolean;
  addressAddSwitch: boolean;
  setAddressAddSwitch: any;
  addressAddSelectArr: any;
  onClickAddressAddClick: any;
}

const AddAddressBook = ({
  addGroupOpenHandle,
  deleteGroupOnClickHandler,
  onDeleteTableList,
  tableAddOpenHandle,
  delGroupState,
  addressAddSwitch,
  setAddressAddSwitch,
  addressAddSelectArr,
  onClickAddressAddClick,
}: IAddAddressBook) => {
  return (
    <S.AddAddressbook>
      <BaseButton onClick={addGroupOpenHandle}>그룹 추가</BaseButton>
      <BaseButton onClick={deleteGroupOnClickHandler} disabled={delGroupState}>
        그룹 삭제
      </BaseButton>
      {/* <BaseButton onClick={tableAddOpenHandle}>주소록 추가</BaseButton> */}
      <S.SelectWrapper>
        <button
          className={`${addressAddSwitch === true ? 'active' : null}`}
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setAddressAddSwitch((prev: boolean) => !prev);
          }}
        >
          주소록 추가
          <svg
            className={`${addressAddSwitch ? 'active' : null}`}
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="6"
            viewBox="0 0 14 6"
            fill="none"
          >
            <path
              d="M12.9144 0.156925L7.44885 4.76826C7.32959 4.8694 7.16862 4.92613 7.00087 4.92613C6.83312 4.92613 6.67214 4.8694 6.55289 4.76826L1.08615 0.157925C0.965866 0.057316 0.804471 0.00100048 0.636419 0.00100048C0.468366 0.00100048 0.306971 0.057316 0.18669 0.157925C0.127602 0.207306 0.0806439 0.266326 0.0485811 0.331507C0.0165183 0.396689 0 0.466713 0 0.537453C0 0.608192 0.0165183 0.678216 0.0485811 0.743398C0.0806439 0.80858 0.127602 0.8676 0.18669 0.91698L5.6511 5.52732C6.01102 5.83027 6.49529 6 6.9997 6C7.50412 6 7.98838 5.83027 8.3483 5.52732L13.8127 0.91698C13.872 0.867584 13.9191 0.808502 13.9513 0.743228C13.9834 0.677954 14 0.607813 14 0.536953C14 0.466093 13.9834 0.395951 13.9513 0.330677C13.9191 0.265403 13.872 0.206321 13.8127 0.156925C13.6924 0.056316 13.531 0 13.363 0C13.1949 0 13.0335 0.056316 12.9133 0.156925"
              fill="#5B5B5C"
            />
          </svg>
        </button>
        {addressAddSwitch ? (
          <S.SelectOptions>
            {addressAddSelectArr.map((item: any) => {
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => {
                      onClickAddressAddClick(item);
                    }}
                  >
                    {item.name}
                  </button>
                </li>
              );
            })}
          </S.SelectOptions>
        ) : null}
      </S.SelectWrapper>
      <BaseButton onClick={onDeleteTableList}>주소록 삭제</BaseButton>
    </S.AddAddressbook>
  );
};
export default AddAddressBook;
