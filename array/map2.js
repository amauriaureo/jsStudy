// FUNCIONAMENTO INTERNO DO MAP

// ---------------------------------------------------------------------------------
Array.prototype.map2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this)) // (elemento atual, indice e array original)
    }
    return newArray
}
// ---------------------------------------------------------------------------------




const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]



const paraObjeto = json => JSON.parse(json) //converte um texto para objeto
const apenasPreco = produto => produto.preco

// const result = carrinho.map(paraObjeto).map(apenasPreco)
// const result = carrinho.map2(paraObjeto).map(apenasPreco)
// const result = carrinho.map(paraObjeto).map2(apenasPreco)
const result = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(result)


