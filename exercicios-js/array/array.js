console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana') // esse modo de criar arrays não é recomendado,a forma mais correta é criar arrays de forma literal
console.log(aprovados)
console.log(aprovados[0])// buscando o primeiro indice do array, porque o array é uma estrutura indexada e essa estrutura inicia em zero
console.log(aprovados[1]) // Carlos
console.log(aprovados[2]) // Ana
console.log(aprovados[3]) // undefined

aprovados[3] = 'Paulo' //  uma forma de adicionar/substituir dentro do array
aprovados.push('Abia') //  maneira mais correta de adicionar dentro de um array
console.log(aprovados.length)


// adicionando em um indice bem acima do ultimo que existe no array neste caso a diferença
// de indices é do indice 4 ao indice 9, os indices que ficam nesse intervalos são criados como
// undefined.
aprovados[9] = 'Rafael'
console.log(aprovados.length) // 10
console.log(aprovados[8] === undefined) // true

console.log(aprovados)

console.log(aprovados)
aprovados.sort() //  ordena os dados dentro do array
console.log(aprovados)

delete aprovados[2] // ele não deleta o indice, só retira o valor, o indice 2 passa a ter o valor undefined
console.log(aprovados[1])
console.log(aprovados[2])



aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2) // primeiro parametro é apartir de qual indice vai começar e o segundo parametro é quantos que vai retirar apartir do que foi passado no primeiro parametro
console.log(aprovados)


aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // agora adicionando
console.log(aprovados)