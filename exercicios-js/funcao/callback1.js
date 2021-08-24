const fabricantes = ["Mercedez", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}
/*
o forEach vai percorrer o array e devolver dois parametros 
primeiro nome e depois indice,
e esses dois parametros serão usados na função imprimir
*/
fabricantes.forEach(imprimir)

//  neste caso só confirmando que o primeiro valor que o foreach devolve é o 
//  nome ou melhor o valor contido/elemento dentro do indice.
fabricantes.forEach(function(fabricante){ 
    console.log(fabricante)
})

// neste segundo exemplo, mostrando e confirmando que o segundo parametro que o segundo
// parametro de uma função recebe do foreach o número do indice que como array se inicia
// em zero
fabricantes.forEach(function(fabricante, indice){
    console.log(indice)
})

// tranforma em exemplos com função arrow
// dentro do forEach o "fabricantes é o parâmetro" e após "=>" que é o sinal que indica
// indica que é uma função vem o que vai ser executa e retornado,que neste caso é o
// console.log() 
fabricantes.forEach(fabricante => console.log('teste arrow', fabricante))