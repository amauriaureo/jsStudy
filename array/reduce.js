const alunos = [
    {nome: 'Lucas', nota: 7.3, bolsista: false },
    {nome: 'Josefina', nota: 9.2, bolsista: true },
    {nome: 'Zé', nota: 9.8, bolsista: false },
    {nome: 'Cleuza', nota: 8.7, bolsista: true },
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map( a => a.nota).reduce(function(acumulator, atual) {
    console.log(acumulator, atual)
    return acumulator + atual
})

console.log(resultado)
