let pantalla = document.getElementById("pantalla");

function agregarValor(valor) {
  pantalla.value += valor;
}

function borrarPantalla() {
  pantalla.value = "";
}
function raizCuadrada() {
  try {
    let valor = eval(pantalla.value);
    if (valor < 0) {
      pantalla.value = "Error";
    } else {
      pantalla.value = Math.sqrt(valor);
    }
  } catch (error) {
    pantalla.value = "Error";
  }
}

function calcularResultado() {
  try {
    pantalla.value = eval(pantalla.value);
  } catch (error) {
    pantalla.value = "Error";
  }
}
