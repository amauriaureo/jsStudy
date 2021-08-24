// VAR
const funcs = [];
for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}
// A variável não tem escopo de bloco.
// Essa é a razão de sempre retornar 10.
funcs[2]();
funcs[3]();

// LET
const funk = [];

for (let i = 0; i < 10; i++) {
    funk.push(function() {
        console.log(i)
    })
}
// Closure
funk[2]();
funk[3]();
