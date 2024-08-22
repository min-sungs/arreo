import {atom} from "recoil";

// customer 페이지 router 제어
export const customerRouterRecoil = atom<number>({
  key: "customerRouterRecoil",
  default: 0
})