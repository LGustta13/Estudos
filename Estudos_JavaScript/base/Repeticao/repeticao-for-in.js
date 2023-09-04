let person = {
  name: "John",
  age: 30,
  weight: 88.6
}

for(let property in person) {
  console.log(person[property])
}

// DIFERENÇA
var arr = ["gato", "cachorro", "macaco"];
for (var i in arr) {
    console.log(i); // Imprime "0", "1", "2"
}

for (var i of arr) {
    console.log(i); // Imprime "gato", "cachorro", "macaco"
}