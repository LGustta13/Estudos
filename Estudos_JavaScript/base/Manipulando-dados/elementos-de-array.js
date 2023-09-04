let my_array = [
  "a",
  {type: "array"},
  function() {return "olá"}
]

console.log(my_array[2])
console.log(my_array[2]())