const n1 = 4
const n2 = 2

function soma(number_1, number_2) {
    const resultado = number_1 + number_2
    return resultado
}

const mult = (number_1, number_2) => {
    const resultado = number_1*number_2
    return resultado
}

const div = function(number_1, number_2) {
    const resultado = number_1/number_2
    return resultado
}

console.log(`soma ${soma(n1, n2)}, \nmult ${mult(n1, n2)}, \ndiv ${div(n1, n2)}`)


// ##############################################################
console.log("##############################################################\n")

const v1 = "bolo"
const v2 = "torta"
const v3 = null

let doce = v1 === "bolo" ? v1 : v2
console.log(doce)

let existe = v3 ?? v2
console.log(existe)

// ##############################################################
console.log("##############################################################\n")

console.log(!!'w')
console.log(!!null)
console.log(!!undefined)

// ##############################################################
console.log("##############################################################\n")
// Type coercion : converte tipos de forma implicita "5" + 9 = 59
// Type conversion: converte tipos de forma explícita Number("5") + 9 = 14
// nullish : null ou undefined

let b1 = 50
b1 ??= 10
// b2 is not defined, funcionaria para objetos
// b1.dado1, se não existisse,daria undefined pois é de um objeto e não uma variável de escopo

console.log(b1)

// ##############################################################
console.log("##############################################################\n")

const f1 = (calculo, x1, x2) => {
    const resultado = calculo(x1, x2)
    return resultado
}

const f2 = (x1, x2) => {
    const resultado = x1 + x2
    return resultado
}

console.log(f1(f2, 1, 3))

// ##############################################################
console.log("##############################################################\n")

let word = "makesomenoise"
let array = Array.from(word)

let print = array.push("X")
console.log(array)

// ##############################################################
console.log("##############################################################\n")

const i1 = 0
console.log()