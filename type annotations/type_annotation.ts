let myNum:number = 10;

//myNum = 'fatiha' --> type checking

console.log(myNum.toString());
//number type
let summation = myNum + 12;
console.log(summation)

let nanValue:number = NaN; //valid bcz Nan is a valid number in js,ts

//string type
let myFName:string = "lamia"; 
let myLName:string = "Fatiha"; 

let add = myFName + myLName;
console.log(add);

let sentence:string = "hello! this is my typescript sentence.";
let sentenceLenght:number = sentence.length;
console.log(sentenceLenght);

//boolean

let myNAmeIs:boolean = true;

function isEven(a:number):boolean{
   return a % 2 === 0
}

console.log(isEven(6))

//bigint

let bigN:bigint = 9007199254740992n;
console.log(bigN)
