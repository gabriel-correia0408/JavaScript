const pai = {nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai) // criando um objeto novo tendo como prototipo o objeto pai que foi passado como parametro dentro da função create
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writeble: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla' // não é alterado para carla pois o writeble está como false.
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

// atributos dentro dos Objetos
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))


// imprimindo todos os atributos dos objetos e os que receberam por herença
// para saber se pertence ao objeto ou é pela cadeia de protótipos a herença
for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(`Pertence ao Própio Objeto filha2: ${key}`) : console.log(`Por herença: ${key}`)
}