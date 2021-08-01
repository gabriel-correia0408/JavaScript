
// Nas linhas a baixos de código eu primeiramente defino uma variavel de nome numero
// e atribuo a ela o valor int de 1, logo em seguida crio um bloco/escopo e crio novamente
// uma variavel de nome numero e desta vez passso para está variavel o valor de 2
// e passo dentro do escopo da variavel com valor de 2 um console.log('Dentro)
// na sequencia agora fora  do escopo passo um console.log('Fora')
// Após isso só confirmamos ou melhor observamos que em js, qualquer variavel 
// criada com 'VAR', que não esteja dentro de um escopo de uma função, está
// mesmo estando estre chaves '{}' em escopo passam para o escopo/ambito global de variaveis 
// acessiveis, podendo serem sobscritas, oque nos trás um grande ponto de atenção 
// nesse quesito da linguagem.



// criando variavel
var numero = 1


// bloco/escopo 
{
    var numero = 2
    console.log('Dentro', numero)
}


// console.log, fora do escopo
console.log('Fora', numero)