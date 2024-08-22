import { instance } from './clientAxios';

/*
 * pushNotificationApis.ts
   Push Notification APIs
 */

export interface PushNotificationSubscription {
    token: string|undefined,
    deviceId: string|undefined,
}


/*
* getFCMPublicKey : Firebase Cloud Messaging Public Key를 가져옵니다.
*
 */
export const getFCMPublicKey = async () => {
    try {
        const response = await instance.get('/api/push/chrome/public-key');
        return response.data;
    } catch (error) {
        return error;
    }
}


/*
* subscribePushNotification : Push Notification을 구독합니다.
 */


export const subscribePushNotification = async (subscription: PushNotificationSubscription|null) => {
  try {
    const response = await instance.post('/api/push/chrome/subscribe',
      subscription,
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

/*
* unsubscribePushNotification : Push Notification 구독을 취소합니다.
 */

export const unsubscribePushNotification = async (subscription: PushNotificationSubscription) => {
  try {
    const response = await instance.post('/api/push/chrome/unsubscribe',
      subscription,
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

export const testSend = async () => {
    try {
        const response = await instance.get('/api/push/chrome/test-send');
        return response.data;
    } catch (error) {
        return error;
    }
}

