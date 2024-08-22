import React, { useEffect, useState } from 'react';
import * as S from './style/ArsCallModal.styles';
import BaseSelect from '../../../Atom/BaseSelect';
import BaseButton from '../../../Atom/BaseButton';
import SelectBox from '../../../Atom/SelectBox';
import { NextItem } from "../../../hooks/customs/say015/say015ARS/use015ARS.ts";
import { useArsCall } from "../../../hooks/customs/say015/say105Handle/useArsCall.ts";

type ModalAction = '';

interface modalOpenProps {
  // modalOpen: boolean;
  setModalValue: (action: ModalAction) => void;
  handleAddDiv: () => void;
  node: any;
  nodeChild: NextItem;
  updatedJsonFile(): void;
  setSelectButton3: any;
}

const ArsSmsModal: React.FC<modalOpenProps> = ({ updatedJsonFile, node, nodeChild, setModalValue, setSelectButton3 }) => {

  const hooks = useArsCall({ node, nodeChild, updatedJsonFile });

  const modalSave = () => {
    if (hooks.selectState === '선택') {
      return
    }
    hooks.handleArsCall()
    setSelectButton3('')
  };

  const modalOff = () => {
    setModalValue('');
  };

  return (
    <S.CallContainer id="callContainer">
      <S.CallCover id="callCover">
        <S.Title>착신전환</S.Title>
        {/* <S.SubTitle>착신번호 설정</S.SubTitle> */}

        <S.TextCover>
          <S.SearchWrapper>
            <S.SelectWrapper>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  hooks.setSelectSwitch(!hooks.selectSwitch);
                }}
              >
                {hooks.selectState}
                <i>▼</i>
              </button>
              {hooks.selectSwitch === true ? (
                <S.SelectOptions>
                  {hooks.addressSelect.map((item, index) => {
                    return (
                      <li key={item.value}>
                        <button
                          type="button"
                          onClick={(e) => {
                            hooks.onClickSelectListButton(e);
                            hooks.setSelectSwitch(false);
                          }}
                        >
                          {item.label}
                        </button>
                      </li>
                    );
                  })}
                </S.SelectOptions>
              ) : null}
            </S.SelectWrapper>
            <S.PhoneInput placeholder="착신번호를 입력해주세요"
              value={hooks.callNumberState}
              onChange={hooks.handleCallNumber}
              required
            />
          </S.SearchWrapper>
        </S.TextCover>

        <S.CallBottom>
          <BaseButton onClick={modalSave}>저장</BaseButton>
          <BaseButton marginLeft="24px" onClick={modalOff}>
            취소
          </BaseButton>
        </S.CallBottom>
      </S.CallCover>
    </S.CallContainer>
  );
};

export default ArsSmsModal;
