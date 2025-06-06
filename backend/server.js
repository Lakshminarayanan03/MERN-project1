require('dotenv').config();



//setting up express
const express = require('express');
const app = express();

//middleware 
app.use((req,res,next) =>{
    console.log(req.path,req.method);
    next();
    
})

//routes
app.get('/', (req,res) =>{
    res.json({"msg":"This is a get request"})
})

//listening request
app.listen(process.env.PORT,() =>{
    console.log("Listening to PORT",process.env.PORT); 
})  