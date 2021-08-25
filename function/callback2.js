const notas = [10, 5, 3, 8, 4, 6, 7]

// Sem callback
const notasBaixas = []
for(let i in notas){
    if (notas[i] < 6) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)


// Com callback
const notasAltas = notas.filter(function(nota){
    return (nota > 6)
})
console.log(notasAltas)



const notasMenores = nota => nota < 7
// const notasBaixas2 = notas.filter(nota => nota < 7)
const notasBaixas2 = notas.filter(notasMenores)
console.log(notasBaixas2)