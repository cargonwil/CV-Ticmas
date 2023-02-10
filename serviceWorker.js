// Declaro nombre del cache //
const raulCarrizo = "Raul Carrizo"

// Declaro los assets a almacenar en el cache //
const assets = [
    "/CV-Ticmas/",
    "/CV-Ticmas/index.html",
    "/CV-Ticmas/css/styles.css",
    "/CV-Ticmas/js/comp.js",
    "/CV-Ticmas/entrevista.html",
    "/CV-Ticmas/favicon Raul Carrizo.ico",
    "/CV-Ticmas/pelicula-el-aviador.jpeg",
    "/CV-Ticmas/torta.jpg",
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