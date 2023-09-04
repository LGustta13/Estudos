// Functions - Object type
// Toda função que não tem retorno (return), volta undefined
// Function expression or anonymous function
const sum = function(number_1, number_2) {
  const total = number_1 + number_2
  return total
}

// -------------------------------------------------------------

let number_1 = 2
let number_2 = 3

console.log(`O número 1 é ${number_1},\nO número 2 é ${number_2}`)
console.log(`A soma é ${sum(number_1, number_2)}`)