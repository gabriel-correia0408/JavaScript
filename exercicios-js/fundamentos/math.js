// criando a constante de nome raio que ira conter o valor de 5.6
const raio = 5.6


// criandoa  constante area, que irá receber o objeto Math, para poder fazer a exponenciação
// uma vez que js, não tem nenhum operador que faz isso diretamente. O Math . PI trás um valor
// já definido da linguagem, enquanto o Math.pow é o raio ao quadrado.
const area = Math.PI * Math.pow(raio, 2)



// printado no conselo o valor que a constante area carrega
console.log(area)



// Mostrando o typeof de Math
console.log(typeof Math)