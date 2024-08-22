import React from "react"
import {Link} from "react-router-dom";
import styled from "@emotion/styled";



interface IBody {
  children: React.JSX.Element;
}

const BodyContainer = styled.div`
	/* 기본 테이블 높이 조정 */
	> .bodyWrap{
		/* min-height: calc(100vh - 218px - 85px); */
		min-height: 100vh;
		/* height: calc(var(--vh, 1vh) * 100); */
		/* background: rgb(226, 226, 235); */
	}
`

const Body = (props: IBody) => {

  return (
		<BodyContainer>
			<div className="bodyWrap">
				{props.children}
			</div>
		</BodyContainer>
  )
}

export default Body;