import React, { useEffect, useState } from 'react';
import * as S from './style/SelectBox.styles';

import { v4 as uuidv4 } from 'uuid';

type ModalAction = '문자발송' | '착신전환' | '안내멘트' | '음성녹음 받기' | '';

interface ISelectBox {
  ulClassOff: boolean;
  selectButton: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setModalValue: (action: ModalAction) => void;
  setModalTitle: (action: ModalAction) => void;
  index: number;
}

const SelectBox = ({ ulClassOff, selectButton, setModalTitle, setModalValue, index }: ISelectBox) => {
  const modalOn = (e: any) => {
    switch (e.target.name) {
      case '문자발송':
        setModalValue('문자발송');
        setModalTitle('문자발송');
        break;
      case '착신전환':
        setModalValue('착신전환');
        setModalTitle('착신전환');
        break;
      case '음성녹음 받기':
        setModalValue('음성녹음 받기');
        setModalTitle('음성녹음 받기');
        break;
      case '안내멘트':
        setModalValue('안내멘트');
        setModalTitle('안내멘트');
        break;
      default:
        break;
    }
  };

  return (
    <S.ArsSelectBox>
      <S.Noti>* 동작을 선택해주세요</S.Noti>
      <div>
        <button name="button" className={selectButton === true ? 'on' : ''}>
          수행동작
        </button>
        <ul className={`${ulClassOff === true ? 'on' : ''} selectBox${index}`}>
          <li>
            <button name="문자발송" onClick={(e) => modalOn(e)}>
              문자발송
            </button>
          </li>
          <li>
            <button name="착신전환"  onClick={(e) => modalOn(e)}>
              착신전환
            </button>
          </li>
          <li>
            <button name="안내멘트"  onClick={(e) => modalOn(e)}>
              안내멘트
            </button>
          </li>
          <li>
            <button name="음성녹음 받기"  onClick={(e) => modalOn(e)}>
              음성녹음 받기
            </button>
          </li>
        </ul>
      </div>
    </S.ArsSelectBox>
  );
};

export default SelectBox;
