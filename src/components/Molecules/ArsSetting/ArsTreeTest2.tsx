/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import ListItem from '@mui/material';
import * as S from './style/ArsTree.styles';
import BaseSelect from '../../Atom/BaseSelect';
import ArsSelectBox from './DivBox/SelectBox';
import ArsBox from './DivBox/ArsBox';
import ArsSmsModal from './Modal/ArsSmsModal';
import ArsCallModal from './Modal/ArsCallModal';
import ArsGuideModal from './Modal/ArsGuideModal';
import ArsRecordingModal from './Modal/ArsRecordingModal';
import { useFetch } from '../../../apis/utils/reactQuery';
import { getIs015, update015JsonFile } from '../../../apis/api/say015Apis'
import { UseMutateFunction, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ArsJsonData } from '../../../apis/api/pointApi';
import { instance, instanceFile } from 'apis/api/clientAxios';
import { useForm } from 'react-hook-form';
import { register } from 'module';
import { use015ARS } from 'components/hooks/customs/say015/say015ARS/use015ARS';
import { v4 as uuidv4 } from "uuid";
import { useUpdateJsonFile } from "../../hooks/customs/say015/say105Handle/useUpdateJsonFile.ts";
import { say015Number, selectButtonState } from "../../../recoil/atoms/say015Atom.ts";
import { useRecoilState, useRecoilValue } from "recoil";
import { useArsInitData } from "../../hooks/customs/say015/say105Handle/useArsInitData.ts";
import ArsMainModal from "./Modal/ArsMainModal.tsx";

interface TreeNode {
  id: number;
  children: TreeNode[];
  count: number;
}

interface NextItem {
  id: string;
  parameter: string;
  target: {
    type: string;
    level: string;
  };
  source: {
    type: string;
    userinput: string;
  };
  s015Data: {
    title: string;
    action: string;
    type: string;
    icon: string;
    ttsText: string;
  };
  next: NextItem[]; // NextItem의 배열
  count: number; // 안내멘트 확장 버튼 state값
}


const initialNext: NextItem[] = [];

interface ITreeNodeComponent {
  nodeSiblings: NextItem[],
  setArsData: React.Dispatch<any>,
  node: NextItem,
  nodeChild: NextItem,
  arsData: any,
  mainModalToggle: boolean
  setMainModalToggle: React.Dispatch<React.SetStateAction<boolean>>
  updatedJsonFile: () => void
}

const TreeNodeComponent: React.FC<ITreeNodeComponent> = ({ updatedJsonFile, mainModalToggle, setMainModalToggle, nodeSiblings, setArsData, node, nodeChild, arsData }) => {

  /* 인사말 설정 모달 토글 STATE */
  const [modalValue, setModalValue] = useState('');
  const [children, setChildren] = useState<NextItem[]>([]);
  const [siblings, setSiblings] = useState<NextItem[]>([]);
  const { initialS015Data } = useArsInitData({ id: node.id });


  const [postArsTree, setPostArsTree] = useState({
    id: 'root',
    parameter: '',
    target: { type: 'READ', level: '00000000000_tts_intro_campaign.wav' },
    source: { type: 'VALUE', userinput: 'none' },
    s015Data: initialS015Data,
    next: initialNext,
    count: 0,
  });

  const [modalTitle, setModalTitle] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [ulClassOff, setUlClassOff] = useState(false);
  const [selectButton, setSelectButton] = useState(false);

  const { handleAddButtonClick } = use015ARS({ setModalValue });
  // const { mutateUpdatedJsonFile } = useUpdateJsonFile({ arsData, setArsData });
  //
  // /* JsonFile 업데이트 Hook */
  // const updatedJsonFile = () => {
  //   mutateUpdatedJsonFile();
  // }

  const getNextNodeId = (nodes: NextItem[]): string => {
    const lastNodeId = nodes.length > 0 ? parseInt(nodes[nodes.length - 1].id, 10) : 0;
    const nextId: number = (lastNodeId % 12) + 1; // 다음 ID를 1씩 증가시킴
    if (node.id === '10') return '0';
    if (nextId === 11) return '*';
    if (nextId === 12) return '#';
    return nextId.toString();
  };



  const [selectButton2, setSelectButton2] = useState('');
  const [selectButton3, setSelectButton3] = useRecoilState(selectButtonState);

  const removeSelectBox = () => {
    // if (arsData.next.target.type === 'BLANK_ADD') {
    //   arsData.source.userinput = 'none';
    //   arsData.next.source.userinput = 'none'
    // }
    console.log(node.source.userinput)
  }


  const [selectBox, setSelectBox] = useState<any[]>([]);


  // const { data: IS015Data, isLoading, error } = useQuery(['/say015/token'], (accessToken) =>
  //   getIs015());


  const [test, setTest] = useState<HTMLElement | string | null>('');


  const addSelectBox = (e: any, node: any,) => {


    console.log(node)
    console.log(e.target.closest('.selected'))
    // console.log(selectButton3)
    // setTest((prev) => prev?.includes('selected') && e.target.parentNode.classList.remove('selected'))
    // e.target.parentNode.parentNode.classList.remove('selected');
    // 클릭한 요소 업데이트
    const prevId = document?.getElementById(`${selectButton3}on`);
    console.log(prevId)
    // console.log(document?.getElementById(`${selectButton3}on`))
    // console.log(prevId)
    if (prevId) {
      // console.log(prevId)
      // setTest((prev) => !prev?.includes('selected') && prevId.classList.add('selected'))
      prevId.classList.add('selected');
    }
    // setSelectButton2(e.target.parentNode.id);
    e.target.closest('.selected').classList.remove('selected');
    node.source.userinput = node.id.charAt(node.id.length - 1);

    setSelectButton3(node.id)
    // console.log(node.id)
    // console.log(selectButton3)
  };
  // console.log(selectButton3)



  // 수행동작 클릭시 list On
  useEffect(() => {
    const handleClickOutside = (event: any) => {

      if (event.target.name === 'button') {
        const nextElement = event.target.nextElementSibling;
        if (nextElement) {
          nextElement.style.display = 'block';
          setUlClassOff(ulClassOff);
          if (nextElement.style.display === 'block') {
            setSelectButton(true);
          }
        }
      } else {
        setUlClassOff(!ulClassOff);
        setSelectButton(false);
      }

    };


    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };


  }, [arsData]);


  // 형제 컴포넌트 생성
  const addNode = (parentNode: NextItem, newNode: NextItem) => {
    setPostArsTree((prevTree) => {
      const updatedParentNode = { ...parentNode };
      updatedParentNode.next.push(newNode);
      return { ...prevTree };
    });
  };

  const handleAddNode = () => {
    const newNodeId = String(Number(node.id) + 1);
    const newNode: NextItem = {
      id: newNodeId,
      parameter: '',
      target: { type: 'BLANK', level: '' },
      source: { type: 'VALUE', userinput: 'none' },
      s015Data: { title: '', action: '', type: '', icon: '', ttsText: '' },
      next: [],
      count: 0,
    };
    addNode(postArsTree, newNode);
    setChildren([...children, newNode]);
    if (modalValue === '안내멘트') {
      node.count = 1;
    } else {
      node.count = 0;
    }
  };


  // 하위 컴포넌트 생성
  const addSubNode = (parentNode: NextItem, subNode: NextItem) => {
    setPostArsTree((prevTree) => {
      const index = prevTree.next.findIndex((node) => node.id === parentNode.id);
      if (index !== -1) {
        if (!prevTree.next[index].next) {
          prevTree.next[index].next = []; // parentNode.next가 undefined이면 빈 배열로 초기화
        }
        prevTree.next[index].next.push(subNode);
      }
      return { ...prevTree };
    });

  };

  const handleAddSubNode = () => {
    const parentNode = postArsTree?.next[0]; // 예시를 위해 첫 번째 노드 선택
    console.log(parentNode);
    const subNodeId = node.id + (node.id.slice(0, 1));
    if (subNodeId === '#') return; // #일 경우 하위 노드 추가를 막음
    const subNode: NextItem = {
      id: subNodeId,
      parameter: '',
      target: { type: 'BLANK', level: '' },
      source: { type: 'VALUE', userinput: 'none' },
      s015Data: { title: '', action: '', type: '', icon: '', ttsText: '' },
      next: [],
      count: 1,
    };
    addSubNode(parentNode, subNode);
    setSiblings([...siblings, subNode]);
  };


  // console.log(node)

  return (
    <li id={`${node?.id}`} style={{ display: 'flex' }}>
      <S.ArsContainer>
        <S.ArsWrap id={`${node.id}on`} className={node.target.type === 'BLANK_ADD' || node.source.userinput === 'none' ? 'selected' : ''}>

          {/* <S.isButton id={`${node.id}on`} className={node?.source.userinput === 'none' ? 'selected' : ''}>
            {node.source.userinput !== 'none' && !String(test)?.includes('selected') ? (
              // <S.isButton id={`${node.id}on`}>
              <S.ConuntSpan>{node.source.userinput}</S.ConuntSpan>
            ) : (
              <S.userinput onClick={(e) => addSelectBox(e, node)} />
            )}
          </S.isButton> */}


          <S.isButton >
            <S.ConuntSpan className='userInput'>{node.source.userinput}</S.ConuntSpan>

            <S.userinput className='userButton' onClick={(e) => addSelectBox(e, node)} />


          </S.isButton>

          {/* {node.target.type !== 'BLANK' ? (
            <S.isButton id={`${node.id}on`} >
              <S.ConuntSpan>{node.source.userinput}</S.ConuntSpan>
            </S.isButton>
          ) : (
            <S.isButton id={`${node.id}on`} className='selected' >
              <S.userinput onClick={(e) => addSelectBox(e, node)} />
            </S.isButton>
          )} */}

          <div className='arsContainer'>
            {node.target.type !== 'BLANK' && node.source.userinput !== 'none' && (
              node.s015Data.action !== '' ? (
                <ArsBox
                  node={node}
                  nodeSiblings={nodeSiblings}
                  setModalValue={setModalValue}
                  nodeChild={nodeChild}
                  updatedJsonFile={updatedJsonFile}
                  arsData={arsData}
                />
              ) : (
                <ArsSelectBox
                  index={Number(node.id)}
                  ulClassOff={ulClassOff}
                  selectButton={selectButton}
                  setModalOpen={setModalOpen}
                  setModalValue={setModalValue}
                  setModalTitle={setModalTitle}
                />
              )
            )}
          </div>

        </S.ArsWrap>
      </S.ArsContainer>

      {node?.s015Data.action === '안내멘트' && (
        <div className='leftBorder'>



          {node?.next?.map((sibling: NextItem, index) => (
            sibling.source.userinput === '1' && sibling.target.type !== 'BLANK' && (
              // eslint-disable-next-line react/no-array-index-key
              <TreeNodeComponent updatedJsonFile={updatedJsonFile} setMainModalToggle={setMainModalToggle} mainModalToggle={mainModalToggle} setArsData={setArsData} arsData={arsData} key={index} nodeSiblings={node?.next} node={sibling} nodeChild={node?.next[index + 1]} />
            )
          ))}
          {node?.next?.map((child: NextItem, index) => (
            child.source.userinput !== '1' && child.target.type !== 'BLANK' && (
              // eslint-disable-next-line react/no-array-index-key
              <TreeNodeComponent updatedJsonFile={updatedJsonFile} setMainModalToggle={setMainModalToggle} mainModalToggle={mainModalToggle} nodeSiblings={node?.next} setArsData={setArsData} arsData={arsData} key={index} node={child} nodeChild={node?.next[index + 1]} />
            )

          ))}
        </div>
      )}


      {(!mainModalToggle && modalValue === '문자발송') &&
        <ArsSmsModal
          setModalOpen={setModalOpen}
          handleAddDiv={handleAddNode}
          setModalValue={setModalValue}
          addChild={handleAddNode}
          node={node}
          nodeChild={nodeChild}
          updatedJsonFile={updatedJsonFile}
          handleAddButtonClick={handleAddButtonClick}
          setSelectButton3={setSelectButton3}
        // modalSave={modalSave}
        // handleSubmit={handleSubmit}
        // register={register}
        />}
      {(!mainModalToggle && modalValue === '착신전환') &&
        <ArsCallModal
          updatedJsonFile={updatedJsonFile}
          node={node}
          nodeChild={nodeChild}
          handleAddDiv={handleAddNode}
          setModalValue={setModalValue}
          setSelectButton3={setSelectButton3}
        />}
      {(!mainModalToggle && modalValue === '안내멘트') &&
        <ArsGuideModal
          node={node}
          nodeChild={nodeChild}
          setModalValue={setModalValue}
          updatedJsonFile={updatedJsonFile}
          addChild={handleAddNode}
          setSelectButton3={setSelectButton3}
        />}
      {(!mainModalToggle && modalValue === '음성녹음 받기') &&
        <ArsRecordingModal
          updatedJsonFile={updatedJsonFile}
          node={node}
          nodeChild={nodeChild}
          handleAddDiv={handleAddNode}
          setModalValue={setModalValue}
          setSelectButton3={setSelectButton3}
        />}
    </li>

  );
};

const ArsTreeTest2 = () => {
  const say015NumberState = useRecoilValue(say015Number);
  const [arsData, setArsData] = useState<any>(null);

  const { data, isLoading, isSuccess } = useQuery(['arsJsonData'], () => ArsJsonData({ say015Number: say015NumberState as string }), {
    enabled: say015NumberState !== null
  });

  useEffect(() => {
    if (data && !isLoading) {
      setArsData(data);
    }
  }, [data, isLoading]);

  const { initJsonData } = useArsInitData({ id: "1" });

  /* 인사말 설정 모달 토글 STATE */
  const [mainModalToggle, setMainModalToggle] = useState<boolean>(false);
  const { mutateUpdatedJsonFile } = useUpdateJsonFile({ arsData, setArsData });

  /* JsonFile 업데이트 Hook */
  const updatedJsonFile = () => {
    mutateUpdatedJsonFile();
  }

  return (
    <>
      {
        mainModalToggle && (
          <ArsMainModal
            setMainModalToggle={setMainModalToggle}
            arsData={arsData}
            node={arsData}
            updatedJsonFile={updatedJsonFile}
            mainModalToggle={mainModalToggle}
          />
        )
      }
      {/* <S.ActionWrap id={arsData?.id} onClick={() => setMainModalToggle(prevState => !prevState)}>
        <S.ActionBox style={{ backgroundColor: ' rgba(255, 255, 255, 0.8)' }}>
          <S.Action>{arsData?.s015Data.action}</S.Action>
          <S.Content>{arsData?.s015Data.ttsText}</S.Content>
        </S.ActionBox>
      </S.ActionWrap> */}

      {arsData && (
        <S.ArsWrap style={{ padding: '10px 40px 0 0' }}>
          <ArsBox
            node={arsData}
            nodeSiblings={arsData?.next}
            setModalValue={setMainModalToggle}
            nodeChild={arsData?.next[0]}
            updatedJsonFile={updatedJsonFile}
            arsData={arsData}
          />
        </S.ArsWrap>
      )}

      <div style={{ position: 'relative' }} className='leftBorder'>
        {/* <button onClick={() => {
          if (say015NumberState) update015JsonFile({ arsData: initJsonData, say015Number: say015NumberState });
        }}>리셋</button> */}
        <ul key={uuidv4()}>
          {arsData?.next?.map((child: any, index: any) => (
            child.target.type !== 'BLANK' && (
              // eslint-disable-next-line react/no-array-index-key
              <TreeNodeComponent updatedJsonFile={updatedJsonFile} mainModalToggle={mainModalToggle} setMainModalToggle={setMainModalToggle} nodeSiblings={arsData?.next} key={index} setArsData={setArsData} arsData={arsData} node={child} nodeChild={arsData?.next[index + 1]} />
            )
          ))}
        </ul>
      </div>
    </>
  );
};

export default ArsTreeTest2;
