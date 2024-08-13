//any type

let myFav:any = 5;
myFav = "lamia"
myFav.map(()=>{
    
})

//unknown type

let myFav2:unknown;
myFav2 = 5;
myFav2 = "lamia";
myFav2 = true

if(typeof myFav2 === "number"){
    console.log(myFav2 + 5);
}
else if(typeof myFav2 === "boolean"){
    console.log(myFav2);
}