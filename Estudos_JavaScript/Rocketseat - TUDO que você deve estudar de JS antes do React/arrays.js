// ########### loop em array ###############
const array = [1,3,5,7,9]

console.log("\n#########")
for (const i of array) {
    console.log(i)
}

console.log("\n#########")
// Acessa pelos índices
for (let i = 0; i< array.length; i++){
    console.log(array[i])
}

console.log("\n#########")
// Acessa os elementos
array.forEach(element => {
    console.log(element)
})

console.log("\n#########")
// Cria um novo array com as modificações da função
array.map(element => {
    console.log(element)
})

console.log("\n#########")
// Cria um novo array com o filtro adotado
array.filter(element => {
    console.log(element)
})

console.log("\n#########")
// Cria um novo array com o filtro adotado
array.find(element => {
    console.log(element)
})

console.log("\n#########")
// Cria um novo array com o filtro adotado
array.reduce(element => {
    console.log(element)
})