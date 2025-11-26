const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    nav.classList.remove('open');
    hamburger.classList.remove('active');
    overlay.classList.remove('active');
});
