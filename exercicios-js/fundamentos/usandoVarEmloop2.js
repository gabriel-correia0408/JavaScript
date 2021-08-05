// nasw linhas a baixos podemos notar que o js, usando uma variavel var em uma estrutura de repetição
// pode causar erros como no exemplo a baixo aonde tentamos adiconar um valor para o array funcs, a cada
// vez que o laço se repetir, mas pelo conrtrario como variaveis var são globais ou seja sem escopo neste caso
// o js, pega o valor que faz o laço quebrar que seria o 10, deixei umas chamadas dos valores do array e de indicies
// diferentes, mas mesmo assim imprimim sempre 10.
const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[3]()
funcs[4]()
funcs[5]()