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
  const elements = birds.getElementsByTagName("li");
  if (i > 6) birds.removeChild(elements[0]);
});

document.getElementById("add-fav").addEventListener("click", function (e) {
  console.log(document.getElementById("lista-historial").lastChild.innerHTML);
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
});

/*   if (
    document.getElementById("lista-historial").lastChild.innerHTML ==
    document.getElementById("lista-historial").lastChild[-1].innerHTML
  ) {
    console.log("si es");
  }
  for (
    let i = 0;
    i < document.getElementById("lista-historial").children.length;
    i++
  ) {
    if (
      document.getElementById("lista-historial").lastChild.textContent == 
    );
  }
}); */
