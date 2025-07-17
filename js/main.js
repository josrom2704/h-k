// Activar AOS.js
AOS.init({
  duration: 800,
  once: true
});

// Manejo de formulario para WhatsApp
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("whatsapp-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const consulta = document.getElementById("consulta").value.trim();

    if (!nombre || !correo || !telefono || !consulta) {
      showModal("⚠️ Por favor, completa todos los campos.", false);
      return;
    }

    const mensaje = `Hola, soy ${nombre}, mi correo es ${correo}, mi número es ${telefono}. ${consulta}`;
    const numeroDestino = "50370656561"; 
    const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(mensaje)}`;

    showModal("✅ Abriendo WhatsApp...", true);

    setTimeout(() => {
      window.open(url, "_blank");
      form.reset();
    }, 1500);
  });
});

// Modal de feedback visual
function showModal(texto, exito) {
  const modal = document.createElement("div");
  modal.classList.add("modal-feedback");
  modal.innerHTML = `<div class="modal-content ${exito ? "exito" : "error"}">${texto}</div>`;
  document.body.appendChild(modal);

  setTimeout(() => modal.classList.add("visible"), 100);
  setTimeout(() => {
    modal.classList.remove("visible");
    setTimeout(() => modal.remove(), 300);
  }, 2500);
}
