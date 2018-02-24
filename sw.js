//1
self.addEventListener('fetch',function(event){
 event.respondWith(fetch('index.html'));
});
