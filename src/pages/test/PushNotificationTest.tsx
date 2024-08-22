import React, {useEffect, useState} from 'react';
import { usePushNotification } from '../../apis/hooks/usePushNotification.ts';

export const PushNotificationTest = () => {
  const {
    subscribe,
    unsubscribe,
    getPublicKey,
    testSendNotification,
    destroyFirebaseServiceWorker,
    startFirebaseServiceWorker,
  } = usePushNotification();

  const getSubscriptionStatus = () =>  localStorage.getItem('deviceId')? '알림 ON' : '알림 OFF';

  const [subscriptionStatus, setSubscriptionStatus] = useState(getSubscriptionStatus());

  const handleSubscribe = async () => {

    if (!localStorage.getItem('deviceId')) {
      await subscribe();
    } else {
      await unsubscribe();
    }

    const subscriptionStatus = getSubscriptionStatus();
    setSubscriptionStatus(subscriptionStatus);
  };




  // useEffect(() => {
  //
  //   const subscriptionStatus = localStorage.getItem('deviceId') ? '알림 ON' : '알림 OFF';
  //   setSubscriptionStatus(subscriptionStatus);
  //
  // }, []);

  const handleDestroy = () => {
    destroyFirebaseServiceWorker();
  };

  const handleStartServiceWorker = () => {
    startFirebaseServiceWorker();
  };



  return (
    <div>
      <button onClick={handleSubscribe}>{subscriptionStatus}</button>
      {/*<button onClick={handleUnsubscribe}>구독해지</button>*/}
      {/*<button onClick={handelTest}>푸시알림테스트</button>*/}
      {/*<button onClick={handleDestroy}>서비스워커삭제</button>*/}
      {/*<button onClick={handleStartServiceWorker}>키가져오기</button>*/}
    </div>
  );
};
