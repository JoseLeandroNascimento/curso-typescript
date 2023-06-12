// 1 - arrays(1)

let numbers: number[] = [1, 2, 3, 4];

console.log(numbers);

numbers.push(3);

console.log(numbers);

// 2 - arrays(2)

const nums: Array<number> = [100, 200];

nums.push(300);

console.log(nums);

// 3 - tipo any

const arr1: any = [1, "teste", true, [1, 2, 3], { nome: "leandro" }];

console.log(arr1);

// 4 - parametros tipados

function soma(a: number, b: number) {
  console.log(a + b);
}

soma(2, 3);

// 5 - retorno de função

function greeting(name: string): string {
  return `Olá ${name}`;
}

console.log(greeting("Leandro"));

// 6 - funções anonimas

setTimeout(function () {
  const sallary: number = 1000;

  // console.log(sallary);
}, 200);

// 7 - tipos de objetos

function passCoordinates(coord: { x: number; y: number }) {
  console.log(`X coordinates: ${coord.x}`);
  console.log(`Y coordinates: ${coord.y}`);
}

passCoordinates({ x: 10, y: 3 });

// 8 - props opcionais

function showNumbers(a: number, b: number, c?: number) {
  console.log("A: " + a);
  console.log("b: " + b);
  if (c) {
    console.log("C: " + c);
  }
}

showNumbers(1, 2, 3);
showNumbers(1, 2);

//  9 - validando argumento opcional

function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    return firstName + " " + lastName;
  }

  return firstName;
}

console.log(advancedGreeting("jose", "leandro"));
console.log(advancedGreeting("jose"));

// 10 - unio type

function showBalance(balance: string | number) {
  console.log(`O saldo da conta é R$${balance}`);
}

showBalance(10);

// 11 - avançando em unio type

function showRole(role: boolean | string) {
  if (typeof role === "boolean") {
    return "usuario não aprovado";
  }

  return "A função do usuaro é " + role;
}

console.log(showRole(false));
console.log(showRole("Admin"));

// 12 - type alias

type ID = string | number;

function showId(id:ID){
    console.log(id);
    
}

showId(12)
showId("12")

// 13 - interfaces

interface Point{

    x:number
    y:number
    z:number
}

function showCoords(obj:Point){
    console.log(obj);
    
}

showCoords({x:2,y:3,z:4})

// 15 - literal types

let test:'testando';

test = "testando";

console.log(test);

function showDirection(direcao: "left" | "right" | "center"){

    console.log(direcao);
    
}


showDirection("center");

// 16 - non null assertion

const p = document.getElementById("some-p");

console.log(p!.innerText);

// 17 - bigint

let n: bigint

n = 1000n

console.log(n);

