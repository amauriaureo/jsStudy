let contador = 1
while(contador <= 10) {
    console.log(`contador = ${contador}`)
    contador ++
}
// diferença entre contador com while e com for
for(let i = 1; i <= 10; i++){
    console.log(`i: ${i}`)
}


//--------------------------------------------------


// navegando em cima de um array
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(i = 0; i < notas.length; i++){
    console.log(notas[i], i)
    // console.log(length(i))
}
// const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log(`indice ${i}, notas: ${notas[i]}`)
}


//--------------------------------------------------


const pessoa = { 
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 21,
    peso: 69
}
for(let xakablau in pessoa) {
    console.log(`${xakablau} = ${pessoa[xakablau]}`)
}
