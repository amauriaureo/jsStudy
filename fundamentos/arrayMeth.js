let frutas = ['Maçã', 'Banana']

frutas.push('Laranja')
// Adiciona um item ao final do array
// Array frutas: ['Maçã', 'Banana', 'Laranja']

frutas.pop()
// Remove um item ao final do array
// Array frutas: ['Maçã', 'Banana']

frutas.shift()
// Remove um item do inicio do array
// Array frutas: ['Banana']

frutas.unshift('Morango')
// Adiciona ao inicio do array
// Array frutas: ['Morango', 'Maçã']

frutas.indexOf('Banana')
// Procura o indice de um item do array
// Retorna 1

frutas.splice(1, 1)
// Remove um item pela posição do indice de um item
// Array frutas: ['Morango']

frutas.slice()
// Copia um Array
// Retorna: ['Morango']
