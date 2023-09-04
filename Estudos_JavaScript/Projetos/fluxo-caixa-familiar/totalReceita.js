function totalReceita(objeto) {
  let saldo = 0
  let message = 0

  if(typeof objeto == "number" || typeof objeto == "string"){
    return "Objeto inválido"
  } else if (objeto == null || Object.values(objeto).length == 0){
    return "Adicione valores de receitas e despesas"
  }

  for(let i = 0; i < objeto.receitas.length; i++){
    saldo += objeto.receitas[i];
  }

  for(let i = 0; i < objeto.despesas.length; i++){
    saldo -= objeto.despesas[i];
  }

  message = (saldo > 0) ? (`Saldo positivo ${saldo}`) : (
    (saldo < 0) ? (`Saldo negativo ${saldo}`) : (`Saldo zerado ${saldo}`)
  )

  return message
}

export default totalReceita;
