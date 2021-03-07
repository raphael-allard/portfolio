const moveCableCar = () => {
  const cableCar = document.querySelector('.fa-tram');
  const leftValue = getComputedStyle(cableCar).left;
  console.log(leftValue);

  if (leftValue === "0px") {
    cableCar.style.left = "95%";
  } else {
    cableCar.style.left = '0px';
  }
};

window.setInterval(moveCableCar, 10000);

export { moveCableCar }
