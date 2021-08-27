/* 

Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).

*/


const calcularTipoTriangulo = function(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado1 == lado3) {
        return console.log('O triângulo é quilatero')
    } else if (lado1 != lado2 && lado1 == lado3 || lado1 != lado3 && lado1 == lado2 || 
        lado2 != lado1 && lado2 == lado3 || lado2 != lado3 && lado2 == lado1 ||
        lado3 != lado1 && lado3 == lado2 || lado3 != lado2 && lado3 == lado1   ) {
            return console.log('O triângulo é isoceles')
    } else{
        return console.log('O triângulo é escalo, pois os três lados são diferentes')
    }

}

calcularTipoTriangulo(ladao1 = 10, lado2 = 10, lado3 = 10)
calcularTipoTriangulo(lado1 = 10, lado2 = 10, lado3 = 20 )
calcularTipoTriangulo(lado1 = 10, lado2 = 20, lado3 = 30 )