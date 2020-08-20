self.addEventListener('install',function(event){
    console.log("[service wrker] installing service worker....",event);
});

self.addEventListener('activate',function(event){
    console.log("[service wrker] activating service worker....",event);
    return self.clients.claim()
});

self.addEventListener('fetch',function(event){
    console.log("[service wrker] fetching something....",event);
    event.respondWith(fetch(event.request));//this allows us to overwrite the data which get sents back
});