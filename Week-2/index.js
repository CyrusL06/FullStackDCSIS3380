//Uses of spread operator
//1.Combine of two or more arrays...

let arr1=[1,2,4,568,78,9];
let arr2=['a', "apple"]
//Spread operator
let arr3 =[...arr1, ...arr2]
    //Without spread
let arr4= [arr1.concat.arr2]

console.log(arr4);

//Spread
//Concat
//Join
//Splice

//Collect remaining Elements
    //Index1 skip 2 everything else in rem
let [first=0,,third, ...rem] = arr3;
console.log(rem);
console.log(first);


//3. Collect the incoming function arguement
//define function sum that finds sum of its argument

function sum(...nums){
    let sum = 0;
    console.log(...nums);
    nums.forEach(nums => {
        sum += nums;
    })
    return sum;
}
console.log("First one:")
console.log(sum(3,4,2,1,8));

//
const sum2 = (num1, ...argumentss) =>{
    console.log(args);
    let result = 0;
    for(let i = 0; i<args.length;i++){
        result+=args[i]
    } return result
}
