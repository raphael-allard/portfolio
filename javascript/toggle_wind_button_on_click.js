const toggleWindButtonOnClick = () => {
  const windButtons = document.querySelectorAll('.wind-buttons');
  const firstWindButton = document.querySelector('#first-wind-button');
  const secondWindButton = document.querySelector('#second-wind-button');
  const audioFile = document.querySelector('audio');

  windButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      if (button.innerText === "Wind: OFF") {
        firstWindButton.innerText = "Wind: ON";
        secondWindButton.innerText = "Wind: ON";
        audioFile.play();
      } else {
        firstWindButton.innerText = "Wind: OFF";
        secondWindButton.innerText = "Wind: OFF";
        audioFile.pause();
      }
    });
  });
};

export { toggleWindButtonOnClick }
