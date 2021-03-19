// criando constantes que receberam dois valores númericos
// a prineira constante é atribuindo valor de forma direta
// enquanto a segunda constante é unsado o método number,
// que vai receber uma string '2.0', e vai enterder ela como um
// número.
const peso1 = 1.0
const peso2 =   Number('2.0')


// Chamando os valores para conferir se as constantes estão armezenando os valores como esperado
console.log(peso1,peso2)


// usnado usando o isInteger, método para vereficar se a constante é um número inteiro
console.log(Number.isInteger(peso1))


//usnado usando o isInteger, método para vereficar se a constante é um número inteiro
console.log(Number.isInteger(peso2))


// Criando duas constante que vão receber valores de duas avalições de exemplo
const avaliacao1 = 9.871
const avaliacao2 = 6.871

//criando duas constantes, que irão conter a lógica da soma para obtermos  a média dessas duas 
// avaliações, sendo a primeira constante somando o valor total das avaliações e seus respectivos
// pesos, e a segunda constante contendo , a primeira constante dividida, pela soma dos pesos das 
// avaliações, assim a constante media ira conter a média dessas duas avaliações
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)


// usando o método toFixed, para determinar o número de casas que quero receber após o ponto
console.log(media.toFixed(2))


// usando método tostring, passando assimo valor para biário
console.log(media.toString(2))


// usando o typeof, para imprimir o tipo que é minha variavél media, ou seja oque ela carrega
console.log(typeof media)