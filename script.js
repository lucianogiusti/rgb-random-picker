"use strict";

const colorCuadro = document.querySelector(".cuadro");

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

const listHistory = document.getElementById("lista-historial");
const favSelection = document.getElementById("favoritos");

document.querySelector(".btn").addEventListener("click", function (e) {
  colorCuadro.style.backgroundColor = randomColor();
  document.querySelector(
    ".color-btn"
  ).textContent = `Tu color es ${colorCuadro.style.backgroundColor}`;
  const ul = document.getElementById("lista-historial");
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(colorCuadro.style.backgroundColor));
  ul.appendChild(li);

  const birds = document.getElementById("lista-historial");
  const i = birds.childNodes.length;
  const elements = birds.getElementsByTagName("li");
  if (i > 6) birds.removeChild(elements[0]);

  const tags = [...document.querySelectorAll("#lista-historial > li")];
  tags.forEach((tag) => {
    tag.style.backgroundColor = tag.innerText;
    navigator.clipboard.writeText(tag.innerText);
  })
});

document.getElementById("add-fav").addEventListener("click", function (e) {
  const ul = document.getElementById("favoritos");
  const li = document.createElement("li");
  li.appendChild(
    document.createTextNode(
      document.getElementById("lista-historial").lastChild.innerHTML
    )
  );
  ul.appendChild(li);
  const favColor = document.getElementById("favoritos");
  const favColorLength = favColor.childNodes.length;
  const favItems = favColor.getElementsByTagName("li");

  const tags = [...document.querySelectorAll("#favoritos > li")];
  const texts = new Set(tags.map((x) => x.innerHTML));
  tags.forEach((tag) => {
    if (texts.has(tag.innerHTML)) {
      texts.delete(tag.innerHTML);
    } else {
      tag.remove();
    }

    if (
      document.getElementById("lista-historial").lastChild.innerHTML ==
      undefined
    )
      ul.removeChild(li);
  });

  tags.forEach((tag) => {
    tag.style.backgroundColor = tag.innerText;
    navigator.clipboard.writeText(tag.innerText);
  })
});
