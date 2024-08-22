import React, { useState } from 'react';
import {
  ContentWrap,
  DeleteIcon,
  ImageWrap,
  MessageSendSystemFooter,
  MessageSizeCheck,
} from '../../Organism/AddressBook/styles/MessageSendSystem.styles';
import { ImCross } from 'react-icons/im';
import CustomTextArea from '../../Atom/TextArea';
import BaseInput from '../../Atom/BaseInput';

const ContentArea = ({
  //   handleMouseEnter,
  //   handleMouseLeave,
  //   isHovering,
  handleImageDeleteClick,
  imageFile,
  sndMsg,
  showImage,
  handleOnChange,
  messageEncode,
  subject,
}: any) => {
  const [isHovering, setIsHovering] = useState(false); // 이미지 첨부 상태에서 호버시 삭제 아이콘 출력

  const handleMouseEnter = () => {
    setIsHovering(true);
    // 호버 상태에 따른 추가적인 처리를 수행할 수 있습니다.
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // 호버가 끝날 때의 추가적인 처리를 수행할 수 있습니다.
  };

  return (
    <MessageSendSystemFooter>
      {messageEncode > 100 ? (
        <>
          <MessageSizeCheck style={{ color: 'rgb(17, 117, 247)' }}>LMS {messageEncode}Byte</MessageSizeCheck>
          <BaseInput
            type="text"
            width="16vw"
            height="24px"
            border="1px solid #000"
            backgroundColor="#fff"
            placeholder="제목을 입력해주세요!"
            value={subject.value}
            onChange={(e) => handleOnChange({ value: e.target.value, onChange: subject.onChange })}
          />
        </>
      ) : (
        <MessageSizeCheck>SMS {messageEncode}Byte</MessageSizeCheck>
      )}
      <ContentWrap>
        {imageFile && (
          <ImageWrap onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {showImage}
            {isHovering && (
              <DeleteIcon onClick={handleImageDeleteClick}>
                <ImCross style={{ position: 'absolute', top: 0, right: 0 }} />
              </DeleteIcon>
            )}
          </ImageWrap>
        )}
        <CustomTextArea
          placeholder="전송하실 메세지를 입력해주세요..."
          textAreaWidth="100%"
          textAreaheight="100%"
          fontSize="1.2rem"
          backGround="linear-gradient(0deg, #d9d9d9 -40.32%, #f7f7f7 73.49%)"
          value={sndMsg.value}
          onChange={(e) => handleOnChange({ value: e.target.value, onChange: sndMsg.onChange })} // 입력값을 받아서 value에 따른 분기처리
        />
      </ContentWrap>
    </MessageSendSystemFooter>
  );
};

export default ContentArea;
