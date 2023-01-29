// toggle class sidebar
const navbarNav = document.querySelector('.navbar-nav');

// event ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
   navbarNav.classList.toggle('active');
};

// sidebar hilang diklik di luar
const hamburgerMenu = document.querySelector('#hamburger-menu');

document.addEventListener('click', (event) => {
   if (!hamburgerMenu.contains(event.target) && !navbarNav.contains(event.target)) {
      navbarNav.classList.remove('active');
   }
});
