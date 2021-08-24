// As duas palavras reservadas causam um desvio de fluxo
// break: joga pra fora do laço corrente que ele age em cima(sempre do mais próximo)
// break: repetição, for while, switch
// continue: interrompe a repetição corrente e vai para a próxima repetição
// continue faz sentido em estrutura de repetição

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (x in nums) {
    if (x == 5) {
        break;
    }
    console.log(`indice ${x} = ${nums[x]}`)
}

for (y in nums) {
    if ( y == 5 ) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}


//break no laço mais externo:

externo: for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo
            console.log(`Par = ${a}, ${b}`)
    }
}
