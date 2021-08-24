function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido${area} m2.`)
    } else {
        return area
    }
}

console.log(area(2, 2)) // 4
console.log(area(2)) // NaN
console.log(area()) // NaN
console.log(area(2, 3, 2198, 2187, 2)) // 6
console.log(area(5, 5)) // undefined

// ---------------------------------------------------------------

function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments [i]
    }
    return soma
}

console.log(soma())
console.log(soma(1, 4.4, " oi"))
console.log(soma(1, 2))
console.log(soma(1.1, 9.9))
console.log(soma('a', 'b', 'c'))


