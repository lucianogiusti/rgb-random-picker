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
  const results = [];
  results.push(colorCuadro.style.backgroundColor);
  console.log(results);
  const ul = document.getElementById("lista-historial");
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(results));
  ul.appendChild(li);
});

/* Removing list items from history */
