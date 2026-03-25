document.addEventListener('DOMContentLoaded', () => {
  const yearEls = document.querySelectorAll('[data-year]');
  yearEls.forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
});

function toggleMenu() {
  const menu = document.getElementById('menu');
  if (menu) {
    menu.classList.toggle('open');
  }
}
