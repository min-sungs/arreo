import React from 'react';

import { v4 as uuidv4 } from 'uuid';
import ATitle from '../../Atom/ATitle';
import * as S from './style/ChageInfo.styles';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { useMutationDeleteMsgManagement } from '../../hooks/mutations/useMutationDeleteMsgManagement';
// import { deleteTransferMsg, testImg } from '../../../apis/api/transferResultApi';
// import { useQuery } from '@tanstack/react-query';
// import { styled } from 'styled-components';

interface ITbody {
  row: string;
  [key: string]: string | string[]; // 인덱스 시그니처 사용
}
const PricingInfo = () => {
  // const thead = ['서비스', '구분', '요금(VAT 포함)'];

  const thead: string[] = ['서비스', '구분', '요금(VAT 포함)'];
  const tbody: ITbody[] = [
    {
      row: '6',
      서비스: '문자',
      구분: ['일반문자/그림문자', '해외문자', '장문문자', '포토문자', '설문문자', '모바일 광고'],
      '요금(VAT 포함)': ['25원/건', '100원/건', '50원/건(1,000자 발송)', '250원/건', '30원/건', '60원/건'],
    },
    {
      row: '3',
      서비스: '팩스',
      구분: ['팩스보내기', '팩스받기', '수/발신 팩스 015번호'],
      '요금(VAT 포함)': ['50원/건', '무료', '무료(이벤트기간 동안)']
    },
    {
      row: '3',
      서비스: '음성',
      구분: ['음성보내기', '음성받기', '삐삐사서함 015번호'],
      '요금(VAT 포함)': ['무료', '무료', '무료(이벤트기간 동안)']
    },
  ];

  const rowspan = tbody[0].row;

  return (
    <>
      <S.Top>
        <Link to="/charge">
          <ATitle type="sub" text="충전하기" color="#0D42E5" />
        </Link>
        {/* <img src="/img/logo.png" alt="" id="test" /> */}

        <div className="groups">
					<p>최근 스미싱을 통해 불법 스팸문자를 발송하는 사례가 있어, 이를 방지하고자 본인확인 후 결제를 진행하고 있습니다.</p>
					<p>최초 결제 시 당사 고객센터(015-8504-0006)로 연락주시면 본인확인 후 충전가능하도록 도와드리겠습니다.</p>
					<div>
						<p>고객센터 015-8504-0006</p>
						<p>업무시간 평일 09:00~18:00 (점심시간: 12:00~13:00)</p>
					</div>
				</div>
      </S.Top>


      <ATitle type="sub" text="서비스 요금안내" color="#0D42E5" />
      <S.TableContainer>
        <S.Table style={{ marginTop: '30px' }} className='table50'>
          <colgroup>
            <col style={{ width: '25%' }} />
            <col style={{ width: '37.5%' }} />
            <col style={{ width: '37.5%' }} />
          </colgroup>
          <thead>
            <S.TableRow>
              {thead.map((el) => (
                <S.Th key={uuidv4()}>{el}</S.Th>
              ))}
            </S.TableRow>
          </thead>
          <S.ServicePayTbody>
            {(tbody[0].구분 as string[]).map((item, index) => (
              <tr key={uuidv4()}>
                {index === 0 && (
                  <S.ServicePayTh rowSpan={Number(rowspan)}>{tbody[0].서비스}</S.ServicePayTh>
                )}
                <S.ServicePayTd>{item}</S.ServicePayTd>
                <S.ServicePayTd>{tbody[0]['요금(VAT 포함)'][index]}</S.ServicePayTd>
              </tr>
            ))}
            {/* 팩스  */}
            {(tbody[1].구분 as string[]).map((item, index) => (
              <tr key={uuidv4()}>
                {index === 0 && (
                  <S.ServicePayTh rowSpan={3}>{tbody[1].서비스}</S.ServicePayTh>
                )}
                <S.ServicePayTd>{item}</S.ServicePayTd>
                <S.ServicePayTd>{tbody[1]['요금(VAT 포함)'][index]}</S.ServicePayTd>
              </tr>
            ))}

            {/* 음성 */}
            {(tbody[2].구분 as string[]).map((item, index) => (
              <tr key={uuidv4()}>
                {index === 0 && (
                  <S.ServicePayTh rowSpan={3}>{tbody[2].서비스}</S.ServicePayTh>
                )}
                <S.ServicePayTd>{item}</S.ServicePayTd>
                <S.ServicePayTd>{tbody[2]['요금(VAT 포함)'][index]}</S.ServicePayTd>
              </tr>
            ))}
          </S.ServicePayTbody>
        </S.Table>

        <S.BenefitTable style={{ marginTop: '85px' }}>
          <ATitle type="sub" text="충전 혜택" color="black" />
          <S.BenefitTopText>
            충전 금액에 따라 <span>5~30%의 포인트</span>를 적립해드립니다.
          </S.BenefitTopText>
          <S.Table>
            <colgroup>
              <col style={{ width: '30%' }} />
              <col style={{ width: '35%' }} />
              <col style={{ width: '35%' }} />
            </colgroup>

            <thead>
              <S.TableRow>
                <S.Th>1회 충전 금액</S.Th>
                <S.Th>추가 포인트</S.Th>
                <S.Th>인하 효과</S.Th>
              </S.TableRow>
            </thead>

            <S.ServicePayTbody>
              <tr>
                <S.ServicePayTd>10,000원 이상 ~100,000원 미만</S.ServicePayTd>
                <S.ServicePayTd>충전금액의 5%</S.ServicePayTd>
                <S.ServicePayTd>23.8원</S.ServicePayTd>
              </tr>
              <tr>
                <S.ServicePayTd>100,000원 이상 ~ 500,000원 미만</S.ServicePayTd>
                <S.ServicePayTd>충전금액의 10%</S.ServicePayTd>
                <S.ServicePayTd>22.7원</S.ServicePayTd>
              </tr>
              <tr>
                <S.ServicePayTd>500,000원 이상 ~ 1,000,000원 미만</S.ServicePayTd>
                <S.ServicePayTd>충전금액의 15%</S.ServicePayTd>
                <S.ServicePayTd>20.8원</S.ServicePayTd>
              </tr>
              <tr>
                <S.ServicePayTd>1,000,000원 이상</S.ServicePayTd>
                <S.ServicePayTd>충전금액의 20%</S.ServicePayTd>
                <S.ServicePayTd>19.2원</S.ServicePayTd>
              </tr>
            </S.ServicePayTbody>
          </S.Table>
          <S.BenefitBottomText>
            여러번 나누어서 충전 하시는 것 보다 1회에 모아서 충전하는것이 더 많은 포인트를 받으실 수 있습니다.<br />
            50,000원 2회 결제시 5%인 2,500 Point 2번 지급, 총 5,000 Point 적립<br />
            100,000원 1회 결제시 10%인 10,000 Point 적립
          </S.BenefitBottomText>
        </S.BenefitTable>




        <S.BenefitTable>
          <ATitle type="sub" text="결제 헤택" color="black" />
          <S.BenefitTopText>
            결제방식에 따라 결제 금액의 <span>최대 5%의 포인트를 추가 적립</span>해드립니다.
          </S.BenefitTopText>
          <S.Table>
            <colgroup>
              <col style={{ width: '25%' }} />
              <col style={{ width: '25%' }} />
              <col style={{ width: '25%' }} />
              <col style={{ width: '25%' }} />
            </colgroup>

            <thead>
              <S.TableRow>
                <S.Th>결제방법</S.Th>
                <S.Th>무통장 입금</S.Th>
                <S.Th>은행 계좌이체</S.Th>
                <S.Th>신용카드 결제</S.Th>
              </S.TableRow>
            </thead>

            <S.ServicePayTbody>
              <tr>
                <S.ServicePayTd>할인(%)</S.ServicePayTd>
                <S.ServicePayTd>5%</S.ServicePayTd>
                <S.ServicePayTd>2%</S.ServicePayTd>
                <S.ServicePayTd>1%</S.ServicePayTd>
              </tr>

            </S.ServicePayTbody>
          </S.Table>
          <S.BenefitBottomText>
            무통장 입금시 인하효과 : 최대 18.5원 ~ 23.8원<br />
            5,000원 이상 결제시 포인트 적립<br />
            100,000원 핸드폰 결제 시 10%인 10,000 Point적립<br />
            100,000원 무통장 입금 시 10%와 결제 방식 추가 혜택 5% 합하여 15,000 Point적립
          </S.BenefitBottomText>
        </S.BenefitTable>




      </S.TableContainer>
    </>
  );
};

export default PricingInfo;
