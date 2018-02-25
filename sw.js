let v=1;
let c=true;

self.addEventListener('fetch',function(event){
  event.respondWith(
    caches.open('mysite-dynamic').then(function(cache){
      keys.forEach(function(request,index,array){
        if(request==v){
          c=false;
          return v;
        }else{
          cache.delete(request);
        }
      })
      if(c){
        cache.put(v,response.clone());
        return response;
      }
    })
  )
});
