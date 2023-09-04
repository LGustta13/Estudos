import totalReceita from "./totalReceita.js"

function main(){
  const objeto = {
    receitas: [12, 32, 44, 1, 21],
    despesas: [11, 3, 1, 22]
  }

  console.log(totalReceita(objeto))
}

main()