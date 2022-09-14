var toggleNav = document.querySelector('.toggle-nav');
var hamburger = document.querySelector('.hamburger');
var x = document.querySelector('.x');
var header = document.querySelector('.header');

toggleNav.addEventListener('click', () => {
  header.classList.toggle('open-nav');
  header.classList.toggle('close-nav');
  hamburger.classList.toggle('show-icon');
  x.classList.toggle('show-icon');
})

const documentHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
 }
 window.addEventListener('resize', documentHeight);
 documentHeight();
 