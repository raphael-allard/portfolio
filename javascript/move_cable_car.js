const moveCableCar = () => {
  const cableCar = document.querySelector('.fa-tram');
  const leftValue = getComputedStyle(cableCar).left;

  if (leftValue === "5px") {
    cableCar.style.left = "95%";
  } else {
    cableCar.style.left = '5px';
  }
};

window.setInterval(moveCableCar, 10000);

export { moveCableCar }
