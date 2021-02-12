import { hello } from './hello';

hello();

//////////////////// NAVBAR FUNCTIONS: ////////////////////

// Open navbar menu on click:
// const displayNavbarMenuOnClick = () => {
//   const burgerMenu = document.querySelector('.navbar-menu i');
//   const navbarListBox = document.querySelector('.navbar-list-box');

//   burgerMenu.addEventListener('click', (event) => {
//     if (burgerMenu.classList.contains('burger-rotate-left')) {
//       burgerMenu.classList.remove('burger-rotate-left');
//       burgerMenu.classList.add('burger-rotate-right');
//       navbarListBox.classList.remove('active');
//     } else {
//       burgerMenu.classList.remove('burger-rotate-right');
//       burgerMenu.classList.add('burger-rotate-left');
//       navbarListBox.classList.add('active');
//     }
//   });
// };

// // Change the color of the navbar on scroll:
// const changeDesignNavbarOnScroll = () => {
//   const navbar = document.querySelector('nav');
//   const navbarHeight = navbar.offsetHeight;
//   const img = document.querySelector('.navbar-box img');
//   const navbarListItems = document.querySelectorAll('.navbar-list-box a');
  
//   window.addEventListener('scroll', (event) => {
//     const scrollPositionY = window.scrollY;
    
//     if (scrollPositionY >= navbarHeight - 10) {
//       navbar.classList.add('active');
//       img.src = 'images/allard-prod-white.png';
//       navbarListItems.forEach(item => item.classList.add('active'));
//     } else {
//       navbar.classList.remove('active');
//       img.src = 'images/allard-prod-black.png';
//       navbarListItems.forEach(item => item.classList.remove('active'));
//     }
//   });
// };

// displayNavbarMenuOnClick();
// changeDesignNavbarOnScroll();
