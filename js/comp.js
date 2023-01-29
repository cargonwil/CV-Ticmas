

document.getElementById("imagen").addEventListener("mouseenter",mouseenter);
document.getElementById("imagen").addEventListener("mouseleave",mouseleave);

function mouseenter(){
    document.getElementById("imagen").src= "pelicula-el-aviador.jpeg";
}

function mouseleave(){
    document.getElementById("imagen").src= "torta.jpg";
}
