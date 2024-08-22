//firebase-messaging-sw.js
importScripts(
    "https://www.gstatic.com/firebasejs/9.7.0/firebase-app-compat.js"
);
importScripts(
    "https://www.gstatic.com/firebasejs/9.7.0/firebase-messaging-compat.js"
);

self.addEventListener("push", async function (event) {
    console.log("[firebase-messaging-sw.js] Received push event", event);

    let notification = event.data.json();
    console.log("[firebase-messaging-sw.js] Received push notification", notification);


    const notificationTitle = notification.notification.title;
    const imageUrl = notification.notification.image;
    const iconUrl = notification.data.iconUrl;
    const url = notification.data.onclickurl;

    const notificationOptions = {
        body: notification.notification.body,
        icon: iconUrl, // 루트 경로 기준으로 접근
        image: imageUrl,
        data: {
            onclickurl: url
        }
    };

    console.log(notificationOptions);


    return self.registration.showNotification(notificationTitle, notificationOptions);
});




self.addEventListener('notificationclick', function (event) {
    console.log("[firebase-messaging-sw.js] Notification click Received.", event);
    event.notification.close();

    event.waitUntil(
        clients.openWindow(event.notification.data.onclickurl)

    );

});

