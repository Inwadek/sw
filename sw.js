var CACHE_NAME = 'v1';

self.addEventListener('fetch',function(event){
  event.respondWith(
    caches.match(event.request).then(function(request){
      return request || fetch(event.request)
    })
  )
})

self.addEventListener('install',function(event){
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.add('index.html')
    })
  )
})

self.addEventListener('activate',function(event){
  event.waitUntil(
    caches.keys().then(function(keyList){
      return Promise.all(keyList.map(function(key,i){
        if(key!==CACHE_NAME){
          return caches.delete(keyList[i])
        }
      }))
    })
  )
})
