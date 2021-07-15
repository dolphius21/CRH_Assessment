const navToggle = document.querySelector('.navbar-toggle');
const nav = document.querySelector('.nav');
const closeBtn = document.querySelector('.close-btn');
const darkOverlay = document.querySelector('.dark-overlay');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
  nav.classList.add('show');
  darkOverlay.classList.add('show-overlay');
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('show');
  darkOverlay.classList.remove('show-overlay');
});
