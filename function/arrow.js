let dobro = function (a) {
    return 2 * a 
}

dobru = (a) => {
    return 2 * a 
}

dobro = a => 2 * a //return implicito 
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um param
console.log(ola())

// ----------------------------------------------


function Pessoa() {
    this.idade = 0;
    
    setInterval(() => {
        this.idade++ 
        // console.log(this.idade)
    }, 1000)    
}
// new Pessoa

