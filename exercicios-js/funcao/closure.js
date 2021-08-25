// closure é o escopo criado quando a função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas a função

// Contexto léxico em ação!

const x = 'Global'


function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

// minhaFuncao vai carregar o valor da função fora, que é outra função
// que neste caso é função "dentro" que está dentro da função fora
const minhaFuncao = fora()

// Aqui retorna o valor da variavel x "Local", pois o valor contido em minhaFuncao é
// a função "dentro", que está dentro da função fora, e dentro da função fora está a 
// a variavel x, ou seja seguindo o principio de escopo, a função dentro encontra a variavel
// x que contem o valor de "local", e não a x que contém "global"
console.log(minhaFuncao())