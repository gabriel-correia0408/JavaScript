// IIFE -> Immediately Invoked Function Expression


// a função anonima deve estar dentro de parentese para não ocorrer erro de sintaxe
// e ao final eu invoco ela com ()
(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})() // chamando/invocando a função