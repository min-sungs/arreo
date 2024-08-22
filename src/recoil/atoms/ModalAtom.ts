import { atom } from 'recoil';

import { TextModalProps } from '../../apis/utils/typeGuard/modalGuard';

//  타입을 이용해 모달창 분기처리
export type ModalKey = 'TextModal';
export type ModalGreetingKey = 'GreetingModal';
export type FirstAutoGreetingProps = 'FirstAutoGreeting';
export type ModalProps = TextModalProps;

export interface Modal {
  key: ModalKey | ModalGreetingKey | FirstAutoGreetingProps;
  props: ModalProps;
}

// 모달 store
export const modalState = atom<Modal[]>({
  key: 'modalState/modal',
  default: [],
});
