// 1 - campos em classes


class User{
  name!:string
  age!:number
}

const matheus = new User();

console.log(matheus);
matheus.age = 10
matheus.name = 'metheus'
console.log(matheus);

// 2 - contructors

class User1{

  name
  age

  constructor(name:string,age:number){
    this.name = name
    this.age = age
  }

}

const leandro:User1 = new User1('leandro',24);

console.log(leandro);

//  3 - readonly

class Car{
  name
  readonly wheels = 4

  constructor(name:string){

    this.name = name
  }
}

const car:Car = new Car('gol')

console.log(car);


// 4 - herança

class Machine {

  name

  constructor(name:string){
    this.name = name
  }
}

const trator = new Machine('trator')

class KillerMachine extends Machine{

  guns

  constructor(name:string, guns:number){

    super(name);
    this.guns =guns
  }
}

const destroy = new KillerMachine('Destroy',4);

console.log(trator);
console.log(destroy);

// 5 - métodos

class Dwarf{

  name

  constructor(name:string){

    this.name = name
  }

  greeting(){

    console.log("Hey stranger");
    
  }
}

const jimy = new Dwarf('Jimy');

jimy.greeting()

console.log(jimy);


// 6 - this

class Truck{

  model
  hp

  constructor(model:string,hp:number){
    this.model = model
    this.hp = hp
  }

  showDetails(){

    console.log(`A caminho do modelo ${this.model} e ${this.hp}`);
    
  }
}

const volvo = new Truck('teste',3);

volvo.showDetails();

// 7 - getters

class Person{

  name
  surname

  constructor(name:string,surname:string){

    this.name = name
    this.surname = surname
  }

  get fullName(){

    return this.name + " "+ this.surname;
  }
}

const matheusBa = new Person('leandro','silva')

console.log(matheusBa.fullName);

// 8 - setter

class Coords{

  x!:number
  y!:number

  set fillX(x:number){

    if(x===0){
      return
    }

    this.x = x;

    console.log('X inserido com sucesso');
    
  }
}

// 9 - implements


interface ShowTitle{

  itemTitle():string
}

class blogPost implements ShowTitle{

  title!:string

  constructor(title:string){

    this.title = title
  }


  itemTitle(): string {
   
    return `O titulo do post é: ${this.title}`
  }

}

// 10 - override de metodos

class Base{

  someMethod(){
    console.log("Alguma coisa");
    
  }
}

class Nova extends Base{

  someMethod(){
    console.log("Alguma coisa coisa");
    
  }
}


const myObject = new Nova()

myObject.someMethod()








