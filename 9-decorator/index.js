"use strict";
// 1 - exemplo decoraror
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function myDecorator() {
    console.log("Iniciando o decorator");
    return function (target, propertKey, descriptor) {
        console.log("Excutando decorator");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class MyClass {
    testing() {
        console.log("terminando execução do método");
    }
}
__decorate([
    myDecorator()
], MyClass.prototype, "testing", null);
const myObj = new MyClass();
myObj.testing();
// 2 - multiplos decorator
function a() {
    return function (target, propertyKey, descriptor) {
        console.log("A");
    };
}
function b() {
    return function (target, propertyKey, descriptor) {
        console.log("B");
    };
}
class MultiplosDecorator {
    testing() {
        console.log("Teminando execução");
    }
}
__decorate([
    b(),
    a()
], MultiplosDecorator.prototype, "testing", null);
const multiplos = new MultiplosDecorator();
multiplos.testing();
// 3 - class descorator
function classDec(constructor) {
    console.log(constructor);
    if (constructor.name === 'User') {
        console.log("Criando user " + constructor.name);
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDec
], User);
const user = new User("leandro");
console.log(user);
// 4 - method decorator
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `O nome é ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const trator = new Machine('Trator');
console.log(trator.showName());
