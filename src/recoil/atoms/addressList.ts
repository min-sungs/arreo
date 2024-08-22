import { atom, useRecoilValue } from 'recoil';
import { BuddyData, BinData } from '../../components/Molecules/addressbook/types/AddressTable.types';

export interface AddressData {
  buddy_nm: string;
  buddySeqNo: string;
  email_id: string;
  groupSeqNo: string;
  key_comm_no: string;
  site_id: string;
  usr_id: string;
  usr_key: string;
  page: boolean;
  setPageSize: any;
}

export const addressListState = atom<AddressData[]>({
  key: 'addressListState',
  default: [],
});

export const deleteAddressListState = atom<string[]>({
  key: 'deleteAddressListState',
  default: [],
});

export const checkedGroupListState = atom<string[]>({
  key: 'checkedGroupListState',
  default: [],
});

export const textContextState = atom<string>({
  key: 'GreetingcheckedGroupListState',
  default: '',
});

// 메인 테이블 체크 리스트
export const itemCheckBoxListState = atom<BuddyData[]>({
  key: 'itemCheckBoxListState',
  default: [],
});

// 메인 테이블 휴지통 체크 리스트
export const binItemCheckBoxListState = atom<BinData[]>({
  key: 'binItemCheckBoxListState',
  default: [],
});

// 주소록 메인테이블 전체체크박스
export const selectAllState = atom<boolean>({
  key: 'selectAllState',
  default: false,
});

// 그룹 리스트
export const groupCheckBoxListState = atom<number[]>({
  key: 'groupCheckBoxListState',
  default: [], // 초기 상태 (체크된 groupSeqNo 목록)
});

// 그룹이름클릭시 저장할 시퀀스넘버
export const selectedGroupSeqNoState = atom<number | null>({
  key: 'selectedGroupSeqNoState',
  default: null,
});

// 휴지통 클릭시 삭제 리스트를 위한 토글 상태
export const recycleBinListToggleState = atom<boolean>({
  key: 'recycleBinListToggleState',
  default: false,
});

// 중복체크 클릭시 리스트를 위한 토글 상태
export const duplicationListToggleState = atom<boolean>({
  key: 'duplicationListToggleState',
  default: false,
});

// 토탈 클릭시 스타일을 위한 상태
export const clickTotalStylesState = atom<boolean>({
  key: 'clickTotalStylesState',
  default: true,
});

// 휴지통 클릭시 스타일을 위한 상태
export const clickBinStylesState = atom<boolean>({
  key: 'clickBinStylesState',
  default: false,
});

// 메인테이블 검색시 저장할 select 벨류
export const selectValueState = atom<string>({
  key: 'selectValueState',
  default: 'name',
});

// 메인테이블 검색시 저장학 input 벨류
export const searchTextState = atom<string>({
  key: 'searchTextState',
  default: '',
});

// 휴지통 검색시 저장할 select 벨류
export const binSelectValueState = atom<string>({
  key: 'binSelectValueState',
  default: 'name',
});

// 휴지통 검색시 저장할 input 벨류
export const binSearchTextState = atom<string>({
  key: 'binSearchTextState',
  default: '',
});

// 페이지네이션 현재페이지
export const currentPageState1 = atom({
  key: 'currentPageState1',
  default: 1,
}); // 현재 페이지를 관리합니다.

export const currentPageState2 = atom({
  key: 'currentPageState2',
  default: 1,
}); // 현재 페이지를 관리합니다.

export const currentPageState3 = atom({
  key: 'currentPageState3',
  default: 1,
}); // 현재 페이지를 관리합니다.

// 모달창 상태
export const viewModalAtom = atom({
  key: 'viewModal',
  default: false,
});

export const trigerss = atom({
  key: 'trigeratom',
  default: false,
});

// export const selectedGroupNamesSelector = selector({
//   key: 'selectedGroupNamesSelector',
//   get: ({ get }) => {
//     const groupList = get(groupListState);
//     return groupList
//       .filter((group) => group.isSelected) // isSelected가 true인 항목만 선택
//       .map((group) => group.groupNm); // 선택된 항목의 group.groupNm 반환
//   },
// });

/** 리뉴얼 주소록 */
// 그룹 체크박스
export const checkGroupListState = atom<number[]>({
  key: 'checkGroupListState',
  default: [],
});

// 휴지통 체크박스
export const checkedBinListState = atom<number[]>({
  key: 'checkedBinListState',
  default: [],
});

export const mainTableResetRecoil = atom({
  key: 'mainTableResetRecoil',
  default: false,
});

// 발신번호 리스트
export const callbackNumberState = atom<any[] | undefined>({
  key: 'callbackNumberState',
  default: [],
});

// 사용가능 발신번호 리스트
export const callbackUseNumbersState = atom<any[] | undefined>({
  key: 'callbackUseNumbersState',
  default: [],
});

// 발신할 번호
export const selectNumberState = atom<string>({
  key: 'selectNumberState',
  default: '',
});
