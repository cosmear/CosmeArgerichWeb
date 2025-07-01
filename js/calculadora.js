let pantalla = document.getElementById("pantalla");

function agregarValor(valor) {
  pantalla.value += valor;
}

function borrarPantalla() {
  pantalla.value = "";
}

function calcularResultado() {
  try {
    pantalla.value = eval(pantalla.value);
  } catch (error) {
    pantalla.value = "Error";
  }
}
