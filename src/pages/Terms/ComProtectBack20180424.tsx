import React from 'react';

import * as S from './style/Terms.styles';
import ATitle from '../../components/Atom/ATitle';
import { Link } from 'react-router-dom';

const ComProtectBack20180424 = () => {

  return (
    <S.Container>
      <S.TitleContainer>
        <ATitle type='main' text='개인정보 처리방침' color='#000' />
      </S.TitleContainer>



      <S.MidText>

        <S.Licontainer style={{ marginTop: '50px' }}>
          <S.LiList>㈜네띠앙닷컴(이하 “회사”)은 고객님의 개인정보보호를 매우 중요시하며, &apos;정보통신망이용촉진및정보보호에 관한 법률&apos;을 준수하고 있습니다.</S.LiList>
          <br />
          <S.LiList>회사는 개인정보취급방침을 명시하여 회원이 온라인상에서 회사에 제공한 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치를 취하는지 알려드립니다.</S.LiList>
          <S.LiList>본 개인정보취급방침은 관련 법령 및 지침의 개정이나 회사 내부방침의 변경 등으로 인하여 개정될 수 있으며, 회원께서는 개정내역에 관해 당사 홈페이지 방문 시 수시로 확인하시기 바랍니다.</S.LiList>
        </S.Licontainer>

        <S.Title>1. 개인정보의 수집항목</S.Title>
        <S.Licontainer>
          <S.LiList>회사는 해당 서비스 제공을 위하여 아래와 같은 개인정보를 수집하고 있습니다.</S.LiList>
          <S.NumberList><span>1)</span>필수 수집항목
            <S.Licontainer>
              <S.LiList><span>가) </span> 개인회원 : 성명, 생년월일, 아이디, 비밀번호, 휴대전화번호, 전자우편, 서비스 이용기록, 쿠키, 결제기록, 접속로그기록 및 기타 통신사실 확인자료, 메시지 내용, 접속 IP 정보</S.LiList>
              <S.LiList><span>나) </span> 기업회원 : 상호명, 사업자번호, 휴대전화번호, 아이디, 비밀번호</S.LiList>
            </S.Licontainer>
          </S.NumberList>

          <S.NumberList><span>2)</span>선택 수집항목
            <S.Licontainer>
              <S.LiList><span>가) </span> 개인회원 : 주소, 닉네임, 긴급연락처, 생일, 결혼여부, 결혼기념일, 직업</S.LiList>
              <S.LiList><span>나) </span> 기업회원 : 담당자명, 일반전화번호, 전자우편, 주소</S.LiList>
            </S.Licontainer>
          </S.NumberList>
        </S.Licontainer>



        <S.Title>2. 개인정보의 이용 및 수집목적</S.Title>
        <S.Licontainer className='paddingPt'>
          <S.NumberList><span>1)</span>본인 확인제에 따른 본인확인, 회원 식별을 위한 목적</S.NumberList>
          <S.NumberList><span>2)</span>불량회원의 부정 이용 방지와 비인가 사용 방지, 가입의사 확인, 가입 및 가입횟수 제한, 연령확인</S.NumberList>
          <S.NumberList><span>3)</span>회원제 서비스 제공을 위한 목적</S.NumberList>
          <S.NumberList><span>4)</span>만14세 미만 아동 개인정보 수집시 법정대리인 동의여부 확인, 불만처리 등 민원처리, 공지사항 전달 등</S.NumberList>
          <S.NumberList><span>5)</span>접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계</S.NumberList>
          <S.NumberList><span>6)</span>서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산, 구매 및 요금 결제, 요금추심</S.NumberList>
          <S.NumberList><span>7)</span>컨텐트 제공, 물품배송 또는 청구서 등 발송</S.NumberList>
          <S.NumberList><span>8)</span>분쟁 조정을 위한 기록 보존</S.NumberList>
          <S.NumberList><span>9)</span>전송내역 확인을 요청하는 고객에게 제공</S.NumberList>
          <S.NumberList><span>10)</span>마케팅 및 광고에 활용, 이벤트 등 광고성 정보 전달</S.NumberList>
        </S.Licontainer>

        <S.MainTitle>3. 개인정보의 수집방법 : 홈페이지(회원가입)</S.MainTitle>


        <S.Title>4. 개인정보의 보유 및 이용기간</S.Title>
        <S.Licontainer>
          <S.LiList>원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기하며, 개인정보취급이 제3자에게 위탁된 경우에는 수탁자에게 파기하도록 지시합니다.<br />단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.</S.LiList>
          <S.NumberList><span>1)</span>회원탈퇴 시 보존 개인정보
            <S.Licontainer>
              <S.NumberList><span>가)</span> 보존 항목: 이름, 생년월일, 성별, 로그인ID, 자택 전화번호, 자택주소, 휴대전화번호, 이용기록, 접속 로그, 쿠키, 접속IP 정보, 결제기록</S.NumberList>
              <S.NumberList><span>나)</span> 보존 근거: 서비스 이용의 혼선 방지, 불법적 사용자에 대한 관련 기관 수사협조, 회원 탈퇴 시 소비자의 불만 및 분쟁해결 등을 위한 목적</S.NumberList>
              <S.NumberList><span>다)</span> 보존 기간: 3개월</S.NumberList>
              <S.NumberList><span>라)</span> 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.</S.NumberList>
            </S.Licontainer>
          </S.NumberList>
          <S.NumberList><span>2)</span>서비스 이용 관련 개인정보(서비스 이용기록, 접속로그, 접속IP 정보)
            <S.Licontainer>
              <S.NumberList><span>가)</span> 보존 근거 : 통신비밀보호법</S.NumberList>
              <S.NumberList><span>나)</span> 보존 기간 : 3개월</S.NumberList>
            </S.Licontainer>
          </S.NumberList>
          <S.NumberList><span>3)</span>본인확인에 관한 기록
            <S.Licontainer>
              <S.NumberList><span>가)</span> 보존 근거 : 정보통신망 이용촉진 및 정보보호 등에 관한 법률</S.NumberList>
              <S.NumberList><span>나)</span> 보존 기간 : 6개월</S.NumberList>
            </S.Licontainer>
          </S.NumberList>
          <S.NumberList><span>4)</span>회원탈퇴 시 보존 개인정보
            <S.Licontainer>
              <S.NumberList><span>가)</span> 보존항목: 상거래이력</S.NumberList>
              <S.NumberList><span>나)</span> 보존근거: 상법, 전자상거래등에서의 소비자보호에 관한 법률</S.NumberList>
              <S.NumberList><span>다)</span> 보존기간: 계약 또는 청약철회 등에 관한 기록 : 5년</S.NumberList>
              <S.NumberList><span>라)</span> 대금결제 및 재화등의 공급에 관한 기록 : 5년</S.NumberList>
              <S.NumberList><span>마)</span> 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년</S.NumberList>
            </S.Licontainer>
          </S.NumberList>
        </S.Licontainer>

        <S.Title>5. 개인정보 파기절차 및 방법</S.Title>
        <S.SubTitle>회원의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다.</S.SubTitle><br />
        <S.SubTitle>회사의 개인정보 파기절차 및 방법은 다음과 같습니다.</S.SubTitle>
        <S.Licontainer>
          <S.NumberList><span>1)</span>파기절차
            <S.Licontainer>
              <S.LiList>- 고객이 회원가입 등을 위해 입력한 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조)일정 기간 저장된 후 파기됩니다.</S.LiList>
            </S.Licontainer>
          </S.NumberList>
          <S.NumberList><span>2)</span>상거래 관련 보존 개인정보
            <S.Licontainer>
              <S.LiList>- 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.</S.LiList>
              <S.LiList>- 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</S.LiList>
            </S.Licontainer>
          </S.NumberList>
        </S.Licontainer>


        <S.Title>6. 개인정보의 제3자 제공 및 공유</S.Title>
        <S.Licontainer>
          <S.LiList>
            회사는 회원들의 개인정보를 &quot;2. 개인정보의 수집 및 이용목적&quot;에서 고지한 범위 내에서 사용하며, 회원의 사전 동의 없이는 동 범위를 초과하여 이용하거나 원칙적으로 회원의 개인정보를 외부에 공개하지 않습니다.<br /> 다만, 아래의 경우에는 예외로 합니다.
          </S.LiList>
          <S.NumberList><span>1)</span> 회원이 사전에 동의 한 경우
            <S.Licontainer>
              <S.NumberList><span>가)</span> 개인정보 제공 이전에 개인정보 제공자, 개인정보 제공 목적, 제공하는 개인정보의 항목 및 보유기간을 별도로 알리고 동의절차를 거치며, 이에 회원이 동의하지 않을 경우에는 제3자에게 회원의 개인정보를 제공하지 않습니다.</S.NumberList>
              <S.NumberList><span>나)</span> 회사는 회원에 대하여 보다 질 높은 서비스 제공 등을 위해 사전에 동의를 획득한 경우에 한하여 아래와 같이 회원의 개인정보를 제공하고 있습니다.</S.NumberList>
            </S.Licontainer>
          </S.NumberList>
          <S.LiList>
            <S.ProtectTable style={{ marginTop: '5px' }}>
              <colgroup>
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
                <col width="40%" />
              </colgroup>
              <S.ProtectHead>
                <S.ProtectTr>
                  <S.ProtectTh>제공받는 자</S.ProtectTh>
                  <S.ProtectTh>이용 목적</S.ProtectTh>
                  <S.ProtectTh>제공 항목</S.ProtectTh>
                  <S.ProtectTh>개인정보 보유 및 이용기간</S.ProtectTh>
                </S.ProtectTr>
              </S.ProtectHead>
              <S.ProtectBody className='padding'>
                <S.ProtectTr>
                  <S.ProtectTd>유비클(주)</S.ProtectTd>
                  <S.ProtectTd>모바일상품권 ,컨텐츠 제휴</S.ProtectTd>
                  <S.ProtectTd>아이디, 성명,휴대전화번호</S.ProtectTd>
                  <S.ProtectTd rowSpan={3}>이용자가 제3자의 서비스를 제공받아 이용목적이 달성된 시점까지</S.ProtectTd>
                </S.ProtectTr>
                <S.ProtectTr>
                  <S.ProtectTd>(주)다우기술</S.ProtectTd>
                  <S.ProtectTd>포토플러스,컨텐츠 제휴</S.ProtectTd>
                  <S.ProtectTd>아이디</S.ProtectTd>
                </S.ProtectTr>
                <S.ProtectTr>
                  <S.ProtectTd>서울이동통신(주)</S.ProtectTd>
                  <S.ProtectTd>무선호출서비스 이용</S.ProtectTd>
                  <S.ProtectTd>아이디, 성명, 휴대전화번호, 주소</S.ProtectTd>
                </S.ProtectTr>
              </S.ProtectBody>
            </S.ProtectTable>
          </S.LiList>
          <S.LiList>* 공유받는 사이트 현황 : 네띠앙(<Link to="http://www.netian.com" target="_blank" rel="noreferrer">www.netian.com</Link>), 아레오(<Link to="http://www.arreo.com" target="_blank">www.arreo.com</Link>)</S.LiList>
          <S.LiList>* 회원이 회원등록 시 부여 받은 ID로 사이트에 자유롭게 접속할 수 있도록 네띠앙과 아레오는 접속을 위한 최소한의 정보를 공유합니다.</S.LiList>
          <br />
          <S.NumberList><span>2)</span> 서비스의 제공에 관한 계약의 이행을 위하여 필요한 개인정보로서 경제적/기술적인 사유로 통상의 동의를 받는 것이 현저히 곤란한 경우</S.NumberList>
          <S.NumberList><span>3)</span> 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있을 경우</S.NumberList>
          <S.NumberList><span>4)</span> 서비스 제공에 따른 요금 정산을 위해 필요한 경우</S.NumberList>
        </S.Licontainer>

        <S.Title>7. 개인정보 자동 수집 장치의 설치/운영 및 거부에 관한 사항</S.Title>
        <S.Licontainer>
          <S.NumberList><span>1)</span>회사는 전문적인 고객지원 및 서비스 제공을 위해 개인정보 취급 업무를 외부 업체에 위탁하여 위탁계약, 혹은 각종 서비스대행계약 및 업무제휴계약 등에 따라 회원의 개인정보 취급에 대한 위탁을 할 수 있습니다.</S.NumberList>
          <S.NumberList><span>2)</span>위탁계약 시 개인정보보호의 안전을 기하기 위하여 개인정보보호 관련 지시 엄수, 개인정보에 관한 유출금지 및 사고시의 책임부담 등을 명확히 규정하고 위탁계약 내용에 포함되어 있습니다.</S.NumberList>
          <S.NumberList><span>3)</span>회사는 개인정보의 처리와 관련하여 아래와 같이 업무를 위탁하고 있으며, 관계법령에 따라 개인정보가 안전하게 관리될 수 있도록 필요한 조치를 취하고 있습니다.</S.NumberList>
          <S.LiList>
            <S.ProtectTable style={{ marginTop: '5px' }}>
              <colgroup>
                <col width="20%" />
                <col width="20%" />
                <col width="20%" />
                <col width="40%" />
              </colgroup>
              <S.ProtectHead>
                <S.ProtectTr>
                  <S.ProtectTh>수탁업체</S.ProtectTh>
                  <S.ProtectTh>위탁업무내용</S.ProtectTh>
                  <S.ProtectTh>위탁처리 정보</S.ProtectTh>
                  <S.ProtectTh>개인정보 보유 및 이용기간</S.ProtectTh>
                </S.ProtectTr>
              </S.ProtectHead>
              <S.ProtectBody>
                <S.ProtectTr>
                  <S.ProtectTd>NICE신용평가정보(주)</S.ProtectTd>
                  <S.ProtectTd>실명인증</S.ProtectTd>
                  <S.ProtectTd>성명, 성별, 휴대전화번호,<br />이동통신사, 생년월일, 국적</S.ProtectTd>
                  <S.ProtectTd>해당 업체에 이미 보유하고 있는 개인정보이기 때문에 별도로 저장하지 않음</S.ProtectTd>
                </S.ProtectTr>
                <S.ProtectTr>
                  <S.ProtectTd>스탠다드네트웍스(주)</S.ProtectTd>
                  <S.ProtectTd>메시지 및 팩스 전송</S.ProtectTd>
                  <S.ProtectTd> </S.ProtectTd>
                  <S.ProtectTd>회원탈퇴 시 혹은 위탁계약 종료 시까지</S.ProtectTd>
                </S.ProtectTr>
                <S.ProtectTr>
                  <S.ProtectTd>한국정보통신(주)</S.ProtectTd>
                  <S.ProtectTd>결제</S.ProtectTd>
                  <S.ProtectTd>아이디, 성명(기업명)</S.ProtectTd>
                  <S.ProtectTd>회원탈퇴 시 혹은 위탁계약 종료 시까지</S.ProtectTd>
                </S.ProtectTr>
              </S.ProtectBody>
            </S.ProtectTable>
          </S.LiList>
        </S.Licontainer>



        <S.Title>8. 이용자 및 법정대리인의 권리와 그 행사방법</S.Title>
        <S.Licontainer>
          <S.NumberList><span>1.</span> 개인정보 열람 및 정정
            <S.Licontainer>
              <S.LiList>회원 및 법정대리인은 언제든지 등록되어 있는 자신 또는 당해 만 14세 미만 아동의 개인정보를 홈페이지 내에서 “개인정보 수정”을 통하여 열람하거나 정정할 수 있습니다.</S.LiList>
            </S.Licontainer>
          </S.NumberList>
          <S.NumberList><span>2.</span> 개인정보의 오류에 대한 정정
            <S.Licontainer>
              <S.LiList>회원이 개인정보의 오류에 대한 정정을 요청한 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다.</S.LiList>
              <S.LiList>또한 잘못된 개인정보를 이미 제3자에게 제공한 경우에는 정정 요청에 관하여 제3자에게 지체 없이 통지한 후 정정이 이루어지도록 합니다.</S.LiList>
            </S.Licontainer>
          </S.NumberList>
          <S.NumberList><span>3.</span> 회원 탈퇴(ID 삭제)
            <S.Licontainer>
              <S.NumberList><span>1)</span>로그인 후 [내정보] 클릭하면 왼쪽 [내정보] 박스 하단 부분에 [회원탈퇴]가 있습니다. 비밀번호를 입력하신 후 탈퇴버튼을 클릭하시면 됩니다.</S.NumberList>
              <S.NumberList><span>2)</span>회사는 회원 또는 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보에 관하여 “4.개인정보의 보유?이용기간”에 명시된 바에 따라 처리하며 그 외의 용도로는 일체 열람 및 이용할 수 없도록 관리하고 있습니다.</S.NumberList>
            </S.Licontainer>
          </S.NumberList>
        </S.Licontainer>

        <S.Title>9. 개인정보 자동 수집 장치의 설치 / 운영 및 거부에 관한 사항</S.Title>
        <S.Licontainer>
          <S.LiList>회사는 이용자들에게 개인화되고 맞춤화된 서비스를 제공하기 위해서 회원님의 정보를 저장하고 수시로 불러오는 &quot;쿠키(cookie)&quot;를 운용합니다.</S.LiList>
          <S.LiList>쿠키는 웹사이트를 운영하는데 이용되는 서버가 회원님의 브라우저에 보내는 작은 텍스트 파일로서 회원님의 컴퓨터 하드디스크에 저장됩니다.</S.LiList>
          <br />
          <S.NumberList><span>1)</span> 쿠키의 사용 목적
            <S.Licontainer>
              <S.LiList>이용자들이 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 이용자의 취향과 관심분야, 이용자 규모, 각종 이벤트 참여 정도 등을 파악하여 이용자에게 최적화된 정보 제공을 위하여 사용합니다.</S.LiList>
            </S.Licontainer>
          </S.NumberList>
          <S.NumberList><span>2)</span> 쿠키 설정 거부 방법
            <S.Licontainer>
              <S.NumberList><span>가) </span>이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 이용자는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용 또는 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.</S.NumberList>
              <S.NumberList><span>나) </span>쿠키 설정을 거부하는 방법으로는 이용자가 사용하는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용 또는 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.</S.NumberList>
              <S.NumberList><span>다) </span>설정방법 예(인터넷 익스플로어의 경우) : 웹 브라우저 상단의 도구 &gt; 인터넷 옵션 &gt; 개인정보</S.NumberList>
              <S.NumberList><span>라) </span>다만, 쿠키의 저장을 거부할 경우에는 서비스 이용에 어려움이 있을 수 있습니다.</S.NumberList>
            </S.Licontainer>
          </S.NumberList>
        </S.Licontainer>

        <S.Title>10. 개인정보보호책임자</S.Title>
        <S.Licontainer>
          <S.NumberList><span>1)</span> 회사는 회원의 정보를 보호하고 개인정보에 대한 의견수렴 및 불만사항 등을 처리하기 위하여 개인정보보호책임자를 지정하고 있습니다.
            <S.Licontainer>
              <S.LiList>회원께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보보호책임자 또는 담당부서로 문의 및 신고하실 수 있으며,</S.LiList>
              <S.LiList>회사는 이러한 회원님의 문의사항 및 신고사항에 대하여 신속하고 성실하게 답변하겠습니다.</S.LiList>
            </S.Licontainer>
            <br />
            <S.LiList>개인정보 보호책임자는 다음과 같습니다.</S.LiList>
            <S.NumberList><span>가)</span> 직책 : 개인정보보호책임자</S.NumberList>
            <S.NumberList><span>나)</span> 성명 : 이정철</S.NumberList>
            <S.NumberList><span>다)</span> 직위 : 대표이사</S.NumberList>
            <S.NumberList><span>라)</span> 전화 번호 : 02-3485-6744</S.NumberList>
            <S.NumberList><span>마)</span> 전자우편 : <Link to='mailto:webmaster@netian.com'>webmaster@netian.com</Link></S.NumberList>
            <br />
            <S.NumberList><span>바)</span> 직책 : 개인정보업무담당자</S.NumberList>
            <S.NumberList><span>사)</span> 성명 : 전민기</S.NumberList>
            <S.NumberList><span>아)</span> 부서 / 직위 : 서비스사업본부 / 본부장</S.NumberList>
            <S.NumberList><span>자)</span> 전화 번호 : 02-3485-6787</S.NumberList>
            <S.NumberList><span>차) </span>전자우편 : <Link to="mailto:webmaster@netian.com">webmaster@netian.com</Link></S.NumberList>
          </S.NumberList>
          <br /><br />
          <S.NumberList><span>2)</span> 기타 개인정보에 관한 상담이 필요한 경우에는 개인정보침해신고센터, 경찰청 사이버테러 대응센터 등으로 문의하실 수 있습니다.
            <S.Licontainer>
              <S.NumberList><span>가)</span>	개인정보침해신고센터 (<Link to="http://privacy.kisa.or.kr" target="_blank"> http://privacy.kisa.or.kr </Link>/ 국번없이 118) </S.NumberList>
              <S.NumberList><span>나)</span>	정보보호마크인증위원회 (<Link to="http://www.eprivacy.or.kr" target="_blank"> http://www.eprivacy.or.kr </Link>/ 02-550-9531~2) </S.NumberList>
              <S.NumberList><span>다)</span>	대검찰청 사이버수사과 (<Link to="http://sybercid.spo.go.kr" target="_blank"> http://sybercid.spo.go.kr </Link>/ 국번없이 1301)</S.NumberList>
              <S.NumberList><span>라)</span>	경찰청 사이버안전국 (<Link to="http://cyberbureau.police.go.kr" target="_blank"> http://cyberbureau.police.go.kr </Link>/ 국번없이 182) </S.NumberList>
            </S.Licontainer>
          </S.NumberList>
        </S.Licontainer>

        <S.Title>11. 고지의무</S.Title>
        <S.Licontainer>
          <S.LiList>본 개인정보취급방침은 2014년 7월 7일부터 적용되며, 법령, 정책, 또는 보안기술의 변경에 따라 내용의 추가, 삭제 및 수정이 있을 시에는 변경사항 시행일의 7일전부터 당사 사이트의 공지게시판을 통하여 고지합니다.</S.LiList>
          <br />
          <S.NumberList><span>1)</span> 현 개인정보취급방침은 정부의 정책 또는 회사의 필요에 의하여 변경될 수 있으며, 내용의 추가 및 삭제, 수정이 있을 시에는 홈페이지의 &quot;공지사항&quot;을 통해 사전 공지하며, 사전 공지가 곤란한 경우에는 변경 후 지체 없이 공지하겠습니다.</S.NumberList>
          <S.NumberList><span>2)</span> 이 정책은 공지한 날로부터 시행됩니다.</S.NumberList>
        </S.Licontainer>

      </S.MidText>

      <S.BottomText>
        <S.Licontainer>
          <S.LiList>개인정보취급방침 시행 일자 : 2015. 10. 26</S.LiList>
          <S.LiList>개인정보취급방침 개정 일자 : 2015. 10. 19</S.LiList>
        </S.Licontainer>
      </S.BottomText>




    </S.Container>
  )

}

export default ComProtectBack20180424;