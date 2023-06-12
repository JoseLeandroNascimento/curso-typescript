"use strict";
// 1 - arrays(1)
let numbers = [1, 2, 3, 4];
console.log(numbers);
numbers.push(3);
console.log(numbers);
// 2 - arrays(2)
const nums = [100, 200];
nums.push(300);
console.log(nums);
// 3 - tipo any
const arr1 = [1, "teste", true, [1, 2, 3], { nome: "leandro" }];
console.log(arr1);
// 4 - parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(2, 3);
// 5 - retorno de função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Leandro"));
// 6 - funções anonimas
setTimeout(function () {
    const sallary = 1000;
    // console.log(sallary);
}, 200);
// 7 - tipos de objetos
function passCoordinates(coord) {
    console.log(`X coordinates: ${coord.x}`);
    console.log(`Y coordinates: ${coord.y}`);
}
passCoordinates({ x: 10, y: 3 });
// 8 - props opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("b: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(1, 2);
//  9 - validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return firstName + " " + lastName;
    }
    return firstName;
}
console.log(advancedGreeting("jose", "leandro"));
console.log(advancedGreeting("jose"));
// 10 - unio type
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
showBalance(10);
// 11 - avançando em unio type
function showRole(role) {
    if (typeof role === "boolean") {
        return "usuario não aprovado";
    }
    return "A função do usuaro é " + role;
}
console.log(showRole(false));
console.log(showRole("Admin"));
function showId(id) {
    console.log(id);
}
showId(12);
showId("12");
function showCoords(obj) {
    console.log(obj);
}
showCoords({ x: 2, y: 3, z: 4 });
// 15 - literal types
let test;
test = "testando";
console.log(test);
function showDirection(direcao) {
    console.log(direcao);
}
showDirection("center");
// 16 - non null assertion
const p = document.getElementById("some-p");
console.log(p.innerText);
// 17 - bigint
let n;
n = 1000n;
console.log(n);
