import styled from 'styled-components';

export const LoadingDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const Content = styled.div`
  position: absolute;
  box-shadow:
    0 19px 38px rgba(0, 0, 0, 0.1),
    0 15px 12px rgba(0, 0, 0, 0.1);
  z-index: 999;
  width: 500px;
  background-color: #fff;
  border-radius: 10px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 15px;
  border-top: solid 17px #000;
`;
export const Ul = styled.ul`
  font-size: 1.4rem;
  border-top: solid 2.2px #a1a1a1;
  margin-top: 25px;
  margin-bottom: 40px;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: row;
  border-bottom: 0.7px solid #a1a1a1;
`;
export const TypeDiv = styled.div`
  flex: 1;
  font-weight: bold;
  text-align: center;
  border-right: 0.7px solid #a1a1a1;
  padding: 10px 0px;
`;
export const ValueDiv = styled.div`
  padding: 10px 0px 10px 13px;
  flex: 2;
`;

export const TextP = styled.p`
  line-height: 19px;
  font-size: 1.3rem;
  color: #000;
  margin-bottom: 40px;
`;

export const TextTitle = styled.span`
  display: block;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 5px;
`;

export const TextSpecifics = styled.span`
  font-size: 1.2rem;
  color: 575657;
`;

export const TextImportantSentence = styled.span`
  display: block;
  color: #0d43e5;
  margin-top: 10px;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
`;
export const BottomSubWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 26px;
`;
export const BottomImpoertansSentence = styled.span`
  color: #0d43e5;
  font-weight: bold;
`;
export const BottomInput = styled.input`
  cursor: pointer;
`;
export const BottomText = styled.span`
  margin-left: 12px;
`;
export const ButtonWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;

  & > button {
    line-height: 31px;
  }
`;
