// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
// import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
// import React from "react";
// import styled from "styled-components";
// import BaseButton from "../../Atom/BaseButton";
// // import CustomButton from "../../Atom/Button";

// interface AddressPaginationProps {
//   gotoPage: (pageIndex: number) => void;
//   nextPage: () => void;
//   previousPage: () => void;
//   setPageSize: (size: number) => void;
//   canPreviousPage: boolean;
//   canNextPage: boolean;
//   pageCount: number;
//   pageOptions: number[];
//   pageNum: number;
//   positionTop: any;
// }

// interface CustomPaginationProps {
//   positionTop: any;
// }

// const AddressPagination = (props: AddressPaginationProps) => {
//   const {
//     gotoPage,
//     nextPage,
//     previousPage,
//     canPreviousPage,
//     canNextPage,
//     pageCount,
//     pageOptions,
//     pageNum,
//     positionTop,
//   } = props;

//   return (
//     <>
//       <CustomPagination positionTop={positionTop}>
//         <ArrowButtons>
//           <BaseButton onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
//             <KeyboardDoubleArrowLeftIcon className="icon" />
//           </BaseButton>
//           <StyledButton onClick={() => previousPage()} disabled={!canPreviousPage}>
//             <KeyboardArrowLeftIcon className="icon" />
//           </StyledButton>
//           <StyledButton onClick={() => nextPage()} disabled={!canNextPage}>
//             <KeyboardArrowRightIcon className="icon" />
//           </StyledButton>
//           <StyledButton onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
//             <KeyboardDoubleArrowRightIcon className="icon" />
//           </StyledButton>
//         </ArrowButtons>
//         {/* <GoToPage>
//                   <span>Go to page :</span>
//                   <input
//                       type='number'
//                       defaultValue={pageNum}
//                       onChange={(e) => {
//                           const page = e.target.value ? Number(e.target.value) - 1 : 0;
//                           gotoPage(page);
//                       }}
//                   />
//               </GoToPage> */}
//         <PageNotice>
//           <span>
//             <strong>{pageNum}</strong> / <strong>{pageOptions.length}</strong>
//           </span>
//         </PageNotice>
//         {/* <select
//                   value={pageSize}
//                   onChange={(e) => {
//                       setPageSize(Number(e.target.value));
//                   }}
//               >
//                   {[10, 20, 30, 40, 50].map((pageSize) => (
//                       <option key={pageSize} value={pageSize}>
//                           Show {pageSize}
//                       </option>
//                   ))}
//               </select> */}
//       </CustomPagination>
//     </>
//   );
// };
// const CustomPagination = styled.div<CustomPaginationProps>`
//   position: absolute;
//   left: 50%;
//   margin-left: -11rem;
//   font-size: 1.4rem;
//   top: ${(props: any) => props.positionTop};

//   /* @media screen and (max-height: 930px) {
//     bottom: 1rem;
//   }
//   @media screen and (max-height: 770px) {
//     bottom: 2rem;
//   }
//   @media screen and (max-height: 640px) {
//     bottom: 3rem;
//   } */
// `;

// const ArrowButtons = styled.div`
//   .icon {
//     transform: scale(1.4);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `;

// const StyledButton = styled(BaseButton)`
//   :nth-child(2) {
//     margin-right: 1rem;
//   }
//   :nth-child(3) {
//     margin-left: 1rem;
//   }
// `;

// const PageNotice = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-top: 1.6rem;

//   strong {
//     font-weight: 500;
//   }
// `;

// export default AddressPagination;
