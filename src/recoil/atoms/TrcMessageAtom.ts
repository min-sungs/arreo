import { atom } from 'recoil';

export const ResendAddressBookOff = atom<boolean>({
  key: 'ResendAddressBookOff',
  default: false,
});
