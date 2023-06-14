"use strict";
// 1 - void
function widthouReturn() {
    console.log("Está função não tem retorno");
}
widthouReturn();
// 2 - callback como argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log('Preparando a função');
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, 'leandro');
// 3 - Generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement([1, 2, 'w']));
console.log(firstElement(['1', '2', '3']));
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
// 4 - constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
// 5 - especificar tipo de argumento
function mergArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergArrays([1, 2, 3], ['1']));
