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

// interface NextItem {
//   id: string;
//   parameter: string;
//   target: {
//     type: string;
//     level: string;
//   };
//   source: {
//     type: string;
//     userinput: string;
//   };
//   s015Data: {
//     title: string;
//     action: string;
//     type: string;
//     icon: string;
//     ttsText: string;
//   };
//   next: NextItem[]; // NextItem의 배열
//   count: number; // 안내멘트 확장 버튼 state값
// }

// const initialS015Data = {
//   title: '',
//   action: '인사말',
//   type: 'READ',
//   icon: 'mdi-dialpad',
//   ttsText: '안녕하세요, 쎄이015 입니다.\n1번을 누르시면 음성메모 남기기로 연결합니다.',
//   defaultPlayFile: {
//     LINK_SMS: '00000000000_default_LINK_SMS.wav',
//     LINK_HOOKING: '00000000000_default_LINK_HOOKING.wav',
//     LINK_URL_SMS: '00000000000_default_LINK_URL_SMS.wav',
//   },
// };

// const initialNext: NextItem[] = [];

// const TreeNodeComponent: React.FC<{ node: NextItem, addRootChild: () => void }> = ({ node, addRootChild }) => {

//   const [children, setChildren] = useState<NextItem[]>([]);
//   const [siblings, setSiblings] = useState<NextItem[]>([]);

//   const [postArsTree, setPostArsTree] = useState({
//     id: 'root',
//     parameter: '',
//     target: { type: 'READ', level: '00000000000_tts_intro_campaign.wav' },
//     source: { type: 'VALUE', userinput: 'none' },
//     s015Data: initialS015Data,
//     next: initialNext,
//     count: 0,
//   });

//   console.log('postArsTree', postArsTree);

//   const getNextNodeId = (nodes: NextItem[]): string => {
//     const lastNodeId = nodes.length > 0 ? parseInt(nodes[nodes.length - 1].id, 10) : 0;
//     const nextId: number = (lastNodeId % 12) + 1; // 다음 ID를 1씩 증가시킴
//     if (node.id === '10') return '0';
//     if (nextId === 11) return '*';
//     if (nextId === 12) return '#';
//     return nextId.toString();
//   };





//   const [modalValue, setModalValue] = useState('');
//   const [modalTitle, setModalTitle] = useState('');
//   const [modalOpen, setModalOpen] = useState(false);
//   const [ulClassOff, setUlClassOff] = useState(false);
//   const [selectButton, setSelectButton] = useState(false);


//   const [selectBox, setSelectBox] = useState<any[]>([]);
//   const addSelectBox = () => {
//     const newTexts = [...selectBox, `${selectBox.length + 1}`];
//     setSelectBox(newTexts);
//   };


//   // const { data: IS015Data, isLoading, error } = useQuery(['/say015/token'], (accessToken) =>
//   //   getIs015());

//   // 수행동작 클릭시 list On
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




//   // 형제 컴포넌트 생성
//   const addNode = (parentNode: NextItem, newNode: NextItem) => {
//     setPostArsTree((prevTree) => {
//       const updatedParentNode = { ...parentNode };
//       updatedParentNode.next.push(newNode);
//       return { ...prevTree };
//     });
//   };

//   const handleAddNode = () => {
//     const newNodeId = String(Number(node.id) + 1);
//     const newNode: NextItem = {
//       id: newNodeId,
//       parameter: '',
//       target: { type: 'BLANK', level: '' },
//       source: { type: 'VALUE', userinput: 'none' },
//       s015Data: { title: '', action: '', type: '', icon: '', ttsText: '' },
//       next: [],
//       count: 0,
//     };
//     addNode(postArsTree, newNode);
//     setChildren([...children, newNode]);
//     if (modalValue === '안내멘트') {
//       node.count = 1;
//     } else {
//       node.count = 0;
//     }
//   };


//   // 하위 컴포넌트 생성
//   const addSubNode = (parentNode: NextItem, subNode: NextItem) => {
//     setPostArsTree((prevTree) => {
//       const index = prevTree.next.findIndex((node) => node.id === parentNode.id);
//       if (index !== -1) {
//         if (!prevTree.next[index].next) {
//           prevTree.next[index].next = []; // parentNode.next가 undefined이면 빈 배열로 초기화
//         }
//         prevTree.next[index].next.push(subNode);
//       }
//       return { ...prevTree };
//     });

//   };

//   const handleAddSubNode = () => {
//     const parentNode = postArsTree?.next[0]; // 예시를 위해 첫 번째 노드 선택
//     console.log(parentNode);
//     const subNodeId = node.id + (node.id.slice(0, 1));
//     if (subNodeId === '#') return; // #일 경우 하위 노드 추가를 막음
//     const subNode: NextItem = {
//       id: subNodeId,
//       parameter: '',
//       target: { type: 'BLANK', level: '' },
//       source: { type: 'VALUE', userinput: 'none' },
//       s015Data: { title: '', action: '', type: '', icon: '', ttsText: '' },
//       next: [],
//       count: 1,
//     };
//     addSubNode(parentNode, subNode);
//     setSiblings([...siblings, subNode]);
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
//                   <S.ConuntSpan>{node.id}</S.ConuntSpan>
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
//                   <ArsSelectBox index={Number(node.id)}
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
//                   <S.userinput onClick={handleAddSubNode} />
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
//           handleAddDiv={handleAddNode}
//           setModalValue={setModalValue}
//           addChild={handleAddNode}
//         />} */}
//       {modalValue === '착신전환' &&
//         <ArsCallModal
//           handleAddDiv={handleAddNode}
//           setModalValue={setModalValue}
//         />}
//       {modalValue === '음성녹음 받기' &&
//         <ArsRecordingModal
//           handleAddDiv={handleAddNode}
//           setModalValue={setModalValue}
//         />}
//       {modalValue === '안내멘트' &&
//         <ArsGuideModal
//           setModalOpen={setModalOpen}
//           setModalValue={setModalValue}
//           addChild={handleAddNode}
//         />}
//     </div>
//   );
// };

// const ArsTreeTest: React.FC = () => {

//   const { data: arsData, isLoading, error } = useQuery(['arsJsonData'], () => ArsJsonData());
//   console.log(arsData)

//   const [root, setRoot] = useState<NextItem>({
//     id: '1',
//     parameter: '',
//     target: { type: 'BLANK', level: '' },
//     source: { type: 'VALUE', userinput: 'none' },
//     s015Data: { title: '', action: '', type: '', icon: '', ttsText: '' },
//     next: [],
//     count: 0,
//   });

//   const [firstButton, setFirstButton] = useState(false);




//   const addRootChild = () => {

//     const newChild: NextItem = {
//       id: '1',
//       parameter: '',
//       target: { type: 'BLANK', level: '' },
//       source: { type: 'VALUE', userinput: 'none' },
//       s015Data: { title: '', action: '', type: '', icon: '', ttsText: '' },
//       next: [arsData],
//       count: 2,
//     };
//     setRoot({
//       ...root,
//       next: [...root.next, newChild],
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
//         {root.next.map((child, index) => (
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
