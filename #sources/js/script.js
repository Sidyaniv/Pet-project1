const container = document.querySelector('.container');
const button = document.querySelector('.button');
console.log(30);
const changeRandomColor = function () {
    container.classList.add('bg-color');
    console.log(20);
}
button.addEventListener("click", changeRandomColor)

// export * from "script.js"