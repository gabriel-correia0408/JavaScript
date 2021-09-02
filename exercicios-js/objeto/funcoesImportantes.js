const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // com este metodo pega todas as chaves do objeto
console.log(Object.values(pessoa)) // com este metodo pega todos os valores do objeto
console.log(Object.entries(pessoa)) // trás um array tanto com os valore quanto as chaves


Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`) // chave e valor, e forEach faz percorrer
})

// a função defineProperty deixa definir inúmeras aceites do objeto
// como se vai ser lista, se poder ser escrito/ altera, e também definir o valor que vai receber o objeto.
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019',
    configurable: true
})  // definindo a propriedade de um objeto


// tentando sobrescrever o valor do objeto, porém dara errado pois nas linhas de código
// acima eu defini que ela não pode ser alterada.
pessoa.dataNascimento = '01/01/2017'

console.log(pessoa.dataNascimento, 'teste')
console.log(Object.keys(pessoa))


// Object.assing (ECMAScript 2015)

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4}
// o primeiro parâmetro ira receber os demais dentro dele, caso alguns dos outros objetos
// tenha um parametro igual ele ira sobrescrever o valor, e as chaves valor que não existirem
// no primeiro objeto, seram adicionados vindo dos outros.
const obj = Object.assign(dest, o1, o2)