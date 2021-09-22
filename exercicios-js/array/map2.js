const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json) // converte um texto para objeto
const apenasPreco = produto => produto.preco

const resultado =  carrinho.map(paraObjeto).map(apenasPreco) // pegando o método que transforma em objeto e depois pegando apenas o atributo preço do objeto com o segundo método
console.log(resultado)
