
// 1 - void

function widthouReturn():void{
    console.log("Está função não tem retorno");
}

widthouReturn()

// 2 - callback como argumento

function greeting(name:string){
    return `Olá ${name}`;
}

function preGreeting(f: (name:string)=>void,userName:string){

    console.log('Preparando a função');

    const greet = f(userName);

    console.log(greet);
    
}

preGreeting(greeting,'leandro')

// 3 - Generic function

function firstElement<T>(arr:T[]):T{

    return arr[0]
}

console.log(firstElement([1,2,3]))
console.log(firstElement([1,2,'w']))
console.log(firstElement(['1','2','3']))

function mergeObjects<U,T>(obj1:U,obj2:T){

    return {
        ...obj1,
        ...obj2
    }
}


// 4 - constraints

function biggestNumber<T extends number | string>(a: T, b:T): T{

    let biggest:T

    if(+a > +b){

        biggest = a
    }else{
        biggest = b
    }

    return biggest;
}

// 5 - especificar tipo de argumento

function mergArrays<T>(arr1:T[],arr2:T[]){

    return arr1.concat(arr2);

}

console.log(mergArrays<number|string>([1,2,3],['1']));
