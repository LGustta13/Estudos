let temperatura = 36.5
let high_temperature = temperatura >= 37.5
let medium_temperature = temperatura < 37.5 && temperatura >=37

if (high_temperature) {
  console.log("Febre")
} else if(medium_temperature){
  console.log("Alerta")
} else {
  console.log("Saudavel")
}