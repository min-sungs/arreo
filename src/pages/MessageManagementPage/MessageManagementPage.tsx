// import React from 'react';
// import ATitle from '../../components/Atom/ATitle';
// import OneDepthSideNav from '../../components/Molecules/Navigations/OneTapSideNav';
// import TitleLine from '../../components/Molecules/Titles/TitleLine';
// import LTSContentDetailPage from '../../components/Organism/MessgeManagement/Detail/LTSContentDetail/LTSContentDetailPage.index';
// import STContentDetail from '../../components/Organism/MessgeManagement/Detail/STContentDetail/STContentDetail';
// import TRContentDetailPage from '../../components/Organism/MessgeManagement/Detail/TRContentDetail/TRContentDetailPage.index';
// import LTSContent from '../../components/Organism/MessgeManagement/LTSContent';
// import STContent from '../../components/Organism/MessgeManagement/STContent';
// import TRContent from '../../components/Organism/MessgeManagement/TRContent';
// import * as S from './MessageManagementPage.styles';
//
// const TransferResult = ({ link = 'transferresult' }) => {
//   const subNavLink = [
//     { label: '전송결과 조회', to: '/transferresult' },
//     { label: '예약전송 관리', to: '/scheduledtransfer' },
//     { label: '메시지 장기보관함', to: '/longtimestorage' },
//   ];
//
//   const currComponent: { [link: string]: React.ReactElement } = {
//     transferresult: <TRContent />,
//     transferresultDetail: <TRContentDetailPage />,
//     scheduledtransfer: <STContent />,
//     scheduledtransferDetail: <STContentDetail />,
//     longtimestorage: <LTSContent />,
//     longtimestorageDetail: <LTSContentDetailPage />,
//   };
//
//   const subTitle: { [link: string]: string } = {
//     transferresult: '전송결과 조회',
//     transferresultDetail: '전송결과 조회 상세페이지 ',
//     scheduledtransfer: '예약전송 관리',
//     scheduledtransferDetail: '예약전송 관리 상세페이지',
//     longtimestorage: '메시지 장기보관함',
//     longtimestorageDetail: '메시지 장기보관함 상세페이지',
//   };
//
//   return (
//     <S.Container>
//       <S.Wrapper>
//         <S.Title>
//           <TitleLine text="전송/예약 관리" type="main" marginBottom="10px" marginTop="10px" />
//         </S.Title>
//         <S.SubWrapper>
//           <S.SideNav>
//             <OneDepthSideNav list={subNavLink} />
//           </S.SideNav>
//           <S.Content>
//             <S.ContentTitle>
//               <ATitle type="sub" text={subTitle[link]} color="#0D42E5" />
//             </S.ContentTitle>
//             {currComponent[link]}
//           </S.Content>
//         </S.SubWrapper>
//       </S.Wrapper>
//     </S.Container>
//   );
// };
// export default TransferResult;
