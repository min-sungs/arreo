import styled from '@emotion/styled';

export const Column = styled.span`
  margin: 0px 50px;
`;

interface IPageProps {
  isActive?: boolean;
}
export const Page = styled.span`
  margin: 0px 10px;
  color: ${(props: IPageProps) => (props.isActive === true ? 'blue' : 'black')};
  font-weight: ${(props: IPageProps) => (props.isActive === true ? 'bold' : 'normal')};
  font-size: ${(props: IPageProps) => (props.isActive === true ? '18px' : '12px')};
  cursor: pointer;
`;
