//////////////////// NAVBAR FUNCTIONS: ////////////////////

// Open navbar menu on click:
const displayNavbarMenuOnClick = () => {
  const burgerMenu = document.querySelector('.navbar-menu i');
  const navbarListBox = document.querySelector('.navbar-list-box');

  burgerMenu.addEventListener('click', (event) => {
    if (burgerMenu.classList.contains('burger-rotate-left')) {
      burgerMenu.classList.remove('burger-rotate-left');
      burgerMenu.classList.add('burger-rotate-right');
      navbarListBox.classList.remove('active');
    } else {
      burgerMenu.classList.remove('burger-rotate-right');
      burgerMenu.classList.add('burger-rotate-left');
      navbarListBox.classList.add('active');
    }
  });
};

// Change the color of the navbar on scroll:
const changeDesignNavbarOnScroll = () => {
  const navbar = document.querySelector('nav');
  // const h1PositionY = document.querySelector('h1').getBoundingClientRect().top;
  const navbarHeight = navbar.offsetHeight;
  const scrollPositionY = window.scrollY;
  
  window.addEventListener('scroll', (event) => {
    // console.log(navbar.offsetHeight);
    if (scrollPositionY > navbarHeight) {
      console.log('hello');
    }
    
  });
};


 
displayNavbarMenuOnClick();
changeDesignNavbarOnScroll();
