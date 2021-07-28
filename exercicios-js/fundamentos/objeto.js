// com as chames "{}" em js é uma forma de criar um objeto de forma literal, no caso mesmo deixando o
// o par de chaves vazios elas criam da mesma maneira um objeto, mas neste caso um obejeto vazio.
const prod1 = {}


// Nas linhas a baixo crio de forma dinamica dois atributos para o obejto "prod1", cada um desses
// atributos vai servir como um identificador como uma chave única para identificação dentro do objeto 'prod1'
// esses identificadores por sua vez recebem valores. Como no exemplo a baixo
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90

//com auxilio dos colchetes também pode ser criado chave valor como deixei a baixo
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaços


console.log(prod1)


// Na linha a baixo é uma segunda forma de criar nosso objeto com valore ou melhor com chaves valores
// basicamente esse segundo modo consiste em criar nossa constante "prod2" que recebe dois atributos de identificação
// isso já diretamente dentro das chaves
const prod2 = {
    nome:'Camisa Polo',
    preco: 79.90
}


// Neste terceiro exemplo podemos notar que cada nome de objeto é unico, a repetição a baixo nas linhas de códigos é por que
//cada objeto é unico dentro de outro. Assim como coloquei a baixo o obj está dentro da constante prod3, mas dentro desse
// primeiro obj, existe uma chave valor blabla, e também existe um obj que nele havera outra chave valor.
const prod3 = {
    nome:'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla:1,
        obj:{
            blabla: 2
        }
    }
}


console.log(prod3)