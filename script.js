"use strict";

const colorCuadro = document.querySelector(".cuadro");

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector(".btn").addEventListener("click", function (e) {
  colorCuadro.style.backgroundColor = randomColor();
  console.log(colorCuadro.style.backgroundColor);
  document.querySelector(
    ".color-btn"
  ).textContent = `Tu color es ${colorCuadro.style.backgroundColor}`;
  const ul = document.getElementById("lista-historial");
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(colorCuadro.style.backgroundColor));
  ul.appendChild(li);

  const birds = document.getElementById("lista-historial");
  const i = birds.childNodes.length;
  console.log(i);
  const elements = birds.getElementsByTagName('li');
  if (i > 6) birds.removeChild(elements[0]);
});


