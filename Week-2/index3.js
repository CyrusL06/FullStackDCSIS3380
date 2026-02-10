//Higher order functions:
let fruits = ["apple","strawberry","grape","blueberry"];
let arr2 = [1,2,3,4,5,6];
let arr1 = [2,4,5,1,8];

//1.forEach
  let sum = 0;
                     //3 argument passed
                 //does not return anything
    arr1.forEach((element,index,arr) => {
        console.log(element,index,arr);
         sum += element

         element = element *2 // e is a local var wont change arr
         //Only works if u grab the indieces 
    })

console.log(sum);

const callback = (el,i,arr) => {
        console.log(el,i,arr);
}
    arr1.forEach(callback);
    //arr1 calls the callback for each array inside its indecies



//2.Map
//Map throug the old array into current array thus what happened tonly takes place in
// the array itself... return new array


let newArr = arr1.map((e,i)=>{
    return e*2;
})

//simplified code
let newArr2 = arr1.map(e => e*10);

console.log(`Original arr ${arr1}`);
console.log(`New arr ${newArr}`);
console.log(`New arr ${newArr2}`);

let fruitLength = fruits.map((fruit) => (` ${fruit.length}`));
console.log(fruitLength);

let fruitAll = fruits.map((fruit)=> (`${fruit}: ${fruit.length}`) )
console.log(fruitAll);

let fruitEven = fruits.map((fruit,index)=>(index%2==0)?fruit:fruit.length);
console.log(fruitEven);


//3.Filter
//Callback if it include berry return it that filters

let berryFruits = fruits.filter(fruit => fruit.includes("berry"));
console.log(berryFruits);

let arr22 = [1,2,3,4,5,6];

let evenArr = arr22.filter(arr=> arr%2==0);
console.log(`Filter: ${evenArr}`);
//Even lengths of fruits
let evenLength = fruits.filter(el => el.length%2==0);
console.log(` Filter: ${evenLength} \n`);

//4.Reduce - not frequenly used starts at left
    //Return a single value
                        //prev execution before first execution of reduce
                        //Does not need to be the same dataType..
let sum2 = arr2.reduce((prev,currValue,i) =>{
    console.log(`Previous is ${prev}, Current is ${currValue}`);
    return prev+currValue;
},0);

let product = arr2.reduce((prev,currValue,i) =>{
    console.log(`Previous is ${prev}, Current is ${currValue}`);
    return prev*currValue;
},1);

//Quiz: Add the accumulated vowels use in each array... string
const vowels = ["a", "e", "i", "o", "u"];
let vowelCount = fruits.reduce((prev,curr) => {
    // (prev.includes(`a`,`e`,`i`,`o`,`u`)? console.log(`Previous is ${prev}, Current is ${currValue}`) : console.log("Nothing!"))
    let count = 0;
    fruits.forEach((el,i)=>{
       if(curr[i]=='a'|| curr[i]=='e' || curr[i]=='i'|| curr[i]=='o' || curr[i]=='u'){
         count++;
       }
    })
    return prev+count

},0)


console.log(vowelCount);


//5.Find
                //finds element that includes....
let firstBerry = fruits.find(fruit=> fruit.includes("berry"))
console.log(` Find: ${firstBerry}`);

//6.FindIndex
    //return index that meets the condition...
let firstBerryIndex = fruits.findIndex(fruit=>fruit.includes("berry"))
console.log(` findIndex: ${firstBerryIndex}`);

//7.Some
    //return true or false
let someBerry = fruits.some(fruit => fruit.includes("berry"))
console.log(`This is some: ${someBerry}`);

//8.every







//Try

const jobs = [
{ id: 101, isActive: true },
{ id: 102, isActive: false },
{ id: 103, isActive: true },
{ id: 103, isActive: false },
{ id: 105, isActive: false },
]



const findIsActive = jobs.filter( job => (job.isActive == true)).map(job => job.id)
console.log(findIsActive);
