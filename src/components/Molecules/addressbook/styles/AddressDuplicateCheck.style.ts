import styled from 'styled-components';

export const ComponentSpace = styled.div`
  width: 100%;
  color: black;
`;

export const PainationInner = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const DuplicateContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const DuplicateTable = styled.table`
  width: 460px;
  height: 500px;
  display: flex;
  flex-direction: column;
`;

export const DuplicateThead = styled.thead`
  width: 100%;
  height: 32px;
  border-bottom: 1px solid #000;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DuplicateHTr = styled.tr`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DuplicateTh = styled.th`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
`;

export const DuplicateGroup = styled.div`
  width: 100%;
  padding: 1rem 0;
  border-bottom: 1px solid gray;
`;

export const DuplicateTbody = styled.tbody`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const DuplicateBTr = styled.tr`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  vertical-align: middle;
  font-size: 1.3rem;
  position: relative;

  &:hover {
    background-color: #eeeeee !important;
  }
`;

export const DuplicateTd = styled.td`
  width: 100%;
  height: 1.53em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem;
  color: #141414;
  text-align: center;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;

  &:last-child {
    position: absolute;
    left: 100%;
    width: 24px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 0.5rem;
`;
