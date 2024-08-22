import React from 'react';

import * as S from './style/Terms.styles';
import ATitle from '../../components/Atom/ATitle';
import { Link } from 'react-router-dom';

const ComProtectBack20151030 = () => {

  return (
    <S.Container>
      <S.TitleContainer style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ATitle type='main' text='개인정보 처리방침' color='#000' />
        <S.SubTitle style={{ marginBottom: 0 }}>홈 &gt; 개인정보취급방침</S.SubTitle>
      </S.TitleContainer>



      <S.MidText>

        <S.Licontainer style={{ marginTop: '50px' }}>
          <S.LiList>
            ㈜네띠앙닷컴(이하 “회사”)은 고객님의 개인정보보호를 매우 중요시하며, &apos;정보통신망이용촉진 및 정보보호&apos;에 관한 법률을 준수하고 있습니다.<br />
            회사는 개인정보취급방침을 명시하여 회원이 온라인상에서 회사에 제공한 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떤 조치를 취하는지 알려드립니다.
          </S.LiList>
        </S.Licontainer>

        <S.Title>1. 개인정보의 수집목적 및 이용목적</S.Title>
        <S.Licontainer>
          <S.NumberList><span>1)</span>회원관리
            <S.Licontainer>
              <S.LiList>
                회원제 서비스 이용에 따른 본인확인, 개인식별, 불량회원의 부정 이용방지와 비인가 사용방지, 가입의사 확인, 가입 및 가입횟수 제한, 분쟁 조정을 위한 기록보존, 불만처리 등 민원처리, 고지사항 전달
              </S.LiList>
            </S.Licontainer>
          </S.NumberList>

          <S.NumberList><span>2)</span>서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산
            <S.Licontainer>
              <S.LiList>
                컨텐츠 제공, 물품배송 또는 청구서 등 발송, 본인인증, 구매 및 요금 결제, 요금추심
              </S.LiList>
            </S.Licontainer>
          </S.NumberList>

          <S.NumberList><span>3)</span>마케팅 및 광고에 활용
            <S.Licontainer>
              <S.LiList>
                이벤트 등 광고성 정보 전달, 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계
              </S.LiList>
            </S.Licontainer>
          </S.NumberList>
        </S.Licontainer>



        <S.Title>2. 개인정보의 제공 및 공유</S.Title>
        <S.Licontainer>
          <S.LiList>회사는 이용자들의 개인정보를 &quot;1. 개인정보의 수집 및 이용목적&quot;에서 고지한 범위 내에서 사용하며, 이용자의 사전 동의 없이는 동 범위를 초과하여 이용하거나 원칙적으로 이용자의 개인정보를 외부에 공개하지 않습니다. 다만, 아래의 경우에는 예외로 합니다</S.LiList>
          <S.NumberList><span>1)</span>이용자가 사전에 동의 한 경우
            <S.Licontainer>
              <S.LiList>첫째, 개인정보 제공 이전에 개인정보 제공자, 개인정보 제공 목적, 제공하는 개인정보의 항목 및 보유기간을 별도로 알리고 동의절차를 거치며,
                이에 이용자가 동의하지 않을 경우 에는 제 3자에게 이용자의 개인정보를 제공하지 않습니다.</S.LiList>
              <S.LiList>둘째, 회사는 이용자에 대하여 보다 질 높은 서비스 제공 등을 위해 사전에 동의를 획득한 경우에 한하여 아래와 같이 이용자의 개인정보를 제공하고 있습니다.</S.LiList>
            </S.Licontainer>
          </S.NumberList>
          <S.LiList>회원이 회원등록 시 부여 받은 ID로 사이트에 자유롭게 접속하기 위해서 아레오와 네띠앙은 접속을 위한 최소한의 정보를 공유합니다.</S.LiList>
          <S.LiList>* 공유하는 정보의 범위 : 로그인에 필요한 인증정보(ID), 서비스 사용 이력</S.LiList>
          <S.LiList>* 공유받는 사이트 현황</S.LiList>
          <S.LiList>- 네띠앙 www.netian.com</S.LiList>
          <S.LiList>- 아레오 www.arreo.com</S.LiList>
          <br />
          <S.LiList>- 서비스 제공 내역</S.LiList>

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
                  <S.ProtectTd>유비클㈜	</S.ProtectTd>
                  <S.ProtectTd>모바일상품권 컨텐츠 제휴</S.ProtectTd>
                  <S.ProtectTd>아이디, 이름, 휴대폰번호</S.ProtectTd>
                  <S.ProtectTd rowSpan={3}>이용자가 제3자의 서비스를 제공받아 이용목적이 달성된 시점까지</S.ProtectTd>
                </S.ProtectTr>
                <S.ProtectTr>
                  <S.ProtectTd>다우기술</S.ProtectTd>
                  <S.ProtectTd>포토플러스 컨텐츠 제휴</S.ProtectTd>
                  <S.ProtectTd>아이디</S.ProtectTd>
                </S.ProtectTr>
                <S.ProtectTr>
                  <S.ProtectTd>서울이동통신</S.ProtectTd>
                  <S.ProtectTd>무선호출서비스 이용</S.ProtectTd>
                  <S.ProtectTd>이름, 주소,휴대전화번호</S.ProtectTd>
                </S.ProtectTr>
              </S.ProtectBody>
            </S.ProtectTable>
          </S.LiList>

          <S.NumberList><span>2)</span>서비스의 제공에 관한 계약의 이행을 위하여 필요한 개인정보로서 경제적/기술적인 사유로 통상의 동의를 받는 것이 현저히 곤란한 경우</S.NumberList>
          <S.NumberList><span>3)</span>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있을 경우</S.NumberList>
          <S.NumberList><span>4)</span>서비스 제공에 따른 요금 정산을 위해 필요한 경우</S.NumberList>
        </S.Licontainer>


        <S.Title>３. 수집하는 개인정보의 항목</S.Title>
        <S.Licontainer>
          <S.LiList>회사는 회원가입, 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고 있습니다.</S.LiList>
          <S.NumberList><span>1)</span>수집항목
            <S.Licontainer>
              <S.NumberList><span>①</span>필수항목
                <S.Licontainer>
                  <S.LiList>- 일반회원: 이름, 휴대전화번호, 비밀번호, 전자우편</S.LiList>
                  <S.LiList>- 모든회원: 서비스 이용기록, 접속 로그, 쿠키, 접속 IP 정보</S.LiList>
                </S.Licontainer>
              </S.NumberList>
              <S.NumberList><span>②</span>선택정보
                <S.Licontainer>
                  <S.LiList>- 주소, 닉네임, 긴급연락처, 생일, 결혼여부, 결혼기념일, 직업</S.LiList>
                </S.Licontainer>
              </S.NumberList>
            </S.Licontainer>
          </S.NumberList>
          <S.NumberList><span>2)</span>
            개인정보 수집방법: 홈페이지(회원가입)
          </S.NumberList>
        </S.Licontainer>

        <S.Title>4. 개인정보의 보유 및 이용기간</S.Title>
        <S.SubTitle>원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.</S.SubTitle>
        <S.Licontainer className='paddingProtect'>
          <S.NumberList><span>1)</span>회원탈퇴 시 보존 개인정보
            <S.Licontainer>
              <S.LiList>- 보존 항목: 이름, 생년월일, 성별, 로그인ID, 자택 전화번호, 자택주소, 휴대전화번호, 이용기록, 접속 로그, 쿠키, 결제기록</S.LiList>
              <S.LiList>- 보존 근거: 서비스 이용의 혼선 방지, 불법적 사용자에 대한 관련 기관 수사협조, 회원 탈퇴 시 소비자의 불만 및 분쟁해결 등을 위한 목적</S.LiList>
              <S.LiList>- 보존 기간: 3개월 그리고 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.</S.LiList>
            </S.Licontainer>
            <S.Licontainer>
              <S.LiList>- 서비스 이용 관련 개인정보(서비스 이용기록, 접속로그, 접속IP 정보)
                <S.Licontainer>
                  <S.LiList>보존 근거 : 통신비밀보호법</S.LiList>
                  <S.LiList>보존 기간 : 3개월</S.LiList>
                </S.Licontainer>
              </S.LiList>
            </S.Licontainer>
            <S.Licontainer>
              <S.LiList>- 본인확인에 관한 기록
                <S.Licontainer>
                  <S.LiList>보존 근거 : 정보통신망 이용촉진 및 정보보호 등에 관한 법률</S.LiList>
                  <S.LiList>보존 기간 : 6개월</S.LiList>
                </S.Licontainer>
              </S.LiList>
            </S.Licontainer>
          </S.NumberList>
          <S.NumberList><span>2)</span>상거래 관련 보존 개인정보
            <S.Licontainer>
              <S.LiList>- 보존항목: 상거래이력</S.LiList>
              <S.LiList>- 보존근거: 상법, 전자상거래등에서의 소비자보호에 관한 법률</S.LiList>
              <S.LiList>- 보존기간: 계약 또는 청약철회 등에 관한 기록 : 5년</S.LiList>
            </S.Licontainer>
            <S.LiList style={{ paddingLeft: '9px' }}>대금결제 및 재화등의 공급에 관한 기록 : 5년</S.LiList>
            <S.LiList style={{ paddingLeft: '9px' }}>소비자의 불만 또는 분쟁처리에 관한 기록 : 3년</S.LiList>
          </S.NumberList>
        </S.Licontainer>

        <S.Title>5. 개인정보 파기절차 및 방법</S.Title>
        <S.Licontainer>
          <S.LiList>이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다.</S.LiList>
          <S.LiList>회사의 개인정보 파기절차 및 방법은 다음과 같습니다.</S.LiList>
          <S.NumberList><span>1)</span>파기절차
            <S.Licontainer>
              <S.LiList>- 이용자가 회원가입 등을 위해 입력한 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조)일정 기간 저장된 후 파기됩니다.</S.LiList>
              <S.LiList>- 동 개인정보는 법률에 의한 경우가 아니고서는 보유되는 이외의 다른 목적으로 이용되지 않습니다.</S.LiList>
            </S.Licontainer>
          </S.NumberList>
          <S.NumberList><span>2)</span>파기방법
            <S.Licontainer>
              <S.LiList>- 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.</S.LiList>
              <S.LiList>- 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</S.LiList>
            </S.Licontainer>
          </S.NumberList>
        </S.Licontainer>

        <S.Title>6. 개인정보의 위탁처리</S.Title>
        <S.Licontainer>
          <S.LiList>
            회사는 전문적인 고객지원 및 서비스 제공을 위해 개인정보 취급 업무를 외부 업체에 위탁하여 위탁계약, 혹은 각종 서비스대행계약 및 업무제휴계약 등에 따라 이용자의 개인정보 취급에 대한 위탁을 할 수 있습니다.<br />
            위탁계약 시 개인정보보호의 안전을 기하기 위하여 개인정보보호 관련 지시 엄수, 개인정보에 관한 유출금지 및 사고시의 책임부담 등을 명확히 규정하고 위탁계약 내용에 포함되어 있습니다.
          </S.LiList>
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
              <S.ProtectBody className='padding'>
                <S.ProtectTr>
                  <S.ProtectTd>NICE신용평가정보㈜	</S.ProtectTd>
                  <S.ProtectTd>안심본인인증</S.ProtectTd>
                  <S.ProtectTd>이름, 성별, 휴대폰번호, 이동통신사, 생년월일, 국적</S.ProtectTd>
                  <S.ProtectTd>해당 업체에서 이미 보유하고 있는 개인정보이기 때문에 별도로 저장하지 않음</S.ProtectTd>
                </S.ProtectTr>
                <S.ProtectTr>
                  <S.ProtectTd>㈜스탠다드네트웍스</S.ProtectTd>
                  <S.ProtectTd>메시지,팩스 전송</S.ProtectTd>
                  <S.ProtectTd> </S.ProtectTd>
                  <S.ProtectTd>회원탈퇴시 혹은 위탁계약 종료시까지</S.ProtectTd>
                </S.ProtectTr>
                <S.ProtectTr>
                  <S.ProtectTd>한국정보통신</S.ProtectTd>
                  <S.ProtectTd>결제</S.ProtectTd>
                  <S.ProtectTd>아이디, 이름(기업명)</S.ProtectTd>
                  <S.ProtectTd>회원탈퇴시 혹은 위탁계약 종료시까지</S.ProtectTd>
                </S.ProtectTr>
                <S.ProtectTr>
                  <S.ProtectTd>서울이동통신</S.ProtectTd>
                  <S.ProtectTd>사이트 운영</S.ProtectTd>
                  <S.ProtectTd> </S.ProtectTd>
                  <S.ProtectTd>회원탈퇴시 혹은 위탁계약 종료시까지</S.ProtectTd>
                </S.ProtectTr>
              </S.ProtectBody>
            </S.ProtectTable>
          </S.LiList>

        </S.Licontainer>

        <S.Title>7. 개인정보 자동 수집 장치의 설치/운영 및 거부에 관한 사항</S.Title>
        <S.Licontainer>
          <S.LiList>회사는 이용자들에게 개인화되고 맞춤화된 서비스를 제공하기 위해서 당사는 회원님의 정보를 저장하고 수시로 불러오는 &apos;쿠키(cookie)&apos;를 사용합니다. 쿠키는 웹사이트를 운영하는데 이용되는 서버가 사용자의 브라우저에게 보내는 소량의 정보로 회원님 컴퓨터의 하드디스크에 저장됩니다.</S.LiList>
          <S.NumberList><span>1)</span>쿠키의 사용 목적
            <S.Licontainer>
              <S.LiList>- 이용자들이 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 이용자의 취향과 관심분야, 이용자 규모, 각종 이벤트 참여 정도 등을 파악하여 이용자에게 최적화된 정보 제공을 위하여 사용합니다.</S.LiList>
            </S.Licontainer>
          </S.NumberList>

          <S.NumberList><span>2)</span>쿠키 설정 거부 방법
            <S.Licontainer>
              <S.LiList>- 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 이용자는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.</S.LiList>
              <S.LiList>- 쿠키 설정을 거부하는 방법으로는 이용자가 사용하는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.</S.LiList>
              <S.LiList>- 설정방법 예(인터넷 익스플로어의 경우) : 웹 브라우저 상단의 도구 &gt; 인터넷 옵션 &gt; 개인정보</S.LiList>
              <S.LiList>- 다만, 쿠키의 저장을 거부할 경우에는 서비스는 이용에 어려움이 있을 수 있습니다.</S.LiList>
            </S.Licontainer>
          </S.NumberList>
        </S.Licontainer>



        <S.Title>8. 개인정보관리책임자</S.Title>
        <S.Licontainer>
          <S.Licontainer>
            <S.LiList>회사는 개인정보에 대한 의견수렴 및 불만처리를 담당하는 개인정보 관리책임자를 지정하고 있습니다. 개인정보 관리책임자는 다음과 같습니다.<br /> 개인정보 관리책임자</S.LiList>
          </S.Licontainer>
          <S.LiList>이 름 : 윤형두</S.LiList>
          <S.LiList>소속 / 직위 : 표준화본부 / 팀장</S.LiList>
          <S.LiList>전화 번호 : 015-8504-0006</S.LiList>
          <S.LiList>전자우편 : webmaster@netian.com</S.LiList>
        </S.Licontainer>

      </S.MidText>

      <S.BottomText>
        <S.Title>(부칙)</S.Title>
        <S.Licontainer>
          <S.LiList>본 개인정보취급방침은 2014년 7월 7일부터 적용되며, 법령, 정책, 또는 보안기술의 변경에 따라 내용의 추가, 삭제 및 수정이 있을 시에는 변경사항 시행일의 7일전부터 당사 사이트의 공지게시판을 통하여 고지합니다.</S.LiList>
          <br />
          <S.LiList>변경공고일자 : 2014년 6월 30일</S.LiList>
          <S.LiList>시행일자 : 2014년 7월 7일</S.LiList>
        </S.Licontainer>
      </S.BottomText>




    </S.Container>
  )

}

export default ComProtectBack20151030;