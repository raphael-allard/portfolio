const changeDesignNavbarOnScroll = () => {
  const navbar = document.querySelector('nav');
  const navbarHeight = navbar.offsetHeight;
  const img = document.querySelector('.navbar-box img');
  const navbarListItems = document.querySelectorAll('.navbar-list-box a');
  const navbarListItemsMDScreen = document.querySelectorAll('.navbar-list-box-md-screen h3');
  
  window.addEventListener('scroll', (event) => {
    const scrollPositionY = window.scrollY;
    
    if (scrollPositionY >= navbarHeight - 10) {
      navbar.classList.add('active');
      img.src = 'images/allard-prod-white.png';
      navbarListItems.forEach(item => item.classList.add('active'));
      navbarListItemsMDScreen.forEach(item => item.style.color = "white");
    } else {
      navbar.classList.remove('active');
      img.src = 'images/allard-prod-black.png';
      navbarListItems.forEach(item => item.classList.remove('active'));
      navbarListItemsMDScreen.forEach(item => item.style.color = "#1f1f1f");
    }
  });
};

export { changeDesignNavbarOnScroll }
