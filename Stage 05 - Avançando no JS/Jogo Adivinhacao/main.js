const button = document.querySelector("#button")
const buttonReset = document.querySelector("#buttonReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const h2 = screen2.querySelector("h2")
let randomNumber = Math.round(Math.random() * 10);
let attempts = 1;

//Eventos
button.addEventListener('click', handleClick)
buttonReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', Enter)

//Funções
function Enter(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}

function handleClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector('#resp')

    if((Number(inputNumber.value)) < 1 || (Number(inputNumber.value)) > 9) {
        alert('Número inválido! Tente novamente.')
    } else if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        h2.innerText = `Acertou em ${attempts} tentativas!`
    } else if(Number(inputNumber.value) >= 1 || Number(inputNumber.value) <= 9) {
        attempts ++
    }
    inputNumber.value = ""
}

function handleResetClick() {
    toggleScreen()
    attempts = 1
    randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}




