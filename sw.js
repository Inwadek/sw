//2
self.addEventListener('fetch',function(event){
 event.respondWith(fetch('/sw/index.html'));
});
