const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) { // função com outra função como parâmetro
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y) // função arrow sempre anonima


// objeto com função 
const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar() // chamando a função que está dentro de um objeto