import styled from "@emotion/styled";

export const PopupWrapper = styled.div`
  position: absolute;
  width: 350px;
  //height: 150px;
  background-color: #fff;
  z-index: 9999;
  padding: 20px 0;
  border: 0.5px solid #d2c9c9;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.03);
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 1.4rem;
  line-height: 2rem;
`

export const PopupUl = styled.ul`
  width: 70%;
  margin: 0 auto;
`

export const PopupLi = styled.li`
  margin-bottom: 20px;
`

export const LiWrapper = styled.div`
  margin: 0 auto;
`

export const LiSubject = styled.span`
  display: inline-block;
  font-weight: 700;
  margin-bottom: 5px;
`

export const ButtonWrapper = styled.div`
  text-align: center;
  bottom: 10px;
  margin: 0 auto;
`