function result(note) {
    if(note >= 7){
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}
result(8)


// TERNARIO
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';

console.log(resultado(7.1));
