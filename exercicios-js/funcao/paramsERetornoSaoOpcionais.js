function area(largura, altura){
    const area = largura * altura
    if (area > 20){
        console.log(`Valor acima do permetido: ${area}m2.`)
    } else{
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 3, 4, 5))// vai pegar os dois primeiros parametros e ignorar todos os outros
console.log(area(5, 5))

