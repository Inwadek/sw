var v='2';
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open('test').then(function(cache) {
      return cache.match(v).then(function (response) {
        return response || fetch(event.request).then(function(req) {
          cache.keys().then(function(keys){
            keys.forEach(function(request,index,array){
              cache.delete(request);
            })
          });
          cache.put(v, req.clone());
          return req;
        });
      });
    })
  );
});
