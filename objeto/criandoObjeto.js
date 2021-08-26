// usando notação literal
const obj1 = {}
console.log(obj1)

// Objeto em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
    this.preco = preco
    this.desc = desc
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Note', 1000.99, 0.20)
console.log(p1.getPrecoComDesconto(), "   |   ", p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 5000, 4)
const f2 = criarFuncionario('Pedro', 10000, 2)
console.log(f1.getSalario(), f2.getSalario())

// object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


const fromJSON = JSON.parse('{"info": "Sou um JSON"}')

console.log(fromJSON.info)
