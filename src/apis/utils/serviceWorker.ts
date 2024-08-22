/*
    * Service Worker
    * 푸시 알림 등록 시 서비스워커의 기능을 다룹니다.
 */


/*
    * Service Worker 등록
    * 서비스워커를 등록합니다.
 */
// export const startFirebaseServiceWorker = () => {
//     if ('serviceWorker' in navigator) {
//         navigator.serviceWorker.register('/firebase-messaging-sw.js')
//             .then((registration : ServiceWorkerRegistration) : void  => {
//         console.log('Service Worker registered with scope:', registration.scope);
//         }).catch((error) => {
//         console.log('Service Worker registration failed:', error);
//         });
//     }
// }

/*
    * 권한 요청
    * 푸시 알림을 위한 권한을 요청합니다.
 */
export const requestPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
        console.log('Notification permission granted.');
    } else {
        console.log('Unable to get permission to notify.');
    }
}

/*
    * Service Worker 제거
    * 서비스워커를 제거합니다.
 */
export const destroyFirebaseServiceWorker = () => {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (const registration of registrations) {
        registration.unregister();
        }
    });
}

