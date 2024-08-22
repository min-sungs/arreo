import styled from "styled-components";

import BaseButton from "../../../Atom/BaseButton";

export const Container = styled.div`
  width:calc(100% - 29rem);
  height:calc(100vh - 60px - 2rem);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(245, 245, 245);

  @media screen and (max-width:1800px) {
    width:80%;
  }
`;

export const Block = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  margin-bottom: 10px;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledButtons = styled(BaseButton)`
  @media screen and (max-width: 1500px) {
    transform: scale(0.8);

    & + & {
      margin: 0.1rem;
    }
  }
`;

export const Strong = styled.strong`
  font-size: 1.8rem;
  font-weight: 400;
  min-width: max-content;
  margin-right: 1.4rem;

  @media screen and (max-width: 1500px) {
    font-size: 1.5rem;
    margin-right: 1rem;
  }
`;

export const Table = styled.div`
  width: 100%;
  height: 86%;
  margin-top: 2rem;
`;