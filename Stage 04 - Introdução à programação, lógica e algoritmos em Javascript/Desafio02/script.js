let students = [
    {
        name: 'mariana',
        n1: 10,
        n2: 8
    },
    {
        name: 'roberto',
        n1: 5,
        n2: 6
    },
    {
        name: 'julia',
        n1: 5,
        n2: 9
    }
]

let media = (n1, n2) => {
    return ((n1 + n2) / 2).toFixed(2)
}

for(let student of students){
    if(media(student.n1, student.n2) >= 7){
        alert(`A média do(a) aluno(a) ${student.name} é: ${media(student.n1, student.n2)}
        Parabéns ${student.name}! Você foi aprovado(a)!`)
    } else {
        alert(`A média do(a) aluno(a) ${student.name} é: ${media(student.n1, student.n2)}
        Não foi dessa vez, ${student.name}! Tente novamente!`)
    }
}



