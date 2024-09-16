const closeIcon = document.querySelector('.close-icon');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const header = document.querySelector('header');
const nav = document.querySelector('nav');

hamburgerIcon.addEventListener('click', () => {
  header.classList.add('menu-open');
});
closeIcon.addEventListener('click', () => {
  header.classList.remove('menu-open');
});
nav.addEventListener('click', (e) => {
  e.stopPropagation();
});

window.addEventListener('click', (e) => {
  if (e.target !== hamburgerIcon) {
    header.classList.remove('menu-open');
  }
});
