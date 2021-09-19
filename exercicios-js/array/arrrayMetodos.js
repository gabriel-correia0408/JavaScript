const pilotos = ['Vettel', 'Alonso', 'Raikkonrn', 'Massa']
pilotos.pop() // remove o ultimo elemento do array, que neste caso é o massa.
console.log(pilotos)


pilotos.push('Verstappen') // adiciona um no elemento que vai ocupar a ultma posição do array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona o primeiro elemento do array
console.log(pilotos)




// splice pode tanto adicionar quanto remover elementos dentro do array


// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
// primeiro prametro é qual posição e o segundo parametro é a quantidade de elementos quer que seja
// retirada daquela posição.
pilotos.splice(3, 1) // massa removido
console.log(pilotos)



const algunsPilotos = pilotos.slice(2) //novo array, será criado contendo os elementos do antigo array, 
// apartir da psição desejada que é passada dentro do slice, neste caso um novo array a partir 
// da posição 2 do antigo array.
console.log(algunsPilotos)


const algunsPilotos2 = pilotos.slice(1, 4) //  do indice 1 primeiro parametro até indice 4 segundo parametro, mas o 4 é dado como limite e não entra nesse pedaço "slice"
console.log(algunsPilotos2)