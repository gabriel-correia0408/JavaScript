const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // resolvendo conflito do this,aonde passando o Obejto pessoa dentro do bind, deixamos explicito que queremos o this daquele escopo
falarDePessoa()

const falar2 = pessoa.falar // assim ainda persiste o erro de this.
falar2()