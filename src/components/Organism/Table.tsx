import React from 'react';

import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import BaseButton from '../Atom/BaseButton';
import { Link } from 'react-router-dom';
import { cshPubDetail } from '../../apis/api/pointApi';

const TableWrap = styled.div`

	@media screen and (max-width: 768px){
		overflow-x: auto;
		::-webkit-scrollbar {
			width: 4px;
			height: 4px;
			background-color: rgba(140, 140, 140, 0.4);
		}
		::-webkit-scrollbar-thumb {
			background: #98999A;
		}

		tr{
			display: table-row;
			th, td{
				padding: 1rem 2rem;
				flex: none;
				white-space: nowrap;
			}
			td:last-child{
				padding: 1rem;
			}
		}
	}
	
`
const Table = styled.table`
  width: 100%;
  /* display: flex;
  flex-direction: column; */
  margin-top: 20px;
  margin-bottom: 10px;
	
	th, td{
		padding: 1rem;
	}
		
`;

const TableHead = styled.thead`
  text-align: center;
  align-items: center;
  border-bottom: 2px solid gray;
  padding-bottom: 5px;
`;
const TableHeadRow = styled.tr`
  /* display: flex;
  align-items: center; */
  /* padding: 5px 0px; */
`;

const TableHeadColumn = styled.th`
  /* flex: 1; */
  font-weight: bold;
  font-size: 1.4rem;
`;

const TableBody = styled.tbody`
  text-align: center;
`;
const TableBodyRow = styled.tr<{ type: string }>`
  /* display: flex;
  align-items: center; */
  /* padding: 5px 0px; */
  ${(props) => (props.type === 'line' ? 'border-bottom: 1px solid gray;' : '')}
`;
const TableBodyColumn = styled.td`
  /* flex: 1; */
  font-size: 1.3rem;
  /* padding: 5px 0px; */
  /* overflow: hidden; */
  white-space: nowrap;
  text-overflow: ellipsis;
	
`;
const TableBodyColumnSpan = styled.span`
  display: block;
  font-size: 1.3rem;

  &.textLeft {
    display: flex;
  }

  &.textLeft span {
    width: 50%;
    /* text-align: right; */
  }

  &.textLeft span:last-child {
    /* width: 55%; */
    /* padding-right: 55px; */
  }

  &.payText {
    text-align: right;
    padding-right: 50px;
  }
	@media screen and (max-width:768px){
		&.textLeft{
			gap: 2rem;
		}
		&.textLeft span{
			width: auto;
		}
	}
`;
const TableBodyColumnSpanCursor = styled.span`
  font-size: 1.3rem;
  cursor: pointer;
`;

const TableImg = styled.img`
  width: 50px;
`;
export interface ITableRow {
  id: string;
  imgData?: string;
  // [key: string]: string | React.ReactElement;
  [key: string]: string | undefined | { data: string; func: () => void };
}
/**
 * type : line ( 밑줄 포함 ), default ( 밑줄 미포함 )
 * thead : 테이블 목록 배열
 * tbody : 테이블 ROW 데이터 오브젝트 배열
 * option => checkbox : 체크박스를 포함 또는 미포함을 선택하는 boolean 값
 * onclick : 테이블 row 클릭 이벤트 함수
 * handleCheckBoxAll : 테이블 헤더 체크박스 이벤트 함수
 * handleCheckBox : 테이블 로우 체크박스 이벤트 함수
 * allChecked : 테이블 헤더 체크박스의 state
 * checkedId : 테이블 로우 체크박스의 state
 */
interface ITable {
  type: 'line' | 'default';
  thead: string[];
  tbody: ITableRow[];
  option?: {
    checkbox?: boolean; // 체크박스 포함한 테이블 사용 시 true, default : false
  };
  onclick?: Function;
  handleCheckBoxAll?: (tbody: ITableRow[]) => void;
  handleCheckBox?: (tbody: ITableRow[], id: string) => void;
  allChecked?: boolean;
  checkedId?: string[];
  name?: string;
}
const BaseTable = ({
  type = 'default',
  thead = [],
  tbody = [],
  onclick,
  option = { checkbox: false },
  handleCheckBoxAll,
  handleCheckBox,
  allChecked,
  checkedId,
  name,
}: ITable) => {
  /**
   *  텍스트 overflow 발생하는 경우 툴팁 생성
   * */
  // const tdRef = useRef<HTMLTableCellElement[] | null[]>([]);
  // console.log(tdRef.current);
  // useEffect(() => {
  //   // 컴포넌트가 마운트될 때 한 번 실행
  //   // 말줄임표가 생성되었을 때 title 속성 설정
  //   tdRef.current.forEach((ref, idx) => {
  //     const cell = ref;
  //     if (cell) {
  //       if (cell.scrollWidth > cell.clientWidth) {
  //         console.log('test', cell, cell?.scrollWidth, cell?.clientWidth);
  //         cell.title = 'test'; // 툴팁으로 보여질 내용
  //       }
  //     }
  //   });
  // }, [thead, tbody]);

  const openPopup = (url: any) => {
    const test = process.env.REACT_APP_PAYMENT_URL;
    window.open(
      `${test}${url}&payment=01`,
      // `http://testoffice.easypay.co.kr/receipt/ReceiptBranch.jsp?controlNo=${url}&payment=01`,
      // `http://office.easypay.co.kr/receipt/ReceiptBranch.jsp?controlNo=${url}&payment=01`,
      '_blank',
      'toolbar=0,scroll=1,menubar=0,status=0,resizable=0,width=515,height=700',
    );
  };

  const openPopupCshPubDetail = (serialnum: any) => {
    cshPubDetail(serialnum).then((data) => {
      const cshPubDetailPop = window.open(
        `/cshPubDetail?serialnum=${serialnum}`,
        '_blank',
        'toolbar=0,scroll=1,menubar=0,status=0,resizable=0,width=960,height=600',
      );
      cshPubDetailPop?.document.write(data);
    })

  };

  return (
		<TableWrap>
			<Table>
				<TableHead>
					<TableHeadRow>
						{option.checkbox && (
							<td>
								<input
									type="checkbox"
									checked={allChecked}
									onChange={() => {
										if (handleCheckBoxAll) {
											handleCheckBoxAll(tbody); // 여기서 handleCheckBoxAll을 호출
										}
									}}
								/>
							</td>
						)}
						{thead.map((e) => (
							<TableHeadColumn key={uuidv4()}>{e}</TableHeadColumn>
						))}
					</TableHeadRow>
				</TableHead>
				<TableBody>
					{tbody.map((row) => (
						<TableBodyRow type={type} key={uuidv4()}>
							{option.checkbox && (
								<td>
									<input
										type="checkbox"
										checked={checkedId?.includes(row.id)}
										onChange={() => {
											if (handleCheckBox) {
												handleCheckBox(tbody, row.id); // 여기서 handleCheckBoxAll을 호출
											}
										}}
									/>
								</td>
							)}
							{/* {thead.map((head) => (
								<TableBodyColumn key={uuidv4()}>
									{typeof row?.[head] === 'object' ? (
										<TableBodyColumnSpanCursor
											onClick={() => {
												const rowData = row?.[head] as { data: string; func: (id?: string) => void };
												rowData.func?.(row?.id);
											}}
										>
											{row.imgData && <TableImg src={`data:image/jpeg;base64,${row.imgData}`} alt="" />}
											{(row?.[head] as { data: string; func: (id?: string) => void })?.data}
										</TableBodyColumnSpanCursor>
									) : (
										head === '사용금액' ?
											<TableBodyColumnSpan className={head === '사용금액' ? 'textRight' : ''} >{row[head] as string}</TableBodyColumnSpan>
											:
											<TableBodyColumnSpan className={head === '사용금액' ? 'textRight' : ''} >{row[head] as string}</TableBodyColumnSpan>

									)}
								</TableBodyColumn>
							))} */}
							{thead.map((head) => {
								if (typeof row?.[head] === 'object') {
									return (
										<TableBodyColumn key={uuidv4()}>
											<TableBodyColumnSpanCursor
												onClick={() => {
													const rowData = row?.[head] as { data: string; func: (id?: string) => void };
													rowData.func?.(row?.id);
												}}
											>
												{row.imgData && <TableImg src={`data:image/jpeg;base64,${row.imgData}`} alt="" />}
												{(row?.[head] as { data: string; func: (id?: string) => void })?.data}
											</TableBodyColumnSpanCursor>
										</TableBodyColumn>
									);
								}
								if (name === 'use' && head === '사용금액') {
									return (
										<TableBodyColumn key={uuidv4()}>
											<TableBodyColumnSpan className="textLeft">
												<span>{row[head] as string}</span>
												<span>{row['사용포인트'] as string}</span>
											</TableBodyColumnSpan>
										</TableBodyColumn>
									);
								}

								if (head === '영수증인쇄' && row[head] !== '무통장입금') {
									return (
										<TableBodyColumn key={uuidv4()}>
											<BaseButton
												type="button"
												width="80px"
												height="20px"
												fontSize="1.3rem"
												fontWeight="bold"
												backgroundColor="#222"
												color="#fff"
												onClick={() => openPopup(row['영수증id'])}
											>
												인쇄
											</BaseButton>
										</TableBodyColumn>
									);
								}

								if (head === '상세보기') {
									return (
										<TableBodyColumn key={uuidv4()}>
											<BaseButton
												type="button"
												width="80px"
												height="25px"
												fontSize="1.3rem"
												fontWeight="bold"
												backgroundColor="#222"
												color="#fff"
												onClick={() => openPopupCshPubDetail(row['시리얼넘버'])}
											>
												상세보기
											</BaseButton>
										</TableBodyColumn>
									);
								}


								return (
									<TableBodyColumn key={uuidv4()}>
										<TableBodyColumnSpan>
											{row[head] as string}
										</TableBodyColumnSpan>
									</TableBodyColumn>
								);
							})}
						</TableBodyRow>
					))}
				</TableBody>
			</Table>
		</TableWrap>
  );
};
export default BaseTable;
