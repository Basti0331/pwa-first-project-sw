self.addEventListener('install', e => {
       e.waitUntil(
               caches.open("static").then(cache => {
                       return cache.addAll(["./", "./src/master.css", "./images/logoskull192.png"]);
               })
       );
       /*console.log("Install");*/
})


self.addEventListener("fetch", e =>{
        e.respondWith(
                caches.match(e.request).then(response => {
                        return response || fetch(e.request);
                })
        );
        /*console.log(`Intercepting fetch request for: ${e.request.url}`);*/
});


