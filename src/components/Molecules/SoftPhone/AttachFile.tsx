import React, { ChangeEvent, MouseEvent, RefObject } from 'react';
import BaseButton from '../../Atom/BaseButton';

type AttachFileProps = {
  fileInputRef: RefObject<HTMLInputElement>;
  uploadImageChange: (event: ChangeEvent<HTMLInputElement>) => void;
  // handleClickFileInput: (event: MouseEvent<HTMLButtonElement>) => void;
};

const AttachFile = ({ fileInputRef, uploadImageChange }: AttachFileProps) => {
  // 이미지 전송
  const handleClickFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <input
        type="file"
        accept="image/jpg, image/jpeg, image/png"
        ref={fileInputRef}
        onChange={uploadImageChange}
        style={{ display: 'none' }}
      />
      <BaseButton
        width="100%"
        height="49px"
        backgroundColor="#1175F7"
        color="#fff"
        fontSize="1.5rem"
        marginTop="20px"
        onClick={handleClickFileInput}
      >
        이미지 첨부
      </BaseButton>
    </>
  );
};

export default AttachFile;
