!function(){"use strict";const e=1610202372334,t=`cache${e}`,n=["/client/client.24d236ad.js","/client/inject_styles.5607aec6.js","/client/index.70085f98.js"].concat(["/service-worker-index.html","/cooking_camp_bbq.png","/favicon.png","/food_gyouza_enban.png","/food_spaghetti_vongole_bianco.png","/food_sushi_kobore_ikura_don.png","/global.css","/logo-192.png","/logo-512.png","/manifest.json","/syougatsu_mark_mochi.png"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),a=n.protocol.startsWith("http"),o=n.hostname===self.location.hostname&&n.port!==self.location.port,c=n.host===self.location.host&&s.has(n.pathname),i="only-if-cached"===t.request.cache&&!c;!a||o||i||t.respondWith((async()=>c&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const s=await n.match(t);if(s)return s;throw e}}(t.request))())}))}();
