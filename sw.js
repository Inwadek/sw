let v='v';

self.addEventListener('fetch',function(event){
  event.respondWith(
    fetch(event.request).then(function(response){
      caches.open('test').then(function(cache){
        cache.put(event.request,response.clone());
        return response;
      })
    })
  )
});
