/* Service worker mínimo — só existe para o navegador permitir "instalar" o
   app (ícone na tela inicial). Não faz cache de nada de propósito: o
   conteúdo (data.js) muda com frequência e precisa sempre vir da rede. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {}); // passthrough — deixa o navegador buscar normalmente
