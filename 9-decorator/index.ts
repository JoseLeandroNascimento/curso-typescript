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

function a(){

    return function(target:any,propertyKey:string,descriptor: PropertyDescriptor){
        console.log("A");
        
    }
}


function b(){

    return function(target:any,propertyKey:string,descriptor: PropertyDescriptor){
        console.log("B");
        
    }
}

class MultiplosDecorator{

    @b()
    @a()
    testing(){

        console.log("Teminando execução");
        
    }
}


const multiplos = new MultiplosDecorator()

multiplos.testing()


// 3 - class descorator


function classDec(constructor:Function){

    console.log(constructor);

    if(constructor.name === 'User'){

        console.log("Criando user "+constructor.name);
        
    }
    
}

@classDec
class User{

    name


    constructor(name:string){

        this.name =name
    }
}

const user = new User("leandro");

console.log(user);


// 4 - method decorator

function enumerable(value:boolean){

    return function(target:any,propertKey:string,descriptor:PropertyDescriptor){

        descriptor.enumerable = value
    }
}

class Machine {

    name

    constructor(name:string){

        this.name =name;
    }

    @enumerable(false)
    showName(){

        console.log(this);
        
        return `O nome é ${this.name}`
    }
}

const trator = new Machine('Trator')

console.log(trator.showName());
