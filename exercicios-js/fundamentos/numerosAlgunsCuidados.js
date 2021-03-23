// As linhas a baixo contém alguns cuidados que devemos ter ao trabalhar com números no JavaScript
// por exemplo na linha a baixo ao tentarmos dividir um número inteiro por zero, o resultado retornado por
// no terminal é de "infinity", isso porque quando colocado por exemplo  0.8, ele ira tentar chegar o mais perto possivell
// do zero assim nos retornando um número gigante, mas quando colocado o própio zero ele retorna infinity ou seja infinito
console.log(7 / 0)


// No java escript ele entende um número inteiro caso ele esteja dentro das aspas, e como na linha a baixo
// ele irá dividir, caso o número dentro das aspas contenha por exemplo 10.5, o JavaScript ira entender como 
// número e irá fazer a divisão, porém caso dentro das aspas estivesse 10,5, com uma virgula ao invés de ponto
// o javascript não consiguiria entender como número, e retornaria NaN
console.log("10" / 2)


// Em 
console.log("Show!" * 2)
console.log(0.1 + 0.7)
// Console.log(10.toString())
console.log((10.345).toFixed(2))