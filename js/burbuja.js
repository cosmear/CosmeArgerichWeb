const canvas = document.getElementById("fondo-burbuja");
const ctx = canvas.getContext("2d");

function ajustarTamaño() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
ajustarTamaño();
window.addEventListener("resize", ajustarTamaño);

let burbuja = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radio: 40,
  dx: 2,
  dy: 3,
  color: generarColor(),
  arrastrando: false
};

function generarColor() {
  const r = Math.floor(Math.random() * 155 + 100);
  const g = Math.floor(Math.random() * 155 + 100);
  const b = Math.floor(Math.random() * 155 + 100);
  return `rgb(${r}, ${g}, ${b})`;
}

// Eventos de mouse
canvas.addEventListener("mousedown", (e) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const distancia = Math.hypot(mouseX - burbuja.x, mouseY - burbuja.y);
  if (distancia <= burbuja.radio) {
    burbuja.arrastrando = true;
  }
});

canvas.addEventListener("mousemove", (e) => {
  if (burbuja.arrastrando) {
    const rect = canvas.getBoundingClientRect();
    burbuja.x = e.clientX - rect.left;
    burbuja.y = e.clientY - rect.top;
  }
});

canvas.addEventListener("mouseup", () => {
  burbuja.arrastrando = false;
});

function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(burbuja.x, burbuja.y, burbuja.radio, 0, Math.PI * 2);
  ctx.fillStyle = burbuja.color;
  ctx.fill();

  if (!burbuja.arrastrando) {
    burbuja.x += burbuja.dx;
    burbuja.y += burbuja.dy;

    // Rebotes
    if (burbuja.x + burbuja.radio >= canvas.width || burbuja.x - burbuja.radio <= 0) {
      burbuja.dx *= -1;
      burbuja.color = generarColor();
    }

    if (burbuja.y + burbuja.radio >= canvas.height || burbuja.y - burbuja.radio <= 0) {
      burbuja.dy *= -1;
      burbuja.color = generarColor();
    }
  }

  requestAnimationFrame(animar);
}

animar();
