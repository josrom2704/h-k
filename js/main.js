// Activar AOS.js
AOS.init({
  duration: 800,
  once: true
});

// Manejo de formulario
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = form.querySelector('input[placeholder="Nombre completo"]').value.trim();
    const correo = form.querySelector('input[type="email"]').value.trim();
    const telefono = form.querySelector('input[type="tel"]').value.trim();
    const mensaje = form.querySelector("textarea").value.trim();

    if (!nombre || !correo || !telefono || !mensaje) {
      showModal("⚠️ Por favor, completa todos los campos.", false);
      return;
    }

    // ✉️ Aquí podrías enviar a EmailJS, Sheet o backend
    showModal("✅ ¡Gracias por tu solicitud! Te contactaremos pronto.", true);

    form.reset();
  });
});

// Función para mostrar modal de éxito o error
function showModal(texto, exito) {
  const modal = document.createElement("div");
  modal.classList.add("modal-feedback");
  modal.innerHTML = `<div class="modal-content ${exito ? "exito" : "error"}">${texto}</div>`;
  document.body.appendChild(modal);

  setTimeout(() => {
    modal.classList.add("visible");
  }, 100);

  setTimeout(() => {
    modal.classList.remove("visible");
    setTimeout(() => modal.remove(), 400);
  }, 3000);
}
