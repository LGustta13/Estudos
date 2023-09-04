import totalReceita from "./totalReceita";

test("Returns positive balance", () => {
  expect(totalReceita({
    receitas: [10],
    despesas: [9]
  })).toBe("Saldo positivo 1");
});

test("Returns negative balance", () => {
  expect(totalReceita({
    receitas: [9],
    despesas: [10]
  })).toBe("Saldo negativo -1");
});

test("Returns zero balance", () => {
  expect(totalReceita({
    receitas: [10],
    despesas: [10]
  })).toBe("Saldo zerado 0");
});

test("Returns nothing if empty object", () => {
  expect(totalReceita({})).toBe("Adicione valores de receitas e despesas")
})

test("Returns nothing if null object", () => {
  expect(totalReceita(null)).toBe("Adicione valores de receitas e despesas")
})


test("Returns invalid object if number inserted", () => {
  expect(totalReceita(10)).toBe("Objeto inválido")
})


test("Returns invalid object if string inserted", () => {
  expect(totalReceita("we1d31")).toBe("Objeto inválido")
})



