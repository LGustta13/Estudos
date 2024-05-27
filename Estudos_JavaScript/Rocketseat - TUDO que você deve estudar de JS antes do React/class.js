class Pessoa {
    #nome
    #idade

    constructor(nome, idade){
        this.#nome = nome
        this.#idade = idade
    }

    get nome() {
        return this.#nome
    }

    getNome() {
        return this.#nome
    }

    get idade() {
        return this.#idade
    }

    toJSON(){
        return {
            nome: this.#nome,
            idade: this.#idade
        }
    }

}

const p1 = new Pessoa("Luis", 12)
console.log(p1.nome ?? "indefinido")
console.log(p1.getNome())
console.log(p1.toJSON())