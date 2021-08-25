const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao() // mesmo chamando aqui, ela vai carregar o contexto léxico aonde ela foi definida por este motivo quando executar a função exec vai printar global
}

exec()