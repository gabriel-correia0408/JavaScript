// função factory

function criarProduto(nomeProduto, precoProduto, desconto = '10%') {
    return {
        nomeProduto: nomeProduto,
        precoProduto: precoProduto,
        desconto: desconto
    }
}

console.log(criarProduto('meia', 200))
console.log(criarProduto('carro', 50.678))


// função produto versão professor

function criarProduto1(nome, preco) {
    return {
        nome, //  sem os dois pontos e valor pois quero que o valor seja oque está vindo diretamente do parâmetro
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto1('meiaProfessor', 300.59 ))
console.log(criarProduto1('CarroProfessor', 70.789))
