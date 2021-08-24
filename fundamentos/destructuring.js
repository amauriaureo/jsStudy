// 2015

const pessoa = {
    nome: 'Ana',
    idade: 22,
    endereco: {
        logradouro: 'Rua X',
        numero: 1000
    }
}


const { nome, idade } = pessoa;
console.log(nome, idade)

const { nome: n, idade: i} = pessoa;
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada)

const { endereco: {logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep)

const { conta } = pessoa;
console.log(conta)
// Um dado pode estar undefined mas não pode ter filhos um dado undefined.
//A sequencia abaixo retorna erro
const { conta: {ag, conta} } = pessoa;
console.log(ag, conta)

