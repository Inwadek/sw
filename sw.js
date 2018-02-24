self.addEventListener('fetch',function(event){
 event.respondWith(
  fetch('index.html')
  //new Response('Hello World')
 );
});
