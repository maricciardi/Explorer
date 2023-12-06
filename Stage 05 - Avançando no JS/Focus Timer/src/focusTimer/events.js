import { controls } from "./elements.js";
import * as actions from "./actions.js"
import * as el from './elements.js'
import { updateDisplay } from "./timer.js";
import state from "./state.js";


export function registerControls() {
    controls.addEventListener('click', (event) => {
        //console.log(event.target) > onde meu mouse estiver clicando ele vai apresentar o target
        //console.log(event.target.dataset.action) > acesso ao action, propriedade definida no data- do html
        const action = event.target.dataset.action
        if (typeof actions[action] != "function") {
            return
        } //se o tipo não for uma função pode parar
        actions[action]() //senão pode executar > actions["toggleRunning"]()
        //console.log(actions.toggleRunning()) > outra forma de executar

    }) //fica observando os controles
}

export function setMinutes() {
    el.minutes.addEventListener('focus', () => {
        el.minutes.textContent = "" //limpando o conteúdo de uma tag com evento de focus
    })
    
    el.minutes.onkeypress = (event) => /\d/.test(event.key) //apenas números serão aceitos 
    //o que aparece dentro de /.../ é uma expressão regular, exemplo de /expressãoregular/: /\d/
    //outro exemplo: /a/.test(event.key) > vai testar se a tecla que estou clicando é o a
    //a variável \d vai testar se a tecla que estou clicando é um número

    el.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent //pegando o texto dos minutos
        time = time > 60 ? 60 : time //se o time tiver maior que 60 deixo 60 mesmo

        state.minutes = time
        state.seconds = 0 //o segundo não vai ser editável

        updateDisplay()
        el.minutes.removeAttribute('contenteditable')
    })
}