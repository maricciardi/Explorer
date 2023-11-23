import {modal} from './modal.js'
import {alertError} from './alert-error.js'
import {notNumber, calculateIMC} from './utils.js'


const form = document.querySelector("form")
const inputWeight = document.querySelector("#peso")
const inputHeight = document.querySelector("#altura")


form.onsubmit = event => {
    event.preventDefault()
    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notNumber(weight) || notNumber(height)

    if(showAlertError) {
        alertError.open()
        return; //não vai calcular imc, função para aqui
    }

    alertError.close()

    const imc = calculateIMC(weight, height)
    displayResultMessage(imc)
}

function displayResultMessage(imc) {
    const message = `Seu IMC é de ${imc}`

    modal.message.innerText = message
    modal.open()
}

inputWeight.oninput = () => alertError.close() //o evento oninput é utilizado quando altera o input
inputHeight.oninput = () => alertError.close()
