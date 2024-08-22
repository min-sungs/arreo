/* eslint-disable */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useRef, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Reset } from 'styled-reset';
``;

import Footer from './components/common/Footer';
import Header from './components/common/Header';
import AddressAddLarge from './pages/AddressPage/AddressAddLarge';
import AddressBook from './pages/AddressPage/AddressBook';
import AutoGreeting from './pages/AutoGreeting';
import Charging from './pages/ChargePage/Charging';
import Fax from './pages/Fax';
import GiftCard from './pages/GiftCard';
import Mail from './pages/Mail';
import MyPage from './pages/MyPage/MyPage';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUpPage/signUp/SignUp';
import SignUpDelete from './pages/SignUpPage/signUpDelete/SignUpDelete';
import SignUpExistence from './pages/SignUpPage/signUpExistence/SignUpExistence';
import SignUpForm from './pages/SignUpPage/signUpForm/SignUpForm';
import SignUpIdCheck from './pages/SignUpPage/signUpIdCheck/SignUpIdCheck';
import SignUpRecovery from './pages/SignUpPage/signUpRecovery/SignUpRecovery';
import SignUpSay015 from './pages/SignUpPage/signUpSay015/SignUpSay015';
import { PushNotificationTest } from './pages/test/PushNotificationTest.tsx';
import AuthComponent from './apis/utils/AuthComponent';
import FindAccount from './pages/FindAccountPage/FindAccount';
import FindAccountList from './pages/FindAccountPage/FindAccountList';
import FindAccountNiceCheck from './pages/FindAccountPage/FindAccountNiceCheck';
import ArsSetting from './pages/Say015Test/ArsSetting.tsx';
import SignUpNiceResult from './pages/SignUpPage/signUpNiceResult/SignUpNiceResult';
import SignUpResult from './pages/SignUpPage/signUpResult/SignUpResult';
import PrivateRoute from './components/common/PrivateRoute';
import ExcelMessenger from './pages/ExcelMessenger';
import AccountFindResult from './pages/FindAccountPage/AccountFindResult/AccountFindResult';
import ComEmailveto from './pages/Terms/ComEmailveto';
import ComProtect from './pages/Terms/ComProtect';
import ComProtectBack20151030 from './pages/Terms/ComProtectBack20151030';
import ComProtectBack20180424 from './pages/Terms/ComProtectBack20180424';
import ComProtectOld from './pages/Terms/ComProtectOld';
import ComSpampolicy from './pages/Terms/ComSpampolicy';
import ComUseContent from './pages/Terms/ComUseContent';
import ComUseContent015 from './pages/Terms/ComUseContent015';
import ComUsecontentBack20160618 from './pages/Terms/ComUsecontentBack20160618';
import ComUsecontentBack20171201 from './pages/Terms/ComUsecontentBack20171201';
import ComYouthpolicy from './pages/Terms/ComYouthpolicy';
import Body from './components/common/Body.tsx';

import * as S from './styles/Global.styles.ts';
import Say015 from './pages/Say015Test/Say015.tsx';
import Say015OK from './pages/Say015Test/Say015OK.tsx';
import CustomerPage from './pages/CustomerPage/CustomerPage.tsx';

// 높이값 가져오기위함
function setScreenSize(): void {
	const vh: number = window.innerHeight * 0.01;
	document.documentElement.style.setProperty("--vh", `${vh}px`);
}

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
        // refetchOnmount: false,
        // refetchOnReconnect: false,
        retry: false,
        staleTime: 5 * 60 * 1000,
      },
    },
  });

	// 높이값 가져오기위함
	useEffect(() => {
		setScreenSize();
	}, []); // 의존성 배열을 비워서 마운트될 때 한 번만 실행되도록 설정
	
  // 주소록 ref
  const gridRef = useRef<any>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <S.Container>
        <Reset />
        <S.GlobalStyle />
        <BrowserRouter>
          <Header />
          <Body>
            <Routes>
              {/* 주소록 */}
              <Route path="/" element={<PrivateRoute component={<AddressBook gridRef={gridRef} tap={'0'} />} />} />
              {/* <Route path="/AddressAddLarge" element={<PrivateRoute component={<AddressAddLarge/>}/>}/> */}
              {/* 전송내역관리 */}
              <Route
                path="/sendresult"
                element={<PrivateRoute component={<AddressBook gridRef={gridRef} tap={'2'} />} />}
              />
              {/* 015 사서함 */}
              <Route path="/say015" element={<PrivateRoute component={<Say015 />} />} />
              <Route path="/say015ok" element={<PrivateRoute component={<Say015OK />} />} />
              {/* 고객센터 */}
              <Route path="/customer" element={<CustomerPage />} />
              {/* 마이페이지 */}
              <Route path="/mypage" element={<PrivateRoute component={<MyPage link="mypage" />} />} />
              <Route path="/userinfochange" element={<PrivateRoute component={<MyPage link="userinfochange" />} />} />
              <Route path="/passwordchange" element={<PrivateRoute component={<MyPage link="passwordchange" />} />} />
              <Route
                path="/phonenumberchange"
                element={<PrivateRoute component={<MyPage link="phonenumberchange" />} />}
              />
              <Route path="/usernamechange" element={<PrivateRoute component={<MyPage link="usernamechange" />} />} />
              <Route path="/callingnumber" element={<PrivateRoute component={<MyPage link="callingnumber" />} />} />
              <Route path="/memberleave" element={<PrivateRoute component={<MyPage link="memberleave" />} />} />
              {/* 로그인 */}
              <Route path="/signin" element={<SignIn />} />
              <Route path="/findaccount" element={<FindAccount />} />
              <Route path="/findaccountNiceCheck" element={<FindAccountNiceCheck />} />
              <Route path="/findaccountList" element={<FindAccountList />} />
              <Route path="/accountFindResult" element={<AccountFindResult />} />
              <Route path="/fax" element={<Fax />} />
              <Route path="/autogreeting" element={<AutoGreeting />} />
              <Route path="/mail" element={<Mail />} />
              <Route path="/giftcard" element={<GiftCard />} />
              {/* 충전소 */}
              <Route path="/charging" element={<Charging link="charging" />} />
              <Route path="/charge/*" element={<PrivateRoute component={<Charging link="charge" />} />} />
              <Route path="/payment" element={<PrivateRoute component={<Charging link="payment" />} />} />
              <Route path="/payment/detail" element={<PrivateRoute component={<Charging link="detail" />} />} />
              <Route path="/usage" element={<PrivateRoute component={<Charging link="usage" />} />} />
              <Route
                path="/taxCashReceiptsDetail"
                element={<PrivateRoute component={<Charging link="taxCashReceiptsDetail" />} />}
              />
              <Route
                path="/TaxInvoiceDetail"
                element={<PrivateRoute component={<Charging link="taxInvoiceDetail" />} />}
              />
              <Route path="/TaxInvoiceAuto" element={<PrivateRoute component={<Charging link="TaxInvoiceAuto" />} />} />
              <Route
                path="/RegisterTaxInvoice"
                element={<PrivateRoute component={<Charging link="RegisterTaxInvoice" />} />}
              />
              {/* 이용약관 */}
              <Route path="/ComUseContent" element={<ComUseContent />} />
              <Route path="/ComUseContent015" element={<ComUseContent015 />} />
              <Route path="/ComUsecontentBack20171201" element={<ComUsecontentBack20171201 />} />
              <Route path="/ComUsecontentBack20160618" element={<ComUsecontentBack20160618 />} />
              <Route path="/ComProtect" element={<ComProtect />} />
              <Route path="/ComProtectOld" element={<ComProtectOld />} />
              <Route path="/ComProtectBack20151030" element={<ComProtectBack20151030 />} />
              <Route path="/ComProtectBack20180424" element={<ComProtectBack20180424 />} />
              <Route path="/ComYouthpolicy" element={<ComYouthpolicy />} />
              <Route path="/ComSpampolicy" element={<ComSpampolicy />} />
              <Route path="/ComEmailveto" element={<ComEmailveto />} />
              {/* 회원가입 */}
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/SignUpForm" element={<SignUpForm />} />
              <Route path="/SignUpExistence" element={<SignUpExistence />} />
              <Route path="/SignUpNiceResult" element={<SignUpNiceResult />} />
              <Route path="/SignUpIdCheck" element={<SignUpIdCheck />} />
              <Route path="/SignUpSay015" element={<SignUpSay015 />} />
              <Route path="/SignUpRecovery" element={<SignUpRecovery />} />
              <Route path="/SignUpDelete" element={<SignUpDelete />} />
              <Route path="/SignUpResult" element={<SignUpResult />} />
              <Route path="/AuthComponent" element={<AuthComponent />} />

              {/* 테스트 URL 수정하지 말아주세여 */}
              <Route path="/excelMessenger" element={<PrivateRoute component={<ExcelMessenger />} />} />
              {/*<Route path="/sse" element={<SSE />} />*/}
              <Route path="/ArsSetting" element={<ArsSetting />} />
              <Route path="/pushNotificationTest" element={<PushNotificationTest />} />
            </Routes>
          </Body>
          <Footer />
        </BrowserRouter>
      </S.Container>
    </QueryClientProvider>
  );
};

export default App;
