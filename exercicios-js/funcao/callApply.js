function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto) }`;
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}



global.preco = 20
global.desc = 0.1
console.log(getPreco())
// chamando a função  a partir de um objeto
console.log(produto.getPreco())



const carro = { preco: 49990, desc: 0.20}
// call
console.log(getPreco.call(carro))
// applay
console.log(getPreco.apply(carro))

// call -> dentro do call o primeiro parametro é o contexto de execução, os outros é oque ele vai 
// passar para a função que está sendo chamada pelo
console.log(getPreco.call(carro, 0.17, '$'))

// applay ->  passe um array, após o primeiro parametro que da o contexto, os valore do
// array, serão oque vai preencher os valores dos paremetros da função que está sendo 
// chamado pelo applay
console.log(getPreco.apply(carro, [0.17, '$']))