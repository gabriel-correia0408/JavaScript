// nas linhas abaixo de código podemos notar, mais uma vez que variaveis inicializadas
// com o valor de let, seus valores não saem do seu escopo de atuação.
// podemos notar isso ao rodar o código a baixo aonde após rodar o laço de repetição
// e tentar rodar o console.log que está fora do laço, estoura um erro este erro por sua vez
// é de i is not defined, ou seja que o console.log fora do laço, não encontra nenhuma variavel i

for (let i = 0; i < 10; i++){
    console.log(i)
}

console.log('i =', i)