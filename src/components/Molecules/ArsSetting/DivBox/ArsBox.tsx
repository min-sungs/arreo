/* eslint-disable */
import React, { useEffect, useState } from 'react';
import * as S from './style/ArsBox.styles';
import BaseButton from 'components/Atom/BaseButton';
import { NextItem } from "../../../hooks/customs/say015/say015ARS/use015ARS.ts";
import { udBoxState } from 'recoil/atoms/say015Atom.ts';
import { useRecoilState } from 'recoil';
import { useArsInitData } from 'components/hooks/customs/say015/say105Handle/useArsInitData.ts';


interface IArsBox {
  node: NextItem
  nodeChild: NextItem
  setModalValue: any
  updatedJsonFile: () => void
  arsData: any
  nodeSiblings: NextItem[]
}

const ArsBox = ({ nodeSiblings, node, setModalValue, nodeChild, updatedJsonFile, arsData }: IArsBox) => {

  const modalOpen = () => {
    if (node.s015Data.action === '인사말') {
      setModalValue((prevState: any) => !prevState)
    } else {
      setModalValue(node.s015Data.action)
    }
    console.log(node.s015Data.action)
  }
  /* 015 ARS 문자 삭제 */
  const deleteArsSms = () => {
    node.s015Data.action = "";
    node.s015Data.type = "";
    node.s015Data.ttsText = "";
    node.target.level = "";
    node.source.userinput = "none";
    node.next = [];

    let startIdx = -1;

    for (let i = 0; i < nodeSiblings.length; i++) {
      if (nodeSiblings[i].source.userinput === "none") {
        if (startIdx === -1) {
          startIdx = i;
        }
      } else {
        startIdx = -1;
      }
    }
    const underNodes = nodeSiblings.slice(startIdx);
    underNodes.forEach((underNode: any, index: number) => {
      if (index === 0) {
        underNode.target.type = "BLANK_ADD"
      } else {
        underNode.target.type = "BLANK"
      }
      underNode.source.userinput = "none";
    })
    updatedJsonFile();
  }

  const [udBoxToggle, setUdBoxToggle] = useState('');

  // const udBoxOn = () => {

  //   setUdBoxToggle(true)
  // }


  // useEffect(() => {
  //   const handleClickOutside = (event: any) => {
  //     const udBoxList = document.getElementsByTagName('ul');
  //     console.log(udBoxList)
  //     if (event.target.name === 'button') {
  //       console.log(event.target.id)
  //     }

  //   };


  //   document.body.addEventListener('click', handleClickOutside);
  //   return () => {
  //     document.body.removeEventListener('click', handleClickOutside);
  //   };


  // }, [arsData]);


  const [visibleId, setVisibleId] = useRecoilState(udBoxState);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      // UdBox 외부 클릭 시 모든 UdBox를 숨김
      setVisibleId(null);
      // if (event.target.name === 'button') {
      //   setVisibleId(null);
      // }
    };

    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleMenuClick = (event: any) => {
    event.stopPropagation(); // 메뉴 클릭 시 UdBox 영역이 사라지지 않도록 이벤트 전파 중지

    const prev = document.getElementById(`${visibleId}ul`)
    if (prev) {
      prev.style.display = 'none';
    }

    const clickedId = event.currentTarget.getAttribute('id');
    setVisibleId(clickedId); // 클릭한 요소의 ID를 보여줌
    console.log(clickedId)
  };


  const { initJsonData } = useArsInitData({ id: "root" });

  return (

    <S.ActionWrap>
      <S.ArsBox
        className={`
      ${(node.s015Data.action === '안내멘트' || node.s015Data.action === '인사말') && 'on'} 
      ${node.s015Data.action === '문자발송' && 'sms'} 
      ${node.s015Data.action === '안내멘트' || node.s015Data.action === '인사말' ? 'ment' : ''} 
      ${node.s015Data.action === '인사말' && 'main'}`}>
        <S.Action>{node.s015Data.action}</S.Action>
        {
          node.s015Data.action === '인사말' && (
            <S.Content>
              {( node.s015Data.ttsText === '' && node.target.level === '' ) ? initJsonData.s015Data.ttsText :
                ( node.s015Data.ttsText === '' && node.target.level !== '' ) ? node.target.level : node.s015Data.ttsText}
            </S.Content>
          )
        }
        {
          node.s015Data.action !== '인사말' && (
            <S.Content>
              {( node.s015Data.ttsText === '' && node.target.level === '' ) ? '' :
                ( node.s015Data.ttsText === '' && node.target.level !== '' ) ? node.target.level : node.s015Data.ttsText}
            </S.Content>
          )
        }
        <S.menu id={`${node.id}`} name='button' onClick={handleMenuClick}>
          <div />
          <div />
          <div />
        </S.menu>
      </S.ArsBox>
      {node.id !== '' && (
        <S.UdBox id={`${node.id}ul`} style={{ display: visibleId === node.id ? 'block' : 'none' }}>
          <li>
            {node.s015Data.action !== '음성녹음 받기' && (<BaseButton onClick={modalOpen}>수정</BaseButton>)}
          </li>
          <li>
            {node.id !== 'root' && (<BaseButton onClick={deleteArsSms}>삭제</BaseButton>)}
          </li>
        </S.UdBox>
      )}
    </S.ActionWrap>


  )
}

export default ArsBox;