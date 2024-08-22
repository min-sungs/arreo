import { NextItem } from '../say015ARS/use015ARS.ts';
import { ChangeEvent, useEffect, useState } from 'react';
import TextArea from '../../../../Atom/TextArea.tsx';
import { useArsInitData } from './useArsInitData.ts';

/**
 * @title 015 Ars 문자 팝업 Hooks
 * */
interface IUseArsSms {
  node: NextItem;
  nodeChild: NextItem;
  updatedJsonFile(): void;
}
export const useArsSms = ({ nodeChild, node, updatedJsonFile }: IUseArsSms) => {
  /* 문자 발송 STATE */
  const [smsTextState, setSmsTextState] = useState<string>('');

  const { initSmsNextData } = useArsInitData({ id: node.id });

  /* 초기 작업 */
  useEffect(() => {
    if (node.target.type !== 'BLANK') setSmsTextState(node.target.level);
  }, [node]);

  /* 문자 메세지 STATE 핸들러 Hook */
  const handleSmsText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setSmsTextState(e.currentTarget.value);
  };

  /* 015 ARS 문자 수정 Hook */
  const handleArsSms = () => {
    node.s015Data.action = '문자발송';
    node.s015Data.type = 'LINK_SMS';
    node.target.type = 'LINK';
    node.target.level = smsTextState;
    node.next = initSmsNextData;
    if (nodeChild.target.type === 'BLANK') {
      nodeChild.target.type = 'BLANK_ADD';
      nodeChild.source.userinput = 'none';
    }
    updatedJsonFile();
  };

  return {
    handleArsSms,
    handleSmsText,
    smsTextState,
    setSmsTextState,
  };
};
