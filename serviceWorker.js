// Declaro nombre del cache //
const raulCarrizo = "Raul Carrizo"

// Declaro los assets a almacenar en el cache //
const assets = [
    "/",
    "/index.html",
    "/css/styles.css",
    "/js/comp.js",
    "/entrevista.html",
    "/favicon Raul Carrizo.ico",
    "/pelicula-el-aviador.jpeg",
    "/torta.jpg",
]

// Instalo el service worker //
self.addEventListener("install", installEvent =>{
    installEvent.waitUntil(
        caches.open(raulCarrizo).then (cache =>{
            cache.addAll (assets)
        })
    )
})

// Agrego los assets al cache //
self.addEventListener ("fetch", fetchEvent =>{
    fetchEvent.respondWith(
        caches.match (fetchEvent.request).then (res => {
            return res || fetch (fetchEvent.request)
        })
    )
})