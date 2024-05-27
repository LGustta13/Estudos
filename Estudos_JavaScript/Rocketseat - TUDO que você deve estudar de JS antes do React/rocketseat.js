// Nullish Coalescing Operator: lidar com valores nulos

const idade = null
console.log( idade || "Não informado")

// ##############################################################
console.log("##############################################################\n")

// Objetos
const user = {
    name: 'Luis',
    idade: 24,
    address: {
        street: "teste",
        number: 127
    }
}

console.log('name' in user)
console.log(Object.keys(user))
console.log(JSON.stringify(Object.values(user))) // trás somente os valores de cada chave primária
console.log(JSON.stringify(Object.entries(user))) // trás a chave e o valor como um array

// ##############################################################
console.log("##############################################################\n")

// Desestruturação
const array = [1,2,3,4,5,6]

const {address, idade: age} = user
const [fst, snd, trd] = array
console.log(address)
console.log(age)

function getIdade({idade}) {
    return idade
}

console.log(getIdade(user))

// ##############################################################
console.log("##############################################################\n")

// Rest operator
const {name, ...rest} = user
const [first, , third, ...restNumbers] = array
console.log(JSON.stringify(rest))
console.log(JSON.stringify({first, third, restNumbers}))

// ##############################################################
console.log("##############################################################\n")

// Short Syntax
const namep = "Gustavo"
const agep = 24

const pessoa = {
    namep, 
    agep
}

console.log(pessoa)

// ##############################################################
console.log("##############################################################\n")

// Optional Chaining: lidar com objetos possivelmente nulos ou onde alguma de suas propriedades (chave - valor) podem não existir
console.log(user.address.zip?.code ?? "Não informado")
