const alunos = [
    {nome: 'Lucas', nota: 7.3, bolsista: false },
    {nome: 'Josefina', nota: 9.2, bolsista: true },
    {nome: 'Zé', nota: 9.8, bolsista: false },
    {nome: 'Cleuza', nota: 8.7, bolsista: true },
]
// 1. Todos os alunos são bolsistas?
const allTrue = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(allTrue))

// 2. Algum é bolsista?

const someTrue = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map( a => a.bolsista).reduce(someTrue))
