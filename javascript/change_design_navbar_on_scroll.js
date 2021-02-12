const changeDesignNavbarOnScroll = () => {
  const navbar = document.querySelector('nav');
  const navbarHeight = navbar.offsetHeight;
  const img = document.querySelector('.navbar-box img');
  const navbarListItems = document.querySelectorAll('.navbar-list-box a');
  
  window.addEventListener('scroll', (event) => {
    const scrollPositionY = window.scrollY;
    
    if (scrollPositionY >= navbarHeight - 10) {
      navbar.classList.add('active');
      img.src = 'images/allard-prod-white.png';
      navbarListItems.forEach(item => item.classList.add('active'));
    } else {
      navbar.classList.remove('active');
      img.src = 'images/allard-prod-black.png';
      navbarListItems.forEach(item => item.classList.remove('active'));
    }
  });
};

export { changeDesignNavbarOnScroll }
