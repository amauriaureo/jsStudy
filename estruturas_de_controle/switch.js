// Sobre Switch:
// Seleção Múltipla; Não é uma expressão relacional;
// Passar valores e tipos pro switch para que ele selecione;
// Por padrão utilizar o break para executar um do casos e sair;

const imprimirResultado = function (nota) {
    switch(Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break;
        case 8: case 7:
            console.log('Aprovado');
            break;
        case 6: case 5: case 4:
            console.log('Recuperação');
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
        default: 
            console.log('Nota invalida')
    }
}

imprimirResultado(10)
imprimirResultado(2)
imprimirResultado(5)
imprimirResultado(7)
imprimirResultado(11)
imprimirResultado(0)