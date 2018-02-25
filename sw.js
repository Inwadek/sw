self.addEventListener('install',function(event){
  event.waitUntil(
    caches.open('test').then(function(cache){
      return cache.add('/sw/');
    })
  )
});
self.addEventListener('fetch',function(event){
  event.respondWith(
    caches.match(event.request).then(function(response){
      if(response) return response;
      return fetch(event.request);
    })
  )
});
