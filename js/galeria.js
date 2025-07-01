
const imagenes = [
  "foca.png",
  "paloma.png",
  "tortuga.png",
  "zorro.png"
];

 let indiceActual = 0;
  const imagen = document.getElementById("imagen-galeria");
   window.mostrarImagenSiguiente = function () {
    indiceActual = (indiceActual + 1) % imagenes.length;
    imagen.src = imagenes[indiceActual];
    imagen.alt = imagenes[indiceActual];
  };

  window.mostrarImagenAnterior = function () {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    imagen.src = imagenes[indiceActual];
    imagen.alt = imagenes[indiceActual];
  };
