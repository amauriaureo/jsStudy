// JSON(formato textual) usado para Inter-operabilidade entre sistemas
const obj = { a: 1, b: 2, c: 3, soma() { return a+ b + c} }
console.log(JSON.stringify(obj))

// Não roda
// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))

// o nome dos atributos devem ser delimitados por aspas duplas:
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))

console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))
console.log(JSON.parse('{"a": 1.1, "b": "string", "c": true, "d": {}, "e": [] }'))

// json5.org
// busca: json validator
