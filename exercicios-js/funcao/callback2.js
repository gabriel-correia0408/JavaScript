// criando um array contendo notas
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// tirando todas as notas menores que 7 de dentro do array acima sem o callback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// criando para notas altas sem callback * a titulo de treino

let notasAltas = []
for (let i in notas) {
    if (notas[i] > 7) {
        notasAltas.push(notas[i])
    }
}

console.log(notasAltas)



// agora fazendo os mesmos códigos acimas, porém desta vez usando o callback
// usando a função filter, sendo que se cria um novo array neste caso "notasBaixas"
// que notas baixas irá se originar a partir do primeiro array, o "notas".
// o filter irá adicionar aquilo que for true, esse valor true vira da função callback
// passada para o filter, caso seja false, o filter não irá adicionar dentro do noco 
// array. O filter não altera o array original, só cria um novo apartir dele.

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
}) 

console.log('call back é muito bom', notasBaixas2)

// fazendo callback para notas altas
const notasAltas2 = notas.filter(function (nota) {
    return nota > 7
})

console.log('notas altas', notasAltas2)


// deixando menor ainda a função adicionando o arrow function
// lembrando que o filter retorna o elemento/valor contido em cada indice de
// um array.
const notasbaixas3 = notas.filter(nota => nota < 7)
console.log('notas baixas tres', notasbaixas3)

// agora usando função arrow para notas altas.
const notasAltas3  = notas.filter(nota => nota > 7)
console.log('notas altas 3', notasAltas3)

// agora usando função arrow para notas altas.
// agora usando com uma função que pode ser reutilizada em outras
// pastes do código, isso só ira adicionar mais uma linha de código
const notasMenorQue7 = nota => nota < 7
const notasbaixas4 = notas.filter(notasMenorQue7)
console.log('notas baixas 4', notasbaixas4)