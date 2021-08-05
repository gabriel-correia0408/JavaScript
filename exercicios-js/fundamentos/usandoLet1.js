// nas linhas abaixo podemos entender como o js, faz leitura das variaveis LET, que
// funcionam no escopo de bloco, em quanto as var atuam em escopo global ou de função

let numero  = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)