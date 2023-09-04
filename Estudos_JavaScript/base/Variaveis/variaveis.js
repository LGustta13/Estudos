// JS é fracamente tipado e dinâmico (induz pelo valor recebido na variável)
// Case-sensitive
// Aceita caracteres Unicode

// var - variável do tipo global
// o Javascript cria a variável como global, mesmo em um escopo abaixo
// hoisting - a variável é declarada globalmente, mas não atribuída
console.log("x existe antes do bloco?", x) // existe: undefined
{
  var x = 0
}
console.log("x existe depois do bloco?", x) // existe: 0

// let - variável do tipo local
// Acontece somente no escopo em que foi criada
console.log("y existe antes do bloco?", y) // ERRO: não existe
{
  let y = 0
}
console.log("y existe depois do bloco?", y) // ERRO: não existe fora do escopo

// const - não pode ser modificada
console.log("z existe antes do bloco?", z) // ERRO: não existe
{
  const z = 0
  z = 1 // ERRO
}
console.log("z existe depois do bloco?", z) // ERRO: não existe fora do escopo

var clima = "Quente"
console.log("clima", clima)
console.log("clima " + clima)
console.log(`clima ${clima}`)