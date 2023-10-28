
const num = Math.round(Math.random() * 10);
let resp = Number(prompt('Adivinhe o número que estou pensando? Está entre 0 e 10.'));
let tent = 1;


while(resp !== num) {
    tent++;
    resp = Number(prompt('Erro! Tente novamente:'));
}

if(tent == 1) {
    alert(`Parabéns! O número que eu pensei foi ${num} e você adivinhou o número em ${tent} tentativa.`)
} else {
    alert(`Parabéns! O número que eu pensei foi ${num} e você adivinhou o número em ${tent} tentativas.`)
}
 

