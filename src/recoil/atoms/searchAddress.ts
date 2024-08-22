// import { AxiosResponse } from 'axios';
// import { atom, selector } from 'recoil';
//
// import { instance } from '../../apis/api/clientAxios';
//
// export const addressSearchKeyword = atom({
//   key: 'addressSearchKeyword',
//   default: '',
// });
//
// export const addressSearchOption = atom<string>({
//   key: 'addressSearchOption',
//   default: '이름',
// });
//
// export const searchButtonClicked = atom({
//   key: 'searchButtonClicked',
//   default: false,
// });
//
// export const addressSearchData = selector<Promise<AxiosResponse<any> | undefined | never[]>>({
//   key: 'addressSearchData',
//   get: async ({ get }: any): Promise<any> => {
//     const isButtonClicked = get(searchButtonClicked);
//     console.log('검색조건', isButtonClicked);
//     if (!isButtonClicked) {
//       return [];
//     }
//     const searchQuery = get(addressSearchKeyword);
//     const searchOptions = get(addressSearchOption);
//
//     console.log('검색어 입력', searchQuery);
//     console.log('검색 조건', searchOptions);
//     try {
//       if (searchOptions === '이름') {
//         console.log('이름');
//         const result = await instance.post('contacts/search_arreo', {
//           searchTitle: 'name',
//           searchContent: searchQuery,
//         });
//         console.log('name', result);
//         return result;
//       }
//       const result = await instance.post('contacts/search_arreo', {
//         searchTitle: 'phnNo',
//         searchContent: searchQuery,
//       });
//
//       return result;
//     } catch (error) {
//       return error;
//     }
//   },
// });
