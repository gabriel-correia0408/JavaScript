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


// Em algumas linguagens como python, a string "Show!", como a da linha a baixo iria retornar 2 veses
// a string, mas no JavaScript não, pois o js não irá multiplicar uma string por número, caso seja parecido 
// o exemplo da linha a baixo
console.log("Show!" * 2)


// Outro ponto para se dar uma determinada atenão e em cima dos pontos flutuantes, na linha a baixo iria retornar 2 veses
// olhando de fora diriamos que resultado da linha a baixo seria de 0.8, porém o js retorna 0.7999999999999999 ele faz
// sua somataria se aproxiamando o mais perto possivel do ponto flutuando, seguindo padrões que fazem parte da linguagem
console.log(0.1 + 0.7)


console.log('3'+2) // A string ganha! pois o operador faz sentido em contatenação de string.


// Console.log(10.toString()) -> não consegue chamar de forma literal


// Mas consegue chamar passando dentro de parentseso número e usando o método, sem necessidade de salvar
// em uma variavél ou fazer tipagem de number
console.log((10.345).toFixed(2)) 