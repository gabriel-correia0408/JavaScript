// Sempre usar let quando for alterar o valor da varíavel
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') // espaço em branco
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'') // sting vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar expressão...')
console.log(!!('' || null || 0 || ' '))

let nome = 'Gabriel'
console.log(nome || 'Desconhecido')


// Caso o valor dentro da varíavel nome2, não seja encontrado o js retornara o valor
// "desconhecido" que é o que foi passado, dentro da lógica após o ||.
let nome2 = ''
console.log(nome2 || 'Desconhecido')
