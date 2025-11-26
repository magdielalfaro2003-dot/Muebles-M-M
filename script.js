const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
const overlay = document.getElementById('overlay');

// ABRIR / CERRAR MENÚ
menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  overlay.classList.toggle('active');

  // actualizar aria
  const isOpen = navMenu.classList.contains('active');
  menuBtn.setAttribute('aria-expanded', isOpen);
  navMenu.setAttribute('aria-hidden', !isOpen);
});

// CERRAR MENÚ AL TOCAR FUERA
overlay.addEventListener('click', () => {
  navMenu.classList.remove('active');
  overlay.classList.remove('active');
  menuBtn.setAttribute('aria-expanded', false);
  navMenu.setAttribute('aria-hidden', true);
});
