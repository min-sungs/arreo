import styled from 'styled-components';
import { ITableColumn } from '../../types/MessageManagement.types';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const SubmitWrap = styled.div`
  /* display: flex; */
  /* justify-content: flex-end; */
`;

export const TableWrapper = styled.div`
  width: 100%;
  flex: 1;
  height: 40vh;
  display: flex;
  flex-direction: column;
`;

export const TableHeader = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  border-bottom: 2px solid gray;
  padding-bottom: 5px;
`;

export const CheckBoxAll = styled.input`
  margin-right: 3%;
`;

export const TableHeaderColumn = styled.span<ITableColumn>`
  font-size: 13px;
  font-weight: bold;
  /* width: 16.6%; */
  width: ${(props) => 100 / props.menuLength - 3}%;
`;

export const TableBody = styled.div`
  text-align: center;
  margin-bottom: 50px;
  height: 280px;
`;
export const TableBodyRow = styled.div`
  display: flex;
  padding: 5px 0px;
  align-items: center;
  border-bottom: 1px solid gray;
`;

export const TableBodyColumn = styled.span<ITableColumn>`
  font-size: 13px;
  width: ${(props) => 100 / props.menuLength - 3}%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const CheckBox = styled.input`
  margin-right: 3%;
`;

export const TableFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
export const PaginationWrapper = styled.div`
  flex: 2;
`;

export const Footer = styled.div``;

export const TableSearchBox = styled.div`
  margin-bottom: 10px;
`;

/**
 * 디테일 구분
 */
export const DetailInfoBox = styled.div`
  max-height: 30vh;
  display: flex;
  padding: 18px;
  border-top: 2.2px solid gray;
  border-bottom: 1px solid gray;
  margin-bottom: 70px;
`;

export const DetailInfoLeft = styled.div`
  display: flex;
  width: 40%;
  flex-direction: row;
  align-items: center;
`;
export const ContentImgWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContentImg = styled.img`
  width: 80%;
  /* height: 80%; */
  box-sizing: border-box;
  border: 2px solid #a1a1a1;
  border-radius: 10px;
`;
export const ContentTextWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContentText = styled.p`
  font-size: 1.4rem;
`;

export const DetailInfoRight = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
export const ContentInfoTopWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const ContentInfoTitle = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin-right: 15px;

  &.number__case {
    margin-bottom: 20px;
  }
`;

export const ContentInfoText = styled.span`
  font-size: 12px;
  font-weight: 500;
  margin-right: 15px;
`;
export const ContentInfoMidWrapper = styled.div`
  margin-bottom: 62px;
`;
export const ContentInfoBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ContentNumCaseInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Div = styled.div`
  flex: 1;
`;

export const RightSubWrapper = styled.div`
  padding: 0px 50px;
`;

export const LoadingDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ContentInfoTextArea = styled.textarea`
  width: 80%;
  height: 80%;
  font-size: 12px;
  font-weight: 500;
  border: 2px solid #a1a1a1;
  border-radius: 10px;
  resize: none;
  outline: none;
  padding: 10px 10px 0px 10px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.06);
  margin-bottom: 5px;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

export const ContentInfoTextLength = styled.span`
  display: block;
  width: 80%;
  font-size: 1.4rem;
  font-weight: 500;
  text-align: right;
`;
