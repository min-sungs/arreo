import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
`;

export const ContainerX = styled.div`
  width: 100%;
  max-width: 1600px;
`;

export const AddressViewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
`;

export const MainContentWrap = styled.div`
  width: 100%;
  height: 300px;
  padding: 1rem 0;
  margin-bottom: 10rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  border-radius: 0 100px 0 100px;
  box-shadow: rgba(0, 0, 0, 0.13) 0px 5px 15px 3px;
`;

export const Contents = styled.div`
  width: 200px;
  height: 200px;
  background-color: #e9f3ff;
  box-shadow: rgba(0, 0, 0, 0.13) 0px 5px 15px 3px;
  &:hover {
    cursor: pointer;
    background-color: #b9d7ff;
    border-radius: 0 100px 0 100px;
  }
`;

export const ContentWrap1 = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10rem;
  border-left: 1px solid gray;
  border-bottom-left-radius: 100px;
  box-shadow: rgba(0, 0, 0, 0.13) 0px 5px 15px 3px;
  &:hover {
    cursor: pointer;
    background-color: #b9d7ff;
    border-bottom-left-radius: 100px;
  }
`;

export const ContentWrap2 = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 2rem;
  border-right: 1px solid gray;
  border-top-right-radius: 100px;
  box-shadow: rgba(0, 0, 0, 0.13) 0px 5px 15px 3px;
  &:hover {
    cursor: pointer;
    background-color: #b9d7ff;
    border-top-right-radius: 100px;
  }
`;

export const ImageWrap = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrap = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;
