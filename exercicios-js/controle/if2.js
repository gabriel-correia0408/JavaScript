function teste(num){
    if(num > 7)
        console.log(num)
        console.log('Final')//fora do if
}

//teste(6)
//teste(8)

function teste2(num){
    if(num > 7); { //Não usar ;, na declaração de estrutura de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)