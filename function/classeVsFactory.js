// Criando objetos a partir de: Construtora, Classe e Factory

// Função construtora
function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const persona1 = new Pessoa('Tia Rita')
persona1.falar()


// Criar objetos a partir de uma classe
class Persona {
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(`Oi! Eu sou ${this.name}`)
    }
}
const persona2 = new Persona('Maria Lúcia')
persona2.speak()


// Factory; Função que retorna como resposta um objeto
const criarPessoa = nickname => {
    return {
        falar: () => console.log(`Bem vindo à casa de ${nickname}`)
    }
}
const persona3 = criarPessoa('Jujuba')
persona3.falar()
