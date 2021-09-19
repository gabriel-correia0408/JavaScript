// o this se torna o array, uma vez que a function foi riado dentro do protoype
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}


const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2( function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
}) // passando função callback