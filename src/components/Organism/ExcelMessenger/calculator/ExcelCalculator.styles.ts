import styled from "@emotion/styled";



export const Wrapper = styled.div`
  display: flex;
`

// ? 계산기 CSS
export const CalculatorWrapper = styled.div`
  display: flex;
`
export const ContentTextWrapper = styled.div`
  margin-bottom: 20px;
`

export const ContentInfoTextArea = styled.textarea`
  font-size: 1.2rem;
  font-weight: 500;
  border: 2px solid #a1a1a1;
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
  }
  &::-webkit-scrollbar-track {
    background-color: grey;
    box-shadow: inset 0 0 5px white;
  }
`;

export const ContentInfoTextLength = styled.span`
  display: block;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: right;
`;

export const InfoWrapper = styled.div`
  margin-left: 10px;
`
export const InfoText = styled.span`
  display: block;
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 10px;
`

// ? 엑셀 파일 드롭 CSS
export const ExcelWrapper = styled.div`
  margin-left: 20px;
`

export const ExcelDropBox = styled.div`
  position: relative;
  display: block;
  min-width: 300px;
  min-height: 200px;
  border: 5px dashed #a1a1a1;
`
export const ExcelLabel = styled.label`
  position: relative;
  display: block;
  min-width: 300px;
  min-height: 200px;
  border: 5px dashed #a1a1a1;
  margin-bottom: 20px;
`
export const ExcelText = styled.span`
  position: absolute;
  text-align: center;
  width: 100%;
  left: 50%;
  top: 50%;
  font-size: 1.4rem;
  font-weight: 700;
  transform: translate(-50%,-50%);
`