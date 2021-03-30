// Criando uma variavél constante, que irá receber uma string
const nome =  'Rebeca'


// criando uma variavél constante que irá carregar, uma contatenação de uma forma mais simples
const contatenacao = 'Olá '  + nome  + '!'

// criando uma variávl constante, que irá que irá carregar uma contaneção fazendo uso de templete string
// este por sua vez, é acionado com o sinal de crase, quando iniciado o valor que a varivél vai carregar
// sendo que há uma sintaxe que deve ser usada no caso de chamar outra variável, como ex; ${variável}
const template = `
Olá
${nome}!`


// imprimindo para fazer comparações,e fazer observações dos resultados, obtidos
console.log(contatenacao, template)

// expressoes........
console.log(`1 + 1 = ${1 + 1}`)

// Demonstraçao de que o template string, suporta expressões, como no exemplo abaixo
// aonde a variavél up, irá carregar um método, que transforma strings, para string em
// caixa alta. 
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)