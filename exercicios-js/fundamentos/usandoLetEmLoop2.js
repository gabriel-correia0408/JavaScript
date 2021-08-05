const funcs = []


// nas linhas a baixo de código podemos notar que quando usamos a palavra reservada let para declararmos 
// uma variavel essa vai em uma estrutura de repetição tem o seu ultimo valor que a estrutura deu para ela 
// salva, como no exemplo a baixo aonde que a cada repetição o i vai ganhando um número novo de 0 a 9
// e como no código a baixo a cada repetição adiciona dentro do array um indice com o atual valor de i, se i 
// passar 5 veses no laço de repetição, o indice 5 da funs será de 5, pois naquele momento era o valor que a
// a variavel i continha
for (let i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[3]()
funcs[8]()