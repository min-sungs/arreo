import { atom } from 'recoil';

export const textContextState = atom<string>({
  key: 'GreetingcheckedGroupListState',
  default: '',
});
