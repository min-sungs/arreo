import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import styled, { keyframes } from 'styled-components';
import { viewModalAtom } from '../../../recoil/atoms/addressList';
import { FaTimes } from 'react-icons/fa';

interface ModalProps {
  modal: any;
  width: string;
  height: string;
  overflow: string;
  element: React.JSX.Element;
  setModal: Dispatch<SetStateAction<boolean>>;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  font-size: 24px;
  font-weight: 600;
  width: 40px;
  height: 40px;
  right: 12px;
  top: 12px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

const Container = styled.div<{
  width: string;
  height: string;
  overflow: string;
}>`
  position: fixed;
  display: flex;
  flex-direction: column;
  left: calc(50vw - ${(props) => props.width}px / 2);
  top: calc(50vh - ${(props) => props.height}px / 2);
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  padding: 8px;
  background-color: white;
  border-radius: 8px;
  z-index: 999;
  color: black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  border: none;
  overflow-y: scroll;
  opacity: 0; // 초기 투명도 설정
  animation: ${fadeIn} 0.3s ease-in-out forwards; /* 애니메이션 적용 */
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #ffffff;
    border-radius: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #98999A;
    border-radius: 10px;
    width: 5px;
  }

  &::-webkit-scrollbar-track-piece {
    background-color: #ffffff;
  }
`;

const Canvas = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 998;
`;

const Wrapper = styled.div`
  background-color: transparent;
`;

export const CustomModal = ({ width, height, element, setModal, overflow }: ModalProps) => {
  const disableModal = () => {
    setModal(false);
  };

  const isModalActive = useRecoilValue(viewModalAtom);

  const onClickToggleModal = useCallback(() => {
    setModal(false);
  }, [isModalActive]);

  return (
    <>
      <Container width={width} height={height} overflow={overflow}>
        <Wrapper>{element}</Wrapper>
        <CloseButton onClick={onClickToggleModal} aria-label="닫기">
          {/* <FaTimes size={24} color="black" /> */}
          <img src="/img/addressbook/Delete.svg" alt="add" width="14px" height="14px" />
        </CloseButton>
      </Container>
      <Canvas onClick={disableModal} />
    </>
  );
};
