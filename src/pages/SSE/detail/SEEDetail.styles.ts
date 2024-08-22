import styled from "@emotion/styled";

export const ChatWrap = styled.div`
  display: flex;
  padding-top: 20px;
  flex-direction: column;
  background-color: #a1c8f6;
  min-height: 500px;
`

export const ChatLi = styled.li`
  list-style: none;
  font-size: 1.4rem;
  margin-bottom: 40px;

  &.me {
    text-align: left;
    padding-left: 60px;
  }
  &.other {
    text-align: right;
    padding-right: 60px;
  }
`

export const ChatUserId = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 15px;
`

export const ChatMsg = styled.span`
  box-sizing: border-box;
  padding: 5px;
  background-color: #e5e581;
  border-radius: 10px;
  
  &.me {
    background-color: #fff;
  }
`

export const ChatDate = styled.span`
  font-size: 1rem;
  margin: 0 10px;
  
`