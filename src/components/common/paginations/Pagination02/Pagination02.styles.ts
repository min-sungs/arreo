import styled from '@emotion/styled';

export const Column = styled.span`
  margin: 0 50px;
`;

interface IPageProps {
  isActive?: boolean;
}
export const Page = styled.span`
  margin: 0 10px;
  color: ${(props: IPageProps) => (props.isActive === true ? '#0D42E5' : 'black')};
  font-weight: ${(props: IPageProps) => (props.isActive === true ? 'bold' : 'normal')};
  font-size: ${(props: IPageProps) => (props.isActive === true ? '18px' : '12px')};
  cursor: pointer;
`;
