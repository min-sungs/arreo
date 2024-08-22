import React, {useEffect} from 'react';
import SoftPhone from "../../components/softPhone/SoftPhone.tsx";
import * as S from './CustomerPage.styles.tsx'
import Notice from './Notice/Notice.tsx'
import EventBoard from './EventBoard/EventBoard.tsx'
import VOCBoard from './VOCBoard/VOCBoard.tsx';
import QA from './QA/QA.tsx';
import {useRecoilState} from "recoil";
import {customerRouterRecoil} from "../../recoil/atoms/customer/customer.ts";

const CustomerPage = () => {

  const [customerRouterState, setCustomerRouterState] = useRecoilState(customerRouterRecoil);
  useEffect(() => {
    setCustomerRouterState(0);
  }, []);

  const components = [<Notice key={0}/>,  <QA key={1}/>,<EventBoard key={2}/>]

  return (
    <S.CustomerPageContainer>
			
			{/* 고객센터내 버튼 */}
			<S.Customer>
        {components[customerRouterState]}
				{/* 공지사항 */}
				{/*<Notice />*/}

				{/* 자주 묻는 질문 */}
				{/* <QA /> */}

				{/* VOC 상담 게시판 */}
				{/* <VOCBoard /> */}

				{/* 이벤트 게시판 */}
				{/* <EventBoard /> */}

			</S.Customer>

			<SoftPhone/>

    </S.CustomerPageContainer>
  )
}

export default CustomerPage;