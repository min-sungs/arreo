import styled from 'styled-components';

export const TableContainer = styled.div`
  text-align: center;
`;

export const Table = styled.table`
  width: 100%;
	table, tr, th, td{
		border-collapse: collapse;
		letter-spacing: 0;
	}
	@media screen and (max-width: 480px){
		overflow-x: auto;
		border: 1px solid rgba(0, 0, 0, 0.6);
		position: relative;
		colgroup{
			display: none;
		}
		tr{
			display: flex;
			flex-wrap: wrap;
			td, th{
				box-sizing: border-box;
				width: 100%;
				line-height: normal;
				padding: .6rem;
				border: 1px solid rgba(0, 0, 0, 0.6);
			}
			&:nth-child(2n){
				background: rgba(0,0,0,0.1);
			}
		}
		thead{
			td, th{
				background: rgba(0,0,0,0.8);
				/* background: #98999A; */
				color: #fff;
				padding: .6rem 0;
			}
		}
		tbody{
			th{
				background: rgba(0,0,0,0.4);
				/* background: #98999A; */
				color: #fff;
			}
		}
		&.table50{
			thead{
				th{
					width: 50%;
				}
				th:nth-child(1){
					width: 100%;
				}
			}
			tbody{
				td{
					width: 50%;
				}
			}
		}
	}
`;

export const Th = styled.th`
  border-bottom: 2px solid #a1a1a1;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 8px;
`;

export const Td = styled.td`
  border: 1px solid black;
  padding: 8px;
  vertical-align: middle;
`;

export const TableRow = styled.tr``;

export const Top = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 90px;

  & > a {
    width: 25%;
		@media screen and (max-width:1040px){
			width: 100%;
			margin-bottom: 2rem;
		}
	}

  .groups{
    width: 75%;
    /* height: 35px; */
    /* display: flex; */
    line-height: 20px;
    /* align-items: flex-end; */
    font-size: 1.4rem;
    color: #000;
		@media screen and (max-width:1040px){
			width: 100%;
		}
  }
	& > div > p + p{
		margin-top: 0;
		margin-bottom: 2rem;
	}
	@media screen and (max-width: 768px){
		& > div > p + p{
			margin-top: 1.2rem;
		}
	}
  .groups > div {
    display: flex;
		justify-content: space-between;
		font-weight: bold;
    color: #000;
		flex-wrap: wrap;
		gap: 1rem;
  }
`;

export const ServicePayTbody = styled.tbody``;

export const ServicePayTr = styled.tr``;

export const ServicePayTh = styled.th`
  vertical-align: middle;
  border-right: solid #a1a1a1 0.7px;
  border-bottom: solid #a1a1a1 0.7px;
  font-size: 1.4rem;
  font-weight: bold;
`;

export const ServicePayTd = styled.td`
  line-height: 35px;
  border-bottom: solid #a1a1a1 0.7px;
  font-size: 1.3rem;
  color: #000;
`;

export const BenefitTable = styled.div`
  margin-top: 55px;

  & > h2 {
    text-align: left;
  }
`;

export const BenefitTopText = styled.p`
  color: #000;
  text-align: left;
  font-size: 1.4rem;
  margin: 10px 0 20px 0;

  & > span {
		font-weight: 600;
    color: #0D42E5;
  }
`;

export const BenefitBottomText = styled.p`
  color: #575657;
  text-align: left;
  line-height: 20px;
  font-size: 1.3rem;
  margin-top: 20px;
`;
