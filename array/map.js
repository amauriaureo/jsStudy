// passar pelo array original e transformar em outro
// mapear o array mantendo length mas alterando os dados.
// transformação de cada elemtno de um array para outro array de mesmo tamanho


const nums = [1, 2, 3, 4, 5]

// for com propósito.
let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)
