import express from "express"
//---2 Find on absolute path
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const app = express();
const port = 3000;
//set up middleWare -- 1 
app.use(express.urlencoded({extended:true})) //extended true handle complex data such as array


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"))
})

app.post("/", (req, res) => {

    let {num1, num2} = req.body;  //What name you put is reached out
    const sum = parseInt(num1)+parseInt(num2)
    res.send(`The sume is ${sum}`)


    // switch(req.body.choice){
    //     case "num1":
    //         data = JSON.parse();
    //     case
    // } //What name you put is reached out
})


app.listen(port, (res, req) =>{
        console.log(`The server port is connected to ${port}`)
})


