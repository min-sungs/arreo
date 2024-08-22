// import { useQuery, useQueryClient } from '@tanstack/react-query';
// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
//
// import { getPointApi } from '../../apis/api/pointApi';
// import SmallBar from './SmallBar';
// import {useRecoilState, useResetRecoilState} from 'recoil';
// import {
//   addressListState,
//   binItemCheckBoxListState,
//   checkedGroupListState,
//   deleteAddressListState,
//   groupCheckBoxListState,
//   itemCheckBoxListState,
//   selectAllState,
// } from '../../recoil/atoms/addressList';
// import * as S from "./styles/Header.styles.ts";
// import {useSSE} from "../hooks/customs/sse/useSSE.ts";
// import {signInRecoil} from "../../recoil/atoms/signInAtom.ts";
//
// const Header = () => {
//   const queryClient = useQueryClient();
//   const userToken = localStorage.authorizationToken;
//   const user = localStorage.getItem('user');
//   const [msgCount, setMsgCount] = useState<string>(localStorage.getItem("msgCount") || '0');
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [signInState] = useRecoilState(signInRecoil);
//
//   const navigate = useNavigate();
//
//   // ! 채팅방 기능
//   // const {disConnectSSE} = useSSE();
//
//   // useEffect(() => {
//   //   if (typeof window !== "undefined") {
//   //     setMsgCount(localStorage.getItem("msgCount") || '0');
//   //   }
//   // }, [navigate,localStorage.getItem("msgCount")]);
//
//
//   const handleMouseEnter = () => {
//     setIsOpen(true);
//   };
//
//   const handleMouseLeave = () => {
//     setIsOpen(false);
//   };
//
//   const onClickSignOut = () => {
//     localStorage.clear();
//     // ! 채팅방 기능
//     // disConnectSSE();
//     navigate('/signin');
//   };
//
//   const { data } = useQuery(['point'], () => getPointApi(), {
//     enabled: signInState
//   });
//
//   return (
//     <S.Container>
//       <S.HeaderTopLine/>
//       <S.HeaderInner>
//
//         <S.Inner>
//           <S.LogoWrapper>
//             <Link to="/">
//               <img src="/img/ARREO.svg" alt="BigCo Inc. logo"/>
//             </Link>
//           </S.LogoWrapper>
//         </S.Inner>
//
//         <S.RightContents>
//           <S.Sign>
//             <S.SignInner>
//               {userToken ? (
//                 <>
//                   <S.SignEl style={{cursor: 'default'}}>{user} 님</S.SignEl>
//                   <SmallBar/>
//                   <S.SignEl>
//                     <Link to="/userinfochange" style={{color: '#000'}}>
//                       마이페이지
//                     </Link>
//                   </S.SignEl>
//                   <SmallBar/>
//                   <S.SignEl onClick={onClickSignOut}>로그아웃</S.SignEl>
//                   <S.PointWrap>
//                     <Link to="/usage">
//                       <S.Cash>C</S.Cash>
//                       {data?.use_pg}
//                       <S.Point>P</S.Point>
//                       {data?.use_cc}
//                     </Link>
//                   </S.PointWrap>
//                 </>
//               ) : (
//                 <>
//                   <Link to="/signin">
//                     <S.SignEl style={{margin: '0 1rem 0 0'}}>로그인</S.SignEl>
//                   </Link>
//                   <SmallBar/>
//                   <Link to="/signup">
//                     <S.SignEl>회원가입</S.SignEl>
//                   </Link>
//                 </>
//               )}
//             </S.SignInner>
//           </S.Sign>
//
//           <S.Nav onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//             {isOpen && <S.HeaderInnerBg/>}
//             {/* 채팅방 기능 */}
//             {/*<S.StyledNavLink>*/}
//             {/*    {parseInt(msgCount, 10) > 0 && (*/}
//             {/*      <S.AlertMsgDiv>*/}
//             {/*        <S.AlertMsgCount>{msgCount}</S.AlertMsgCount>*/}
//             {/*      </S.AlertMsgDiv>*/}
//             {/*    )}*/}
//             {/*    <Link to="/sse">*/}
//             {/*      채팅방*/}
//             {/*    </Link>*/}
//             {/*</S.StyledNavLink>*/}
//             <S.StyledNavLink>
//               <Link to="/excelMessenger">엑셀 메신저</Link>
//             </S.StyledNavLink>
//
//             <S.StyledNavLink>
//               <Link to="/autogreeting">Say015</Link>
//               {isOpen && (
//                 <S.StyledCateLinkWrap>
//                   <S.StyledCateLink>주소록 추가</S.StyledCateLink>
//                   <S.StyledCateLink>대량추가</S.StyledCateLink>
//                   <S.StyledCateLink>주소록 중복검사</S.StyledCateLink>
//                   <S.StyledCateLink>주소록 등록대행</S.StyledCateLink>
//                 </S.StyledCateLinkWrap>
//               )}
//             </S.StyledNavLink>
//             <S.StyledNavLink>
//               <Link to="/addressbook">주소록</Link>
//               {isOpen && (
//                 <S.StyledCateLinkWrap>
//                   <S.StyledCateLink>
//                     <Link to="/addressbook">주소록 추가</Link>
//                   </S.StyledCateLink>
//                   <S.StyledCateLink>
//                     <Link to="/AddressAddLarge">대량추가</Link>
//                   </S.StyledCateLink>
//                   <S.StyledCateLink>주소록 중복검사</S.StyledCateLink>
//                   <S.StyledCateLink>주소록 등록대행</S.StyledCateLink>
//                 </S.StyledCateLinkWrap>
//               )}
//             </S.StyledNavLink>
//             <S.StyledNavLink>
//               <Link to="/transferresult">전송/예약 관리</Link>
//               {isOpen && (
//                 <S.StyledCateLinkWrap>
//                   <S.StyledCateLink>
//                     <Link to="/transferresult">전송결과 조회</Link>
//                   </S.StyledCateLink>
//                   <S.StyledCateLink>
//                     <Link to="/scheduledtransfer">예약전송 관리</Link>
//                   </S.StyledCateLink>
//                   <S.StyledCateLink>
//                     <Link to="/longtimestorage">메시지 장기보관함</Link>
//                   </S.StyledCateLink>
//                 </S.StyledCateLinkWrap>
//               )}
//             </S.StyledNavLink>
//
//             <S.StyledNavLink>
//               <Link to="/charging">충전소</Link>
//               {isOpen && (
//                 <S.StyledCateLinkWrap>
//                   <S.StyledCateLink>
//                     <Link to="/charging">서비스 요금 충전소</Link>
//                   </S.StyledCateLink>
//                   <S.StyledCateLink>
//                     <Link to="/payment/detail">결제내역</Link>
//                   </S.StyledCateLink>
//                   <S.StyledCateLink>
//                     <Link to="/usage">사용내역</Link>
//                   </S.StyledCateLink>
//                 </S.StyledCateLinkWrap>
//               )}
//             </S.StyledNavLink>
//           </S.Nav>
//         </S.RightContents>
//       </S.HeaderInner>
//     </S.Container>
//   );
// };
//
// export default Header;
