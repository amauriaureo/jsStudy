// passar pelo array original e transformar em outro
// mapear o array mantendo length mas alterando os dados.
// transformação de cada elemtno de um array para outro array de mesmo tamanho
// não transforma o array original, apenas forma um novo


const nums = [1, 2, 3, 4, 5]

// for com propósito.
let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const monetizando = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(monetizando)
console.log(resultado)
