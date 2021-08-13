//criando uma variavel que vai receber o primeiro elemento o array que neste caso é o dez
const [a] = [10]

console.log(a)

// na linha a baixo podemos notadar, que podemos pular valores, como por exemplo dentro da variavel da const
// foi pulado o segundo valor que deveria ser o n2
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)



const [,[, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

