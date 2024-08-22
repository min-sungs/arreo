import React from 'react';

import ATitle from '../../components/Atom/ATitle';
import * as S from './style/Terms.styles';
import BaseButton from '../../components/Atom/BaseButton';
import { Link } from 'react-router-dom';




const ComUseContent = () => {

  return (
    <S.Container>
      <S.TitleContainer>
        <ATitle type="main" text="이용약관" color="#000" />
      </S.TitleContainer>

      <S.LinkButton>
        <Link to='/ComUseContent'>
          <BaseButton
            width="130px"
            height="30px"
            fontSize="14px"
            fontWeight="bold"
            backgroundColor="#000"
            color="#fff"
          >
            arreo 이용약관 보기</BaseButton>
        </Link>
      </S.LinkButton>

      <S.MidText>
        <S.MainTitle>제 1 장 총칙</S.MainTitle>

        <S.Title>제2조 (약관의 변경)</S.Title>
        <S.Licontainer>
          <S.NumberList><span>①</span>	이 약관은 방송통신위원회에 신고한 것입니다.</S.NumberList>
          <S.NumberList><span>②</span>	회사는 방송통신위원회에 신고한 후 이 약관을 변경할 수 있습니다.</S.NumberList>
        </S.Licontainer>


        <S.Title>제3조 (약관의 적용)</S.Title>
        <S.Licontainer>
          <S.LiList>무선호출 이용에 관하여는 이 약관을 적용하고, 이 약관에서 명시되지 아니한 사항에 대하여는 관계법령 및 개별 이용계약서(약정서 등) 내용에 따라 적용합니다.</S.LiList>
        </S.Licontainer>

        <S.Title>제4조 (용어의 정의) </S.Title>
        <S.Licontainer>
          <S.NumberList> <span>①</span>	이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
            <S.Licontainer>
              <S.NumberList> <span>1.</span>		고객 : 서비스를 제공받기 위하여 회사와 이용계약을 체결한 자</S.NumberList>
              <S.NumberList> <span>2.</span>		이용계약 : 서비스를 제공받기 위하여 회사와 체결하는 계약</S.NumberList>
              <S.NumberList> <span>3.</span>		이용권 : 고객이 이용계약의 내용에 따라 회사로부터 서비스를 제공받을 권리</S.NumberList>
              <S.NumberList> <span>4.</span>		영업점 : 회사가 제공하는 서비스에 대한 업무를 취급하는 장소</S.NumberList>
              <S.NumberList> <span>5.</span>		단말기 : 회사가 제공하는 서비스를 이용하기 위해 고객이 보유하고 있는 송수신 기기</S.NumberList>
              <S.NumberList> <span>6.</span>		수용구역 : 교환국별로 서비스 이용지역을 지정한 구역</S.NumberList>
              <S.NumberList> <span>7.</span>		해지 : 회사 또는 고객이 이용계약을 해약하는 것</S.NumberList>
              <S.NumberList> <span>8.</span>		별정통신사업자 : 회사가 제공하는 서비스를 이용하여 별정통신사업을 경영하는 자   (이하 별도 규정하지 않는 경우에는 ‘계약자’와 동등합니다.)</S.NumberList>
            </S.Licontainer>
          </S.NumberList>
          <S.NumberList><span>②</span>	이 약관에서 사용하는 용어는 제1항에서 정하는 것을 제외하고는 관계법령에서 정하는 바에 의합니다.</S.NumberList>
        </S.Licontainer>

        <S.MainTitle>제2장  계약체결</S.MainTitle>

        <S.Title>제5조 (이용신청방법)</S.Title>
        <S.Licontainer>
          <S.NumberList><span>①</span>	무선호출을 신청할 때에는 회사가 정한 별도의 신청서 와 별표’2’의 구비 서류를 회사에 제출 하여야 합니다.</S.NumberList>
          <S.NumberList><span>②</span>	신청서 제출은 인터넷 가입으로 갈음할 수 있습니다.</S.NumberList>
        </S.Licontainer>


        <S.Title>제6조 (이용신청의 승낙)</S.Title>
        <S.Licontainer>
          <S.LiList> 제5조의 규정에 의한 서류를 제출하고 보증금 등 가입관련 요금 등을 납입한 고객에 대하여 회사의 업무수행상 또는 기술상 지장이 없는 경우에는 접수순서에 따라 서비스 이용승낙을 합니다. 이 경우 다음 각호에 해당하는 경우에는 우선하여 승낙을 할 수 있습니다.<br />
            국가기관 및 지방자치단체의 업무용 서비스<br />
            공공이익 또는 국가산업발전을 위하여 회사가 특히 필요하다고 인정하는 서비스
          </S.LiList>
        </S.Licontainer>


        <S.Title>제7조 (이용신청에 대한 승낙의 제한) </S.Title>
        <S.Licontainer className='padding015'>
          <S.NumberList><span>①</span>	다음 각호의 하나에 해당하는 신청에 대하여는 승낙을 하지 아니합니다.
            <S.Licontainer>
              <S.NumberList><span> 1.</span>	타인 명의의 신청</S.NumberList>
              <S.NumberList><span> 2.</span>	허위서류를 첨부한 신청</S.NumberList>
              <S.NumberList><span> 3.</span>	불법스팸으로 인하여 해지된 경우</S.NumberList>
              <S.NumberList><span> 4.</span>	전파법령에서 정한 결격사유에 해당하는 경우</S.NumberList>
              <S.NumberList><span> 5.</span>	타인의 명의를 도용한 사실이 있거나, 처벌받은 경우 또는 명의 도용을 상습 허위 신고한 사실이 있는 경우</S.NumberList>
              <S.NumberList><span> 6.</span>	불법복제와 관련된 사실이 있거나 처벌받은 경우</S.NumberList>
            </S.Licontainer>
          </S.NumberList>
          <S.NumberList><span>②</span>	서비스 이용신청이 다음 각호의 하나에 해당하는 경우에는 그 신청에 대한 승낙 제한 사유가 해소될 때까지는 승낙을 하지 아니할 수 있습니다.
            <S.Licontainer>
              <S.NumberList><span>7.</span>		이용을 신청한 고객이 회사에 납부하여야 할 사용요금, 수수료 및 실비(이하 ‘요금 등’이라 합니다)를 납부하지 않고 있는 경우</S.NumberList>
              <S.NumberList><span>8.</span>		설비의 여유가 없는 경우</S.NumberList>
              <S.NumberList><span>9.</span>		무선통신설비의 신설, 개조 또는 수리가 기술상 곤란한 경우</S.NumberList>
              <S.NumberList><span>10.</span>		전파법령에 저촉될 경우</S.NumberList>
              <S.NumberList><span>11.</span>		신용정보의 이용 및 보호에 관한 법률에 의하여 통신서비스의 요금체납 등의 행위로 정보통신 신용불량자로 등록되어 있는 경우</S.NumberList>
            </S.Licontainer>
          </S.NumberList>
          <S.NumberList><span>③</span>	7조 제 1항 및 제 2항의 규정에 의하여 이용신청의 승낙을 제한하는 때에는 이를 신청고객에게 즉시 알려야 합니다.</S.NumberList>
        </S.Licontainer >

        <S.Title>제8조 (신청사항의 변경 및 철회 )</S.Title>
        <S.Licontainer>
          <S.NumberList><span>①</span>	제5조의 규정에 의하여 이용신청을 한 고객이 그 신청사항 및 제출 서류를 철회하고자 하는 때에는 그 사실을 신청 당일까지 회사에 알려야 합니다.</S.NumberList>
          <S.NumberList><span>②</span>	제1항의 규정에 의하여 알려야 할 사항을 알리지 아니함에 따른 불이익은 고객의 책임입니다.</S.NumberList>
        </S.Licontainer>

        <S.Title>제9조 (단말기의 확보)</S.Title>
        <S.Licontainer>
          <S.LiList>일반이용계약자가 설치 또는 휴대할 단말기는 고객의 부담으로 확보하여야 합니다. 다만, 회사가 대여할 단말기를 보유하고 있는 경우에는 일반이용계약자의 신청에 의하여 대여할 수 있습니다.</S.LiList>
        </S.Licontainer>

        <S.Title>제10조 (번호부여 및 변경)</S.Title>
        <S.Licontainer>
          <S.NumberList><span>①</span>	회사는 신청의 승낙순서에 따라 부여 가능한 일정수의 번호를 제시하고 그 중에서 고객이 선택하는 번호를 부여합니다. 다만, 고객이 선택을 하지 않을 때에는 회사가 순차적으로 부여합니다.</S.NumberList>
          <S.NumberList><span>②</span>	다음 각호의 하나에 해당하는 경우에는 고객의 서비스번호를 변경할 수 있습니다.
            <S.Licontainer>
              <S.NumberList><span>1.</span>	수용구역의 변경으로 인하여 그 단말기를 다른 교환국에 수용해야 할 경우 등 회사의 기술상으로 부득이한 경우</S.NumberList>
              <S.NumberList><span> 2.</span>	공익목적 수행상 서비스번호의 통일을 필요로 하는 경우</S.NumberList>
            </S.Licontainer>
          </S.NumberList>
          <S.NumberList><span>③</span>	 제2항의 규정에 의한 서비스번호의 변경 시에는 변경예정일 7일 전까지 서비스번호의 변경사유, 변경예정번호 및 변경예정일을 해당 고객에게 통보하여야 합니다. 다만, 고객의 책임 있는 사유로 인하여 통보할 수 없을 때에는 회사 인터넷 홈페이지에 게시함으로써 통보한 것으로 봅니다 .</S.NumberList>
          <S.NumberList><span>④</span>	고객의 요청에 의한 번호변경은 1회선당 월 1회 이내로 제한합니다. 다만, 단말기 분실로 확인된 경우에는 횟수를 제한하지 않습니다.</S.NumberList>
        </S.Licontainer >


        <S.Title>제11조 (비밀번호 관리)</S.Title>
        <S.Licontainer>
          <S.NumberList><span>①</span>	회사가 정하는 바에 따라 고객권익 보호가 필요할 경우 부가서비스 또는 서비스 이용절차와 관련하여 비밀번호를 도입, 운영할 수 있습니다.</S.NumberList>
          <S.NumberList><span>②</span>	고객의 관리부실로 비밀번호가 변경, 유용, 유출되어 발생하는 문제는 고객이 책임을 지고, 회사의 비밀번호 관리 시스템의 고장 및 오작동, 직원의 업무상 고의 또는 과실 등 회사의 책임 있는 사유로 비밀번호가 변경, 유용, 유출되어 발생하는 문제는 회사가 책임을 집니다.</S.NumberList>
        </S.Licontainer>

        <S.Title>제12조 (이용계약 등록사항의 증명ㆍ열람)</S.Title>
        <S.Licontainer>
          <S.LiList>이용계약 등록 사항에 대하여 고객이나 그로부터 위임 받은 자 또는 법원의 확정판결서나 집행증서를 제시한 이해 관계인이 증명 또는 열람 청구를 하는 때에는 이에 응합니다.</S.LiList>
        </S.Licontainer>

        <S.Title>제13조 (회사의 의무)</S.Title>
        <S.Licontainer>
          <S.NumberList><span>①</span>	회사는 고객으로부터 제기되는 정당한 의견이나 불만사항을 즉시 처리하기 위하여 민원처리기구를 설치, 운영합니다. 다만, 즉시 처리가 곤란한 경우에는 민원을 제기한 고객에게 그 사유와 처리일정을 통보합니다.</S.NumberList>
          <S.NumberList><span>②</span>	회사는 업무 취급 중 고객에 관하여 알게 된 비밀을 누설하지 아니합니다. 다만, 수사상 필요하여 관계기관으로부터 서면으로 요구받은 때에는 예외로 할 수 있습니다.</S.NumberList>
          <S.NumberList><span>③</span>	회사는 계속적이고 안정적인 서비스의 제공을 위하여 설비에 장애가 생기거나 멸실된 때에는 지체없이 이를 수리 또는 복구합니다. 다만, 천재지변, 비상사태 또는 그 밖에 부득이한 경우에는 그 서비스를 일시 중단하거나 중지할 수 있습니다.</S.NumberList>
          <S.NumberList><span>④</span>	회사는 이용계약의 체결, 계약사항의 변경 및 해지 등 고객과의 계약관련 절차 및 내용에 있어서 고객에게 불리한 행위를 하지 않습니다.</S.NumberList>
          <S.NumberList><span>⑤</span>	회사는 이용약관의 주요내용을 영업점 또는 회사의 인터넷 홈페이지에 비치 또는 게시합니다.</S.NumberList>
        </S.Licontainer>

        <S.Title>제14조 (고객의 의무)</S.Title>
        <S.Licontainer>
          <S.NumberList><span>①</span>	고객은 서비스 이용계약에 따라 요금을 지정된 기일까지 납입하여야 합니다. </S.NumberList>
          <S.NumberList><span>②</span>	고객은 회사에 알린 요금청구 주소 및 연락처가 변경된 경우에는 이를 회사에 알려야 합니다.</S.NumberList>
          <S.NumberList><span>③</span>	고객은 단말기를 분해하거나 회로를 변경하는 등의 행위를 하여서는 안 됩니다.</S.NumberList>
          <S.NumberList><span>④</span>	설비 등의 변경으로 회사가 단말기를 개조 또는 변경할 필요가 있다고 판단하여 이를 요구할 때에는 고객은 이에 응하여야 하고 단말기 개조 또는 변경에 따른 단말기 및 소요부품 구입비용은 회사에서 부담합니다. </S.NumberList>
          <S.NumberList><span>⑤</span>	고객은 회사로부터 제공받은 단말기를 이용함에 있어 선량한 관리자의 주의를 다하여야 합니다.</S.NumberList>
          <S.NumberList><span>⑥</span>	제9조 규정에 의하여 회사로부터 대여받은 단말기를 이용하는 고객이 동 단말기를 잃어버리거나 또는 훼손한 때에는 그의 보충 또는 수선 등에 소요되는 비용을 별도로 정한 방법에 의해 현금으로 보상하여야 합니다.</S.NumberList>
          <S.NumberList><span>⑦</span>	 고객은 스팸 또는 불법 스팸을 전송함으로써 발생하는 모든 민?형사상의 책임을 부담합니다.</S.NumberList>
          <S.NumberList>
            <span>⑧</span>	스팸 및 불법스팸은 다음과 같이 정의합니다. <br />
            스팸 : 정보통신망을 통해 이용자가 원하지 않는데도 불구하고 일방적으로 전송되는 영리목적의 광고성 정보
          </S.NumberList>
          <S.NumberList><span>⑨</span>	불법스팸 : &apos;정보통신망이용촉진및정보보호등에관한법률&apos;을 위반하여 전송 또는 게시되는 영리목적의 광고성 정보</S.NumberList>
          <S.NumberList><span>⑩</span>	고객은 회사의 서비스 제공 목적 외의 용도로 서비스를 이용하여서는 안되며, 제3자에게 임의로 해당서비스를 임대 및 대여할 수 없습니다. </S.NumberList>
          <S.NumberList><span>⑪</span>	‘정보통신망 이용촉진 및 정보보호등에관한법률’등 관련법령에서 금지하고 있는 스팸(불법스팸)을 방지하기 위하여 고객은 회선당 1일 1,000건을 초과하는 메시지를 전송할 수 없습니다.
            1일 1,000건을 초과하여 메시지를 전송할 경우 회사는 1개월 이내의 기간을 정하여 메시지발송을 제한할 수 있습니다. 다만, 회사가 인정하는 경우에는 예외로 합니다. </S.NumberList>
          <S.NumberList><span>⑫</span>	기타 회사의 업무수행에 현저한 지장을 초래하는 행위를 하여서는 아니 됩니다.</S.NumberList>
        </S.Licontainer>

        <S.MainTitle>제3장  서비스 제공 및 해지</S.MainTitle>

        <S.Title>제15조 (서비스)</S.Title>
        <S.Licontainer>
          <S.NumberList><span>①</span>	회사가 제공하는 기본서비스는 회사의 양방향 무선호출망을 이용하여 데이터 통신이나 정보교류를 가능케 하는 서비스를 말합니다. </S.NumberList>
          <S.NumberList><span>②</span>	부가서비스는 기본 서비스 외에 제공되는 서비스로 이용을 원하는 고객에게 제공되며, [ 별표1 ]과 같습니다.</S.NumberList>
          <S.NumberList><span>③</span>	고객은 기본서비스와 부가서비스를 각각 분리하여 사용할 수 있습니다.</S.NumberList>
          <S.NumberList><span>④</span>	부가서비스를 이용, 변경 또는 해지하고자 하는 고객은 ［별표2］에 따라 회사에 신청하거나, 인터넷을 통하여 본인 확인 후 변경 가능하며, 이 경우 요금은 변경일로부터 적용됩니다.</S.NumberList>
        </S.Licontainer>

        <S.Title>제16조 (업무의 제한 및 정지)</S.Title>
        <S.Licontainer>
          <S.NumberList><span>①</span>	회사는 전시ㆍ사변ㆍ천재지변 또는 이에 준하는 국가비상사태가 발생하거나 발생할 우려가 있는 경우와 기타 부득이한 사유가 있는 경우에 중요 통신을 확보하기 위하여 필요한 때에는 서비스의 전부 또는 일부를 제한하거나 정지할 수 있습니다.</S.NumberList>
          <S.NumberList><span>②</span>	회사는 제1항의 규정에 의하여 서비스의 이용을 제한하거나 정지한 때에는 그 사유 및 제한 기간 등을 고객에게 알려야 합니다.</S.NumberList>
        </S.Licontainer>

        <S.Title>제17조 (이용정지)</S.Title>
        <S.Licontainer>
          <S.NumberList>회사는 고객이 다음 각호의 하나에 해당하는 경우에는 즉시 이용을 정지할 수 있고 제14조 제1항 내지, 제4항과 제7항의 규정에 의한 고객의 의무를 이행하지 아니한 경우에는 6개월 범위 내에서 회사가 정하는 기간 동안 서비스의 이용을 정지할 수 있습니다.</S.NumberList>
          <S.NumberList><span>1.</span>	전기통신사업법 제 32 조의 2(타인사용의 제한) 위반시</S.NumberList>
          <S.NumberList><span>2.</span>	전파법 제19조(무선국의 개설) 위반시</S.NumberList>
          <S.NumberList><span>3.</span> 타인에 대한 욕설, 음담패설 등을 전송한 경우</S.NumberList>
          <S.NumberList><span>4.</span> 타인명의를 도용하여 가입하거나, 타인 예금계좌나 신용카드를 도용한 경우</S.NumberList>
          <S.NumberList><span>5.</span> 가입 시 회사에 알린 연락처로 회사가 정한 방법으로 연락하여도 가입 후 1개월까지 고객과 접촉이 안될 경우</S.NumberList>
          <S.NumberList><span>6.</span>	고객의 의무인 요금납부를 2회 이상 연속 미납한 경우</S.NumberList>
          <S.NumberList><span>7.</span>	기타 전기통신관련 법률이나 이 약관을 을 위반한 경우</S.NumberList>
        </S.Licontainer>

        <S.Title>제18조 (이용정지 및 해제 절차)</S.Title>
        <S.Licontainer>
          <S.NumberList><span>①</span>	회사는 제14조 제1항 내지 제4항과 제7항의 규정에 의한 고객의 의무를 이행하지 않음에 따라 이용정지를 하고자 하는 때에는 그 사유, 일시 및 기간을 정하여 이용정지 7일전까지 회사가 정한 방법을 통하여 해당 고객 또는 대리인 에게 통지합니다. 다만, 해당 고객의 책임 있는 사유로 통지할 수 없는 경우에는 그러하지 아니합니다.</S.NumberList>
          <S.NumberList><span>②</span>	제1항의 규정에 의하여 이용정지의 통지를 받은 고객 또는 그 대리인은 그 이용정지의 통지에 대하여 이의가 있을 시에는 방문, 전화, 팩스 등으로 이의를 제기할 수 있고, 이의 제기시에 증빙자료를 제출하여야 이의 신청을 한 것으로 간주합니다.</S.NumberList>
          <S.NumberList><span>③</span>	회사는 제2항의 이의신청에 대하여 심사하고 그 결과를 고객 또는 대리인에게 통지합니다. 회사는 이의신청에 대한 심사를 위한 기간까지 이용정지를 연기할 수 있습니다.</S.NumberList>
          <S.NumberList><span>④</span>	회사는 이용정지 기간 중에 그 이용정지 사유가 해소된 것이 확인된 때에는 이용정지 조치를 즉시 해제합니다. </S.NumberList>
        </S.Licontainer>

        <S.Title>제19조 (이용휴지)</S.Title>
        <S.Licontainer>
          <S.NumberList><span>①</span>	회사는 시설 및 기술상 서비스를 제공할 수 없을 때에는 그 서비스의 이용을 잠시 중단할 수 있습니다.</S.NumberList>
          <S.NumberList><span>②</span>	회사는 중단사유가 해소된 때에는 지체 없이 해당서비스를 다시 제공합니다.</S.NumberList>
        </S.Licontainer>

        <S.Title>제20조 (계약사항의 변경신청 및 제한) </S.Title>
        <S.Licontainer>
          <S.NumberList><span>①</span>	고객은 다음 각호의 하나에 해당하는 이용계약사항을 변경하고자 할 경우에는 변경신청서와 【별표 2】에서 정하는 구비서류를 회사에 제출하여야 합니다.
            <S.Licontainer>
              <S.NumberList><span>1.</span>	회사가 제공하는 서비스종류를 변경하고자 하는 경우</S.NumberList>
              <S.NumberList><span>2.</span>	고객의 단말기를 변경하고자 하는 경우 </S.NumberList>
              <S.NumberList><span>3.</span>	고객이 제3자에게 이용권을 양도하는 경우</S.NumberList>
              <S.NumberList><span>4.</span>	개인고객의 사망, 법인의 합병 및 분할 등으로 이용권을 승계하는 경우</S.NumberList>
              <S.NumberList><span>5.</span>	고객의 성명 또는 칭호(기관명을 포함합니다)가 변경된 경우</S.NumberList>
              <S.NumberList><span>6.</span>	고객의 부득이한 사유로 번호변경이 필요한 경우</S.NumberList>
              <S.NumberList><span>7.</span>	기타 변경이 필요한 경우</S.NumberList>
            </S.Licontainer>
          </S.NumberList>
          <S.NumberList><span>②</span>	고객은 다음 각호의 하나에 해당하는 이용계약 사항을 변경하고자 할 경우에는 방문 외에 전화나 팩스 인터넷 등으로도 신청할 수 있습니다.
            <S.Licontainer>
              <S.NumberList><span>1.</span>	주소변경</S.NumberList>
              <S.NumberList><span>2.</span>	부가서비스 신청/ 변경/ 해지</S.NumberList>
            </S.Licontainer>
          </S.NumberList>
          <S.NumberList><span>③</span>	제1항과 제2항의 고객의 변경신청에 대하여 회사 및 영업점은 다음 각호의 하나에 해당하는 경우에는 응하지 아니할 수 있습니다.
            <S.Licontainer>
              <S.NumberList><span>1.</span>	고객이 요금 등을 미납하였을 경우</S.NumberList>
              <S.NumberList><span>2.</span>	일반고객과 달리 요금 등의 감면 혜택을 부여하고, 양도 및 승계를 일정 기간 제한하는 서비스를 이용한 경우</S.NumberList>
              <S.NumberList><span>3.</span>	압류?가압류 및 가처분된 단말기인 경우</S.NumberList>
              <S.NumberList><span>4.</span>	양수자 및 승계받은 자가 전파법령에서 정한 결격사유가 있는 자의 경우</S.NumberList>
              <S.NumberList><span>5.</span>	회사의 기술상 곤란한 사유가 있을 경우</S.NumberList>
            </S.Licontainer>
          </S.NumberList>
        </S.Licontainer >


        <S.Title>제21조 (일시정지)</S.Title>
        <S.Licontainer>
          <S.NumberList><span>①</span>	고객이 일정기간 동안 서비스 제공을 받지 아니할 사유가 발생하여 일시정지 하고자 하거나, 일시 정지중인 서비스를 재사용하고자 하는 때에는 ［별표 2］에 따라 회사에 신청하여야 합니다.</S.NumberList>
          <S.NumberList><span>②</span>	일시정지 기간은 1회에 90일 범위 내에서 년 2 회까지 신청 가능하며, 초과시 회사가 임의로 설비용도를 전용할 수 있습니다. 다만, 회사가 인정하는 정당한 사유가 있을 경우에는 연장 가능합니다.</S.NumberList>
          <S.NumberList><span>③</span>	일시 정지기간에도 고객의 요청에 의해 부가서비스는 계속 사용할 수 있습니다.</S.NumberList>
          <S.NumberList><span>④</span>	고객은 일시정지중인 서비스를 재사용하고자 할 때에는 회사에 신청하여야 합니다.</S.NumberList>
        </S.Licontainer>

        <S.Title>제22조 (신용불량거래자 등록)</S.Title>
        <S.Licontainer>
          <S.NumberList><span>①</span>	고객이 요금 등을 회사가 정하는 일정기간 동안 납입하지 아니할 경우에는 ‘신용정보의 이용 및 보호에 관한 법률’에 의거하여 신용불량거래자로 등록되어 정보통신 서비스 가입 등에 제한을 받을 수 있습니다.</S.NumberList>
          <S.NumberList><span>②</span>	회사는 고객이 요금을 납입하지 아니하여 신용불량 거래자로 등록된 경우에 연체요금을 납부하면 신용불량거래 등록을 즉시 해제합니다.</S.NumberList>
        </S.Licontainer>

        <S.Title>제23조 (해지)</S.Title>
        <S.Licontainer>
          <S.NumberList><span>①</span>	고객 또는 그 대리인이 이용계약을 해지하고자 할 때에는 회사 또는 영업점에 직접 방문하거나 전화, 팩스 또는 우편(이하 ‘전화 등’이라 합니다)으로 해지를 신청할 수 있습니다. </S.NumberList>
          <S.NumberList><span>②</span>	제1항의 규정에 의한 해지신청시에는 [별표2]의 구비서류를 제출하여야 합니다.</S.NumberList>
          <S.NumberList><span>③</span>	제1항의 규정에 의한 전화 등에 의한 해지신청시에는 회사가 구비서류를 접수한 날에 해지신청을 한 것으로 보며, 이 경우 신청 전일까지의 요금을 납입 또는 정산하셔야 합니다. </S.NumberList>
          <S.NumberList><span>④</span>	회사는 제1항의 규정에 의한 전화 등에 의한 해지신청시 요금을 정산한 후 회사가 정한 기일 내에 서류가 도착하지 않으면 해지처리 할 수 있습니다. </S.NumberList>
          <S.NumberList><span>⑤</span>	 법정대리인의 서면 또는 전화 등에 의한 동의 없이 이용계약을 체결한 미성년자 본인 또는 그 법정대리인이 계약을 해지 신청하는 경우에 회사는 이용계약을 해지 처리합니다.</S.NumberList>
          <S.NumberList><span>⑥</span>	회사는 의무이용기간을 조건으로 단말기 구입보조금을 지급하여 할인 공급하는 무선호출서비스에 가입한 고객이 사용의무기간 종료 전에 계약을 해지할 경우 회사가 별도로 정하는 바에 따라 위약금을 청구할 수 있습니다. </S.NumberList>
          <S.NumberList><span>⑦</span>	회사는 다음 각호에 해당하는 경우에는 이용계약을 해지할 수 있습니다.
            <S.Licontainer>
              <S.NumberList><span>1.</span>	타인명의를 사용하거나 허위서류를 첨부한 청약임이 확인된 때</S.NumberList>
              <S.NumberList><span>2.</span>	이용이 정지된 후 회사가 정한 기일 내에 이용정지 사유를 해소하지 아니한 경우</S.NumberList>
            </S.Licontainer>
          </S.NumberList>
          <S.NumberList><span>⑧</span>	회사는 제 7항의 규정에 의하여 이용계약을 해지하고자 하는 때에는 고객에게 5일 전까지 그 사유 등을 통보해야 하고 사유 통보 시에는 해당처분의 고객 또는 대리인에게 이의신청 기회를 줍니다.</S.NumberList><S.NumberList><span>⑨</span>	회사는 다음 각 호에 의하여 해지고객에 대한 개인정보를 보관합니다.</S.NumberList><S.NumberList><span>⑩</span>	회사는 요금의 정산, 요금 과 ? 오납 등 분쟁발생시 입증을 위하여 해지 후 고객정보(과금정보 포함)를 6개월간 보관할 수 있으며, 국세 기본법 제85조의3의 규정에 따라 최소 5 항목 성명, 주민번호, 전화번호, 청구내역(청구작업일, 전월청구금액, 수납금액, 당월청구액, 청구총액 등), 납부내역(납부일, 요금, 납입방법, 실제금액)을 해지 후 5년간 별도 해지고객 데이터 베이스에서 보관할 수 있습니다.
            <S.Licontainer>
              <S.NumberList><span>1.</span>	해지고객이라 함은 해지 신청을 하고 채권채무관계(잔고)가 ‘0’인 고객을 말하며, 채권채무관계가 ‘0원’이 아닐 경우에는 회사의 고객이므로 개인정보 보관 기간에 구애받지 않습니다.</S.NumberList>
              <S.NumberList><span>2.</span>	해지고객의 개인정보 파기항목</S.NumberList>
            </S.Licontainer>
            <S.Licontainer>

              <S.NumberList><span>가.</span>	가입자의 기본정보 : 주/거소, 자택/직장 전화번호, 생일 및 기념일, 직업/직종, 이메일주소, 고객 (신용)등급, 요금납부자의 전화번호.</S.NumberList>
              <S.NumberList><span>나.</span>	 요금납부 등의 관련정보 : 예금주명, 예금계좌(카드)번호, 은행명, 납부방법, 납부일자.</S.NumberList>
              <S.NumberList><span>다.</span>	 단말기 정보 : 모델명, 일련번호 등</S.NumberList>
              <S.NumberList><span>라.</span>	 기타 정보 : 요금과 관련 없는 부가서비스 등</S.NumberList>
            </S.Licontainer>
          </S.NumberList>
          <S.NumberList><span>3.</span>회사는 제6조 항을 위하여 스팸(불법스팸 포함)발송으로 인하여 계약 해지된 고객의 성명, 주민번호(법인번호,사업자등록번호), 전화번호, 해지사유 등 필요한 정보를 12개월간 보관할 수 있습니다.</S.NumberList>
        </S.Licontainer >


        <S.Title>제24조 (무선호출설비 이용)</S.Title>
        <S.Licontainer>
          <S.NumberList><span>①</span>	회사는 다음 각호의 1의 경우에는 무선호출 설비를 이용토록 할 수 있습니다.
            <S.Licontainer>
              <S.NumberList><span>1.</span>	국가기관, 지방자치단체, 또는 공익기관 등이 고유의 업무수행을 위하여 정보를 제공할 필요가 있는 경우</S.NumberList>
              <S.NumberList><span>2.</span>	부가통신사업자 또는 별정통신사업자가 그 고객에게 정보서비스를 제공하는 경우로서 그 정보가 공공질서 및 사회규범에 반하지 아니할 때</S.NumberList>
              <S.NumberList><span>3.</span>	기타 회사가 국민편익 증진을 위하여 필요하다고 인정하는 경우</S.NumberList>
            </S.Licontainer>
          </S.NumberList>
          <S.NumberList><span>②</span>	제1항의 규정에 의한 무선호출설비 이용요청에 대하여 회사는 업무상, 기술상 특별한 문제가 없는 경우에는 이용을 승낙합니다.</S.NumberList>
          <S.NumberList><span>③</span>	무선호출설비의 이용조건 등과 관련하여서는 설비이용자와 회사가 별도로 협의하여 결정합니다.</S.NumberList>
          <S.NumberList><span>④</span>	설비이용은 제13조 [ 회사의 의무 ], 제14조 [ 고객의 의무 ], 제16조 [ 업무의 제한 및 정지 ], 제17조 [ 이용정지], 제18조 [ 이용정지 및 해제 절차 ] 및 제19조 [ 이용휴지]의 규정을 준용합니다.</S.NumberList>
        </S.Licontainer>



        <S.MainTitle>제4장  요금 등</S.MainTitle>

        <S.Title>제25조 (요금 등의 종류)</S.Title>
        <S.Licontainer>
          <S.LiList>고객이 납입하여야 하는 요금 등의 종류, 요율, 적용기준 및 적용대상 등은 [별표1]의 제1호와 같습니다.</S.LiList>
        </S.Licontainer>

        <S.Title>제26조 (요금 등의 계산구분)</S.Title>
        <S.Licontainer>
          <S.NumberList><span>①</span>	통신요금은 고객의 선택에 의해 사용량에 의해 산정하는 경우와 월정액으로 신청할 수 있습니다. </S.NumberList>
          <S.NumberList><span>②</span>	사용량에 의한 요금은 [별표 1]을 기준으로 하고 월정액 요금의 계산은 회사가 정하는 매월 일정한 날(이하 ‘계산 시작일’이라 합니다)로 부터 만 1개월이 되는 날까지(이하 ‘요금월’이라 합니다)를 구분하여 이를 1개월 분의 요금 등으로 합니다.</S.NumberList>
        </S.Licontainer>

        <S.Title>제27조 (요금 등의 일일분담 계산)</S.Title>
        <S.Licontainer>
          <S.NumberList><span>①</span>	요금월의 중도에 서비스 개시 또는 종료, 단말기 임차, 요금제변경 등을 한 경우 월정액으로 부과되는 기본료, 부가사용료, 단말기 대여료, 단기임대료는 실제 사용일수로 일일분담 계산합니다. </S.NumberList>
          <S.NumberList><span>②</span>	월정액으로 납입하는 요금의 경우 변동사유 발생일이 요금월의 중도에 있는 때에는 일일분담계산을 하여 요금을 적용합니다 (일일분담요금 × 요금부과일수).</S.NumberList>
          <S.NumberList><span>③</span>	월정액의 일일분담요금은 월정액을 그 요금월의 일수로 나눈액으로 합니다 (월정액÷해당요금월의 일수).</S.NumberList>
          <S.NumberList><span>④</span>	일일분담요금 계산시 적용되는 요금부과일수(사용일수,정지일수 등)는 다음 각호와 같이 산정합니다.
            <S.Licontainer>
              <S.NumberList><span>1.</span>	각 사유발생시 사유발생 당일부터 산입</S.NumberList>
              <S.NumberList><span>2.</span>	각 사유해제시 사유해제 전일까지 산입</S.NumberList>
            </S.Licontainer>
          </S.NumberList>
          <S.NumberList><span>⑤</span>	제3항의 규정에 의한 일수계산에 있어서는 그날이 24시간 미만이라도 이를 1일로 계산합니다.</S.NumberList><S.NumberList><span>⑥</span>	요금월의 중도에 월정액이 변경하는 경우에는 변경일로부터 요금월의 말일까지 요금차액을 일할계산하여 변경전의 요금에 가감합니다.</S.NumberList>
        </S.Licontainer >

        <S.Title>제28조 (요금 등의 납입청구)</S.Title>
        <S.Licontainer>
          <S.NumberList><span>①</span>	회사는 고객에게 회사가 지정하는 기일에 회사가 정하는 방법으로 요금 등을 납입하도록 청구합니다. 단, 고객이 요금월의 중도에 해지, 일시 정지 시에는 그때까지의 요금을 즉시 납부하게 합니다</S.NumberList>
          <S.NumberList><span>②</span>	회사는 신규고객에게 최초로 부과되는 기본료, 부가사용료는 다음 달에 합산 청구하거나 일정액 이하의 소액요금의 경우에는 일정기간 누적하여 청구할 수 있습니다.</S.NumberList>
          <S.NumberList><span>③</span>	회사는 고객의 동의를 받아 요금과 타 서비스 이용료를 통합 청구할 수 있습니다.</S.NumberList>
        </S.Licontainer>

        {/* <S.Title>제28조 (요금 등의 납입청구)</S.Title>
        <S.Licontainer>
          <S.NumberList><span>①</span>	회사는 고객에게 회사가 지정하는 기일에 회사가 정하는 방법으로 요금 등을 납입하도록 청구합니다. 단, 고객이 요금월의 중도에 해지, 일시 정지 시에는 그때까지의 요금을 즉시 납부하게 합니다</S.NumberList>
          <S.NumberList><span>②</span>	회사는 신규고객에게 최초로 부과되는 기본료, 부가사용료는 다음 달에 합산 청구하거나 일정액 이하의 소액요금의 경우에는 일정기간 누적하여 청구할 수 있습니다.</S.NumberList>
          <S.NumberList><span>③</span>	회사는 고객의 동의를 받아 요금과 타 서비스 이용료를 통합 청구할 수 있습니다.</S.NumberList>
        </S.Licontainer> */}

        <S.Title>제29조 (요금 등의 납입방법)</S.Title>
        <S.Licontainer>
          <S.NumberList><span>①</span>	요금의 납부는 고객이 선납과 후납으로 정하여 신청할 수 있습니다. 단, 월정액은 반드시 선납하여야 합니다.</S.NumberList>
          <S.NumberList><span>②</span>	통합청구를 신청한 고객은 요금 등을 통합하여 납부하여야 하며, 납부한 요금은 회사가 정한 기준에 따라 수납처리 합니다.</S.NumberList>
        </S.Licontainer>

        <S.Title>제30조 (요금 등의 감면 및 할인)</S.Title>
        <S.Licontainer>
          <S.LiList> 회사는 ［별표1］의 제2호에서 정하는 바에 따라 요금 등을 감면하거나 할인하여 드립니다. </S.LiList>
        </S.Licontainer>

        <S.Title>제31조 (가산금의 부과)</S.Title>
        <S.Licontainer>
          <S.NumberList><span>①</span>	요금(면탈 요금을 포함합니다)을 지정한 기일까지 납입하지 아니한 때에는 그 요금의 100분의 2에 상당하는 가산금을 부과할 수 있습니다.</S.NumberList>
          <S.NumberList><span>②</span>	회사는 고객의 책임 없는 사유로 납입청구서가 납입의무자, 그 가족 또는 대리인에게 배달되지 않았음이 인정되는 경우 가산금을 부과하지 아니합니다.</S.NumberList>
        </S.Licontainer>

        <S.Title>제32조 (체납요금 등의 징수)</S.Title>
        <S.Licontainer>
          <S.NumberList><span>①</span>	회사는 요금 등의 납부통지를 받은 고객이 회사가 정한 납부기한까지 요금 등을 납부하지 아니한 경우에 그 미납요금을 납입기일의 다음달에 합산하여 청구합니다.</S.NumberList>
          <S.NumberList><span>②</span>	회사는 고객이 회사가 청구하는 체납요금 등을 납부하지 아니하는 때에 보증금에서 공제합니다.</S.NumberList>
          <S.NumberList><span>③</span>	보증금의 전부 또는 일부가 제2항의 규정에 의하여 공제된 경우에는 회사가 정하는 기일 내에 이를 충당해 놓아야 합니다.</S.NumberList>
        </S.Licontainer>

        <S.Title>제33조 (불법면탈 요금 등의 청구)</S.Title>
        <S.Licontainer>
          <S.NumberList><span>①</span>	고객이 이용약관에서 정한 사항을 위반하여 요금 등을 면탈한 경우 면탈한 금액의 2배에 해당하는 금액을 청구합니다. </S.NumberList>
          <S.NumberList><span>②</span>	제1항의 규정에 의해 면탈한 금액과 그 가산금의 수납에 관하여는 제31조의 규정을 준용합니다.</S.NumberList>
          <S.NumberList><span>③</span>	제2항의 규정에 의하여 면탈한 요금 등을 청구하는 경우에는 그 사유를 명시합니다.</S.NumberList>
        </S.Licontainer>

        <S.Title>제34조 (요금 등의 이의신청)</S.Title>
        <S.Licontainer>
          <S.NumberList><span>①</span>	고객은 청구된 요금 등에 대하여 이의가 있는 경우 청구일로부터 6개월 이내에 이의신청을 할 수 있습니다.</S.NumberList>
          <S.NumberList><span>②</span>	회사는 제1항의 이의신청에 대하여 접수 후 즉시 이의 타당성 여부를 조사하고 그 결과를 10일 이내에 고객 또는 그 대리인에게 통지합니다.</S.NumberList>
          <S.NumberList><span>③</span>	부득이한 사유로 인하여 제2항에서 정한 기간 내에 이의신청 결과를 통지할 수 없는 경우에는 그 사유 및 재지정된 처리기한을 명시하여 이를 고객 또는 그 대리인에게 통지합니다.</S.NumberList>
        </S.Licontainer>

        <S.Title>제35조 (보증금의 반환)</S.Title>
        <S.Licontainer>
          <S.NumberList><span>①</span>	회사는 계약사항의 변경으로 인하여 보증금이 서로 다른 때에는 그 차액을 청구하거나 반환합니다.</S.NumberList>
          <S.NumberList><span>②</span>	회사는 이용계약이 해지된 경우에는 고객이 납입한 보증금을 반환합니다. </S.NumberList>
          <S.NumberList><span>③</span>	보증금을 반환하여야 할 고객에게 요금 등의 미납이 있을 경우에는 보증금에서 공제하고 반환합니다.</S.NumberList>
        </S.Licontainer>

        <S.Title>제36조 (요금 등의 반환)</S.Title>
        <S.Licontainer>
          <S.NumberList><span>①</span>	회사는 고객이 그의 책임이 없는 사유로 인하여 서비스를 제공받지 못한 경우로서 그 뜻을 회사에 통지한 때(그 전에 회사가 그 뜻을 안 때에는 그 알게 된 때)로부터 계속 5시간 이상 그 서비스를 제공받지 못한 때에는 그 서비스를 제공받지 못한 시간에 따라 월정액 요금을 시간분할로 계산하여 반환합니다.</S.NumberList>
          <S.NumberList><span>②</span>	회사는 요금 등의 과납 또는 오납이 있을 때에는 그 과납 또는 오납 된 요금을 반환하고, 회사의 귀책사유로 발생한 경우에는 법정이율을 부가하여 반환합니다. 다만, 이용 고객이 동의하거나 회사의 반환통지에 대하여 응하지 아니하는 경우에는 새로이 발생하는 요금 등에서 해당금액과 납부 마감일까지의 법정이율을 차감하여 청구할 수 있습니다.</S.NumberList>
          <S.NumberList><span>③</span>	회사는 요금 등을 반환하여야 할 고객에 요금 등의 미납이 있을 경우에는 반환하여야 할 요금 등에서 우선 변제하고 반환할 수 있습니다.</S.NumberList>
        </S.Licontainer>

        <S.MainTitle>제5장  손해배상</S.MainTitle>

        <S.Title>제37조 (손해배상의 범위)</S.Title>
        <S.Licontainer>
          <S.NumberList><span>①</span>	고객의 책임 없는 사유로 서비스를 이용하지 못하는 경우에 그 뜻을 회사에 통지한 후부터 5시간 이상 서비스를 제공받지 못한 때에는 서비스를 제공 받지 못한 시간에 해당하는 기본료와 부가사용료의 3배에 상당한 금액을 최저 기준 으로 하여 고객의 청구에 의해 협의하여 손해배상을 합니다.</S.NumberList>
          <S.NumberList><span>②</span>	회사가 이용자로부터 서비스를 이용하지 못한 사실을 통지받은 경우에는 서비스 재개를 위해 가능한 조치를 취해야 하며, 서비스를 다시 이용할 수 있게 된 경우 이 사실을 이용자에게 통지하여야 합니다.</S.NumberList>
          <S.NumberList><span>③</span>	회사는 상기의 규정에도 불구하고 다음 각 호의 1의 사유를 입증하는 경우에는 요금감면 또는 손해배상책임이 감면될 수 있습니다.
            <S.Licontainer>
              <S.NumberList><span>1.</span>	전시ㆍ사변ㆍ천재지변 또는 이에 준하는 국가비상사태 등 불가항력으로 인한 경우</S.NumberList>
              <S.NumberList><span>2.</span>	전기통신서비스의 특성상 불가피한 사유로 서비스 제공이 불가능한 경우</S.NumberList>
              <S.NumberList><span>3.</span>	고객의 고의 또는 과실로 인하여 발생한 경우</S.NumberList>
            </S.Licontainer>
          </S.NumberList>
          <S.NumberList><span>④</span>	회사는 이용자가 서비스를 이용할 수 없다고 통지한 일자 및 시간, 서비스 재개를 위한 회사의 조치내역과 서비스 재개시점에 관한 사실을 기록할 수 있도록 시스템을 구축하거나 별도의 이용자불만 접수 및 처리대장을 비치, 관리합니다.</S.NumberList>
        </S.Licontainer>

        <S.Title>제38조 (손해배상의 청구)</S.Title>
        <S.Licontainer>
          <S.NumberList><span>1.</span>	손해배상의 청구는 회사에 서면으로 하여야 합니다. </S.NumberList>
          <S.NumberList><span>2.</span>	제1항의 경우에는 청구사유, 청구금액 및 산출근거를 함께 제출해야 합니다.</S.NumberList>
          <S.LiList>부칙(시행일) 이 약관은 2007년 9월 5일부터 시행합니다.</S.LiList>
        </S.Licontainer>
      </S.MidText>


    </S.Container >
  )

}

export default ComUseContent;