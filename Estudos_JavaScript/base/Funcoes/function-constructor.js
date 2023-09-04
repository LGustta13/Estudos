// Function constructor

// expression new
// create new object
// this keyword

class Person {
  name // propriedade

  constructor(name) {
    this.name = name // this.name já faz referência interna ao atributo name
  }

  walk() { // método
    console.log(`${this.name} está andando`)
  }
}

// ou

function Person2(name) {
  this.name = name  // this.name já faz referência interna ao atributo name
  this.walk = () => { // propriedade
    console.log(`${this.name} está andando`)
  }
}

const Luis = new Person("Luis")   // novo objeto Person, chamando a função construtora
const Joao = new Person2("Joao")

Luis.walk()
Joao.walk()