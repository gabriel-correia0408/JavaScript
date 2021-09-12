// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0'  // não fazer esse tipo de manipulação! ter muito cuidado só fazer em caso realmente necessário.
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__:pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

// Exemplo 2

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax 
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing ou em português, sombreamento
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // usando super para referenciar ao prototipo de relação.
    }
}

// estabelencendo a relação de protótipo
Object.setPrototypeOf(ferrari, carro) // ferrari tem carro como seu prototipo
Object.setPrototypeOf(volvo, carro) // volvo tem carro como seu prototipo

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status()) //  vai chamar os dados contidos no volvo, tanto quando a função status, que vem do super da relação de prototipo


ferrari.aceleraMais(300)
console.log(ferrari.status())


ferrari.aceleraMais(400)
console.log(ferrari.status())