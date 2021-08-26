const pessoa = {
    nome: 'Rebecca',
    idade: 2,
    peso: 15
}

console.log(Object.keys(pessoa)) // [ 'nome', 'idade', 'peso' ]
console.log(Object.values(pessoa)) // [ 'Rebecca', 2, 15 ]
console.log(Object.entries(pessoa)) // [ [ 'nome', 'Rebecca' ], [ 'idade', 2 ], [ 'peso', 15 ] ]



// ------------------------------------------------------------

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})
// ==
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})
// nome: Rebecca
// idade: 2
// peso: 15



// ------------------------------------------------------------

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento) // 01/01/2019
console.log(Object.keys(pessoa)) // [ 'nome', 'idade', 'peso' ]



// ------------------------------------------------------------

// Object.assign (ECMAScript 2015)
const dest = {a:1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)
console.log(obj) // { a: 4, b: 2, c: 3 }

Object.freeze(obj)
obj.c = 1234
console.log(obj) // { a: 4, b: 2, c: 3 }
