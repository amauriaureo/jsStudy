const school = [{
    name: 'G1',
    students: [{
        name: 'Gus',
        note: 8.8
    }, {
        name: 'Anne',
        note: 9.9
    }]
}, {
    name: 'G2',
    students: [{
        name: 'Geroge',
        note: 9.8
    }, {
        name: 'Marie',
        note: 7.9
    }]
}]

const getNotaAluno = aluno => aluno.note
const getNotasDaTurma = turma => turma.students.map(getNotaAluno)

const notas1 = school.map(getNotasDaTurma)
console.log(notas1)
// um único array com todas as anotas, por isso o flatMap