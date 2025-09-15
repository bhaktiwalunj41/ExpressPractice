const express = require('express')

const app = express();

app.get('/',(req,res)=>{
    console.log("Hello World...😎")
})

app.get('/about',(req,res)=>{
    console.log("This is about of us🆔");
})
app.listen(5000, (req,res)=>{
    console.log("Server Started Successfully✅")
})


// http://localhost:5000/
// http://localhost:5000/about
