// import SearchIcon from '@mui/icons-material/Search';
// import React from 'react';
// import { useRecoilState, useSetRecoilState } from 'recoil';
// import styled from 'styled-components';

// // import CustomInput from "../../Atom/AddressBook/SearchInput";
// import { addressSearchKeyword, searchButtonClicked, addressSearchOption } from '../../../recoil/atoms/searchAddress';
// import BaseButton from '../../Atom/BaseButton';
// import BaseInput from '../../Atom/BaseInput';
// import SelectBox from '../../Atom/SelectBox';

// const SelectBoxWrapper = styled.div`
//   margin-right: 1.8rem;
// `;

// const Search = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   width: fit-content;

//   @media screen and (max-width: 1500px) {
//     transform: scale(0.8);
//     /* justify-content: flex-end; */
//   }
// `;

// const StyledInput = styled(BaseInput)`
//   font-family: 'Noto Sans KR', 'Nanum Gothic', Roboto, 'Open Sans', sans-serif;
//   border: 0;
//   outline: 0;
//   font-size: 1.6rem;
//   border-radius: 0.8rem;
//   padding: 0.4rem 1.2rem 0.5rem;
//   background-color: #fff;
//   /* background-color: #ebecf0; */
//   text-shadow: 1px 1px 0 #fff;
//   box-shadow:
//     inset 1px 1px 2px #babecc,
//     inset -1px -1px 2px #f1f3f5;
//   box-sizing: border-box;
//   transition: all 0.2s ease-in-out;
//   appearance: none;
//   margin-right: 0.6rem;

//   &:focus {
//     box-shadow:
//       inset 2px 2px 5px #babecc,
//       inset -5px -5px 10px #fff;
//   }
// `;

// // const StyledCustomButton = styled(BaseButton)`
// //   .icon {
// //     display: inline-flex;
// //     justify-content: center;
// //     align-items: center;
// //     padding: 0.15rem 0;
// //   }
// // `;

// const AddressSearch = () => {
//   // const [addressSelectCate, setAddressSelectCate] = useState("");
//   const [atomSelectCate, setAtomSelectCate] = useRecoilState(addressSearchOption);

//   const [searchKeywordState, setSearchKeywordState] = useRecoilState(addressSearchKeyword);
//   const setSearchButtonClicked = useSetRecoilState(searchButtonClicked);

//   const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const searchKeyword = e.target.value;
//     setSearchKeywordState(searchKeyword);
//   };
//   console.log('searchKeyword', searchKeywordState);
//   const handleSearchButtonClick = () => {
//     setSearchButtonClicked(true);
//   };

//   const handleOnKeyPress = (e: React.KeyboardEventHandler<HTMLInputElement> | any) => {
//     if (e.key === 'Enter') {
//       alert('???');
//       handleSearchButtonClick();
//     }
//   };

//   const addressSelect = [
//     { value: '휴대폰 번호', label: '휴대폰 번호' },
//     { value: '이름', label: '이름' },
//   ];
//   const handleAddressSelect = (e: string) => {
//     console.log('addressSelectValue', e);
//     setAtomSelectCate(e);
//   };

//   return (
//     <Search>
//       <SelectBoxWrapper>
//         <SelectBox
//           name="주소록 검색조건"
//           options={addressSelect}
//           onChange={handleAddressSelect}
//           value={atomSelectCate}
//         />
//       </SelectBoxWrapper>
//       <StyledInput type="text" value={searchKeywordState} onChange={handleSearchInput} onKeyPress={handleOnKeyPress} />
//       <BaseButton className="icon" fontSize="2rem" onClick={handleSearchButtonClick}>
//         <SearchIcon />
//       </BaseButton>
//     </Search>
//   );
// };

// export default AddressSearch;
