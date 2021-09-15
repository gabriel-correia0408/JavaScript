// criando classe
class Lancamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach( l => this.lancamentos.push(l) ) // o sinal "=>" indica o retorno que forEach vai aplicar aos elementos do array
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000) // adicionar = valor positivo
const ContaDeLuz = new Lancamento('Luz', -220) //  debitar = valor negativo

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, ContaDeLuz)
console.log(contas.sumario())