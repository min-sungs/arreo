// import React from 'react';
// import styled from 'styled-components';
// import GroupList from '../AddressBook/GroupList';
// import MainTable from '../AddressBook/MainTable';
//
// import { ITableDetailCheck } from '../../hooks/customs/messgeManagement/ltsContent/detail/useLtsContentDetailMid';
// import { useResendMessage } from '../../hooks/customs/messgeManagement/useResendMessage';
//
// const BlueLay = styled.div`
//   position: fixed;
//   left: 0;
//   top: 0;
//   z-index: 999;
//   width: 100vw;
//   height: 100vh;
//   background-color: #cccccc6d;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transform: translate(-50% -50%);
// `;
//
// const Wrap = styled.div`
//   width: 60%;
//   min-height: 500px;
//   border: 1px solid #000;
//   background-color: #f5f5f5;
// `;
//
// const Div = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   box-sizing: border-box;
// `;
//
// const CloseRab = styled.div`
//   font-size: 16px;
//   text-align: right;
// `;
//
// interface ReSendData {
//   buddyName: string | null;
//   cmpUsrId: string;
//   etcPhoneNumberList?: string[];
//   groupCount: number;
//   imageData: string;
//   prepayPayNo: string;
//   rcvPhnId: string;
//   sndDttm: string;
//   sndMsg?: string;
//   successCount: number;
//   userKey: string;
//   subject?: string;
// }
//
// interface ResendAddressBookProps {
//   reSendData?: ReSendData[];
//   type: string;
//   detailInfoMessage?: string;
//   resendDetailData?: ITableDetailCheck[];
//   setCheckList?: React.Dispatch<React.SetStateAction<string[]>>;
//   setCheckAll?: React.Dispatch<React.SetStateAction<boolean>>;
//   setAllChecked?: React.Dispatch<React.SetStateAction<boolean>>;
//   setCheckedId?: React.Dispatch<React.SetStateAction<string[]>>;
// }
//
// const ResendAddressBook = (props: ResendAddressBookProps) => {
//   console.log('재전송 데이터', props);
//   const { etcPhoneNumberList, sndMsg, subject } = props.reSendData?.[0] || {};
//
//   const { type, detailInfoMessage, resendDetailData, setCheckAll, setCheckList, setAllChecked, setCheckedId } = props;
//
//   const { handleCloseClick, resendMsg } = useResendMessage({
//     type,
//     detailInfoMessage,
//     resendDetailData,
//     etcPhoneNumberList,
//     sndMsg,
//     setCheckAll,
//     setCheckList,
//     setAllChecked,
//     setCheckedId,
//   });
//   console.log('ResendAddressBook subject', resendMsg);
//   return (
//     <BlueLay>
//       {/*<Wrap>*/}
//       {/*  <CloseRab onClick={handleCloseClick}>끄기</CloseRab>*/}
//       {/*  <Div>*/}
//       {/*    <GroupList />*/}
//       {/*    <MainTable />*/}
//       {/*  </Div>*/}
//       {/*</Wrap>*/}
//     </BlueLay>
//   );
// };
//
// export default ResendAddressBook;
