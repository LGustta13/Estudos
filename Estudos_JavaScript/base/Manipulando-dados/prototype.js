/**
 * JavaScript é uma linguagem baseada em protótipos,
 * assim que um objeto é criado, ele herda as características de um objeto global (Object, String, Float)
 * estas características são representadas em uma cadeia de protótipos, são funcionalidades nativas do objeto já implementadas 
 * __proto__
 * 
 * Por isso consigo usar .length em um array
 */

"luis".__proto__
true.__proto__
23.0.__proto__ // Number -> Float
["a", "b"].__proto__

// O ultimo objeto da cadeia de protótipos tem o constructor (POO)

23.0.hasOwnProperty()
