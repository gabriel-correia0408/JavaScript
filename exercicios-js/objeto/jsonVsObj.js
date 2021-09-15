// criando um objeto
const obj = {a: 1, b: 2, c: 3, soma() { return a + b + c}}


// convertendo Objeto em JSON
console.log(JSON.stringify(obj)) // {"a":1,"b":2,"c":3}


// convertendo um json em um objeto
//console.log(JSON.parse("{ a: 1, b: 2, c: 3}")) -> da erro o parse não interpreta
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}")) -> ERRO js não interpreta pois todo tributo deve ter aspas duplas e não simples isso para o nome dos atributo
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}')) // RESULTADO ->{ a: 1, b: 2, c: 3 }, deu CERTO pois a notação forma de escrever esta correta

// para valores dos atributos, maneira diferentes de escrever para converser um json para objetos
// deixando a baixo exemplos

console.log(JSON.parse('{ "a": 1.7, "b": "string","c": true, "d": {}, "e": [] }'))