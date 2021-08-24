console.log(typeof Object);
console.log(typeof new Object);

const Cliente = function() {};
console.log(typeof Cliente);
console.log(typeof new Cliente);

class Produto {}  //ES 2015 (Es6)
console.log(typeof Produto); // por ser uma classe ele será convertido internamente para uma função
console.log(typeof new Produto())
// Funções podem ter atributos e comportamentos 
// Essas funções podem ser instanciadas.

