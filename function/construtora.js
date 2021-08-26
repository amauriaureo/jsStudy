function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual =0
    // método publico
    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMaxima

        }
    }
    // método público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const fox = new Carro
fox.acelerar()
fox.acelerar()
console.log(fox.getVelocidadeAtual())

const jeep = new Carro(230, 200)
jeep.acelerar()
jeep.acelerar()
console.log(jeep.getVelocidadeAtual())
