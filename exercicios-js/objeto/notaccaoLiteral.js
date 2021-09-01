const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c } // escolhendo um novo nome para parametro
const obj2 = { a, b, c} // mantendo o nome que foi criado como variavel, para ser o mesmo como parametro
console.log(obj1, obj2) // os dois tem o mesmo valor 

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}  // objeto
obj3[nomeAttr] = valorAttr // 7.87
console.log(obj3) // { nota: 7.87 }


// versão nova para atribuir
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4) // { nota: 7.87 }


// definindo função dentro de um onjeto literal, na forma antiga e nova
const obj5 = {
    funcao1: function() {
        // .....
    },
    // nova maneira de definir a função
    funcao2(){
        // .....
    }
}

console.log(obj5)