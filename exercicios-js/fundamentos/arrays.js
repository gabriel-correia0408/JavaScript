
// Arrays tem seu valor inicado em zero ou seja o primeiro valor dentro de um array é de vlaor zero
// e assim por diante,indice 0 para valor 1, indice 1 para o valor 2, indice 3 para o valor dois etc.
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

// dentro do javascript quando chamado um incidice que não existe dentro do array
// o valor retornado é "undefined", isso porque o js ao contrário de outras linguagens não vai apresentar erro
// é um ponto a se observar para não vir a comprometer qualquer lógica dentro de um sistema que esteja
//fazendo uma busca dentro de um array.
console.log(valores[4])

// uma maniera de atribuir um valor a um indice não existente é usar o operador lógico de sinal de igual
valores[4] = 10
// chamando a varíavel para confirmar que o valor foi atribuido de maneira correta.
console.log(valores[4])

// atribuindo um indice distantes da ordem dos outros indices
valores[10] = 100
// o js avisa que existe uma lacula com o número de indices que estão vazio até este último que foi adicionado
console.log(valores)

// usando o "length", para obter a quantidade de indices que existem dentro do array.
console.log(valores.length)

// utilizando método push, para adiconar valores dentro do array, o js aceita que seja feito o envio 
// de vários tipos de valores para dentro do array, como fiz abaixo com um objeto , um boolean, um null
// e uma string.  obs(não é uma boa prática misturar os dados).
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// o método pop(), vai retirar o valor/objeto de dentro de array, sendo assim
// esse valor/objeto não estará mais dentro do array.
valores.pop()
console.log(valores)

// outra maneira para deletar/retirar um valor de dentro de um array é usar
// o delete passando o nome do array e o indice que você deseja retirar o valor/objeto
// passando o nomearray[0] e a localização do indice dentro de colchetes.
delete valores[0]
console.log(valores)


// usando o typeof podemos notar que um array é do tipo object
console.log(typeof valores)