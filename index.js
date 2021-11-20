addEventListener("fetch", event => {
   
  const url =new URL(event.request.url)

  url.hostname='pradeepkumar.tk'

  const data=fetch(url.toString(),event.request)

  event.respondWith(data)

})