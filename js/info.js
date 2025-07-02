function mostrarInfo(tipo) {
  const contenido = document.getElementById("contenido-info");

  const datos = {
    estudios: `
      <p>📚 Estudio Lic. en Desarrollo de Videojuegos en UADE.</p>
      <p>💻 Hice un curso Full Stack en Digital House.</p>
      <p>🎒 Terminé la secundaria como Perito Mercantil.</p>
    `,
    trabajo: `
      <p>👨‍🏫 Fui profesor de Tecnología en dos colegios.</p>
      <p>🧑‍💻 Doy clases particulares desde 2023.</p>
      <p>🌱 Coordino grupos juveniles desde 2021.</p>
    `,
    habilidades: `
      <p>⚙️ Programación: JavaScript, C++, C#, HTML, CSS</p>
      <p>🎮 Game Dev: Unity, Unreal, Construct 3</p>
      <p>🖌️ Diseño: Photoshop, Illustrator, Blender</p>
      <p>📐 Otros: Arduino, JSON, Onshape</p>
    `
  };

  contenido.innerHTML = datos[tipo];
  contenido.style.display = "block";
}
const paginas = [
  { nombre: "CV", url: "cv.html" },
  { nombre: "Proyectos", url: "proyectos.html" },
  { nombre: "Contacto", url: "contacto.html" },
  { nombre: "Plinko", url: "plinko.html" },
  { nombre: "Calculadora", url: "calculadora.html" },
  { nombre: "Galería", url: "galeria.html" },
];

window.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("enlaces-dinamicos");

  paginas.forEach(pagina => {
    const enlace = document.createElement("a");
    enlace.href = pagina.url;
    enlace.textContent = pagina.nombre;
    enlace.classList.add("boton-enlace");
    contenedor.appendChild(enlace);
  });
});