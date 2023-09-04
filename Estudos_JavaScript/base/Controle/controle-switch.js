let temperatura = 37.4
let high_temperature = temperatura >= 37.5
let medium_temperature = temperatura < 37.5 && temperatura >=37

switch (medium_temperature) {
  case true:
    console.log("Alerta")
    break
  
  case false:
    switch (high_temperature) {
      case true:
        console.log("Febre")
        break
      case false:
        console.log("Normal")
        break
      default:
        console.log("...")
        break
    }
    break

  default:
    console.log("...")
    break

}