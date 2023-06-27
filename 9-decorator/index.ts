// 1 - exemplo decoraror

function myDecorator() {
  console.log("Iniciando o decorator");

  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Excutando decorator");
    console.log(target);
    console.log(propertKey);
    console.log(descriptor);
  };
}

class MyClass {
  @myDecorator()
  testing() {
    console.log("terminando execução do método");
  }
}

const myObj = new MyClass();

myObj.testing();

// 2 - multiplos decorator

function a() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("A");
  };
}

function b() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("B");
  };
}

class MultiplosDecorator {
  @b()
  @a()
  testing() {
    console.log("Teminando execução");
  }
}

const multiplos = new MultiplosDecorator();

multiplos.testing();

// 3 - class descorator

function classDec(constructor: Function) {
  console.log(constructor);

  if (constructor.name === "User") {
    console.log("Criando user " + constructor.name);
  }
}

@classDec
class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const user = new User("leandro");

console.log(user);

// 4 - method decorator

function enumerable(value: boolean) {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

class Machine {
  name;

  constructor(name: string) {
    this.name = name;
  }

  @enumerable(false)
  showName() {
    console.log(this);

    return `O nome é ${this.name}`;
  }
}

const trator = new Machine("Trator");

console.log(trator.showName());

// 5 exemplo real com clas decorator

function createDate(create: Function) {
  create.prototype.createdAt = new Date();
}

@createDate
class Book {
  id;
  createdAt!: Date;

  constructor(id: number) {
    this.id = id;
  }
}

@createDate
class Pen {
  id;

  constructor(id: number) {
    this.id = id;
  }
}

const newBook = new Book(12);

const pen = new Pen(10);

console.log(newBook);
console.log(pen);
console.log(newBook.createdAt);

//  6 - exemplo real method decorator

function checkUserPosted() {
  return function (
    target: Object,
    key: string | Symbol,
    descriptor: PropertyDescriptor
  ) {

    const childFunction = descriptor.value

    console.log(childFunction);

    descriptor.value = function(...args:any[]){
        if(args[1] == true){

            console.log("Usuario já postou");
            return null
        }else{

            return childFunction.apply(this,args);
        }
    }
    
  };
}


class Post {
  alreadyPosted = false;

  @checkUserPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true;
    console.log("Post do usuário: " + content);
    
  }
}

const post1 = new Post();

post1.post("Meu primeiro post", post1.alreadyPosted);
post1.post("Meu primeiro post", post1.alreadyPosted);


// 7 exemplo real property decorator

function Max(limit:number){

    return function(target:Object,propertKey:string){
        
        let value: string

        const getter = function(){

            return value;
        }

        const setter = function(newVal: string){

            if(newVal.length > limit){

                console.log(`O valor deve ter no máximo ${limit} dígitos`);
                
            }
        }

        Object.defineProperty(target,propertKey,{
            get:getter,
            set:setter
        })

    }
}

class Admin{
    

    @Max(10)
    userName;

    constructor(userName:string){

        this.userName = userName;
    }
}


let pedro = new Admin("PedroAdmin12345")