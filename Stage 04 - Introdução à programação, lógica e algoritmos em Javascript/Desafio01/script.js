let n1 = Number(prompt(`Digite o primeiro número:`))
let n2 = Number(prompt(`Digite o segundo número:`))

let sum = n1 + n2;
let sub = n1 - n2;
let mult = n1 * n2;
let div = n1 / n2;
let rest = n1 % n2;


alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${mult}`)
alert(`A divisão dos dois números é: ${div}`)

alert(`O resto da divisão dos dois números é: ${rest}`)

if(sum % 2 == 0) {
    alert(`A soma dos dois números é par: ${sum}`)
} else {
    alert(`A soma dos dois números é ímpar: ${sum}`)
}

if(n1 == n2){
    alert(`Os números inseridos são iguais.`)
} else {
    alert(`Os números inseridos são diferentes.`)
}



