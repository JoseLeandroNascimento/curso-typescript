// 1 - generics

function showDetails<T>(args: T):string{

  return `O dado é: ${args}`;
}

console.log(showDetails(5));
console.log(showDetails('ola'));

// 2 - constraint em generic

function showProductNma<T extends {name:string}>(obj:T){

  return `O nome do prduto é: ${obj.name}`;
}

console.log(showProductNma({idade:12,name:'leandro'}));


// 3 - generics com interface

interface MyObj <T,U>{

  name:string,
  age:T,
  f:U
}

type car = MyObj<number,number|boolean>;

// 4 - tupe parameter

function getSomeKey<T,K extends keyof T>(obj: T,key: K){

  return `A chave ${String(key)} está presente no objeto e tem ovalor de ${obj[key]}`;
}

const server = {
  hd: '2Tb',
  ram:'32gb'
}

console.log(getSomeKey(server,'ram'));


// 5 - keyof type operator

type Character = {name:string,age:number,hasDriverLisence:boolean};

type C = keyof Character;

function showCharectName(obj:Character,name:C){
  return `${obj[name]}` 
}

const mychar:Character ={
  name:"Leandro",
  age:20,
  hasDriverLisence:true
}

console.log(showCharectName(mychar,'age'));

//  6 - typeof type operator

const userName:string = 'leandro';

const userName2: typeof userName = 'joao';
