let techs = ["html", "css", "js"]

//adicionar um item no fim
techs.push("node")

//adicionar no começo
techs.unshift("sql")

//remover do fim
techs.pop()

//remover do começo
techs.shift()

//pegar somente alguns elementos do array
techs.slice(0, 2)  // começa na posição 0 e termina na posição 1 (até 2) 
console.log(techs.slice(0,2))

// encontrar a posição de um elemento no array
let index = techs.indexOf("css")

// remover 1 ou mais itens em qualquer posição do array
techs.splice(1, 1)   // começa na posição 1 e termina na posição 1, remove um elemento

