import express from 'express';
import axios from 'axios'
const app = express();

//In an async function, JavaScript will pause the function execution until the promise settles.
// With then(), the rest of the function will continue to execute but JavaScript won't execute the .then() callback until the promise settles.

/////////////////////////////////////////////////////////////////
////////////////////////////////AXIOS////////////////////////////

/*
async function testAsyncAwait() {
    console.log("inside asyn/await function")
    try {
        console.log('Ready');
        let response = await axios.get('https://api.kanye.rest');
        let quoteObj = response.data;
        console.log(`Async/Await I will print second: ${quoteObj.quote}`);
    }
    catch (err) {
        console.error("failed to make a request", err.message);
    }
    console.log("Rest of the testAsyncAwait function")
}
function testThen() {
    console.log("inside then() function")
    try {
        console.log("Ready");
        axios.get('https://api.kanye.rest').then((res) =>
            console.log(`Then() I will print second: ${res.data.quote}`))
    }
    catch (err) {
        console.error("failed to make a request", err.message);
    }
    console.log("Rest of testThen function ")

}*/

/////////////////////////////////////////////////////////////////
////////////////////////////////FETCH////////////////////////////

async function testAsyncAwait() {
    console.log("inside asyn/await function")
    try {
        console.log('Ready');
        let response = await fetch('https://api.kanye.rest');
        let quoteObj = await response.json();
        console.log(`Async/Await I will print second: ${quoteObj.quote}`);
    }
    catch (err) {
        console.error("failed to make a request", err.message);
    }
    console.log("Rest of the testAsyncAwait function")
}

function testThen() {
    console.log("inside then() function")
    try {
        console.log("Ready");
        fetch('https://api.kanye.rest')
            .then((res) => res.json())
            .then((json) => console.log(`Then() I will print second: ${json.quote}`))
    }
    catch (err) {
        console.error("failed to make a request", err.message);
    }
    console.log("Rest of testThen function ")

}
testAsyncAwait();
testThen();
console.log('I will print first');

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`The server is up and listening on port ${PORT}`)
})