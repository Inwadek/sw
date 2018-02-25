let v=1;
let c=true;
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open('mysite-dynamic').then(function(cache){
      cache.keys().then(function(keys){
        keys.forEach(function(request,index,array){
          if(request==v){
            c=false;
            return v;
          }else{
            cache.delete(request);
          }
        });
        if(c){
          cache.put(v,response.clone())
          return response;
        }
      });
    })
  );
});

/*
    caches.match(v).then(function(matches){
      if(!matches){
        fetch(event.request).then(function(response){
          cache.put(v,response.clone());
          
          caches.open(v).then(function(cache) {
            cache.keys().then(function(keys) {
              keys.forEach(function(request, index, array) {
                cache.delete(request);
              });
            });
          })
          
          return response;
        });
      }else{
        return match;
      }
    });
  );
});
*/
/*
self.addEventListener('fetch',function(event){
 event.respondWith(fetch(event.request.url));
});
*/
