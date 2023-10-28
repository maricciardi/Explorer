let name = prompt('Olá, qual o seu nome?')
let n1 = Number(prompt('Qual foi a sua primeira nota?'))
let n2 = Number(prompt('Qual foi a sua segunda nota?'))
let n3 = Number(prompt('Qual foi a sua terceira nota?'))

let result = (n1 + n2 + n3) / 3
let average = result.toFixed(2).replace(".", ",")

if(result >= 6){
    alert(`Parabéns ${name}! Você passou no bimestre com uma média de ${average}.`)
} else {
    alert(`Sinto muito ${name}, você não passou no bimestre... continue estudando! Sua média foi de ${average}.`)
}