// import React, { useEffect, useState } from 'react';
// import ServiceSignUp from '../ServiceSignUp/ServiceSignUp';
// import POBox015Mailbox from './POBox015Mailbox';
// import POBox015Mock from './POBox015Mock';
// import { usePOBox015 } from 'components/hooks/customs/say015/pobox015/usePOBox015';
// import ReSubscription from '../ReSubscription/ReSubscription';
// import Loader from 'components/common/Loader';

// const POBox015 = () => {
//   // const storageUser = localStorage.getItem('user'); // 현재 로그인중인 user
//   // const say015User = localStorage.getItem('say015User'); // true = 015번호 존재
//   // const availabilityStatus = localStorage.getItem('availabilityStatus'); // true = 015 구독중

//   // 015 가입 절차 페이지
//   const initial015SubPage = {
//     first: 'POBox015Mock',
//     second: 'AmountHelp',
//     third: 'SelectNumber',
//     forth: 'POBox015Mailbox',
//     resub: 'ReSubscription',
//   };

//   const [open015SubPage, setOpen015SubPage] = useState<string | null>(null);
//   const [subState, setSubState] = useState<string | null>(null);

//   const { pageState, setPageState, authorityData, authorityDataIsLoading, authorityDataRefetch } = usePOBox015();
//   const storageUser = localStorage.getItem('user'); // 현재 로그인중인 user
//   // const say015User = localStorage.getItem('say015User'); // true = 015번호 존재
//   console.log('authorityData', authorityData);

//   const say015SubHandle = (change: any, page: string) => {
//     change(page);
//   };

//   useEffect(() => {
//     if (!authorityData?.say015User) {
//       setOpen015SubPage(initial015SubPage?.first);
//     }
//   }, [localStorage]);

//   useEffect(() => {
//     if (authorityData?.say015User && authorityData?.availabilityStatus && !authorityDataIsLoading) {
//       setOpen015SubPage(initial015SubPage?.forth);
//     }
//     if (authorityData?.say015User && !authorityData?.availabilityStatus && !authorityDataIsLoading) {
//       setSubState(initial015SubPage?.resub);
//     }
//   }, [open015SubPage, localStorage, authorityDataIsLoading]);

//   let componentToRender;

//   console.log('open015SubPage', open015SubPage);

//   if (open015SubPage === initial015SubPage?.resub) {
//     componentToRender = (
//       <ReSubscription
//         authorityData={authorityData}
//         setOpen015SubPage={setOpen015SubPage}
//         initial015SubPage={initial015SubPage}
//         authorityDataRefetch={authorityDataRefetch}
//       />
//     );
//   } else if (open015SubPage === initial015SubPage?.first) {
//     componentToRender = (
//       <POBox015Mock
//         setOpen015SubPage={setOpen015SubPage}
//         initial015SubPage={initial015SubPage}
//         say015SubHandle={say015SubHandle}
//         subState={subState}
//         authorityData={authorityData}
//         storageUser={storageUser}
//       />
//     );
//   } else if (open015SubPage === initial015SubPage?.second || initial015SubPage?.third) {
//     componentToRender = (
//       <ServiceSignUp
//         open015SubPage={open015SubPage}
//         setOpen015SubPage={setOpen015SubPage}
//         initial015SubPage={initial015SubPage}
//         say015SubHandle={say015SubHandle}
//         authorityData={authorityData}
//       />
//     );
//   }
//   if (open015SubPage === initial015SubPage?.forth) {
//     componentToRender = <POBox015Mailbox />;
//   }
//   return authorityDataIsLoading ? <Loader /> : componentToRender;
// };

// export default POBox015;
