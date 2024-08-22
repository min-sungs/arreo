import styled from "@emotion/styled";


export const ChatRoomWrap = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChatSendWrap = styled.div`
  display: flex;
  height: 50px;
`

export const ChatSendInput = styled.input`
  box-sizing: border-box;
  border: none;
  width: 80%;
  padding-left: 10px;
  outline: none;
  height: 50px;
`

export const ChatSendButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 50px;
  font-size: 1.4rem;
  cursor: pointer;
  background-color: #1b6bbf;
`
export const Wrap = styled.div`
  box-sizing: border-box;
  height: 500px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #98999A;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0 0 5px white;
  }
  
`

export const ChatListContainer = styled.div`
  //background-color: #0d65d3;
`

export const ChatUl = styled.ul``
export const ChatLl = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover{
    background-color: #1b6bbf;
    border-radius: 10px;
    color: #fff;
  }
`

export const ChatIconCircle = styled.div`
  width: 45px;
  height: 45px;
  background-color: tomato;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ChatIcon = styled.img`
  width: 100%;
`

export const ChatChatInfoWrap = styled.div`
  flex: 1;
  margin-left: 25px;
  display: flex;
  flex-direction: column;
`

export const ChatName = styled.span`
  font-weight: 700;
  margin-bottom: 6px;
`

export const ChatText = styled.span`
`


export const RightWrap = styled.div`
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`
export const ChatDate = styled.span`
  margin-bottom: 6px;
`
export const AlertMsgDiv = styled.div`
  background-color: red;
  text-align: center;
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;

export const AlertMsgCount = styled.span`
  display: block;
  line-height: 13px;
  font-size: 1rem;
  color: #fff;
  font-weight: 700;
`;
