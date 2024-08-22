import styled from 'styled-components';

export const Container = styled.div`
  min-width: 1280px;
  max-width: 1600px;
  margin: 30px auto;
  border-bottom: 1px solid rgb(161, 161, 161);
`;

export const TitleContainer = styled.div`
  border-bottom: 2px solid rgb(187, 187, 187);
  padding-bottom: 10px;
`;

export const LinkButton = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 30px;
`;

export const TopText = styled.div`
  padding: 20px;
  margin: 20px 0 50px 0;
  border-top: 1px solid rgb(161, 161, 161);
  border-bottom: 1px solid rgb(161, 161, 161);

  & > p {
    font-size: 1.3rem;
    line-height: 20px;
  }
`;

export const MidText = styled.div``;

export const Licontainer = styled.ol`
  margin-bottom: 50px;

  &.hangul li {
    list-style: hangul;
    text-indent: 0;
    margin-left: 19px;
  }

  &.padding li {
    padding-left: 25px;
  }

  &.padding015 li ol li,
  &.paddingPt li {
    padding-left: 20px;
  }

  &.paddingProtect li ol li ol li {
    padding-left: 9px;
  }
`;

export const MainTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 50px;
`;
export const Title = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const SubTitle = styled.span`
  font-size: 1.3rem;
  display: inline-block;
  margin-bottom: 10px;
`;

export const LiList = styled.li`
  font-size: 1.3rem;
  word-break: keep-all;
  line-height: 23px;

  & > ol {
    margin-bottom: 0;
  }
`;

export const NumberList = styled.li`
  font-size: 1.3rem;
  word-break: keep-all;
  line-height: 23px;
  position: relative;
  padding-left: 17px;

  & > span {
    position: absolute;
    left: 0px;
    top: 0;
  }

  & > ol {
    margin-bottom: 0;
  }
`;

export const BottomText = styled.div`
  clear: both;
`;

// 개인정보 처리방침
export const ProtectTable = styled.table`
  border-collapse: collapse;
  margin: 20px 0 10px 0;
`;

export const ProtectHead = styled.thead`
  background-color: #d9d9d9;
`;

export const ProtectBody = styled.tbody`
  &.padding td {
    padding: 10px;
  }
`;

export const ProtectTr = styled.tr``;

export const ProtectTh = styled.th`
  border: 1px solid #a1a1a1;
  text-align: center;
  font-weight: bold;
  padding: 5px 0;
`;

export const ProtectTd = styled.td`
  border: 1px solid #a1a1a1;
  padding: 5px 5px;
  vertical-align: middle;
`;
