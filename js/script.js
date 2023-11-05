const container = document.querySelector('.container');
const button = document.querySelector('.button');

function changeColor () {
    let color = Math.round(255.0 * Math.random());
    colorInHex = color.toString(16);
    return colorInHex
}

const randomColor = function () {
    red = changeColor();
    green = changeColor();
    blue = changeColor();
    col=red+green+blue;
    console.log(col);
    return col;
}


const changeRandomColor = function () {
    container.style.background = "#" + randomColor();
}

button.addEventListener("click", changeRandomColor);


