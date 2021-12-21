const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');


btn.addEventListener('click', () => {
    hexCode = '#';
    for(var i = 0;i < 6;i++) {
        var randomNumber = getRandomNumbers();
        hexCode += hex[randomNumber];
    }
    document.body.style.backgroundColor = hexCode;
    color.textContent = hexCode;
})

function getRandomNumbers() {
    return Math.floor(Math.random() * hex.length)
}
