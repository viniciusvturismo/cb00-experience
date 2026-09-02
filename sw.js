/* Service worker — permite "instalar" o app (ícone na tela inicial) e
   recebe as notificações push quando o app está fechado. Não faz cache de
   conteúdo de propósito: data.js muda com frequência e precisa sempre vir
   da rede.                                                                */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {}); // passthrough — deixa o navegador buscar normalmente

importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAzNDtynNifnjltqvvBrbwmMuOi3Ws09Tc",
  authDomain: "speedmax-nascar-app.firebaseapp.com",
  projectId: "speedmax-nascar-app",
  storageBucket: "speedmax-nascar-app.firebasestorage.app",
  messagingSenderId: "824476697911",
  appId: "1:824476697911:web:09006c1cb7a36d2e9ac6b2",
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  const { title, body } = payload.notification || {};
  if (!title) return;
  self.registration.showNotification(title, {
    body,
    icon: 'icon-192.png',
    badge: 'icon-192.png',
  });
});
