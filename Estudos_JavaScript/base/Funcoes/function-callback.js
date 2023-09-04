// Callback function
function calculo(formula, number_1, number_2){
  const total = formula(number_1, number_2)
  return total
}

function pot(number_1, number_2){
  const total = number_1**number_2
  return total
}

let number_1 = 2
let number_2 = 3

console.log(`A potenciação é ${calculo(pot, number_1, number_2)}`)