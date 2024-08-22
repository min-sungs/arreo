import React from "react";

import {Modal} from "antd";
import {v4 as uuidv4} from 'uuid'

interface IUseModalReturn {
  successModal: (title?: string, content?: string, centered?: boolean, path?: string) => void;
  warningModal: (title?: string, content?: string, centered?: boolean, path?: string) => void;
  confirmModal: (
    onOk: () => Promise<void>,
    title?: string,
    content?: string,
    centered?: boolean,
    path?: string
  ) => void;
}

export const useModalHook = (): IUseModalReturn => {
  // const FRONT_HOST = process.env.FRONT_HOST;
  // const router = useRouter();
  const splitedContentFun = (content: string | undefined) => {
    const splitedContent = (
      <div>
        {content?.split("</br>").map((el) => (
          <p key={uuidv4()}>{el}</p>
        ))}
      </div>
    );
    return splitedContent;
  };

  const successModal = (title?: string, content?: string, centered?: boolean, path?: string) => {
    const splitedContent = splitedContentFun(content);
    Modal.success({
      title,
      content: splitedContent,
      centered,
      zIndex: 9999,
      okText: "확인",
      onOk: () => {
        // if (path === undefined) return;
        // void router.push(path);

      },
    });
  };
  const warningModal = (title?: string, content?: string, centered?: boolean, path?: string) => {
    const splitedContent = splitedContentFun(content);
    Modal.warning({
      title,
      content: splitedContent,
      centered,
      zIndex: 9999,
      okText: "확인",
      onOk: () => {
        // if (path === undefined) return;
        // location.href = `${FRONT_HOST}${path}`
        // void router.push(path);
      },
    });
  };

  const confirmModal = (
    // onOk: () => Promise<void> | void,
    onOk: () => Promise<void> | void,
    title?: string,
    content?: string,
    centered?: boolean,
    path?: string
  ) => {
    const splitedContent = splitedContentFun(content);

    Modal.confirm({
      title,
      content: splitedContent,
      centered,
      onOk,
      zIndex: 9999,
      onCancel() {
        return false;
      },
    });
  };

  return {
    successModal,
    warningModal,
    confirmModal,
  };
};
