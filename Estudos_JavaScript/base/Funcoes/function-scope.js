// Function scope
let subject // undefined
let onject = "data"

function createSub(){
  subject = 'study' // Como subject não tem domínio (var, let, const) e a função sem parâmetros, subject se torna global
  return subject    // study
}

function createOn(onject){
  onject = "main"   // Agora é só em scopo local, devido ao parâmetro da função
  return onject
}

console.log(subject)          // undefined
console.log(createSub())      // study
console.log(subject)          // study
console.log(onject)           // data
console.log(createOn(onject)) // main
console.log(onject)           // data  