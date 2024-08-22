// import React, { useState } from 'react';
// import * as S from './TrashBoxPopup.styles';
// import BaseButton from '../../../../components/Atom/BaseButton';
// import AddressCheckBox from '../common/CheckBox';
// import { useCheckBin } from '../../../../components/hooks/customs/addressBook/recycleBin/useCheckBin';
// import { useRestoreBin } from '../../../../components/hooks/customs/addressBook/recycleBin/useRestoreBin';
// import { useDeleteBin } from '../../../../components/hooks/customs/addressBook/recycleBin/useDeleteBin';

// interface ITrashBoxPopup {
//   recycleBinClickHandle: React.MouseEventHandler<HTMLButtonElement>;
//   groupList: any;
//   recycleBinList: any;
//   recycleBinRefetch: any;
// }

// const TrashBoxPopup = ({ recycleBinClickHandle, groupList, recycleBinList, recycleBinRefetch }: ITrashBoxPopup) => {
//   const [selectState, setSelectState] = useState('연락처'); // 기본 Select State
//   const [selectSwitch, setSelectSwitch] = useState(false); // select 누르면 oprions 나올 스위치 버튼 역할

//   const [selectArrValue, setSelectArrValue] = useState([
//     // select 가상 데이터
//     { id: 0, name: 'name', koname: '이름' },
//     { id: 1, name: 'name', koname: '이름' },
//     { id: 2, name: 'number', koname: '연락처' },
//   ]);

//   const { binListRestoreHandle, setRestoreBinList } = useRestoreBin({ recycleBinRefetch });
//   const { binListDeleteHandle, setDeleteBinList } = useDeleteBin({ recycleBinRefetch });

//   const { checkedBinListHandle, toggleSelectAll, binSelectAll, checkedBinList } = useCheckBin({
//     recycleBinList,
//     setRestoreBinList,
//     setDeleteBinList,
//   });

//   const onClickSelectListButton = (e: React.MouseEvent<HTMLButtonElement>) => {
//     // select option 클릭 이벤트
//     const result = e.target as HTMLButtonElement;
//     if (typeof result.textContent === 'string') {
//       console.log(result.textContent);
//     }
//   };

//   return (
//     /* Beam 뒷배경 */
//     <S.TrashBoxPopupBeam>
//       {/* Beam 내부에 있는 실질적인 팝업 컴포넌트내용 */}
//       <S.TrashBoxPopup>
//         {/* TrashBoxHead 영역 휴지통, X 버튼 등 */}
//         <div className="trashBoxHead">
//           {/* 휴지통 아이콘 , 휴지통(number) */}
//           <div>
//             <img src="/img/trashBox/icon/trashBox.svg" alt="trashBoxicon" width={22} height={24} />
//             <h6>휴지통 </h6>
//             <span className="trashCanNum">({groupList?.recycleCount || '0'})</span>
//           </div>
//           <button onClick={recycleBinClickHandle}>
//             <img src="/img/trashBox/icon/closeBtn.svg" alt="popupCloseBtnicon" width={15} height={15} />
//           </button>
//         </div>
//         {/* ***** Start Table/Form Zone ***** */}
//         <form action="/" method="POST">
//           {/* Start TrashBox Function Zone */}
//           <div className="trashBoxFunZone">
//             {/* 휴지통 삭제, 휴지통 복원 */}
//             <div className="trashBoxFunBtnGroup">
//               <BaseButton onClick={binListDeleteHandle}>휴지통 삭제</BaseButton>
//               <BaseButton onClick={binListRestoreHandle}>휴지통 복원</BaseButton>
//             </div>
//             {/* 연락처 Select, 검색 Input */}
//             <div className="trashBoxFunRightZone">
//               <S.SelectWrapper>
//                 <button
//                   className={`${selectSwitch === true ? 'active' : null}`}
//                   type="button"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     setSelectSwitch(!selectSwitch);
//                   }}
//                 >
//                   {selectState}
//                   <img src="/img/sendresult/icon/selectarrow.svg" alt="selectArrow" width={17} height={6} />
//                 </button>
//                 {selectSwitch === true ? (
//                   <S.SelectOptions>
//                     {selectArrValue.map((item, index) => {
//                       return (
//                         <li key={item.id}>
//                           <button
//                             type="button"
//                             onClick={(e) => {
//                               onClickSelectListButton(e);
//                               setSelectSwitch(false);
//                             }}
//                           >
//                             {item.koname}
//                           </button>
//                         </li>
//                       );
//                     })}
//                   </S.SelectOptions>
//                 ) : null}
//               </S.SelectWrapper>
//               {/* 검색 input */}
//               <S.InputBox>
//                 <S.SearchInput type="text" placeholder="SEARCH" />
//                 <BaseButton type={'submit'} backgroundColor="transition">
//                   <img src="/img/sendresult/icon/search.svg" width={20} height={22} alt="searchImage" />
//                 </BaseButton>
//               </S.InputBox>
//             </div>
//           </div>
//           {/* End TrashBox Function Zone */}

//           {/* Start TableWrap Zone */}
//           <S.TableWrap>
//             {/* Start TableHead Zone */}
//             <S.TableHead>
//               <ul className="sendHeadList">
//                 {/* All CheckBox */}
//                 <li className="w5">
//                   <AddressCheckBox
//                     onChange={(e) => {
//                       toggleSelectAll(e);
//                     }}
//                     checked={binSelectAll}
//                   />
//                 </li>
//                 <li className="w15">
//                   <strong>그룹</strong>
//                 </li>
//                 <li className="w10">
//                   <strong>이름</strong>
//                 </li>
//                 <li className="w20">
//                   <strong>연락처</strong>
//                 </li>
//                 <li className="w25">
//                   <strong>이메일</strong>
//                 </li>
//                 <li className="w25">
//                   <strong>메모</strong>
//                 </li>
//               </ul>
//             </S.TableHead>
//             {/* End TableHead Zone */}

//             {/* Start TableBody Zone */}
//             <S.TableBody>
//               {recycleBinList &&
//                 recycleBinList.content.map((el: any) => (
//                   <ul key={el.buddySeqNo} className="tableBodyList">
//                     <li className="w5">
//                       <AddressCheckBox
//                         onChange={() => {
//                           checkedBinListHandle(el.buddySeqNo);
//                         }}
//                         checked={checkedBinList.includes(el.buddySeqNo)}
//                       />
//                     </li>
//                     <li className="w15">
//                       <span>{el.groupNm}</span>
//                     </li>
//                     <li className="w10">
//                       <span>{el.buddyNm}</span>
//                     </li>
//                     <li className="w20">
//                       <span>{el.keyCommNo}</span>
//                     </li>
//                     <li className="w25 ">
//                       <span>{el.emailId}</span>
//                     </li>
//                     <li className="w25">
//                       <span>{el.etcInfo}</span>
//                     </li>
//                   </ul>
//                 ))}
//             </S.TableBody>
//             {/* End TableBody Zone */}
//           </S.TableWrap>

//           {/* End TableWrap Zone */}
//         </form>
//         {/* ***** End Table/Form Zone ***** */}
//       </S.TrashBoxPopup>
//     </S.TrashBoxPopupBeam>
//   );
// };

// export default TrashBoxPopup;
