// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' // evitar este tipo de manipulação
const avo = { attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr1, filho.attr0, filho.attr2, filho.attr3)
// -------------------------------------------------------------------


const carro = {
    velAtual: 0,
    velMax: 200,
    acelararMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)
// (objeto, protótipo) ferrari tem carro como seu protótipo;

volvo.acelararMais(100)
ferrari.acelararMais(100)
console.log(volvo.status())
console.log(ferrari.status())