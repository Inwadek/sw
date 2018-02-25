let v='v';
let c=true;

self.addEventListener('fetch',function(event){
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
        })
      })
      if(c){
        fetch(event.request.url).then(function(response){
          cache.put(v,response.clone());
          return response;
        })
      }
    })
  )
});
