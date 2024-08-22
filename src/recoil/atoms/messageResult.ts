import { atom } from 'recoil';

export const messageResultListState = atom({
  key: 'messageResultListState',
  default: [],
});

// export const messageResultSelectCate = atom({
//   key: "messageResultSelectCate",
//   default: "",
// });

// export const messageResultCateList = selectorFamily({
//   key: "messageResultCateList",
//   get: (selectMessageCate: string) => async () => {
//     const response = await instance.get(`/selectResult?${selectMessageCate}`);
//     // if (response.error) {
//     //   throw response.error;
//     // }
//     console.log("messageResultCateList", response);
//     return response;
//   },
// });
