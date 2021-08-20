// função em js é first-Class Object (Citizens)
// Higher-order functions

// criar de forma literal
function fun1(){}

// Armazenar em uma variavel
const fun2 = function () {}

// Armazenar em um array
const array = [function(a, b){return a + b}, fun1, fun2]
console.log(array[0](2,3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

// como passar uma função como parâmetro dentro de outra função
function run(fun){
    fun() // sempre colocar paranteses para invocar função
}

run(function(){console.log('Executando....')})



// Uma função pode retornar/conter uma função
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}


//primeira forma de executara função
soma(2,3)(4)

//segunda forma de executar a função
const cincoMais = soma(2, 3)
cincoMais(4)