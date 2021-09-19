const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach( function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
}) // passando função callback



// exempleo dois
aprovados.forEach( nome => console.log(nome))


const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)


