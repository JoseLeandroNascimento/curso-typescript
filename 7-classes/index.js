"use strict";
// 1 - campos em classes
class User {
}
const matheus = new User();
console.log(matheus);
matheus.age = 10;
matheus.name = 'metheus';
console.log(matheus);
// 2 - contructors
class User1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const leandro = new User1('leandro', 24);
console.log(leandro);
//  3 - readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const car = new Car('gol');
console.log(car);
// 4 - herança
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine('trator');
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroy = new KillerMachine('Destroy', 4);
console.log(trator);
console.log(destroy);
// 5 - métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey stranger");
    }
}
const jimy = new Dwarf('Jimy');
jimy.greeting();
console.log(jimy);
// 6 - this
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`A caminho do modelo ${this.model} e ${this.hp}`);
    }
}
const volvo = new Truck('teste', 3);
volvo.showDetails();
// 7 - getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + " " + this.surname;
    }
}
const matheusBa = new Person('leandro', 'silva');
console.log(matheusBa.fullName);
// 8 - setter
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log('X inserido com sucesso');
    }
}
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo do post é: ${this.title}`;
    }
}
// 10 - override de metodos
class Base {
    someMethod() {
        console.log("Alguma coisa");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("Alguma coisa coisa");
    }
}
const myObject = new Nova();
myObject.someMethod();
