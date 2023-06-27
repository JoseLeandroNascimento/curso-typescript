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
    if (constructor.name === "User") {
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
const trator = new Machine("Trator");
console.log(trator.showName());
// 5 exemplo real com clas decorator
function createDate(create) {
    create.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createDate
], Pen);
const newBook = new Book(12);
const pen = new Pen(10);
console.log(newBook);
console.log(pen);
console.log(newBook.createdAt);
//  6 - exemplo real method decorator
function checkUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        console.log(childFunction);
        descriptor.value = function (...args) {
            if (args[1] == true) {
                console.log("Usuario já postou");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log("Post do usuário: " + content);
    }
}
__decorate([
    checkUserPosted()
], Post.prototype, "post", null);
const post1 = new Post();
post1.post("Meu primeiro post", post1.alreadyPosted);
post1.post("Meu primeiro post", post1.alreadyPosted);
// 7 exemplo real property decorator
function Max(limit) {
    return function (target, propertKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} dígitos`);
            }
        };
        Object.defineProperty(target, propertKey, {
            get: getter,
            set: setter
        });
    };
}
class Admin {
    constructor(userName) {
        this.userName = userName;
    }
}
__decorate([
    Max(10)
], Admin.prototype, "userName", void 0);
let pedro = new Admin("PedroAdmin12345");
