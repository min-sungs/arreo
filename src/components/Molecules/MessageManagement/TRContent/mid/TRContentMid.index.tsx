// import React from 'react';
// import * as S from './trContentMid.styles';
// import BaseTable from '../../../../Organism/Table';
// import Paginations01Index from '../../../../common/paginations/Paginations01.index';
// import ManagementSubmit from '../../ManagementSubmit';
// import { useTrContentMid } from '../../../../hooks/customs/messgeManagement/trContent/useTrContentMid';
// import Loader from '../../../../common/Loader';
// import ResendAddressBook from '../../../../Organism/ResendAddressBook/ResendAddressBook';
//
// interface ITRContentMidComponentProps {
//   tableData: any;
//   allChecked: boolean;
//   setAllChecked: React.Dispatch<React.SetStateAction<boolean>>;
//   setCheckedId: React.Dispatch<React.SetStateAction<string[]>>;
//   setActivePage: React.Dispatch<React.SetStateAction<number>>;
//   setStartPage: React.Dispatch<React.SetStateAction<number>>;
//   handlePageChange: (pageNumber: any) => void;
//   checkedId: string[];
//   totalPage: number;
//   activePage: number;
//   startPage: number;
// }
//
// const TRContentMidComponent = ({
//   tableData,
//   allChecked,
//   setAllChecked,
//   setCheckedId,
//   checkedId,
//   totalPage,
//   activePage,
//   setActivePage,
//   handlePageChange,
//   setStartPage,
//   startPage,
// }: ITRContentMidComponentProps) => {
//   // custom hooks
//   const {
//     isExcelLoading,
//     isDeleteLoading,
//     isSaveLoading,
//     buttonList,
//     tbody,
//     thead,
//     handleCheckBoxAll,
//     handleCheckBox,
//     reSendData,
//     isResendAddressBook,
//   } = useTrContentMid({
//     tableData,
//     allChecked,
//     setAllChecked,
//     setCheckedId,
//     checkedId,
//   });
//
//   return (
//     <>
//       {isResendAddressBook && (
//         <ResendAddressBook
//           type="main"
//           reSendData={reSendData}
//           setAllChecked={setAllChecked}
//           setCheckedId={setCheckedId}
//         />
//       )}
//       {isSaveLoading || isDeleteLoading || isExcelLoading ? (
//         <S.LoadingDiv>
//           <Loader />
//         </S.LoadingDiv>
//       ) : null}
//       <BaseTable
//         type="line"
//         option={{ checkbox: true }}
//         thead={thead}
//         tbody={tbody}
//         handleCheckBoxAll={handleCheckBoxAll}
//         handleCheckBox={handleCheckBox}
//         allChecked={allChecked}
//         checkedId={checkedId}
//       />
//       <S.TableFooter>
//         <S.PaginationWrapper>
//           <Paginations01Index
//             dataCount={totalPage}
//             startPage={startPage}
//             setStartPage={setStartPage}
//             activePage={activePage}
//             setActivePage={setActivePage}
//             eventHook={handlePageChange}
//           />
//         </S.PaginationWrapper>
//         <S.SubmitWrap>
//           <ManagementSubmit buttonList={buttonList} />
//         </S.SubmitWrap>
//       </S.TableFooter>
//     </>
//   );
// };
//
// export default TRContentMidComponent;
