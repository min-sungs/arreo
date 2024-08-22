import styled from 'styled-components';

export const TopTextContainer = styled.div`
  border-top: 2px solid #a1a1a1;
  border-bottom: 2px solid #a1a1a1;
  margin-top: 30px;
  padding-bottom: 30px;
  font-size: 1.3rem;

  & > div,
  & > p {
    line-height: 28px;
  }
`;

export const TextBlue = styled.p`
  color: #0D42E5;
  margin-top: 30px;

  & > span {
    font-weight: bold;
  }
`;
