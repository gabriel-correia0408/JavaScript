let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma variavel maluca ser var e let!

abc = 3 // não fazer essa pratica
console.log(global.abc)