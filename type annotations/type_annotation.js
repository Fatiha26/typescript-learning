var myNum = 10;
//myNum = 'fatiha' --> type checking
console.log(myNum.toString());
//number type
var summation = myNum + 12;
console.log(summation);
var nanValue = NaN; //valid bcz Nan is a valid number in js,ts
//string type
var myFName = "lamia";
var myLName = "Fatiha";
var add = myFName + myLName;
console.log(add);
var sentence = "hello! this is my typescript sentence.";
var sentenceLenght = sentence.length;
console.log(sentenceLenght);
//boolean
var myNAmeIs = true;
function isEven(a) {
    return a % 2 === 0;
}
console.log(isEven(6));
