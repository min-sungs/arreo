// import React from 'react';
// import * as S from './LTSContentMid.styles';
// import Paginations01Index from '../../../../common/paginations/Paginations01.index';
// import ManagementSubmit from '../../ManagementSubmit';
// import BaseTable from '../../../../Organism/Table';
// import Loader from '../../../../common/Loader';
// import { useLTSContentMid } from '../../../../hooks/customs/messgeManagement/ltsContent/useLTSContentMid';
// import ResendAddressBook from '../../../../Organism/ResendAddressBook/ResendAddressBook';
//
// interface ILTSContentMidComponentProps {
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
// const LTSContentMidComponent = ({
//   tableData,
//   allChecked,
//   setAllChecked,
//   setCheckedId,
//   checkedId,
//   totalPage,
//   activePage,
//   setActivePage,
//   handlePageChange,
//   startPage,
//   setStartPage,
// }: ILTSContentMidComponentProps) => {
//   // custom hooks
//   const {
//     isDeleteLoading,
//     buttonList,
//     tbody,
//     thead,
//     handleCheckBoxAll,
//     handleCheckBox,
//     isExcelLoading,
//     reSendData,
//     isResendAddressBook,
//   } = useLTSContentMid({
//     tableData,
//     allChecked,
//     setAllChecked,
//     setCheckedId,
//     checkedId,
//   });
//
//   console.log('LTS reSendData', reSendData);
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
//       {isExcelLoading || isDeleteLoading ? (
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
// export default LTSContentMidComponent;
