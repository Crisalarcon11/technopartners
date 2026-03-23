document.addEventListener('DOMContentLoaded', () => {
  const yearEls = document.querySelectorAll('[data-year]');
  yearEls.forEach(el => el.textContent = new Date().getFullYear());

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const company = document.getElementById('company').value.trim();
      const email = document.getElementById('email').value.trim();
      const service = document.getElementById('service').value.trim();
      const message = document.getElementById('message').value.trim();

      const subject = encodeURIComponent(`Consulta web TechnoPartners - ${company || name || 'Nuevo prospecto'}`);
      const body = encodeURIComponent(
`Nombre: ${name}\nEmpresa: ${company}\nCorreo: ${email}\nServicio de interés: ${service}\n\nMensaje:\n${message}\n\nEnviado desde el sitio web de TechnoPartners.`
      );

      window.location.href = `mailto:douglas.alarcon@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});
