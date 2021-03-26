// criando uma constante que vai carregar, o valor de uma string sendo "Cod3r"
const escola = "Cod3r"

// Usando o método charAt, e passando para esse método o indice 4
// estou pedindo que seja  chamado/printado o caracter de indice 
// 4 da string "Cod3er", que está contida na constante escola
console.log(escola.charAt(4))

// Ao chamar um indice que estrapola o número de caracter que a constante carrega
// ao contrário de outras linguagens o javaScript, não trás um erro no console ou mesmo um NULL
// Alinguagem simplesmente trás um valor em branco printado no terminal.
console.log(escola.charAt(5))

// Ao usar o método  charCodeAt, e passando, um indice para seu argumento,
// o método nos retorna o valor da caracter dentro da tabela Ask ou tabela unicode para
// neste caso ele nos retorna 51.
console.log(escola.charCodeAt(3))


// Podemos buscar, também o valor de indice de um elemento, usando o método indexOf
// por exemplo passando o r, de argumento do método, ele irá nos retornar 4, pois o
// r está contido dentro do index 4.
console.log(escola.indexOf('r'))


// Usando o método substring, e passando para seu argumento, por exemplo o valor de um elemento
// ele irá trazer/retornar, os valores contido no indice um até o ultimo valor que a constante
// contenha.
console.log(escola.substring(1))

// E uasndo o mesmo método anterior porém deta vez, passando dois parâmetros para ele
// sendo que o valor do primeiro parâmetro seria aonde vai começar, e o segundo aonde vai
// parar, ou seja passando 0,2, o resultado será "Co", pois inicio em no indice zero, e nos
// retornou até onde pedimos para parar, no caso o indice 2, sendo que o valor do indice 2
// não é retornad, finalizando passando esses dois parametros, os valores que retornam são do
// indice 0, 1
console.log(escola.substring(0, 2))


// Ao contrário do tipo,number posso trazer uma cosntante que contém string, diretamente
// e usando o concat, posso contatenar valores que eu desejo, ao valor já existen dentro da
// constante
console.log('Escola '.concat(escola).concat("!"))

// Usando o método replace, eu passo dentro de seu primeiro argumento, o indice que desejo alterar
// neste caso o indice 3 que contém o caracter "3" dentro da string, pela letra "e", sendo assim o
// segundo argumento é preenchido por aquilo que eu deseja que seja alterado, neste caso a letra "e"
// mas poderia ser qualquer outra letra ou caracter.
console.log(escola.replace(3, 'e'))

// Uma método interessante para se usar em string, para poder criar arrays, é o split
// aonde o valor passado dentro de seus parâmetro, vai ser oque o split vai usar de divisor
// para criar o array, ou seja o split fará  uma leitura da strint e sempre que ele achar, o
// valor especificado dentro de seus parenteses seu argumento, ele vai separar, para posteriormente
// salvar esses valores separados dentro do array.
console.log('Ana,Maria,Pedro'.split(','))