import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  margin-top: 5%;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  margin-bottom: 50px;
`;

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;
export const Title = styled.div`
  margin-bottom: 30px;
`;
export const SubWrapper = styled.div`
  display: flex;
`;
export const SideNav = styled.div`
`;
export const Content = styled.section`
  min-width: 1280px;
  max-width: 1600px;
  margin: 0 auto;
  @media (max-width: 1600px) {
    padding: 1% 5%;

  }
`;
export const ContentTitle = styled.div`
  margin-bottom: 20px;
`;

export const SideWrapper = styled.div`
  width: 15%;
`

export const LogoutButton = styled.span`
  position: absolute;
  top: 5px;
  right: 0;
  width: 10%;
  background-color: rgb(27, 28, 28);
  color: #fff;
  display: block;
  text-align: center;
  padding: 5px 0;
  font-weight: bold;
  cursor: pointer;
`
