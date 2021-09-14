// Object.preventExtensions ->
// este modo não permite adicionar novas chaves e valores, ou novos atributos a um objeto
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))
// mostrando que os objetos já existentes podem ser modificados, 
// e que não podem ser adicionados novos atributos/ objetos ao objeto.
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal -> Selar, Você não consegue exluir ou adicionar atributos/Objetos  ao objeto
// mas você consegue alterar os já existentes.

const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa)) // true

// sem efeito, pois o objeto está selado 
pessoa.sobrenome = 'Silva'
delete pessoa.nome

// alterando pois já existia no objeto selado
pessoa.idade = 29
console.log(pessoa) // 29

// Object.freeze = selado + valores constantes