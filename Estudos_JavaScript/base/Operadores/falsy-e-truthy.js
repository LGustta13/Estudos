// FALSY
// Ocorre quando um valor é falso onde um booleano é obrigatório (condicionais e loops)
// false | 0 | -0 | "" | null | undefined | NaN

console.log( 0 ? "verdadeiro" : "falso") // Devido ao Type coersion, o JS transforma o 0 em Falsy

// TRUTHY
// Ocorre quando um valor é true onde um booleano é obrigatório (condicionais e loops)
// true | {} | [] | 1 | 2.2 | "0" | "false" | -1 | Infinity | -Infinity

console.log({} ? "verdadeiro" : "falso")
// Pega a condição e faz a coerção para true, chamando de Truthy