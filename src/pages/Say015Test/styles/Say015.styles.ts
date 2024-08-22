import styled from 'styled-components';

export const Say015Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    &:first-child {padding:0 30px 0 5%}
  }
`;

export const MockupWrap = styled.div`
  width: 75%;
  padding: 0 0 0 5%;
  /* @media screen and (max-width:1800px){
        width: 70%;
    } */
`;

export const MockupText = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #191919;
  span {
    color: #0d42e5;
  }
`;

export const MockupContent = styled.div`
  padding: 34px;
  margin-top: 18px;
  min-height: calc(100% - 38px);
  border-radius: 20px;
  background: #e8e8ef;
  box-sizing: border-box;

  img {
    width: 100%;
    object-fit: contain;
  }
  /* 지워도 되는 곳 ↓ */

  /* 지워도 되는 곳 ↑ */
`;
