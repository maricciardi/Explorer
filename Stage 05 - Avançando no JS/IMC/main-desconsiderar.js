const form = document.querySelector("form")
const inputWeight = document.querySelector("#peso")
const inputHeight = document.querySelector("#altura")

/*
const modalWrapper = document.querySelector(".modal-wrapper")
const modalMessage = document.querySelector(".modal .title span")
const modalBtnClose = document.querySelector(".modal button.close")
*/

const modal = {
    wrapper: document.querySelector(".modal-wrapper"),
    message: document.querySelector(".modal .title span"),
    buttonClose: document.querySelector(".modal button.close"),

    open: function() {
        modal.wrapper.classList.add("open")
    },
    close() {modal.wrapper.classList.remove("open")}
}


form.onsubmit = function(event) {
    event.preventDefault()
    const weight = inputWeight.value
    const height = inputHeight.value

    const imc = (weight / ((height / 100) ** 2)).toFixed(2)
    const message = `Seu IMC é de ${imc}`

    modal.message.innerText = message
    //modalWrapper.classList.add("open")
    modal.open()
}


modal.buttonClose.onclick = () => //modalWrapper.classList.remove("open")
{
    modal.close()
}

