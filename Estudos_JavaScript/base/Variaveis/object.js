const person = {
  nome: "Luis Gustavo",
  idade: 24,
  isAdm: true,
  likes: {
    gym: ["supino", "bike"],
    school: 2
  },
  andar: () => {
    console.log("andar")
  }
}

person.andar()
console.log(person.likes.gym[0])