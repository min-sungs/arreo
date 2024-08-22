// import React, { useEffect, useState } from 'react';
// import ListItem from '@mui/material';
// import * as S from './style/ArsTree.styles';
// import BaseSelect from '../../Atom/BaseSelect';
// import ArsSelectBox from './DivBox/SelectBox';
// import ArsBox from './DivBox/ArsBox';
// import ArsSmsModal from './Modal/ArsSmsModal';
// import ArsCallModal from './Modal/ArsCallModal';
// import ArsGuideModal from './Modal/ArsGuideModal';
// import ArsRecordingModal from './Modal/ArsRecordingModal';
// import { useFetch } from '../../../apis/utils/reactQuery';
// import { getIs015 } from '../../../apis/api/say015Apis'
// import { useQuery } from '@tanstack/react-query';
// import { ArsJsonData } from '../../../apis/api/pointApi';

// interface TreeNode {
//   id: number;
//   children: TreeNode[];
//   count: number;
// }

// interface Is015 {
//   rsrvdId: String;
//   username: String;
//   isActive: boolean;
// }

// const TreeNodeComponent: React.FC<{ node: TreeNode, addRootChild: () => void }> = ({ node, addRootChild }) => {
//   const [children, setChildren] = useState<TreeNode[]>([]);
//   const [siblings, setSiblings] = useState<TreeNode[]>([]);

//   const [modalValue, setModalValue] = useState('');
//   const [modalTitle, setModalTitle] = useState('');
//   const [modalOpen, setModalOpen] = useState(false);
//   const [ulClassOff, setUlClassOff] = useState(false);
//   const [selectButton, setSelectButton] = useState(false);

//   const [selectBox, setSelectBox] = useState<any[]>([]);
//   // 새로운 div를 생성하는 함수
//   const addSelectBox = () => {
//     // 이전 div 텍스트 배열을 복사하여 새로운 div 텍스트를 추가합니다.
//     const newTexts = [...selectBox, `${selectBox.length + 1}`];
//     setSelectBox(newTexts);
//   };

//   // const { data: arsData, isLoading, error } = useQuery(['arsJsonData'], () => ArsJsonData());

//   // const { data: IS015Data, isLoading, error } = useQuery(['/say015/token'], (accessToken) =>
//   //   getIs015());

//   // console.log(arsData)

//   useEffect(() => {
//     const handleClickOutside = (event: any) => {

//       if (event.target.name === 'button') {
//         const nextElement = event.target.nextElementSibling;
//         if (nextElement) {
//           nextElement.style.display = 'block';
//           setUlClassOff(ulClassOff);
//           if (nextElement.style.display === 'block') {
//             setSelectButton(true);
//           }
//         }
//       } else {
//         setUlClassOff(!ulClassOff);
//         setSelectButton(false);
//       }
//     };

//     document.body.addEventListener('click', handleClickOutside);
//     return () => {
//       document.body.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   const addChild = () => {
//     const newChildId = node.id + 1; // 임의의 ID 생성
//     const newChild: TreeNode = {
//       id: newChildId,
//       count: 0,
//       children: [],
//     };
//     setChildren([...children, newChild]);
//     if (modalValue === '안내멘트') {
//       node.count = 1;
//     } else {
//       node.count = 0;
//     }
//   };

//   const addSibling = () => {
//     console.log(modalValue)
//     const newSiblingId = node.id - node.id;
//     const newSibling: TreeNode = {
//       id: newSiblingId,
//       count: 1,
//       children: [],
//     };
//     setSiblings([...siblings, newSibling]);

//   };



//   return (
//     <div>
//       {/* <button onClick={addSibling}>Add Sibling</button> */}
//       <ul>
//         <li id={`${node.id}`} style={{ display: 'flex' }}>
//           <S.ArsContainer>
//             <S.ArsWrap>
//               {selectBox.length === 1 || children.length === 1 || node.count >= 1 ? (
//                 <S.isButton>
//                   <S.ConuntSpan>{node.id + 1}</S.ConuntSpan>
//                 </S.isButton>
//               ) : (
//                 <S.isButton>
//                   <S.userinput onClick={addSelectBox} />
//                 </S.isButton>
//               )}
//               {(selectBox.length === 1 || children.length !== 0 || node.count >= 1) && (
//                 children.length === 1 ? (
//                   <ArsBox count={node.count} textTitle={modalTitle} setModalValue={setModalValue} />
//                 ) : (
//                   <ArsSelectBox index={node.id}
//                     ulClassOff={ulClassOff}
//                     selectButton={selectButton}
//                     setModalOpen={setModalOpen}
//                     setModalValue={setModalValue}
//                     setModalTitle={setModalTitle}
//                   />
//                 )
//               )}
//             </S.ArsWrap>
//           </S.ArsContainer>
//           {node.count === 1 && (
//             <div style={{ display: 'flex' }} className='leftBorder'>
//               {siblings.length === 0 && children.length !== 0 && (
//                 <S.isButton>
//                   <S.userinput onClick={addSibling} />
//                 </S.isButton>
//               )}
//               {siblings.map((sibling, index) => (
//                 // eslint-disable-next-line react/no-array-index-key
//                 <TreeNodeComponent key={index} node={sibling} addRootChild={addRootChild} />
//               ))}
//             </div>
//           )}
//         </li>
//       </ul>

//       {children.map((child, index) => (
//         // eslint-disable-next-line react/no-array-index-key
//         <TreeNodeComponent key={index} node={child} addRootChild={addRootChild} />

//       ))}


//       {/* {modalValue === '문자발송' &&
//         <ArsSmsModal
//           setModalOpen={setModalOpen}
//           handleAddDiv={addChild}
//           setModalValue={setModalValue}
//           addChild={addChild}
//         />} */}
//       {modalValue === '착신전환' &&
//         <ArsCallModal
//           handleAddDiv={addChild}
//           setModalValue={setModalValue}
//         />}
//       {modalValue === '음성녹음 받기' &&
//         <ArsRecordingModal
//           handleAddDiv={addChild}
//           setModalValue={setModalValue}
//         />}
//       {modalValue === '안내멘트' &&
//         <ArsGuideModal
//           setModalOpen={setModalOpen}
//           setModalValue={setModalValue}
//           addChild={addChild}
//         />}
//     </div>
//   );
// };

// const ArsTreeTest: React.FC = () => {
//   const [root, setRoot] = useState<TreeNode>({
//     id: -1,
//     children: [],
//     count: 0,
//   });

//   const [firstButton, setFirstButton] = useState(false);



//   const addRootChild = () => {
//     const newChildId = root.id + 1;
//     const newChild: TreeNode = {
//       id: newChildId,
//       children: [],
//       count: 2,
//     };
//     setRoot({
//       ...root,
//       children: [...root.children, newChild],
//     });
//     setFirstButton(true);
//   };







//   return (
//     <div>
//       {/* <h2>Infinite Tree</h2> */}

//       <div style={{ position: 'relative' }} className='leftBorder'>
//         {!firstButton &&
//           <S.isButton style={{ top: '47.5px' }}>
//             <S.userinput
//               onClick={addRootChild}
//             />
//           </S.isButton>}
//         {root.children.map((child, index) => (
//           // eslint-disable-next-line react/no-array-index-key
//           <TreeNodeComponent key={index} node={child} addRootChild={addRootChild} />
//         ))}
//       </div>

//       {/* {modalValue === '문자발송' && <ArsSmsModal setModalOpen={setModalOpen} handleAddDiv={addRootChild} setModalValue={setModalValue} />} */}
//       {/* {modalOpen === '착신전환' && <ArsCallModal setModalOpen={setModalOpen} handleAddDiv2={handleAddDiv} />} */}
//       {/* {modalOpen && <ArsGuideModal setModalOpen={setModalOpen} handleAddDiv={handleAddDiv} handleAddDiv2={handleAddDiv2} setModalValue={setModalValue} />} */}
//       {/* {modalOpen === '음성녹음 받기' && <ArsRecordingModal setModalOpen={setModalOpen} handleAddDiv2={handleAddDiv} />} */}
//     </div>


//   );
// };

// export default ArsTreeTest;
