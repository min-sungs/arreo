import { atom } from 'recoil';

// 015사서함 검색시 저장할 select 벨류
export const say015SelectValueState = atom<string>({
  key: 'say015SelectValueState',
  default: 'number',
});

// 015사서함 검색시 저장할 input 벨류
export const say015SearchTextState = atom<string>({
  key: 'say015SearchTextState',
  default: '',
});

// 015사서함 message클릭시 detail 상태
export const detailMassageIdState = atom<string | null>({
  key: 'detailMassageIdState',
  default: null,
});

// 015사서함 message클릭시 ars와 내역 토글
export const msgArsToggleState = atom<boolean>({
  key: 'msgArsToggleState',
  default: false,
});

// 015관련 권한 State
export const say015AuthState = atom<any>({
  key: 'say015AuthState',
  default: {
    say015User: false,
    availabilityStatus: false,
  },
});

// 015관련 권한에 따른 page
export const say015PageState = atom<string | null>({
  key: 'say015PageState',
  default: null,
});

// 015 번호
export const say015Number = atom<string | null>({
  key: 'say015Number',
  default: null,
});

// Ars state
export const selectButtonState = atom<any>({
  key: 'selectButtonState',
  default: '',
});

// Ars 수정 삭제 ul state
export const udBoxState = atom<any>({
  key: 'udBoxState',
  default: '',
});
