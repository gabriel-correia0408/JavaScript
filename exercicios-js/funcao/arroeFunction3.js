let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)


const obj = {}
comparaComThis = comparaComThis.bind(obj)


comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = paran => console.log(this === paran)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

compaaComThisArrow = comparaComThisArrow.bind(obj) // função arrow é mais forte que o bind
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)


// o this co arrow function não tem alteração

