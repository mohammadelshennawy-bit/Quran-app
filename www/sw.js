const C='mushaf-v14',F=['./','./index.html','./download.html','./manifest.json','./icon-192.png','./favicon-32.png','./favicon.ico','./icon-512.png','./fonts/q1.ttf','./fonts/q2.ttf','./fonts/q3.ttf','./fonts/q4.ttf','./fonts/q5.ttf'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(new URL(e.request.url).origin!==location.origin)return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
