const alunos = [
    {nome: 'John', nota: 7.9 },
    {nome: 'Kim', nota: 9.2},
]
//Imperativa
let total1 = 0
for(var i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)
