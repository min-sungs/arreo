import React from 'react';

import * as S from './style/Terms.styles';
import ATitle from '../../components/Atom/ATitle';
import { Link } from 'react-router-dom';

const ComSpampolicy = () => {

  return (
    <S.Container>
      <S.TitleContainer>
        <ATitle type='main' text='스팸정책' color='#000' />
      </S.TitleContainer>

      <S.MidText>
        <S.SubTitle style={{ marginTop: '50px', lineHeight: '20px' }}>
          &quot;아레오 스팸 운영 정책&quot;(이하 &apos;스팸정책&apos;이라 합니다)은 (주)서울이동통신(이하 &apos;회사&apos;라 합니다)이 인터넷 서비스(이하 &apos;서비스&apos;라 합니다)를 제공함에 있어 정보문화의 향상을 위하여 정보통신망이용 촉진및정보보호등에관한법률에 근거하여 회사가 제정한 것으로 서비스를 이용하는 회원과 비회원(이하 &apos;이용자&apos;라 합니다)은 서비스 이용에 있어서 본 스팸정책을 준수하여야 합니다.
        </S.SubTitle>

        <S.Licontainer>
          <S.LiList>영리 목적의 광고성 문자메시지 발송시 반드시 수신자의 사전 동의를 얻어야 합니다. (수신자로부터 직접 연락처를 수집한 경우 제외)</S.LiList>
          <S.LiList>수신자의 사전 동의를 얻었다 하더라도 문자, 팩스 내용에 수신 거부 조치 및 방법에 관한 사항을 표시하여야 합니다.</S.LiList>
          <S.LiList>수신자의 수신 거부시 기술적으로 수신 거부를 회피ㆍ방해해서는 안됩니다.</S.LiList>
          <S.LiList>발송되는 메시지 내용 중 &apos;광고&apos; 또는 &apos;성인&apos;의 단어가 삽입된 경우, 방송통신위원회 스팸정책에 의하여 20:55 ~ 08:00 사이에는 메시지를<br />발송할 수 없으며 모두 자동 취소 처리 됩니다.</S.LiList>
          <S.LiList>수신자의 사전 동의를 얻었다 하더라도 오후 9시부터 그 다음날 오전 8시 사이에 광고성 문자를 보낼 경우 별도로 사전 동의를 얻어야 합니다.</S.LiList>
          <S.LiList>발송할 수 없으며 모두 자동 취소 처리 됩니다.</S.LiList>
          <S.LiList>스팸 규제 정책의 강화로 위의 사항을 준수하여 발송하셔야 합니다.</S.LiList>
          <S.LiList>이를 준수하지 않아 발생된 문제는 발신자인 해당 고객에게 책임이 있습니다.</S.LiList>
          <S.LiList>(개정일 2004.12.30 / 시행일 2007.09.05)</S.LiList>
        </S.Licontainer>



        <S.Licontainer>
          <S.Title>제 1 조 (목적)</S.Title>
          <S.LiList>본 스팸정책은 유해한 정보환경으로부터 이용자의 권익을 보호함과 아울러, 이용자의 정보 이용 능력의 향상을 도모하여,</S.LiList>
          <S.LiList>인터넷상의 정보 문화 향상을 위함을 목적으로 합니다.</S.LiList>
        </S.Licontainer>

        <S.Licontainer>
          <S.Title>제 2 조 (정의)</S.Title>
          <S.LiList>스팸(Spam)이란 인터넷 ID 및 휴대폰 번호를 가진 사람에게 사기성 광고 및 음란/불법 소프트웨어의 판매, 행운의 편지 등 기타의 내용을 수신인의 허락 없이 일방적으로 보내는 대량의 메일과 휴대폰 문자메시지(이하 ‘메시지’)를 말합니다. 회사는 회원과 이용자의 보호와 건전한 인터넷 문화 형성을 위하여 &apos;스팸정책&apos;을 시행하며, 회원은 회사에서 정한 다음 각 호의 내용을 포함한 ‘스팸정책’을 준수하는 것에 동의합니다.</S.LiList>
          <S.NumberList><span>1.</span>회사의 전자우편 서비스와 메시지 서비스를 이용하여 불특정 다수에게 수신인의 허락없이 대량의 스팸을 발송할 수 없습니다.</S.NumberList>
          <S.NumberList><span>2.</span>대량으로 보내지는 스팸메일의 회신용(리턴 메일)으로 회사의 전자우편 주소를 사용할 수 없습니다.</S.NumberList>
          <S.NumberList><span>3.</span>스팸 발송을 목적으로 어떤 형태로든 서비스 내에 있는 전자우편 주소의 추출 행위를 할 수 없습니다.</S.NumberList>
          <S.NumberList><span>4.</span>회사는 회사의 전자우편 서비스를 이용하는 다수의 회원을 보호하기 위하여, 대량으로 수신되는 스팸을 &apos;스팸정책&apos;에 의거하여 통보 없이 차단할 수 있습니다.</S.NumberList>
          <S.NumberList><span>5.</span>회사는 대량으로 회원이 대량으로 전송된 메일 및 메시지에 대하여 스팸 필터링의 정상적인 작동 여부를 판단할 목적에 한하여 내용을 확인할 수 있습니다.</S.NumberList>
          <S.NumberList><span>6.</span>회사는 스팸을 발신하는 회원의 경우 통보 없이 회원 자격을 박탈할 수 있으며, 영구히 회원 자격 획득을 거부할 수 있습니다.</S.NumberList>
          <S.NumberList><span>7.</span>회사는 악성 스팸 발신을 통해 타 회원 및 회사에 정신적 물질적인 피해를 입혔다고 판단되는 회원에게 피해 보상을 요구할 수 있습니다.</S.NumberList>
          <S.NumberList><span>8.</span>컴퓨터 바이러스의 유포, 저작권 침해, 불법 해킹 시도 등 국내?외 각종 정보통신관련 법령을 위반한 메일을 전송할 수 없습니다.</S.NumberList>
        </S.Licontainer>

        <S.Licontainer>
          <S.Title>제 3 조 (스팸 차단 대상)</S.Title>
          <S.LiList>회사는 전자우편을 이용한 스팸메일 및 스팸메시지로 인해 회원 및 제3자에게 피해를 주는 행위를 방지하기 위하여 아래의 다음의 각호에 해당하는 경우 기술적으로 전송을 사전에 방지할 수 있습니다.</S.LiList>
          <S.NumberList><span>1.</span>정보통신망법 및 동법시행령이 규정하고 있는 영리목적의 광고성 정보의 명시사항 및 명시방법을 준수하지 않는 메일</S.NumberList>
          <S.NumberList><span>2.</span>정보통신망법 및 동법시행령이 규정하고 있는 영리목적의 광고성 정보의 명시사항 및 명시방법을 준수하였으나, 수신인의 동의를 받지 아니하고 발송되는 대량의 메일</S.NumberList>
          <S.NumberList><span>3.</span>메일 서버의 릴레이가 개방되어 스팸 전송자가 해당 서버를 이용하여 전송한 메일</S.NumberList>
          <S.NumberList><span>4.</span>메일 헤더 정보가 비정상적으로 설정 또는 조작되어 실제 발송자를 확인할 수 없는 메일</S.NumberList>
          <S.NumberList><span>5.</span>회사의 관계사 또는 타 서비스의 관리자를 사칭하여 개인정보를 획득하고자 위장하는 메일(피싱메일)</S.NumberList>
          <S.NumberList><span>6.</span>메일서버등록제(SPF: Sender Policy Framework)에 의해 발송자 정보가 위ㆍ변조된 것으로 판명된 메일</S.NumberList>
        </S.Licontainer>

        <S.Licontainer>
          <S.Title>제 4 조 (이용자의 의무)</S.Title>
          <S.NumberList><span>1.</span>이용자는 서비스 계약에 필요한 개인신상정보 등을 회사에 허위로 제공하여서는 안되며, 정보변경시 지체없이 회사에 통보하여 갱신하여야 합니다.</S.NumberList>
          <S.NumberList><span>2.</span>이용자는 회사의 서비스 제공 목적 외의 용도로 서비스를 이용하여서는 안되며, 제3자에게 임의로 해당 서비스를 임대하여서도 안됩니다.</S.NumberList>
          <S.NumberList><span>3.</span>이용자는 스팸 또는 불법스팸을 전송함으로써 발생하는 모든 민ㆍ형사상의 책임을 부담합니다.</S.NumberList>
        </S.Licontainer>

        <S.Licontainer>
          <S.Title>제 5 조 (이용의 제한)</S.Title>
          <S.NumberList><span>1.</span>회사는 이용자가 다음 중 하나에 해당하는 경우 1개월 이내의 기간을 정하여 지체없이 서비스 이용을 정지(전체 서비스 또는 일부 서비스)할 수 있으며, 그 사실을 서비스를 제공받는 이용자에게 통지합니다. 다만 미리 통지하는 것이 곤란한 경우에는 선조치 후 통지할 수 있습니다.
            <S.Licontainer>
              <S.NumberList><span>①</span> 정통부 또는 한국정보보호진흥원이 불법스팸 전송사실을 확인하여 이용제한을 요청하는 경우</S.NumberList>
              <S.NumberList><span>②</span> 대량으로 스팸을 전송하여 시스템 장애를 야기했거나 야기할 우려가 있는 경우</S.NumberList>
              <S.NumberList><span>③</span> 스팸릴레이로 이용되거나 웜에 감염되어 스팸을 전송한 경우</S.NumberList>
              <S.NumberList><span>④</span> 해당 광고를 수신한 자가 수신거부를 요청하였으나 지속 재전송한 경우 등</S.NumberList>
            </S.Licontainer>
          </S.NumberList>
          <S.NumberList><span>2.</span>이용자는 이용제한 기간 경과 후 1개월 이내에 그 사유를 해소하여야 하며, 회사는 이용제한의 사유가 해소되면 서비스의 이용을 다시 허용할 수 있습니다.</S.NumberList>
          <S.NumberList><span>3.</span>계약의 해지 : &quot;계약해지&quot; 및 &quot;선조치/후통보&quot; 항목 필수</S.NumberList>
          <S.NumberList><span>4.</span>회사는 이용자가 다음 중 하나에 해당하는 경우 지체 없이 계약을 해지할 수 있으며, 그 사실을 서비스를 제공받는 이용자에게 통지합니다. 다만 미리 통지하는 것이 곤란한 경우에는 선조치 후 통지할 수 있습니다.
            <S.Licontainer>
              <S.NumberList><span>①</span> 이용제한 기간 경과 이후에도 지속적으로 불법 스팸을 전송하여 정통부 또는 한국정보보호진흥원에서 계약해지를 요청하는 경우</S.NumberList>
              <S.NumberList><span>②</span> 당해 연도에 2회 이상 이용제한을 당한 경우</S.NumberList>
              <S.NumberList><span>③</span> 서비스 신청시 실명이 아니거나 제3자 또는 법인의 명의사용 등 필수제출 정보를 허위로 제공 또는 누락, 오기하여 신청한 경우</S.NumberList>
              <S.NumberList><span>④</span> 회사의 서비스 제공 목적 외의 용도로 서비스를 이용하거나, 제3자에게 임의로 해당 서비스를 임대한 경우</S.NumberList>
            </S.Licontainer>
          </S.NumberList>
          <S.LiList>
            위의 가이드라인을 준수하지 않은 영리목적의 광고성 메일 및 스팸메일에 대해서 회사는 정보통신망법 제50조의4 제1항에 의거, 서비스 제공에 장애가 발생하거나 발생할 우려가 있는 경우 또는 회사 서비스 이용자가 메일의 수신을 원하지 않는 경우 당해 메일을 차단하는 조치를 취할 수 있습니다.
          </S.LiList>
        </S.Licontainer>

        <S.Licontainer>
          <S.Title>제 6 조 (회사의 의무)</S.Title>
          <S.NumberList><span>1.</span>회사는 서비스 제공과 관련하여 알고 있는 이용자의 개인정보를 본인의 승낙 없이 제3자에게 누설, 배포하지 않습니다. 다만, 관계 법령에 의한 관계기관으로부터의 요청 등 법률의 규정에 따른 적법한 절차에 의한 경우에는 그러하지 않습니다.</S.NumberList>
          <S.NumberList><span>2.</span>회사는 서비스 제공 목적에 맞는 서비스 이용 여부를 확인하기 위하여 상시적으로 모니터링을 실시합니다.</S.NumberList>
          <S.NumberList><span>3.</span>회사는 이용자가 불법스팸을 전송한 사실을 확인한 경우, 한국정보보호진흥원 불법스팸대응센터(http://www.spamcop.or.kr)에 관련 자료를 첨부하여 신고할 수 있습니다.</S.NumberList>
          <S.NumberList><span>4.</span>회사는 스팸 수신거부 처리 등 스팸 관련 민원을 자체적으로 처리하기 위한 고충 처리 창구를 아래와 같이 운영합니다.</S.NumberList>
          <S.LiList>전화 번호 : help@arreo.com</S.LiList>
        </S.Licontainer>

      </S.MidText>


    </S.Container>
  )

}

export default ComSpampolicy;