// funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3) // 5
imprimirSoma(2) // NaN
imprimirSoma(2,10,4,5,6,7,8,9) // 12 , a linguagem ignora os outros parâmetros



// funcao com retornou
// atributo com valor padrão
function soma(a, b = 1){
    return a + b
}

console.log(soma(2,3))

console.log(soma(2))

console.log(soma())