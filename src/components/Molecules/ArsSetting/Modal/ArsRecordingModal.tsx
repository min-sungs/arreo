import React, { useEffect, useState } from 'react';
import ListItem from '@mui/material';
import * as S from './style/ArsRecordingModal.styles';
import BaseSelect from '../../../Atom/BaseSelect';
import BaseButton from '../../../Atom/BaseButton';
import { NextItem } from "../../../hooks/customs/say015/say015ARS/use015ARS.ts";
import { useArsRecording } from "../../../hooks/customs/say015/say105Handle/useArsRecording.ts";
import { useArsModalCancel } from "../../../hooks/customs/say015/say105Handle/useArsModalCancle.ts";

type ModalAction = '';

interface modalOpenProps {
  // modalOpen: boolean;
  setModalValue: (action: ModalAction) => void;
  // handleAddDiv: () => void;
  handleAddDiv: () => void;
  node: any;
  nodeChild: NextItem;
  updatedJsonFile(): void;
  setSelectButton3: any;
}

const ArsRecordingModal: React.FC<modalOpenProps> =
  ({ updatedJsonFile, nodeChild, node, setModalValue, setSelectButton3, }) => {
    const [textClick, setTextClick] = useState<boolean>(true);

    const hooks = useArsRecording({ node, nodeChild, updatedJsonFile });

    useEffect(() => {
      hooks.handleArsSms();
      setSelectButton3('');
    }, [node]);

    const clickOff = (e: any) => {
      if (e.target.id !== 'off') {
        setTextClick(false);
      } else {
        setTextClick(true);
      }
    }
    /* 취소 */
    const { modalOff } = useArsModalCancel({ node, setModalValue });

    const modalSave = () => {
      hooks.handleArsSms();
      setSelectButton3('');
    }
    return (

      <S.SmsContainer id='smsContainer' style={{display: 'none'}}>
        <S.SmsCover id='smsCover' onClick={clickOff}>
          <S.Title>음성녹음 받기</S.Title>

          <S.TextCover className={textClick ? 'on' : 'off'}>

            <S.TextArea id='off' placeholder='음성녹음 접수 문자를 입력해주세요.&#13;&#10;(ex. 귀하의 문의사항이 정상 접수되었습니다.)' />


          </S.TextCover>


          <S.GuideBottom>
            <BaseButton onClick={modalSave}>저장</BaseButton>
            <BaseButton marginLeft='24px' onClick={modalOff}>취소</BaseButton>
          </S.GuideBottom>


        </S.SmsCover>
      </S.SmsContainer>


    )
  }

export default ArsRecordingModal;