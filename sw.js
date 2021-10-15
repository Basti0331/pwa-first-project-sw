self.addEventListener('install', e => {
       e.waitUntil(
               caches.open(CACHE).then(cache => {
                       return cache.addAll(["./", "./src/master.css", "./images/logoskull192.png"]);
               })
       );
});


self.addEventListener('fetch', e => {
        e.respondWith(
                caches.match(e.request).then(response => {
                        return response || fetch(e.request); /*Cache erst, sollte nichts vorhanden sein, gehe online*/
                })
        );
});