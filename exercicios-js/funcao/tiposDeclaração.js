console.log(3, 4) // aqui funciona pois o interpretador do js, carrega previamente as funções "function declaration"
console.log(sub(3, 4)) // neste caso da erro pois o intepretador não carrega previamente funções "funtion expression"
console.log(mult(3, 4)) // neste caso da erro pois o intepretador não carrega previamente funções "named function expression"


// function declaration
function soma(x,y) {
    return x + y
}

// funtion expression
const sub = function (x, y) {
    return x + y
}


// named function expression -> melhor na hora de debugar obs: não é muito usada
const mult = function mult() {
    return x * y
}
