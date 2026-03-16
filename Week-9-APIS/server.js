//
//https://opentdb.com/api_config.php

//1.Import these files
import express from "express"
import axios from "axios";
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename) //takes you to global directory
const app = express();
const port = 3200;

//Set view engine to ejs
app.set("view engine", "ejs")
//set the path of view dr
app.set("views",path.join(__dirname,"views"))

//2.MiddleWare
app.use(express.urlencoded({extended:true})) //extended true handle complex data such as array
//appends body property to request


// GET 
app.get("/", async (req, res) => {
   try{
        const URL = "https://catfact.ninja/fact"
        const response = await axios.get(URL)
        console.log(response) // see result
        const result = response.data

        res.render("index",{data:result})
   }catch(err){
        console.log(`There is an error ${err}`)
   }
})


//POST
//https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=boolean
app.post("/", async(req,res)=> {
    const searchId = req.body.id;
    let {category, difficulty} = req.body; //Destructuring
    const API_URL = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=boolean`
    
        try{
            const {data} = await axios.get(API_URL)
            console.log(data);
            res.render("index",{data: data.results[0] }) //Since the JSON is object and inside has in result array
                                                        //but only one since we called the API
                                                        //hence we do array1
        }catch(err){
            console.log(`There is an error ${err}`)
        }
})





app.listen(port, () => {
    console.log(`The server port is connected to ${port}`)
});
