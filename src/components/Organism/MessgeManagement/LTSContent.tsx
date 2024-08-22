// import React from 'react';
//
// import ManagementSearch from '../../Molecules/MessageManagement/ManagementSearch';
// import * as S from './styles/MessageManagement.styles';
// import Loader from '../../common/Loader';
// import BaseGuide from '../../Atom/BaseGuide';
// import { useLtsContent } from '../../hooks/customs/messgeManagement/ltsContent/useLtsContent';
// import LTSContentMidComponent from '../../Molecules/MessageManagement/LTSContent/mid/LTSContentMid.index';
// import ResendAddressBook from '../ResendAddressBook/ResendAddressBook';
//
// const LTSContent = () => {
//   const {
//     messageSelect,
//     typeSelect,
//     activePage,
//     handlePageChange,
//     setActivePage,
//     setStartPage,
//     startPage,
//     totalPage,
//     allChecked,
//     checkedId,
//     setSearchKeyword,
//     setSearchKeywordValue,
//     setSearchSelectValue,
//     setCurrentPage,
//     isLoading,
//     tableData,
//     setAllChecked,
//     setCheckedId,
//   } = useLtsContent();
//
//   return (
//     <>
//       <S.Wrapper>
//         {isLoading && (
//           <S.LoadingDiv>
//             <Loader />
//           </S.LoadingDiv>
//         )}
//
//         <S.TableSearchBox>
//           <ManagementSearch
//             name1="장기보관함전체조회"
//             name2="장기보관함전송타입"
//             messageOptionsProp={messageSelect}
//             typeOptionsProp={typeSelect}
//             setSearchSelectValue={setSearchSelectValue}
//             setSearchKeywordValue={setSearchKeywordValue}
//             setSearchKeyword={setSearchKeyword}
//             setStartPage={setStartPage}
//             setActivePage={setActivePage}
//             setCurrentPage={setCurrentPage}
//             type="LTS"
//           />
//         </S.TableSearchBox>
//         <S.TableWrapper>
//           <LTSContentMidComponent
//             handlePageChange={handlePageChange}
//             totalPage={totalPage}
//             activePage={activePage}
//             tableData={tableData}
//             allChecked={allChecked}
//             setAllChecked={setAllChecked}
//             setCheckedId={setCheckedId}
//             setActivePage={setActivePage}
//             startPage={startPage}
//             setStartPage={setStartPage}
//             checkedId={checkedId}
//           />
//         </S.TableWrapper>
//       </S.Wrapper>
//       <S.Footer>
//         <BaseGuide
//           text="전송결과 조회에서 보관하고자 하는 메시지를 별도로 장기 보관함에 저장할 수 있습니다.</br>
//             장기 보관함에 저장할 메시지는 별도로 삭제하지 않는 한, 계속적으로 보존됩니다.</br>
//             보관 메시지는 100건까지 저장 가능합니다.</br>
//             보관된 메시지를 선택하고 [전송]버튼을 누르면 원하는 사람에게 전송할 수 있습니다."
//         />
//       </S.Footer>
//     </>
//   );
// };
//
// export default LTSContent;
