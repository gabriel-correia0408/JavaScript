// com a função row dentro da função pessoa, o this passa a fiar no contexto léxico ou seja no escopo que foi criado que seria dentro do setinterval e que por sua vez
// está dentro da função Pessoa, sendo assim o this pode ser chamado dentro de toda o escopo de pessoa que vai continuar sendo o mesmo this ao invés de varias

function Pessoa() {
    this.idade = 0

    setInterval( () => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa