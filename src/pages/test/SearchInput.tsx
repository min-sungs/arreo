// import SearchIcon from "@mui/icons-material/Search";
// import React from "react";
// import { useRecoilState, useSetRecoilState } from "recoil";
// import styled from "styled-components";
// import {
//   addressSearchKeyword,
//   searchButtonClicked
// } from "../../../recoil/atoms/searchAddress";

// import CustomButton from "../Button";

// function CustomInput() {
//   // console.log("handleSearch", handleSearch);
//   const [searchKeywordState, setSearchKeywordState] =
//     useRecoilState(addressSearchKeyword);
//   const setSearchButtonClicked = useSetRecoilState(searchButtonClicked);

//   const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     let searchKeyword = e.target.value;
//     setSearchKeywordState(searchKeyword);
//   };
//   console.log("searchKeyword", searchKeywordState);
//   const handleSearchButtonClick = () => {
//     setSearchButtonClicked(true);
//   };

//   const handleOnKeyPress = (
//     e: React.KeyboardEventHandler<HTMLInputElement> | any
//   ) => {
//     if (e.key === "Enter") {
//       handleSearchButtonClick();
//     }
//   };

//   // const resultData = useRecoilValue(addressSearchData);

//   // console.log("검색결과 반환", resultData);
//   return (
//     <Container>
//       <StyledLabel>
//         <StyledInput
//           type="text"
//           value={searchKeywordState}
//           onChange={handleSearchInput}
//           onKeyPress={handleOnKeyPress}
//         />
//         <StyledCustomButton>
//           <SearchIcon
//             className="icon"
//             style={{ fontSize: "2rem" }}
//             onClick={handleSearchButtonClick}
//           />
//         </StyledCustomButton>
//       </StyledLabel>
//     </Container>
//   );
// }

// const Container = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const StyledLabel = styled.label`
//   display: flex;
//   align-items: center;
// `;

// const StyledInput = styled.input`
//   font-family: "Noto Sans KR", "Nanum Gothic", Roboto, "Open Sans", sans-serif;
//   border: 0;
//   outline: 0;
//   font-size: 1.6rem;
//   border-radius: 0.8rem;
//   padding: 0.4rem 1.2rem 0.5rem;
//   background-color: #fff;
//   /* background-color: #ebecf0; */
//   text-shadow: 1px 1px 0 #fff;
//   box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #f1f3f5;
//   box-sizing: border-box;
//   transition: all 0.2s ease-in-out;
//   appearance: none;
//   margin-right: 0.6rem;

//   &:focus {
//     box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
//   }
// `;

// const StyledCustomButton = styled(CustomButton)`
//   .icon {
//     display: inline-flex;
//     justify-content: center;
//     align-items: center;
//     padding: 0.15rem 0;
//   }
// `;

// export default CustomInput;
