const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
})

// aprovados.forEach(nome => console.log(nome))
// const exibirAprovados = aprovado => console.log(aprovado)
// aprovados.forEach(exibirAprovados)



// ---------------------------------------------------------------------------------


// Array.prototype.forEach2 = function(callback) {
//     for(let i = 0; i < this.length; i++) {
//         callback(this[i], i, this)
//     }
// }

const checked = ['JS', 'HTML', 'CSS', 'Metodologias ageis', 'Git']

// checked.forEach2(function(nome, indice, array) {
//     console.log(`${indice + 1}) ${nome}`)
//     console.log(array)
// })
console.log('        Ferramentas:')
checked.forEach(function(tech, indice) {
    console.log(`${indice + 1})) ${tech}`)
})
