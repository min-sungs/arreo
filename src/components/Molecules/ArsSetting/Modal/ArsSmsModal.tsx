import React, { useEffect, useState } from 'react';
import ListItem from '@mui/material';
import * as S from './style/ArsSmsModal.styles';
import BaseSelect from '../../../Atom/BaseSelect';
import BaseButton from '../../../Atom/BaseButton';
import { FieldValues, UseFormHandleSubmit, UseFormRegister, useForm } from 'react-hook-form';
import { instanceFile } from 'apis/api/clientAxios';
import { NextItem } from "../../../hooks/customs/say015/say015ARS/use015ARS.ts";
import { useArsSms } from "../../../hooks/customs/say015/say105Handle/useArsSms.ts";

type ModalAction = '';


interface modalOpenProps {
  // modalOpen: boolean;
  setModalValue: (action: ModalAction) => void;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddDiv: () => any;
  addChild: () => any;
  handleAddButtonClick: any;
  node: any;
  nodeChild: NextItem;
  updatedJsonFile(): void;
  setSelectButton3: any;
}





const ArsSmsModal: React.FC<modalOpenProps> = ({ updatedJsonFile, nodeChild, setModalOpen, handleAddDiv, setModalValue, addChild, node, setSelectButton3 }) => {

  /* Hooks */
  const { handleArsSms, handleSmsText, smsTextState, setSmsTextState } = useArsSms({ node, nodeChild, updatedJsonFile });



  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    mode: 'onSubmit',
  });

  const [textClick, setTextClick] = useState<boolean>(true);

  const clickOff = (e: any) => {
    if (e.target.id !== 'off') {
      setTextClick(false);
    } else {
      setTextClick(true);
    }
  }

  const modalSave = () => {
    const valiSmsTextState = smsTextState.trim();
    if (!valiSmsTextState) {
      setSmsTextState('');
      return
    }
    handleArsSms();
    setSelectButton3('');
  }

  const modalOff = () => {
    setModalOpen(false);
    setModalValue('');
  }


  return (

    <S.SmsContainer id='smsContainer'>
      <S.SmsCover id='smsCover' onClick={clickOff}>
        <S.Title>문자발송</S.Title>

        <S.TextCover className={textClick ? 'on' : 'off'}>
          <S.TextArea
            {...register(`node.s015Data.ttsText`, {
              required: '해당 필드는 필수입니다.',
            })}
            id='off' placeholder='발송할 문자 내용을 입력해주세요.'
            onChange={handleSmsText}
            value={smsTextState}
            required
          />
        </S.TextCover>


        <S.SmsBottom>
          {/*<BaseButton type='button' onClick={() => handleAddButtonClick(node)}>저장</BaseButton>*/}
          <BaseButton type='button' onClick={modalSave}>저장</BaseButton>
          <BaseButton marginLeft='24px' onClick={modalOff}>취소</BaseButton>
        </S.SmsBottom>


      </S.SmsCover>
    </S.SmsContainer>


  )
}

export default ArsSmsModal;