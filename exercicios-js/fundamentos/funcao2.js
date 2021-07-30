// armazenando uma funcao em uma variavel/constante
// o nome dessa função que será colocada dentro da constante é uma função anonima
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2,3)


// armarzenando uma funcao arrow em uma variavel/constante
const soma = (a, b) => {
    return a + b
}

console.log(soma(2,3))

// retorno implicito
// em caso como da linha a baixo aonde não tem corpo da função quer dizer
// que a função ira executar uma única linha.
const subtracao = (a, b) => a - b
console.log(subtracao(2,3))


// fazendo com um unico parametro no caso o "a", em uma funcao arrow
const imprimir2 = a => console.log(a)
imprimir2("Imprimindo")