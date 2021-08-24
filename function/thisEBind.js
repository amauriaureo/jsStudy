const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
//falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()


// ---------------------------------------------------------------

function People() {
    this.idade = 0

    const self = this 
    setInterval(function() {
        self.idade++ 
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new People 