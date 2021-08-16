/* 
OPERADORES RELACIONAIS
*/

console.log('01', '1' == 1) // Compara se os valores são iguais, e não tipo etc.
console.log('02', '1' === 1) // Compara se os dois são estritamente iguais valor e tipo etc.
console.log('03', '3' != 3) // Aqui o resultado será falso, pois o js só vai comparar os valores e os valores são iguais.
console.log('04', '3'!== 3) // // Aqui o resultado será verdadeiro porque compara se eles são istritamente diferentes vereficando valor e tipo.

console.log('05', 3 < 2)
console.log('06', 3 > 2)
console.log('07', 3 <= 2)
console.log('08', 3 >= 2)



const d1 = new Date(0)
const d2 = new Date(0)
console.log('09', d1 === d2) // o estritamente igual neste caso fica como falso pois o endereço de memória é diferente.
console.log('10', d1 == d2) // o igual neste caso fica como falso pois o endereço de memória é diferente.

console,log('11', d1.getTime() === d2.getTime()) // neste caso vai ser verdadeiro pois com o get time a comparação é do resultado ou seja um number.
console,log('12', d1.getTime() == d2.getTime()) // neste caso vai ser verdadeiro pois com o get time a comparação é do resultado ou seja um number.

console.log('13', undefined == null)
console.log('14', undefined === null)