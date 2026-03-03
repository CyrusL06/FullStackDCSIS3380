console.log("HI");

import fs from 'fs'; //Every FS is imported
import pokemon from "pokemon"


// fs.copyFileSync('file.txt', 'destination.txt')
// console.log('source.txt was copied to destination.txt');


fs.copyFile("file.txt","destination.txt", (err) => {
    if(err)
        console.log('Failed')
    else
        console.log("Suscess")
}); //asyncronous run under but the next run command so u need o write 
console.log('source.txt was copied to destination.txt');


//npm init -> tracks the dependency downloaded
//npm i pokemon


const all = pokemon.all()
console.log(pokemon.all());