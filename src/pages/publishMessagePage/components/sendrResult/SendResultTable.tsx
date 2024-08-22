// import React, { useState } from "react";
// import * as S from '../../styles/sendresult/SendResult.styles.ts'
// import BaseButton from "../../../../components/Atom/BaseButton";
// import AddressCheckBox from '../../../AddressPage/components/common/CheckBox';
//
// const SendResultTable = () => {
//     const [leftSelectState, setLeftSelectState] = useState('연락처'); // LeftState
//     const [rightSelectState, setRightSelectState] = useState('전송상태'); // LeftState
//
//     const [leftSelectSwitch, setLeftSelectSwitch] = useState(false) // 왼쪽 select 누르면 oprions 나올 스위치 버튼 역할
//     const [rightSelectSwitch, setRightSelectSwitch] = useState(false) // 오른쪽 select 누르면 oprions 나올 스위치 버튼 역할
//
//     const [leftSelectArrValue, setLeftSelectArrValue] = useState([ // Left select 가상 데이터
//         { id: 0, name: 'name', koname: '이름' },
//         { id: 1, name: 'name', koname: '이름' },
//         { id: 2, name: 'number', koname: '연락처' },
//     ])
//
//     const [rightSelectArrValue, setRightSelectArrValue] = useState([ // Right select 가상 데이터
//         { id: 0, name: 'sendsituation', koname: '전송상태' },
//         { id: 1, name: 'sendsituation', koname: '전송상태' },
//         { id: 2, name: 'sendsituation2', koname: '전송상태2' },
//     ])
//
//
//
//     const onClickSelectListButton = (e: React.MouseEvent<HTMLButtonElement>) => { // select option 클릭 이벤트
//         const result = e.target as HTMLButtonElement;
//         if (typeof result.textContent === 'string') {
//             console.log(result.textContent)
//         }
//     }
//
//     const selectStyles: { borderRadius : string;} | null = null;
//
//     return (
//         <S.SendResultTable>
//             <form action="/" method="POST">
//                 {/* Select, input, select Wrap */}
//                 <div className="headFunWrap">
//                     {/* 연락처, 검색바 Box */}
//                     <div>
//                         {/* 연락처 Select */}
//                         <S.SelectWrapper style={{ width: '112px' }}>
//                             <button className={`${leftSelectSwitch === true ? 'active' : null}`} type='button' onClick={(e) => {
//                                 e.preventDefault()
//                                 setLeftSelectSwitch(!leftSelectSwitch)
//                             }}>
//                                 {leftSelectState}
//                                 <img src="/img/sendresult/icon/selectarrow.svg" alt="selectArrow" width={17} height={6} />
//                             </button>
//                             {
//                                 leftSelectSwitch === true ?
//                                     <S.SelectOptions>
//                                         {
//                                             leftSelectArrValue.map((item, index) => {
//                                                 return (
//                                                     <li key={item.id}>
//                                                         <button type='button' onClick={(e) => {
//                                                             onClickSelectListButton(e)
//                                                             setLeftSelectSwitch(false)
//                                                         }}>
//                                                             {item.koname}
//                                                         </button>
//                                                     </li>
//                                                 )
//                                             })
//                                         }
//                                     </S.SelectOptions>
//                                     : null
//                             }
//                         </S.SelectWrapper>
//                         {/* 검색 input */}
//                         <S.InputBox>
//                             <S.SearchInput
//                                 type="text"
//                                 placeholder="해당 검색어를 입력해주세요."
//                             />
//                             <BaseButton type={'submit'} backgroundColor="transition">
//                                 <img src="/img/sendresult/icon/search.svg" width={20} height={22} alt="searchImage" />
//                             </BaseButton>
//                         </S.InputBox>
//                     </div>
//                     {/* 전송상태 Select */}
//                     {/* 연락처 Select */}
//                     <S.SelectWrapper style={{ width: '230px' }}>
//                         <button className={`${rightSelectSwitch === true ? 'active' : null}`} type='button' onClick={(e) => {
//                             e.preventDefault()
//                             setRightSelectSwitch(!rightSelectSwitch)
//                         }}>
//                             {rightSelectState}
//                             {/* display flex로 주는건 한계가 있기 떄문에 강제로 Position로 조정 */}
//                             <img src="/img/sendresult/icon/selectarrow.svg" alt="selectArrow" width={17} height={6}/>
//                         </button>
//                         {
//                             rightSelectSwitch === true ?
//                                 <S.SelectOptions>
//                                     {
//                                         rightSelectArrValue.map((item, index) => {
//                                             return (
//                                                 <li key={item.id}>
//                                                     <button type='button' onClick={(e) => {
//                                                         onClickSelectListButton(e)
//                                                         setRightSelectSwitch(false)
//                                                     }}>
//                                                         {item.koname}
//                                                     </button>
//                                                 </li>
//                                             )
//                                         })
//                                     }
//                                 </S.SelectOptions>
//                                 : null
//                         }
//                     </S.SelectWrapper>
//                 </div>
//                 <div className="sendListWrap">
//                     <ul className="sendHeadList">
//                         {/* All CheckBox */}
//                         <li className="w10"><AddressCheckBox /></li>
//                         <li className="w10"><strong>번호</strong></li>
//                         <li className="w30"><strong>수신인</strong></li>
//                         <li className="w30"><strong>수신시간</strong></li>
//                         <li className="w20"><strong>전송상태</strong></li>
//                     </ul>
//                     <div className="sendBodyListWrap">
//                         <ul className="sendBodyList">
//                             <li className="w10"><AddressCheckBox /></li>
//                             <li className="w10">1</li>
//                             <li className="w30 myDataText">
//                                 <span>010-4998-7052</span>
//                                 <span>신혜령</span>
//                             </li>
//                             <li className="w30 dateText">2024.01.31 13:23</li>
//                             <li className="w20">성공</li>
//                         </ul>
//                         <ul className="sendBodyList">
//                             <li className="w10"><AddressCheckBox /></li>
//                             <li className="w10">2</li>
//                             <li className="w30 myDataText">
//                                 <span>010-4998-7052</span>
//                                 <span>신혜령</span>
//                             </li>
//                             <li className="w30 dateText">2024.01.31 13:23</li>
//                             <li className="w20">성공</li>
//                         </ul>
//                         <ul className="sendBodyList">
//                             <li className="w10"><AddressCheckBox /></li>
//                             <li className="w10">3</li>
//                             <li className="w30 myDataText">
//                                 <span>010-4998-7052</span>
//                                 <span>신혜령</span>
//                             </li>
//                             <li className="w30 dateText">2024.01.31 13:23</li>
//                             <li className="w20">성공</li>
//                         </ul>
//                         <ul className="sendBodyList">
//                             <li className="w10"><AddressCheckBox /></li>
//                             <li className="w10">4</li>
//                             <li className="w30 myDataText">
//                                 <span>010-4998-7052</span>
//                                 <span>신혜령</span>
//                             </li>
//                             <li className="w30 dateText">2024.01.31 13:23</li>
//                             <li className="w20">성공</li>
//                         </ul>
//                         <ul className="sendBodyList">
//                             <li className="w10"><AddressCheckBox /></li>
//                             <li className="w10">5</li>
//                             <li className="w30 myDataText">
//                                 <span>010-4998-7052</span>
//                                 <span>신혜령</span>
//                             </li>
//                             <li className="w30 dateText">2024.01.31 13:23</li>
//                             <li className="w20">성공</li>
//                         </ul>
//                         <ul className="sendBodyList">
//                             <li className="w10"><AddressCheckBox /></li>
//                             <li className="w10">6</li>
//                             <li className="w30 myDataText">
//                                 <span>010-4998-7052</span>
//                                 <span>신혜령</span>
//                             </li>
//                             <li className="w30 dateText">2024.01.31 13:23</li>
//                             <li className="w20">성공</li>
//                         </ul>
//                         <ul className="sendBodyList">
//                             <li className="w10"><AddressCheckBox /></li>
//                             <li className="w10">7</li>
//                             <li className="w30 myDataText">
//                                 <span>010-4998-7052</span>
//                                 <span>신혜령</span>
//                             </li>
//                             <li className="w30 dateText">2024.01.31 13:23</li>
//                             <li className="w20">성공</li>
//                         </ul>
//                         <ul className="sendBodyList">
//                             <li className="w10"><AddressCheckBox /></li>
//                             <li className="w10">8</li>
//                             <li className="w30 myDataText">
//                                 <span>010-4998-7052</span>
//                                 <span>신혜령</span>
//                             </li>
//                             <li className="w30 dateText">2024.01.31 13:23</li>
//                             <li className="w20">성공</li>
//                         </ul>
//                         <ul className="sendBodyList">
//                             <li className="w10"><AddressCheckBox /></li>
//                             <li className="w10">9</li>
//                             <li className="w30 myDataText">
//                                 <span>010-4998-7052</span>
//                                 <span>신혜령</span>
//                             </li>
//                             <li className="w30 dateText">2024.01.31 13:23</li>
//                             <li className="w20">성공</li>
//                         </ul>
//                         <ul className="sendBodyList">
//                             <li className="w10"><AddressCheckBox /></li>
//                             <li className="w10">10</li>
//                             <li className="w30 myDataText">
//                                 <span>010-4998-7052</span>
//                                 <span>신혜령</span>
//                             </li>
//                             <li className="w30 dateText">2024.01.31 13:23</li>
//                             <li className="w20">성공</li>
//                         </ul>
//                     </div>
//
//                 </div>
//
//                 {/* 페이징, 버튼들 */}
//                 <div className="footFunWrap">
//                     {/* 페이징 */}
//                     <div className="sendResultPageing">
//                         {/* Prev Move Btn */}
//                         <button type="button">
//                             <img src="/img/sendresult/icon/pageingPrevarrow.svg" alt="pageingPrevarrow" width={12} height={13} />
//                         </button>
//                         {/* index Pageing */}
//                         <ol>
//                             <li className="active">
//                                 <button type="button">1</button>
//                             </li>
//                             <li>
//                                 <button type="button">2</button>
//                             </li>
//                             <li>
//                                 <button type="button">3</button>
//                             </li>
//                         </ol>
//                         {/* Next Move Btn */}
//                         <button type="button">
//                             <img src="/img/sendresult/icon/pageingNextarrow.svg" alt="pageingNextarrow" width={12} height={13} />
//                         </button>
//                     </div>
//                     {/* 장기보관함, 재전송 */}
//                     <div className="reuseFunBtnWrap">
//                         <BaseButton width="112px" height="30px" fontSize="12px" fontWeight="600" backgroundColor="#0D42E5" borderRadius="50px" color="#fff">장기보관함</BaseButton>
//                         <BaseButton width="112px" height="30px" fontSize="12px" fontWeight="600" backgroundColor="#0D42E5" borderRadius="50px" color="#fff">재전송</BaseButton>
//                     </div>
//                 </div>
//             </form>
//         </S.SendResultTable>
//     )
// }
//
// export default SendResultTable;