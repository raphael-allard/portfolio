const displayCarouselOnClick = () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    const plusIcon = card.querySelector('.fa-camera-retro');
    const projectDescriptionHover = card.querySelector('.card-hover-div');
    const projectCarousel = card.querySelector('.carousel');

    plusIcon.addEventListener('click', (event) => {
      projectDescriptionHover.classList.add('d-none');
      projectCarousel.classList.remove('d-none');
      card.classList.add('border-0');
      
      card.addEventListener('mouseleave', (event) => {
        projectDescriptionHover.classList.remove('d-none');
        projectCarousel.classList.add('d-none');
        card.classList.remove('border-0');
      })
    });
  });
};

export { displayCarouselOnClick }
