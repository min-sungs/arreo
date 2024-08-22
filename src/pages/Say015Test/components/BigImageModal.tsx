import React, { useState } from 'react';
import * as S from '../styles/Say015OK.styles.ts';

const BigImageModal = (props: any) => {
  return (
    <S.BigImageModalWrap>
      <S.BigImageModalBox>
        <img src={`data:image/jpeg;base64,${props.imageData}`} alt="이미지" />
        <S.ModalCloseBtn
          onClick={() => {
            props.setModalSwitchBtn((prev: boolean) => prev && false);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
            <path
              opacity="0.9"
              d="M4.54078 29.389C4.1518 29.778 3.62424 29.9966 3.07414 29.9966C2.52404 29.9966 1.99648 29.778 1.6075 29.389C1.21853 29 1 28.4724 1 27.9223C1 27.3722 1.21853 26.8446 1.6075 26.4556L12.5659 15.5L1.61095 4.54098C1.22198 4.15198 1.00345 3.62439 1.00345 3.07426C1.00345 2.52413 1.22198 1.99654 1.61095 1.60754C1.99993 1.21854 2.52749 0.999999 3.07759 0.999999C3.62769 0.999999 4.15525 1.21854 4.54423 1.60754L15.4991 12.5666L26.4575 1.61099C26.8465 1.22199 27.374 1.00345 27.9241 1.00345C28.4742 1.00345 29.0018 1.22199 29.3908 1.61099C29.7798 1.99999 29.9983 2.52758 29.9983 3.07771C29.9983 3.62784 29.7797 4.15544 29.3908 4.54444L18.4324 15.5L29.3925 26.459C29.7815 26.848 30 27.3756 30 27.9257C30 28.4759 29.7815 29.0035 29.3925 29.3925C29.0035 29.7815 28.476 30 27.9259 30C27.3758 30 26.8482 29.7815 26.4592 29.3925L15.4991 18.4335L4.54078 29.389Z"
              fill="white"
            />
          </svg>
        </S.ModalCloseBtn>
      </S.BigImageModalBox>
    </S.BigImageModalWrap>
  );
};

export default BigImageModal;
