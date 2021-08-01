// nas linhas de códigos a baixo mostra um pouco sobre a idéia de escopo
// aonde podemos entender como isso funciona na linguagem js, para sabermos 
// como declarar nossas variaveis de froma correta, dentro de escopo ou de forma global

{ 
    { 
        { 
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    } 
}

console.log(sera)


// Nas linhas a baixo, criei uma função de nome teste 
// dentro desta função eu crio uma variavel(var) de nome "local"
// e ainda dentro da função adiciono um console.log() e passo a variavel local
// como parametro para o console.log, e assim só confirmo que a variavel é acessivel
// dentro do escopo da função.
function teste() {
    var local = 123
    console.log(local)
}

teste()


// neste segundo console.log(), eu tento chamar  a variavel local
// que se encontra dentro da função teste, e confirmo que uma variavel criada
// dentro do escopo de uma função não podeser acessada, fora do escopo desta função diretamente
console.log(local)