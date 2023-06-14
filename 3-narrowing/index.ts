
// 1 - type guard

function sum(a:number|string,b:number|string){

    if(typeof a === 'string' && typeof b==='string'){
        console.log(parseFloat(a)+parseFloat(b));
    }else if(typeof a == 'number' && typeof b === 'number'){

        console.log(a+b);
    }else{

        console.log("Não foi possivel somar os dois valores");
        
    }
}

sum('4','4');
sum(2,2);

// 2 - checando se valor existe

function operations(arr:number[], operation?:string|undefined){

    if(operation){


        if(operation === 'sum'){

            const sum = arr.reduce((i,total)=>i+total)
            console.log(sum);
            
        }else if(operation === 'multiply'){
            const mult = arr.reduce((i,total)=>i*total)
            console.log(mult);
        }
    }else{

        console.log("Por favor, defina uma operação");
        
    }
}

operations([1,2,3],'sum')
operations([1,2,3],'multiply')


// 3 - instance of

class User{

    name

    constructor(name:string){
        this.name = name
    }
}


class SuperUser extends User{

    constructor(name:string){

        super(name);
    }
}


const jhon = new User("Jhon")
const paulo = new SuperUser("paulo")

console.log(jhon);
console.log(paulo);

function notificar(fn:(mensagem:string)=>void){

    // Mensagens do banco
    const mensagens:string[] = [
        "Olá Leandro",
        "Boa tarde",
        "Como vai",
    ];

    mensagens.forEach((item:string)=>{
        fn(item);
    });
}

function fn1(msg:string){

    console.log(msg.toUpperCase());
    
}

function soma(n1:number,n2:number):number;
function soma(n1:number,n2:number,n3?:number):number;
function soma(n1:number,n2:number,n3?:number,n4?:number):number{

    return 0;
}


function fn2(msg:string){
    console.log(msg.split(" "));
}

notificar(fn1);
notificar(fn2);

// 5- desafio

type review = number | boolean

function showUserReviwe(review:review){

    if(review){

        console.log("Você não avaliou o produto");
        return
    }

    console.log("A nota que voce de foi "+review);
    
}




