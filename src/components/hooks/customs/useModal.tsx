import React from 'react';
import { Modal } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

interface IUseModalReturn {
  successModal: (title?: string, content?: string, centered?: boolean, path?: string, info?: any) => void;
  warningModal: (title?: string, content?: string, centered?: boolean, path?: string) => void;
  confirmModal: (
    onOk: () => Promise<void> | void,
    title?: string,
    content?: string,
    centered?: boolean,
    path?: string,
    onCancel?: () => Promise<void> | void,
  ) => void;
}

export const useModal = (): IUseModalReturn => {
  const splitedContentFun = (content: string | undefined) => {
    const splitedContent = <div>{content?.split('</br>').map((el: any) => <p key={uuidv4()}>{el}</p>)}</div>;
    return splitedContent;
  };
  const navigate = useNavigate();

  const successModal = (title?: string, content?: string, centered?: boolean, path?: string, info?: any) => {
    const splitedContent = splitedContentFun(content);
    Modal.success({
      title,
      content: splitedContent,
      centered,
      okText: '확인',
      onOk: () => {
        path ? navigate(path, { state: info }) : '';
      },
    });
  };
  const warningModal = (title?: string, content?: string, centered?: boolean, path?: string) => {
    const splitedContent = splitedContentFun(content);
    Modal.warning({
      title,
      content: splitedContent,
      centered,
      okText: '확인',
      onOk: () => {
        path ? navigate(path) : '';
      },
    });
  };

  const confirmModal = (
    onOk: () => Promise<void> | void,
    title?: string,
    content?: string,
    centered?: boolean,
    path?: string,
    onCancel?: () => void,
  ) => {
    const splitedContent = splitedContentFun(content);

    Modal.confirm({
      title,
      content: splitedContent,
      centered,
      onOk,
      onCancel,
    });
  };

  return {
    successModal,
    warningModal,
    confirmModal,
  };
};
