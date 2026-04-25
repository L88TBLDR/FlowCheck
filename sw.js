const CACHE = 'flowcheck-v3';
const ASSETS = [
  './index.html','./manifest.json','./icon.svg','./icon-192.png','./icon-512.png',
  './ref/page_01.jpg','./ref/page_02.jpg','./ref/page_03.jpg','./ref/page_04.jpg',
  './ref/page_05.jpg','./ref/page_06.jpg','./ref/page_07.jpg','./ref/page_08.jpg',
  './ref/page_09.jpg','./ref/page_10.jpg','./ref/page_11.jpg','./ref/page_12.jpg',
  './ref/page_13.jpg','./ref/page_14.jpg','./ref/page_15.jpg','./ref/page_16.jpg',
  './ref/page_17.jpg','./ref/page_18.jpg','./ref/page_19.jpg','./ref/page_20.jpg'
];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(h=>h||fetch(e.request).catch(()=>caches.match('./index.html'))));});
