// pessoa -> 123(endereço de memória) -> {...}(objeto que existe no endereço de memória)
const pessoa = { nome: "João" }
pessoa.nome = 'Pedro'
console.log('Pedro')

Object.freeze(pessoa)

const pessoaConstante = object.freeze({nome: 'Maria'})
