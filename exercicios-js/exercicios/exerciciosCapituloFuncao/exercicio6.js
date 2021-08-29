/*

Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.

*/

const jurosSimples = function(capitalInical, taxaDeJuros, tempoDeAplicacao) {
    let porcentagemJurosSimples = capitalInical * taxaDeJuros * tempoDeAplicacao
    let valorFinalInvestimento = capitalInical + porcentagemJurosSimples
    return valorFinalInvestimento
}

console.log(jurosSimples(500, 0.10, 12)) // colocando 0.10 para representar a porcentagem



const calculoJurosComposto = function(capitalInicail, taxaDeJuros, tempo) {
    let jurosComposto = (1 + taxaDeJuros) ** tempo
    console.log(jurosComposto)
    let montante = capitalInicail * jurosComposto
    return montante
    }

console.log(calculoJurosComposto(10000, 0.15, 10))