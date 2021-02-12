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

export { displayNavbarMenuOnClick }
