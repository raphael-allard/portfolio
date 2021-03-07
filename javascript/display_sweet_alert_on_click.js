const displaySweetAlertOnClick = () => {
  const envelopeIcon = document.querySelector('.contact-link-box .fa-envelope');
  
  envelopeIcon.addEventListener('click', (event) => {
    navigator.clipboard.writeText('raphael.s.allard@gmail.com');

    Swal.fire({
      icon: 'success',
      title: 'Email copied!',
      showConfirmButton: false,
      timer: 1750
    })
  });
};

export { displaySweetAlertOnClick }
