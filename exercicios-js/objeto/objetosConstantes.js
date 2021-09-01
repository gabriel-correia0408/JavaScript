// pessoa -> endereço de memório(123) -> {....}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro' // não foi mudada a referência da variavel e sim o valor dela
console.log(pessoa)


// pessoa -> 456 -> {....}
//pessoa = { nome: 'Ana' } // como pessoa é uma constante ela sempre irá apontar para o mesmo endereço de memória, sendo assim está linha dará erro


Object.freeze(pessoa) // nesta linha o objeto fica congelado, e ele não pode ser mais altera deletado ou adicionado algo a ele

pessoa.nome = 'Maria' // o nome continuara pedro, pois na linha anterior o objeto pessoa foi congelado
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)


// criando uma constante que não será mudada
const pessoaConstante = Object.freeze({ nome: 'Joaozinho'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)