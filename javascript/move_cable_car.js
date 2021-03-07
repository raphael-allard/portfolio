const moveCableCar = () => {
  const cableCar = document.querySelector('.fa-tram');
  const leftValue = getComputedStyle(cableCar).left;

  if (leftValue === "0px") {
    cableCar.style.left = "94%";
  } else {
    cableCar.style.left = '0px';
  }
};

window.setInterval(moveCableCar, 10000);

export { moveCableCar }
