// ---- What is Functional programming? 
//a way to write code that is built on multiple
// function that is let alone and reusable...

//-Immutability
//-Pure functions
//-First Class fucntions
//Data Transformations
//Higher Order functions

//1. Immutability
//not change the object and arr passed as args to func
//by using const

const fruitColor = {
    title:"Strawberry red",
    color:"#ee1110",
    rating:1
};

const changeRating = (colorObj,newRating)=>{
    // colorObj.rating = newRating;

    const newObj = {...colorObj, rating:newRating};
    console.log(newObj)
    return newObj;

}

const newColorObj = changeRating(fruitColor,4);
console.log(fruitColor.rating); //1
console.log(newColorObj.rating); //4


//2.Pure Functions
//Behabiour depends on input

//Impure function
let count = 0;
function update(){
    count++;
}
console.log(count)

//Why? Because


//3.First-Class functions()
//a.making function members of array
// Function that is member of array

let arr = [
    "Hello",  //String
    (msg)=>console.log(msg),  //function
    "Have a good day",  //String
    (msg =>console.log(msg.toUppercase())) //function
    ];

console.log(arr[1]("Hi"));
console.log(arr[1](arr[0]));
console.log(arr[2]);

arr[1](arr[2]);

//Data

const outsideFunc = (insideFunc)=>{
    insideFunc("Hello!");
}

//What this mean...function takin another function is called callback
//or we can use setInterval

outsideFunc((msg)=> {console.log(msg)})
//when called outside it calls inside...
//to call outside define inside
outsideFunc(arr[1])
