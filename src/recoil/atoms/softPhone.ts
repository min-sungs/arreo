import { atom } from 'recoil';

export const menuState = atom({
  default: 'sms',
  key: 'menuRecoilState',
});
