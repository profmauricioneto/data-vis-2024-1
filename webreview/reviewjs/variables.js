"use strict";
{
    var nameUser = "mauricio";
    let idade = 33;
    console.log(idade);
}
console.log(nameUser);
let obj = {};
console.log(obj);
let x;
console.log(typeof x);

let car = {
    marca: "Ford",
    modelo: "Mustang",
    ano: 2023,
    cor: "Preto"
}

console.log(`
O objeto: ${obj.marca} 
car modelo: ${obj.modelo} 
carano: ${obj.cor}`);

function greeting(nameUser) {
    return `Hello Mr(s). ${nameUser}`
}

console.log(greeting("Jones"));