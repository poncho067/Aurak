const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
})

document.querySelectorAll('.navbar__links').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);

      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
      });
  });
});

document.querySelectorAll('.navbar__links').forEach(link => {
  link.addEventListener('click', function() {
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu.classList.contains('is-active')) {
          mobileMenu.classList.remove('is-active');
          // Hide the navbar menu
          const navbarMenu = document.querySelector('.navbar__menu');
          navbarMenu.classList.remove('active');
      }
  });
});