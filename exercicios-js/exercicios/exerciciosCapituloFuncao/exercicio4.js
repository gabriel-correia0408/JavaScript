/*

Crie uma função que irá receber dois valores, 
o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.

*/


const divisaoEResto = function(dividendo, divisor) {
    let divisao = dividendo / divisor
    let restoDivisao = dividendo % divisor
    let resultado = 
    ` A divisão é igual a = ${divisao}\n e o resto da divisão é igual a = ${restoDivisao}`
    return resultado 
    
}


console.log(divisaoEResto(10, 5))