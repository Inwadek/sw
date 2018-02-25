var v='v1';

self.addEventListener('install',function(event){
  event.waitUntil(
    caches.open(v).then(function(cache){
      return cache.add('/sw/');
    })
  )
});

self.addEventListener('activate',function(event){
  event.waitUntil(
    return Promise.all(
      caches.keys().map(function(cacheName){
        if(cacheName!==v)return caches.delete(cacheName);
      })
    )
  )
})

self.addEventListener('fetch',function(event){
  event.respondWith(
    caches.match(event.request).then(function(response){
      if(response) return response;
      return fetch(event.request);
    })
  )
});
