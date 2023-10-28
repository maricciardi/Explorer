let response;
let list = [];

while(response !== 3) {
    response = Number(prompt(`
    Olá usuário! Digite o número da opção desejada: 
    
    1. Cadastrar um item na lista 
    2. Mostrar itens cadastrados 
    3. Sair do programa`
    ));

    switch(response) {
        case 1:
            let item = prompt('Qual item deseja cadastrar? ')
            list.push(item)
            alert('Item cadastrado com sucesso.')
            break;
        case 2:
            if(list.length == 0){
                alert('Não existem itens cadastrados.')
            } else {
                alert(list)
            }
            break;
        case 3:
            alert('Aplicação encerrada.')
            break;
        default:
            alert('Resposta inválida, por favor, tente novamente.')
    }
}





