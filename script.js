const colorCuadro = document.querySelector('.cuadro');

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;

document.querySelector('.btn').addEventListener('click', function(e) {
    colorCuadro.style.backgroundColor = randomColor();
    console.log(colorCuadro.style.backgroundColor);
    document.querySelector('.color-btn').textContent = `Tu color es ${colorCuadro.style.backgroundColor}`;
});
