"use strict";
// 1 - tipo de objetos para função com interface
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name}`);
}
const shirt = {
    name: "camisa",
    price: 6.99,
    isAvailable: true,
};
showProductDetails(shirt);
function showUserDetails(user) {
    console.log(`O usuario ${user.email}`);
    if (user.role) {
        console.log(`Role=${user.role}`);
    }
}
const fusca = {
    brad: "VW",
    wheels: 4,
};
let cod = {
    x: 1,
};
const matheus = {
    name: "matheus",
    age: 23,
};
const superMan = {
    name: "Superman",
    age: 300,
    superPowers: ["força"],
};
console.log();
const arnol = {
    name: "Arnold",
    type: "Short",
    caliber: 2
};
console.log(arnol);
//  7 - readonly array
let myArray = ['maça', 'banana', 'laranja'];
// myArray[3] = 'mamão'
console.log(myArray);
