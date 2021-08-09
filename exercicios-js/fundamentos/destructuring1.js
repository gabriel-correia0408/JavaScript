// recurso do ES2015


// criando objeto pessoa para poder usar
// o operador destructuring
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// as chaves abertar logo após a palavra reservada
// const, servem para representar o operador destructuring
// quando passado dois valores dentro das chaves com a sintae a baixo
// no caso usando o destructring e fazendo receber o objeto, neste caso pessoa
// apartir desta linha será criada duas variaveis que estaram a nosso alcance
// mas essas duas variaveis só seram criadas e terem valor,caso dentro do objeto pessoa
// tenha nome/chave  com os mesmos nomes que foram passados dentro das chaves na
// hora de usar o destructuring
const {nome, idade} = pessoa
console.log(nome, idade)

// nas linhas a baixo ainda faço o uso do destructuring, mas desta vez
// de uma forma que eu possa escolher um novo nome para minhas variavéis
// ao passar dentro das chaves os nomes que existem dentro da estrutura do
// objeto como "nome", e logo após colocar um valor ou como no caso a baixo 
// n, o valor contido dentro do valor nome da estrutura pessoa, apartir dessa
// linha aonde foi colocado passara a ser uma variavel que é n mas que contém 
// o valor do nome da estrutura do objeto pessoa, e isso também vale para a 
// a segunda varivel idade, que foi setada com um novo nome dentro do destructuring
const {nome: n, idade: i} = pessoa
console.log(n, i)


// nas linhas a baixo podemos constatar oque acontece quando, tantamos tirara da estrutura
// de um objeto algum nome/chave que não existe dentro dessa estrutura na primeira variavel
// a sobrenome como nas linhas a baixo, irá retornar undefined, porque essa variavel não foi
// criada em nenhum momento e por isso o js nos devolve undefined, já a segunda variavel a 
// bemHuorada como foi setado um valor padrão, ela irá retornar esse valor padrão, que no caso
// é true. Isso nos da uma boa base de como usar o destruturing e não quebrar códigos, aonde para
// as variaveis dentro das chaves de destructuring, passamos algum valor padrão, como por exemplo
// true, false, null.
const {sobrenome, bemHumorada=true} = pessoa
console.log(sobrenome, bemHumorada)


// nas linhas a baixo podesse notar que com o destructuring, podemos retirar valores de dentro
// da estrutura de um objeto mesmo que esteja em um escopo mais profundo do objeto, assim como 
// colocado a baixo aonde vamos acessar os valores de logradouro e numero que estão dentro de 
// endereco, que por sua vez está dentro do objeto pessoa.
const { endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

// nas linhas a baixo podemos notar que o console de js, irá nos retornar um erro
// este erro acontece quando , tentamos desistruturar/retirar valores aninhados de um objeto 
// mas esses valores aninhados não existem. o erro que estoura é que as variaveis ou são undefined ou null
const { conta: {ag, num}} = pessoa
console.log(ag, num)
