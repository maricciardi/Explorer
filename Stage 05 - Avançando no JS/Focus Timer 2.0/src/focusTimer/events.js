import * as el from "./elements.js"
import * as timeractions from "./timeractions.js"
import * as togglemusic from './togglemusic.js'

export function registerControls() {
    el.controls.addEventListener('click', (event) => {
        //console.log(event.target) > onde meu mouse estiver clicando ele vai apresentar o target
        //console.log(event.target.dataset.action) > acesso ao action, propriedade definida no data- do html
        const action = event.target.dataset.action
        if (typeof timeractions[action] != "function") {
            return
        } //se o tipo não for uma função pode parar
        timeractions[action]() //senão pode executar > actions["toggleRunning"]() >> pegar no actions
    }) //fica observando os controles

    el.theme.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if (typeof togglemusic[action] != "function") {
            return
        }
        togglemusic[action]() 
    })
}