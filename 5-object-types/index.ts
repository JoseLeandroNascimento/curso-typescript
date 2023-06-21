// 1 - tipo de objetos para função com interface

interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

function showProductDetails(product: Product) {
  console.log(`O nome do produto é ${product.name}`);
}

const shirt: Product = {
  name: "camisa",
  price: 6.99,
  isAvailable: true,
};

showProductDetails(shirt);

// 2 - propriedades opcionais interfaces

interface User {
  email: string;
  role?: string;
}

function showUserDetails(user: User) {
  console.log(`O usuario ${user.email}`);

  if (user.role) {
    console.log(`Role=${user.role}`);
  }
}

// 3 - readonly

interface Car {
  brad: string;
  readonly wheels: number;
}

const fusca: Car = {
  brad: "VW",
  wheels: 4,
};

// 4 - index signure

interface CoordObject {
  [index: string]: number;
}

let cod: CoordObject = {
  x: 1,
};

// 5 - extends interface

interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  superPowers: string[];
}

const matheus: Human = {
  name: "matheus",
  age: 23,
};

const superMan: SuperHuman = {
  name: "Superman",
  age: 300,
  superPowers: ["força"],
};

console.log();

// 6 intercection interface

interface Character {
    name:string
}

interface Gun{

    type:string,
    caliber:number
}

type HumanWithGun = Character & Gun;

const arnol: HumanWithGun ={
    name:"Arnold",
    type:"Short",
    caliber:2
}

console.log(arnol);

//  7 - readonly array

let myArray:ReadonlyArray<string> = ['maça','banana','laranja'];

// myArray[3] = 'mamão'

console.log(myArray);


