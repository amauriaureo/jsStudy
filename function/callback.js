const fabricante = ['Marca 1', 'Marca 2', 'Marca 3']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricante.forEach(imprimir)


// fabricante.forEach(fabricante => console.log(fabricante)) // igual a de baixo

fabricante.forEach(function (a) {
    console.log(a)
})