//npm i express
//First Node express

import express from "express"

const app = express();
const port = 3200; // On all computer there is several ports,
                   // it has different purpose and we offer services through them. 
//You want print? you go port 2000. You want request file go port 1232.


app.listen(3200, () => {
    console.log(`The server port is connected to ${port}`)
}); //listen if ports available

//handle get request at root route
app.get("/", (req, res) => {
//   res.render("index.ejs",  {recipe:data});
    console.log(req.rawHeaders); //Information
    res.send("<h1>Hello!</h1>") //response of the server -> browser
});

app.get("/About", (req, res) => {
    // res.send("<h1>About Me Cyrus</h1> <h2>Im Cute</h2>")

    const info = {
        "title":"Instructor",
        "Course": "CSIS-243"
    }

    res.json(info) //You can only do one response
})

//POST
app.post("/", (req,res) => {
    res.sendStatus(201);   //Succesful submit data 
})

//PUT
app.put("/", (req,res) => {
    res.sendStatus(200);   //Succesful submit data 
})

//DELTE
app.delete("/", (req,res) => {
    res.sendStatus(201);   //Succesful submit data 
})