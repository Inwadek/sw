self.addEventListener('fetch',function(event){
  event.respondWith(
    caches.match(event.request).then(function(request){
      return request || fetch(event.request)
    })
  )
});
self.addEventListener('fetch',function(event){
  event.waitUntil(
    caches.open('test').then(function(cache){
      cache.add('index.html');
    })
  )
});
