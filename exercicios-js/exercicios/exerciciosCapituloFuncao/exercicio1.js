/* 

01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.

*/

// function literal
function calculos(num1, num2){
    return console.log(
        ` Adição = ${num1 + num2}\n`, 
        `Subtração = ${num1 - num2}\n`,
        `Multiplicação = ${num1 * num2}\n`,
        `divisão = ${num1 / num2}`,
        )

}

calculos(10, 5)


// fucntion anonima

const calcular = function(num1, num2) {
    return console.log(
        ` Adição = ${num1 + num2}\n`, 
        `Subtração = ${num1 - num2}\n`,
        `Multiplicação = ${num1 * num2}\n`,
        `divisão = ${num1 / num2}`,
        )
}

calcular(20, 10)