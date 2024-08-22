import { atom } from 'recoil';

export const signInRecoil = atom({
  key: 'signInState',
  default: localStorage.getItem('authorizationToken') !== null,
});
