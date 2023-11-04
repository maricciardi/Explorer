const frases = [
    `Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.`,
    `A vida trará coisas boas se tiveres paciência.`,
    `Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.`,
    `Não compense na ira o que lhe falta na razão.`,
    `Defeitos e virtudes são apenas dois lados da mesma moeda.`,
    `A maior de todas as torres começa no solo.`,
    `Não há que ser forte. Há que ser flexível.`,
    `Gente todo dia arruma os cabelos, por que não o coração?`,
    `A juventude não é uma época da vida, é um estado de espírito.`,
    `Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.`
]
const openCookie = document.querySelector("#biscoito")
const closeCookie = document.querySelector("button")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let frase = screen2.querySelector("#msg")
let randomNumber = Math.round(Math.random() * 10);

//Eventos
openCookie.addEventListener('click', handleClick)
closeCookie.addEventListener('click', handleResetClick)

//Funções
function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function handleClick() {
    toggleScreen()
    frase.innerText = frases[randomNumber]
}

function handleResetClick() {
    toggleScreen()
    randomNumber = Math.round(Math.random() * 10);
}





