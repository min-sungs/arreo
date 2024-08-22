/* eslint-disable */
import {
  getFCMPublicKey,
  PushNotificationSubscription,
  subscribePushNotification,
  testSend,
  unsubscribePushNotification,
} from '../api/pushNotificationApis.ts';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';
import { useState } from 'react';

/*
 * usePushNotificationApis.ts
 * Push Notification APIs를 사용하는 커스텀 훅입니다.
 * usePushNotification : Push Notification을 사용하는 커스텀 훅입니다.
 */

const firebaseConfig = {
  apiKey: 'AIzaSyC01wQqg8XRgqfiGcdKwIoxzhvolQXvouw',
  authDomain: 'say015.firebaseapp.com',
  projectId: 'say015',
  storageBucket: 'say015.appspot.com',
  messagingSenderId: '584958627001',
  appId: '1:584958627001:web:27dd364c31bac1bbf41f68',
};

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

export const usePushNotification = () => {
  const [publicKey, setPublicKey] = useState<string | undefined>('');

  const [errorState, setError] = useState<string | undefined>('');

  const getPublicKey = async (): Promise<void> => {
    try {
      const response = await getFCMPublicKey();
      setPublicKey(response);
    } catch (error: any) {
      setError(error);
      console.log('Error: ', error);
    }
  };

  const testSendNotification = async (): Promise<void> => {
    try {
      const response = await testSend();
    } catch (error: any) {
      console.log('Error: ', error);
    }
  };

  const subscribe = async (): Promise<void> => {
    try {
      await getPublicKey();

      await getToken(messaging, {
        vapidKey: 'BE8iLut9HUCHMPUT3cs6yzl6ow7F_ToNi0fFmx8tmkQs8QIzoL5_ORhdNJ9F_6R51mE0tf9BItf7VH_WCOFFUAQ',
      })
        .then((token) => {
          return {
            token,
            deviceId: 'undefined',
          };
        })
        .then(subscribePushNotification)
        .then((response) => {
          localStorage.setItem('deviceId', response !== null ? response : '');
        });
    } catch (error: any) {
      console.log('Error: ', error);
    }
  };

  const unsubscribe = async () => {
    const deviceId = localStorage.getItem('deviceId');

    try {
      if (!deviceId) {
        return;
      }

      await unsubscribePushNotification({ token: 'undefined', deviceId }).then(() => {
        localStorage.removeItem('deviceId');
      });
    } catch (error: any) {
      console.log('Error: ', error);
    }
  };
  /*
   * Service Worker 제거
   * 서비스워커를 제거합니다.
   */
  const destroyFirebaseServiceWorker = () => {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const registration of registrations) {
        registration.unregister();
      }
    });
  };

  const startFirebaseServiceWorker = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/firebase-messaging-sw.js')
        .then((registration: ServiceWorkerRegistration): void => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    }
  };

  return {
    getPublicKey,
    subscribe,
    unsubscribe,
    testSendNotification,
    destroyFirebaseServiceWorker,
    startFirebaseServiceWorker,
  };
};
