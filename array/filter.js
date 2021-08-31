// percorrer array com propósito
// filtrar para ter um sub-array

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Corpo de Plástico', preco: 18.99, fragil: false}
]
// RETORNE nenhum produto
console.log(produtos.filter(function(p) {
    return false
}))
// RETORNE todos produtos
console.log(produtos.filter(function(t) {
    return true
}))
// RETORNE produtos acima de 2000
console.log(produtos.filter(function(k) {
    return k.preco > 2000
}))




// RETORNE produtos que:
// tenham valor true para a chave fragil e preco maior que 25

//Maneira 1
console.log(produtos.filter(function(f) {
    return f.fragil == true
}).filter(function(l) {
    return l.preco > 25
}))
// Maneira 2

const caro = produto => produto.preco > 25
const fragil = produto => produto.fragil
console.log(produtos.filter(caro).filter(fragil))
