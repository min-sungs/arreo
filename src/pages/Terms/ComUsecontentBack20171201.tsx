import React from 'react';

import * as S from './style/Terms.styles';
import ATitle from '../../components/Atom/ATitle';
import BaseButton from '../../components/Atom/BaseButton';
import { Link } from 'react-router-dom';

const ComUsecontentBack20171201 = () => {

  return (
    <S.Container>
      <S.TitleContainer>
        <ATitle type="main" text="이용약관" color="#000" />
      </S.TitleContainer>

      <S.LinkButton>
        <Link to='/ComUseContent015'>
          <BaseButton
            width="130px"
            height="30px"
            fontSize="14px"
            fontWeight="bold"
            backgroundColor="#000"
            color="#fff"
          >
            015 이용약관 보기
          </BaseButton>
        </Link>
      </S.LinkButton>

      <S.TopText>
        <p>
          아래의 요약내용 이외의 자세한 이용약관을 읽지 않을시 회원님께 불이익이 돌아갈 수 있습니다.<br />
          전체 약관을 반드시 읽어보시기 바랍니다.
        </p>
      </S.TopText>

      <S.Title>제1조 (목적)</S.Title>
      <S.Licontainer>
        <S.LiList> 본 이용약관은 (주)네띠앙닷컴(이하 &quot;회사&quot;라 합니다)에서 운영하는 사이트인 아레오(www.arreo.com)의 서비스를 이용함에 있어 회원과 회사간의 권리, 의무 및 책임사항 규정을 목적으로 합니다.</S.LiList>
      </S.Licontainer>


      <S.Title>제2조 (약관의 효력 및 변경과 개정)</S.Title>
      <S.Licontainer>
        <S.NumberList><span>1.</span>이 약관은 서비스를 이용하고자 하는 모든 회원에 대하여 그 효력을 발생합니다.</S.NumberList>
        <S.NumberList><span>2.</span>이 약관의 내용은 서비스 화면에 게시하거나 기타의 방법으로 회원에게 공시하고, 이에 동의한 회원이 서비스에 가입함으로써 효력이 발생합니다.</S.NumberList>
        <S.NumberList><span>3.</span>회사는 필요하다고 인정되는 경우 이 약관을 변경할 수 있으며, 개정된 약관은 제2항과 동일한 방법으로 고지함으로써 효력이 발생합니다.</S.NumberList>
        <S.NumberList><span>4.</span>개정된 약관은 변경 적용일자나 변경사유를 반드시 명시하며, 개정 이전의 약관과 함께 적어 적용일자의 7일 전에서부터 고지합니다.</S.NumberList>
        <S.NumberList><span>5.</span>전항에 따라 시행일 이후에 회원이 서비스를 이용하는 경우에는 개정약관에 동의한 것으로 간주합니다. 회원이 개정된 약관에 동의하지 않는 경우 회사는 제20조 &apos;계약해지 및 이용제한&apos;에 의거 회원가입 해지를 요구 또는 강제할 수 있습니다.</S.NumberList>
      </S.Licontainer>


      <S.Title>제3조 (약관 외 준칙)</S.Title>
      <S.Licontainer>
        <S.LiList> 이 약관에 명시되지 않은 사항에 대해서는 전기통신기본법, 전기통신사업법 등 관계법령 및 회사가 정한 서비스의 세부이용지침 등의 규정에 의합니다.</S.LiList>
      </S.Licontainer>


      <S.Title>제4조 (용어의 정의)</S.Title>
      <S.Licontainer>
        <S.LiList> 이 약관에서 사용하는 용어의 정의는 다음의 호와 같습니다.</S.LiList>
        <S.NumberList><span>1.</span>이용자 : 회원 및 회원이 아니면서 서비스를 이용하는 자</S.NumberList>
        <S.NumberList><span>2. </span>회원 : 회사에 개인정보를 제공하여 약관에 동의하고 이용자 아이디(ID)를 부여 받은 개인으로, 회사가 제공하는 서비스를 지속적으로 이용할 수 있는 자</S.NumberList>
        <S.NumberList><span>3.</span>아이디(ID) : 회원 식별과 회원의 서비스 이용을 위하여 개인회원의 경우 ID는 인증받은 휴대폰번호이며, 법인회원의 경우는 회원이 선정하고 회사가 승인한 문자와 숫자의 조합(단, 통합하지 않은 네띠앙 ID는 기존의 네띠앙 ID 유지. 통합 정책에 따라 휴대폰번호 인증 후 서비스 이용 가능)</S.NumberList>
        <S.NumberList><span>4. </span>비밀번호 : 회원의 비밀 보호를 위해 회원 자신이 설정한 문자와 숫자의 조합</S.NumberList>
        <S.NumberList><span>5.</span>운영자 : 서비스의 전반적인 관리와 원활한 운영을 위하여 회사에서 선정한 사람</S.NumberList>
        <S.NumberList><span>6.</span>캐쉬 : 회사가 운영하는 유료서비스를 이용하기 위해 인터넷상에서 현금등가의 결제를 통한 사이버머니</S.NumberList>
        <S.NumberList><span>7.</span>포인트 : 회사의 서비스를 이용함에 있어 회사가 지정한 범위 내에서 획득 및 사용할 수 있는 지표(마일리지)</S.NumberList>
        <S.NumberList><span>8.</span>충전 : 캐쉬 및 포인트를 일정량 확보하고자 특정 지불수단을 이용하여 현금을 회사에 지불하거나 회사가 지정한 여타의 방법으로 구매 혹은 획득하는 행위로 현금 1원당 1캐쉬가 충전</S.NumberList>
      </S.Licontainer>


      <S.Title>제5조 (이용계약의 체결)</S.Title>
      <S.Licontainer>
        <S.NumberList><span>1.</span>이용계약은 회원가입 시 명시되는 이용약관에 ‘동의’ 단추를 누르면 본 약관에 동의한 것으로 간주됩니다. </S.NumberList>
        <S.NumberList><span>2.</span>&apos;회원&apos;이 변경된 약관에 동의하지 않을 경우, &apos;서비스&apos; 이용을 중단하고 가입 신청을 포기할 수 있습니다.</S.NumberList>
      </S.Licontainer>


      <S.Title>제6조 (이용신청의 승낙 및 유보)</S.Title>
      <S.Licontainer>
        <S.NumberList><span>1.</span>이용계약(회원가입) 신청 양식에 기재하는 모든 회원 정보는 실제 데이터인 것으로 간주하며 실명이나 실제 정보를 입력하지 않은 사용자는 법적인 보호를 받을 수 없으며, 서비스 중단 및 통보 없는 임의탈퇴 조치, 사안에 따라 형사고발 등을 할 수 있습니다.</S.NumberList>
        <S.NumberList><span>2.</span>회사는 아래 호에 해당하는 이용 신청에 대하여는 이를 승낙하지 아니할 수 있습니다
          <S.Licontainer>
            <S.NumberList><span>①</span>설비에 여유가 없는 경우</S.NumberList>
            <S.NumberList><span>② </span>기술상 지장이 있는 경우</S.NumberList>
            <S.NumberList><span>③ </span>기타 회사의 사정상 이용 승인이 곤란한 경우</S.NumberList>
            <S.NumberList><span>④ </span>사회의 안녕질서 또는 미풍양속의 현저한 저해, 법률 위반을 목적으로 신청한 것으로 판단될 경우</S.NumberList>
            <S.NumberList><span>⑤</span>서비스 사용 중 약관에 정한 사항들을 위반하여 강제탈퇴 된 회원이 또다시 신청한 경</S.NumberList>
          </S.Licontainer>
        </S.NumberList>
      </S.Licontainer>


      <S.Title>제7조 (계약사항의 변경 및 해지)</S.Title>
      <S.Licontainer>
        <S.NumberList><span>1.</span>회원은 회원가입 신청 시 기재한 사항이 변경되었을 경우에는 온라인으로 즉시 수정을 해야 하고 회원 정보의 미 변경으로 인하여 발생되는 문제의 책임은 회원에게 있습니다.</S.NumberList>
        <S.NumberList><span>2.</span>회원에 의한 제10조의 위반으로 야기된 문제에 대해 회사는 면책됩니다.</S.NumberList>
        <S.NumberList><span>3.</span>탈퇴 후 재가입은 1개월 이내에는 불가능하며, 회사가 회원자격 및 서비스 이용을 제한 또는 정지시킨 후 그 사유가 15일 동안 시정되지 아니하는 경우 회사는 회원자격을 상실시킬 수 있습니다.</S.NumberList>
      </S.Licontainer>


      <S.Title>제8조 (개인정보보호 의무)</S.Title>
      <S.Licontainer>
        <S.NumberList><span>1.</span>회사는 &quot;정보통신망법&quot; 등 관계 법령이 정하는 바에 따라 회원의 개인정보를 보호하기 위해 노력합니다. 개인정보의 보호 및 사용에 대해서는 관련법 및 회사의 개인정보보호방침이 적용됩니다. 다만, 회사의 공식 사이트 이외의 링크된 사이트에서는 회사의 개인정보보호방침이 적용되지 않습니다. </S.NumberList>
        <S.NumberList><span>2.</span>회원통합관리 서비스를 제공함에 따라, 동일한 ID로 네띠앙과 아레오 두 사이트를 접속할 수 있으며 회원의 서비스 이용 내역을 두 사이트에서 모두 확인할 수 있도록 최소한의 정보인 ID를 공유합니다.</S.NumberList>
      </S.Licontainer>


      <S.Title>제9조 (회사의 의무)</S.Title>
      <S.Licontainer>
        <S.NumberList><span>1.</span>회사는 관련법령과 본 약관에 의거하여 지속적이고 안정적인 서비스를 제공하기 위해 항상 노력합니다. </S.NumberList>
        <S.NumberList><span>2.</span>회사는 서비스 제공과 관련하여 취득한 회원의 개인정보를 본인의 사전 승낙 없이 타인에게 누설, 공개 또는 배포할 수 없으며, 서비스관련 업무 이외의 상업적 목적으로 사용할 수 없습니다. </S.NumberList>
        <S.NumberList><span>3.</span>회사는 회원으로부터 제기되는 불만이 정당하다고 인정할 경우에는 최선을 다하여 처리함을 원칙으로 합니다. 다만, 즉시 처리가 곤란한 경우에는 그 사유와 처리 일정을 서비스 페이지 및 메일 등 유효한 방법으로 통보합니다. 이때 통보 확인의 책임은 회원에게 있습니다. </S.NumberList>
        <S.NumberList><span>4.</span>회사는 회사의 사업 일부 또는 전부를 휴지하거나 폐지할 경우 휴지 또는 폐지 예정일 30일 전까지 회원에게 유*무선 또는 이메일 중 하나로 안내를 해야 합니다. 단, 회원과 연락이 되지않는 부득이한 경우에는 홈페이지에 공지할 수 있습니다. </S.NumberList>
        <S.NumberList><span>5.</span>회사는 ‘전기통신사업법 제84조의2’ 관련 법령에 따라 발신번호 사전등록 등을 위한 기술적*관리적 조치를 완료하고 이에 따라 사전에 등록 받은 발신번호로만 문자메시지를 발송해야 합니다. </S.NumberList>
        <S.NumberList><span>6.</span>회사는 회원이 발송한 문자메시지의 발신번호가 변작번호 차단 목록에 포함되어 있거나 발신번호의 규격에 맞지 않는 전화번호인 경우 관련 법령이 허용하는 범위 내에서 해당 문자메시지의 발송 또는 전달을 차단할 수 있습니다. </S.NumberList>
        <S.NumberList><span>7.</span>회사는 발신번호 사전등록에 관하여 회원의 문의 요청이 있을 시 성실히 답변을 주어야 합니다.</S.NumberList>
      </S.Licontainer>


      <S.Title>제10조 (회원의 의무)</S.Title>
      <S.Licontainer>
        <S.NumberList><span>1.</span>회원은 서비스 이용 시 다음 각 호의 행위를 하지 않아야 합니다
          <S.Licontainer>
            <S.NumberList><span>①</span>회원가입 신청 또는 회원정보 변경 시 허위 내용을 등록하는 행위</S.NumberList>
            <S.NumberList><span>② </span>회사의 승인을 받지 않고 다른 사용자의 개인정보를 수집 또는 저장하는 행위</S.NumberList>
            <S.NumberList><span>③ </span>서비스에서 얻은 정보를 회사의 사전 승낙 없이 복제하거나 이를 변경, 출판 및 방송, 인터넷 등 기타 매체에 사용하거나 타인에게 제공하는 행위</S.NumberList>
            <S.NumberList><span>④ </span>이용자 아이디(ID)를 타인과 거래하는 행위</S.NumberList>
            <S.NumberList><span>⑤</span>회사의 운영진, 직원 또는 관계자를 사칭하는 행위</S.NumberList>
            <S.NumberList><span>⑥</span>회사로부터 특별한 권리를 부여 받지 않고 회사의 클라이언트 프로그램을 변경하거나, 회사의 서버를 해킹하거나, 웹사이트 또는 게시된 정보의 일부분 또는 전체를 임의로 변경하는 행위</S.NumberList>
            <S.NumberList><span>⑦</span>회사 프로그램상의 버그를 악용하는 행위</S.NumberList>
            <S.NumberList><span>⑧</span>서비스에 위해를 가하거나 고의로 방해하는 행위</S.NumberList>
            <S.NumberList><span>⑨</span>본 서비스를 통해 얻은 정보를 회사의 사전 승낙 없이 서비스 이용 외의 목적으로 복제하거나, 이를 출판 및 방송 등에 사용하거나, 제3자에게 제공하는 행위</S.NumberList>
            <S.NumberList><span>⑩</span>공공질서 및 미풍양속에 위반되는 내용의 정보, 문장, 도형 등을 타인에게 유포하는 행</S.NumberList>
            <S.NumberList><span>⑪</span>다른 이용자를 희롱 또는 위협하거나, 고통 또는 불편을 주는 행위</S.NumberList>
            <S.NumberList><span>⑫ </span>범죄와 결부된다고 객관적으로 판단되는 행위</S.NumberList>
            <S.NumberList><span>⑬ </span>본 약관을 포함하여 기타 회사가 정한 제반 규정 또는 이용 조건을 위반하는 행위</S.NumberList>
            <S.NumberList><span>⑭ </span>기타 관계법령에 위배되는 행</S.NumberList>
          </S.Licontainer>
        </S.NumberList>
        <S.NumberList><span>2.</span>
          회원은 관계법령, 이 약관에서 규정하는 사항, 서비스 이용 안내 및 서비스와 관련하여 공지사항에 게시하거나 별도로 공지한 준수 사항을 반드시 준수하여야 합니다.
        </S.NumberList>
        <S.NumberList><span>3.</span>
          이용자는 그 귀책사유로 인하여 회사나 다른 이용자가 입은 손해를 배상할 책임이 있습니다.
        </S.NumberList>
        <S.NumberList><span>4.</span>
          회원이 본 조 각 항에서 정한 회원의 의무를 위반하는 경우, 회사는 즉시 회원의 회원자격을 박탈할 수 있습니다.
        </S.NumberList>
        <S.NumberList><span>5.</span>
          회원은 문자메시지 발송 전 반드시 발신번호 사전등록을 해야 하며, 발신번호 사전 등록 시 발신번호 세칙을 반드시 준수해야 합니다.
        </S.NumberList>
        <S.NumberList><span>6.</span>
          회원은 거짓으로 발신번호를 표시해서 문자메시지를 발송해서는 아니되며, 그로인해 발생한 문제에 대해서는 회원에게 책임이 있습니다.
        </S.NumberList>
      </S.Licontainer>


      <S.Title>제11조 (회원 아이디와 비밀번호 관리에 대한 회원의 의무)</S.Title>
      <S.Licontainer>
        <S.NumberList><span>1.</span>아이디(ID)와 비밀번호에 관한 모든 관리 책임은 회원에게 있습니다. 회원에게 부여된 아이디(ID)와 비밀번호의 관리소홀, 부정사용에 의하여 발생하는 모든 결과에 대한 책임은 회원에게 있습니다. </S.NumberList>
        <S.NumberList><span>2.</span>자신의 아이디(ID)가 부정하게 사용된 경우 회원은 반드시 회사에 그 사실을 통보해야 합니다. </S.NumberList>
        <S.NumberList><span>3.</span>제2항의 경우에 해당 회원이 회사에 그 사실을 통지하지 않거나, 통지한 경우에도 회사의 안내에 따르지 않아 발생한 불이익에 대하여 회사는 책임지지 않습니다.</S.NumberList>
      </S.Licontainer>


      <S.Title>제12조 (회원에 대한 통지)</S.Title>
      <S.Licontainer>
        <S.NumberList><span>1.</span>회사가 회원에 대한 통지를 하는 경우 회원이 지정한 전자우편, 휴대폰 문자메시지 등으로 할 수 있습니다. </S.NumberList>
        <S.NumberList><span>2.</span>회사는 불특정 다수 회원에 대한 통지의 경우 서비스 홈페이지에 게시함으로써 개별 통지에 갈음할 수 있습니다.</S.NumberList>
      </S.Licontainer>


      <S.Title>제13조 (광고 게재 및 광고 수신 거부)</S.Title>
      <S.Licontainer>
        <S.NumberList><span>1.</span>회사는 회사의 서비스화면, 홈페이지, 휴대폰 문자메시지, 전자우편 등을 통해 광고를 게재할 수 있습니다. </S.NumberList>
        <S.NumberList><span>2.</span>회사는 서비스 상에 게재되어 있는 광고주의 판촉활동에 회원이 참여하거나 거래의 결과로서 발생하는 손실 또는 손해에 대해 책임을 지지 않습니다. </S.NumberList>
        <S.NumberList><span>3.</span>이용자는 내 정보의 회원정보변경 페이지를 통해 문자메시지 및 전자우편 수신 여부에 대해 언제든지 수신을 거부할 수 있습니다. 회사는 수신을 거부한 회원에게는 문자메시지 및 전자우편을 일체 전송하지 않습니다. </S.NumberList>
        <S.NumberList><span>4.</span>회사는 서비스 운용 및 신규서비스에 관련해 회원에게 알려야 할 필요가 있다고 판단될 경우 수신 여부와 관계없이 문자메시지 및 전자우편을 발송할 수 있습니다.</S.NumberList>
      </S.Licontainer>


      <S.Title>제14조 (통신서비스의 이용)</S.Title>
      <S.Licontainer>
        <S.NumberList><span>1.</span>회사가 제공하는 통신서비스 중 “서울이동통신㈜”에서 제공하는 015번호를 이용한 서비스는 “서울이동통신㈜”에서 제공하는 “무선호출이용약관”에 동의한 후 이용할 수 있습니다. </S.NumberList>
        <S.NumberList><span>2.</span>회사가 제공하는 서비스 중 문자메시지, 멀티미디어메시지, 음성사서함 서비스는 웹과 기간통신망의 차이로 인하여 서비스의 품질이 저하될 수 있음을 인지하고 통신서비스의 질에 관한 책임을 회사에 물을 수 없습니다.</S.NumberList>
      </S.Licontainer>


      <S.Title>제15조 (게시물의 관리)</S.Title>
      <S.Licontainer>
        <S.NumberList><span>1.</span>회사는 회원이 게시하거나 등록하는 서비스의 내용물이 아래 호에 해당한다고 판단되는 경우에 사전통지 없이 삭제할 수 있습니다.
          <S.Licontainer>
            <S.NumberList><span>①</span>다른 회원 또는 제3자를 비방하거나 중상모략으로 명예를 손상시키는 내용인 경우 </S.NumberList>
            <S.NumberList><span>② </span>공공질서 및 미풍양속에 위반되는 내용인 경우 </S.NumberList>
            <S.NumberList><span>③ </span>민, 형사상에 저촉되는 범죄적 행위에 결부된다고 인정되는 내용일 경우 </S.NumberList>
            <S.NumberList><span>④ </span>회사의 저작권, 제 3 자의 저작권 등 기타 권리를 침해하는 내용인 경우 </S.NumberList>
            <S.NumberList><span>⑤</span>회사에서 규정한 게시기간을 초과한 경우 </S.NumberList>
            <S.NumberList><span>⑥</span>회원이 자신의 홈페이지와 게시판에 음란물을 게재하거나 음란사이트 등을 링크하는 경우 </S.NumberList>
            <S.NumberList><span>⑦</span>의도적으로 동일한 내용 및 주장을 지속적으로 공시하는 경우 </S.NumberList>
            <S.NumberList><span>⑧</span>게시판의 주제와 일치하지 않는 내용을 게제 하는 경우 </S.NumberList>
            <S.NumberList><span>⑨</span>기타 관계법령에 위반된다고 판단되는 경우</S.NumberList>
          </S.Licontainer>
        </S.NumberList>
        <S.NumberList><span>2.</span>회사는 해당 서비스 제공 중지 결정의 경우 해당 서비스 게시물에 대하여 일정한 기간을 정하여 사전 공지한 후 별도 보관 없이 삭제할 수 있습니다. </S.NumberList>
        <S.NumberList><span>3.</span>회사는 삭제대상이 된 회원의 고의성 등을 감안, 별도의 통보조치 없는 회원 강제탈퇴 및 회원의 영구적인 재가입 불가 조치를 취할 수 있습니다.</S.NumberList>
      </S.Licontainer>


      <S.Title>제16조 (게시물의 저작권 및 지적소유권의 보호)</S.Title>
      <S.Licontainer>
        <S.NumberList><span>1.</span>이용자가 서비스 내에 게시한 게시물의 저작권은 저작권법에 의해 보호를 받습니다. 회사가 작성한 저작물에 대한 저작권 기타 지적재산권은 회사에 귀속합니다. </S.NumberList>
        <S.NumberList><span>2.</span>이용자는 회사로부터 얻은 정보를 회사의 사전승낙 없이 복제, 전송, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다. </S.NumberList>
        <S.NumberList><span>3.</span>회사는 회원이 게재한 자료를 홍보 등의 목적으로 회사의 서비스 내의 게재할 권리를 갖습니다. 또한 회사가 제공하는 서비스의 홍보용에 한하여 언론 등 타 매체에 일부, 혹은 전부를 제공할 수 있습니다.</S.NumberList>
      </S.Licontainer>


      <S.Title>제17조 (서비스 제공의 중지)</S.Title>
      <S.Licontainer>
        <S.NumberList><span>1.</span><p> 회사는 다음 각 호에 해당하는 경우 1개월 동안 서비스의 전부 또는 일부를 제한하거나 정지할 수 있습니다. </p>
          <S.Licontainer>
            <S.NumberList><span>①</span>서비스 설비의 보수 등 공사로 인한 부득이한 경우 </S.NumberList>
            <S.NumberList><span>② </span>회원이 회사의 영업활동을 방해하는 경우 </S.NumberList>
            <S.NumberList><span>③ </span>정전, 제반 설비의 장애 또는 이용량의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 경우 </S.NumberList>
            <S.NumberList><span>④ </span>서비스 제공업자와의 계약 종료 등과 같은 회사의 제반 사정으로 서비스를 유지할 수 없는 경우 </S.NumberList>
            <S.NumberList><span>⑤</span>미래창조과학부 또는 한국인터넷진흥원(KISA)등의 기관에서 번호 변작 등으로 판명되어 이용정지를 요청한 경우 회사는 회원의 회선 또는 서비스를 중지할 수 있습니다. 단, 객관적인 증빙자료 등으로 악의적인 목적없이 회원의 실수로 인해 변작된 경우 회원의 소명을 받고 회사 심사 후 서비스를 재개할 수 있습니다. </S.NumberList>
            <S.NumberList><span>⑥</span>회원은 거짓으로 문자메세지의 발신번호를 표시해서 발송하는 등의 전기통신사업법이나정보통신망법 등의 관련 법을 위반해서는 아니되며, 법률을 위반하여 문자메시지를 발송한 경우 그에 따른 모든 민,형사상 책임을 부담합니다. </S.NumberList>
            <S.NumberList><span>⑦</span> 방송통신위원회ㆍ한국인터넷진흥원ㆍ미래창조과학부 등 관계기관이 불법스팸메세지ㆍ문자피싱메세지 등 불법행위의 전송사실을 확인하여 이용정지를 요청하는 경우</S.NumberList>
            <S.NumberList><span>⑧ </span> 이용자가 전송하는 광고로 인하여 회사의 서비스 제공에 장애를 야기하거나 야기할 우려가 있는 경우</S.NumberList>
            <S.NumberList><span>⑨</span> 이용자가 전송하는 광고의 수신자가 스팸메세지로 신고하는 경우</S.NumberList>
            <S.NumberList><span>⑩</span> 이용자에게 제공하는 서비스가 스팸메시지 전송에 이용되고 있는 경우</S.NumberList>
            <S.NumberList><span>⑪</span> 기타 천재지변, 국가비상사태 등 불가항력적 사유가 있는 경우</S.NumberList>
          </S.Licontainer>
        </S.NumberList>
        <S.NumberList><span>2.</span>제1항에 의한 서비스 중단의 경우에는 회사는 제12조 제2항에서 정한 방법으로 이용자에게 통지합니다. 다만, 회사가 통제할 수 없는 사유로 인한 서비스의 중단으로 인하여 사전 통지가 불가능한 경우에는 그러하지 아니합니다.</S.NumberList>
      </S.Licontainer>


      <S.Title>제18조 (요금, 유료 서비스/정보 및 결제 등)</S.Title>
      <S.Licontainer>
        <S.NumberList><span>1.</span>회사가 제공하는 서비스는 기본적으로 무료입니다. 단, 회사가 제공하는 별도의 유료 서비스 및 정보에 대해서는 해당 정보에 명시된 요금을 지불하셔야 이용 가능합니다. </S.NumberList>
        <S.NumberList><span>2.</span>요금 지불을 위한 캐쉬 및 결제에 관련된 모든 사항은 &quot;아레오 이용요금정책&quot;의 개별방침에 따릅니다. </S.NumberList>
        <S.NumberList><span>3.</span>민법상 미성년자인 이용자가 유료 콘텐츠 이용을 위해 결제하고자 할 경우 미성년자인 이용자는 법정대리인의 사전 동의를 얻어야 합니다.</S.NumberList>
      </S.Licontainer>


      <S.Title>제19조 (캐쉬의 환불규정)</S.Title>
      <S.Licontainer>
        <S.NumberList><span>1.</span>캐쉬는 약관에 따라 환불할 수 있으며 서비스 계약을 해지할 수 있습니다. 단, 각 호에 해당하는 경우에는 환불되지 않습니다.
          <S.Licontainer>
            <S.NumberList><span>①</span>회원의 귀책사유로 탈퇴가 된 경우 </S.NumberList>
            <S.NumberList><span>② </span>제 10조 회원의 의무에 따라 회원 자격을 상실한 경우</S.NumberList>
          </S.Licontainer>
        </S.NumberList>
        <S.NumberList><span>2.</span>
          회사는 환불신청이유를 심사한 후, 제정경제부에서 고시한
          &lt;인터넷이용관련소비자피해보상&gt;
          상 규정에 한 위약금(결제수수료 및 송금비용에 따라 10,000원 이상 시 환불금액 10%, 이하 시 1,000원)을 공제한 후 회원의 요청금액을 환불합니다.
        </S.NumberList>
        <S.NumberList><span>3.</span>회사는 회원이 지불한 재화에 대해 그 사용처, 사용시간, 사용금액을 명시합니다. 만약 회사의 고의, 과실로 회원이 피해를 입었을 경우에는 회사는 회원이 지불한 재화의 손실을 배상합니다. </S.NumberList>
        <S.NumberList><span>4.</span>환불 입금은 아레오 아이디의 회원명의로 된 통장으로만 가능하며, 환불 요청시에는 본인 확인을 위해 통장 사본을 제출합니다.</S.NumberList>
      </S.Licontainer>


      <S.Title>제20조 (포인트)</S.Title>
      <S.Licontainer>
        <S.NumberList><span>1.</span>회사는 회원에게 포인트를 부여할 수 있습니다. </S.NumberList>
        <S.NumberList><span>2.</span>포인트는 환불이 되지 않습니다. </S.NumberList>
        <S.NumberList><span>3.</span>탈퇴 시 각 호에 따라 해당포인트를 차감합니다.<S.Licontainer>
          <S.NumberList><span>①</span>남아있는 캐쉬의 전액을 환불 요청 할 경우 : 아레오에서 지급된 포인트 전액을 회수 </S.NumberList>
          <S.NumberList><span>② </span>입금 후 해당 금액 일부를 사용하고, 일부를 환불요청 할 경우 : 아레오에서 지급된 포인트 전액을 회수 </S.NumberList>
          <S.NumberList><span>③ </span>입금 후 해당 금액을 그대로 환불요청 할 경우 : 해당 충전으로 인해 생긴 포인트만 회수</S.NumberList>
        </S.Licontainer>
        </S.NumberList>
        <S.NumberList><span>4.</span>회사는 서비스의 효율적 이용 및 운영을 위해 사전 공지 후 포인트의 일부 또는 전부를 조정, 소멸할 수 있습니다.</S.NumberList>
      </S.Licontainer>


      <S.Title>제21조 (계약해지 및 이용제한)</S.Title>
      <S.Licontainer>
        <S.NumberList><span>1.</span>회원이 이용계약을 해지하고자 할 때에는 회원 본인이 온라인을 통해 회사에 해지 신청을 해야 합니다. </S.NumberList>
        <S.NumberList><span>2.</span>회사는 회원이 이 약관의 의무를 위반하거나 서비스의 정상적인 운영을 방해한 경우, 경고, 일시정지, 영구이용정지 등으로 서비스 이용을 단계적으로 제한할 수 있습니다. </S.NumberList>
        <S.NumberList><span>3.</span>회사는 제2항에도 불구하고, 주민등록법을 위반한 명의도용 및 결제도용, 저작권법 및 컴퓨터프로그램보호법을 위반한 불법프로그램의 제공 및 운영방해, 정보통신망법을 위반한 불법통신 및 해킹, 악성프로그램의 배포, 접속권한 초과행위 등과 같이 관련법을 위반한 경우에는 즉시 영구이용정지를 할 수 있습니다. 본 항에 따른 영구이용정지 시 서비스 이용을 통해 획득한 포인트 및 기타 혜택 등도 모두 소멸되며, 회사는 이에 대해 별도로 보상하지 않습니다. </S.NumberList>
        <S.NumberList><span>4.</span>서비스 이용제한을 통지 받은 회원 또는 그 대리인은 이용제한에 대하여 이의가 있을 경우 이의 신청을 할 수 있습니다. 이 때 이의가 정당하다고 &quot;회사&quot;가 인정하는 경우 &quot;회사&quot;는 즉시 &quot;서비스&quot;의 이용을 재개합니다. </S.NumberList>
        <S.NumberList><span>5.</span>
          회사는 이용자가 스팸메세지ㆍ문자피싱메세지 전송 등 불법행위를 한 사실을 확인한 경우 한국인터넷진흥원 불법스팸대응센터 등 관계기관에 관련 자료를 첨부하여 신고할 수 있으며,
          스팸메세지ㆍ문자피싱메세지 등으로 인지되는 문자메시지에 대해서 차단을 할 수 있습니다.
        </S.NumberList>
        <S.NumberList><span>6.</span>회원은 스팸메세지ㆍ문자피싱메세지 전송 등 불법행위를 하거나 전기통신사업법 등 관련 법령을 준수하지 않아 발생하는 모든 민ㆍ형사상의 책임을 부담합니다. </S.NumberList>
        <S.NumberList><span>7.</span>회사는 회원이 다음 사항에 해당하는 행위를 하였을 경우, 사전 통지 없이 이용 계약을 해지하거나 또는 기간을 정하여 서비스 이용을 중지할 수 있으며, 사전 통지가 곤란한 경우 선조치 후 사후 그 사실을 이용자에게 지체없이 통지할 수 있습니다.  또한, 해당 불법행위에 대한 자료를 요청한 국가기관 등에 제출할 수 있습니다.
          <S.Licontainer>
            <S.NumberList><span>가.</span>공공 질서 및 미풍양속에 반하는 경우</S.NumberList>
            <S.NumberList><span>나.</span>범죄적 행위에 관련되는 경우</S.NumberList>
            <S.NumberList><span>다.</span>국익 또는 사회적 공익을 저해할 목적으로 서비스 이용을 계획 또는 실행할 경우</S.NumberList>
            <S.NumberList><span>라.</span>타인의 ID 및 비밀번호를 도용한 경우</S.NumberList>
            <S.NumberList><span>마.</span>타인의 명예를 손상하거나 불이익을 주는 경우</S.NumberList>
            <S.NumberList><span>바.</span>같은 사용자가 다른 ID로 이중 등록을 한 경우</S.NumberList>
            <S.NumberList><span>사.</span>서비스에 위해를 가하는 등 건전한 이용을 저해하는 경우</S.NumberList>
            <S.NumberList><span>아.</span>기타 관련 법령이나 회사가 정한 이용조건에 위배되는 경우</S.NumberList>
            <S.NumberList><span>자.</span>회사에 관한 증거없는, 이유없는 비방 및 욕설로 인한 회사 이미지 및 명예를 훼손하는 경우</S.NumberList>
            <S.NumberList><span>차.</span>불법스팸 (성인, 도박, 대출, 불법의약품 등) 문자메시지를 전송하는 경우</S.NumberList>
            <S.NumberList><span>카.</span>방송통신위원회ㆍ한국인터넷진흥원ㆍ미래창조과학부 등 관계기관이 불법스팸메세지ㆍ문자피싱메세지 등 불법행위의 전송사실을 확인하여 계약해지를 요청하는 경우</S.NumberList>
          </S.Licontainer>
        </S.NumberList>
        <S.NumberList><span>8.</span>미래창조과학부 또는 한국인터넷진흥원(KISA) 등의 기관에서 번호 변작 등으로 판명되어 이용정지를 요청한 경우 회사는 회원의 회선 또는 서비스를 중지할 수 있습니다. 단, 객관적인 증빙자료 등으로 악의적인 목적없이 회원의 실수로 인해 변작됨이 밝혀진 경우 회원의 소명을 받고 회사 심사 후 서비스를 재개 할 수 있습니다.</S.NumberList>
        <S.NumberList><span>9.</span>회원은 거짓으로 문자메시지의 발신번호를 표시해서 발송하는 등의 전기통신사업법이나 정보통신망법 등의 관련 법을 위반해서는 아니되며, 법률을 위반하여 문자메시지를 발송한 경우 그에 따른 모든 민,형사상 책임을 부담합니다.</S.NumberList>
        <S.NumberList><span>10.</span> 회사는 이용자의 정보가 부당한 목적으로 사용되는 것을 방지하고 보다 원활한 서비스 제공을 위하여 12개월 이상 계속해서 로그인을 포함한 서비스 이용이 없는 아이디를 휴면아이디로 분류하고 서비스 이용을 정지할 수 있습니다.</S.NumberList>
        <S.NumberList><span>11.</span> 휴면아이디로 분류되기 30일 전까지 전자우편 등으로 휴면아이디로 분류된다는 사실, 일시 및 개인정보 항목을 이용자에게 통지합니다. 휴면아이디로 분류 시 개인정보는 서비스 이용중인 개인정보와 별도 분리하여 보관합니다. 보관되는 정보는 보관 외 다른 목적으로 이용되지 않으며, 관련 업무 담당자만 열람할 수 있도록 접근을 제한 합니다.</S.NumberList>
        <S.NumberList><span>12.</span>015번호를 소유한 휴면아이디 분류 대상자의 경우 휴면아이디로 분류됨과 동시에 015번호는 해지 처리되어 사용하실 수 없으며, 015번호 관련 개인정보 및 송수신된 모든 내역은 파기 처리됩니다.</S.NumberList>
        <S.NumberList><span>13.</span>이용자는 휴면아이디 보관기간 내에 로그인을 통해 휴면아이디 상태를 해제할 수 있습니다.</S.NumberList>
        <S.NumberList><span>14.</span>휴먼상태 해제 이후 015번호를 재발급 받으실 수 있습니다.</S.NumberList>
        <S.NumberList><span>15.</span>회사는 휴면아이디가 휴면상태로 2년 이상 지속될 경우 본 계약을 해지할 수 있습니다. 단, 이용잔액의 상사소멸시효가 휴면상태로 2년이 지난 시점에 완성되는 경우 회사는 이용잔액의 상사소멸시효가 완성된 후에 계약을 해지할 수 있습니다.</S.NumberList>
      </S.Licontainer>


      <S.Title>제22조 (이용제한의 해제)</S.Title>
      <S.Licontainer>
        <S.LiList> 서비스 이용제한을 통지 받은 회원이 회사에 이용제한을 요청할 경우, 회사는 이용제한 기간 중에 그 이용제한 사유가 해소된 것이 확인된 경우에 한하여 이용제한 조치를 즉시 해제할 수 있습니다.</S.LiList>
      </S.Licontainer>

      <S.Title>제23조 (손해배상)</S.Title>
      <S.Licontainer>
        <S.NumberList><span>1.</span>회원이 본 약관의 규정을 위반함으로 인하여 회사에 손해가 발생하게 되는 경우, 이 약관을 위반한 회원은 회사에 발생하는 모든 손해를 배상하여야 합니다. </S.NumberList>
        <S.NumberList><span>2.</span>회원이 서비스를 이용함에 있어 행한 불법행위나 본 약관 위반행위로 인하여 회사가 당해 회원 이외의 제3자로부터 손해배상 청구 또는 소송을 비롯한 각종 이의제기를 받는 경우 당해 회원은 자신의 책임과 비용으로 회사를 면책 시켜야 하며, 회사가 면책되지 못한 경우 당해 회원은 그로 인하여 회사에 발생한 모든 손해를 배상하여야 합니다.</S.NumberList>
      </S.Licontainer>


      <S.Title>제24조 (책임제한)</S.Title>
      <S.Licontainer>
        <S.NumberList><span>1.</span>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</S.NumberList>
        <S.NumberList><span>2.</span>회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.</S.NumberList>
        <S.NumberList><span>3.</span>회사는 회원이 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며 그밖에 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.</S.NumberList>
        <S.NumberList><span>4.</span>회사는 회원이 서비스에 게재한 정보, 자료, 사실의 신뢰도, 정확성 및 가치 등 게재 내용과 형식에 관하여 책임을 지지 않습니다</S.NumberList>
        <S.NumberList><span>5.</span>회사는 이용자가 스팸메세지·문자피싱메세지 전송 등 불법행위를 한 사실을 확인한 경우 한국인터넷진흥원 불법스팸대응센터 등 관계기관에 관련 자료를 첨부하여 신고할 수 있으며, 스팸메세지·문자피싱메세지 등으로 인지되는 문자메시지에 대해서 차단을 할 수 있습니다</S.NumberList>
        <S.NumberList><span>6.</span>회원은 스팸메세지·문자피싱메세지 전송 등 불법행위를 하거나 전기통신사업법 등 관련 법령을 준수하지 않아 발생하는 모든 민·형사상의 책임을 부담합니다</S.NumberList>
      </S.Licontainer>


      <S.Title>제25조 (관할법원)</S.Title>
      <S.Licontainer>
        <S.LiList>서비스 이용으로 발생한 분쟁에 대해 소송이 제기될 경우 회사의 주사무소 소재지를 관할하는 법원을 전속 관할법원으로 합니다.</S.LiList>
      </S.Licontainer>


      <S.BottomText>
        <S.Title>(부칙)</S.Title>
        <S.Licontainer>
          <S.LiList>[시행일] 본 이용약관은 2009년 10월 14일부터 적용되며, 2008년 7월 25일부터 적용되던 종전약관은 본약관으로 대체됩니다. 개정된 이용약관의 적용일자 이전 가입자 또한 개정된 이용약관의 적용을 받습니다.</S.LiList>
          <S.LiList>변경공고일자 : 2016년 7월 12일</S.LiList>
          <S.LiList>시행일자 : 2016년 9월 1일</S.LiList>
          <S.LiList>
            <Link to='/ComUsecontentBack20160618' style={{ float: 'right' }}>
              <BaseButton
                width='120px'
                height='30px'
                backgroundColor='#0D42E5'
                color='#fff'
                fontWeight='bold'
              >이전약관 보기</BaseButton>
            </Link>
          </S.LiList>
        </S.Licontainer>
      </S.BottomText>

    </S.Container>

  )

}

export default ComUsecontentBack20171201;