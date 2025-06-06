require('dotenv').config();



//setting up express
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const workoutRoutes = require('./routes/workouts')

//middleware 

app.use(express.json())

app.use((req,res,next) =>{
    console.log(req.path,req.method);
    next();
    
})

//routes
app.use('/api/workouts',workoutRoutes)

//connect to db
mongoose.connect(process.env.MONG_URI)
    .then(() =>{
        //listening request
        app.listen(process.env.PORT,() =>{
        console.log("Connected to db & Listening to PORT",process.env.PORT); 
}) 
    })
    .catch((error) => {
        console.log(error);
        
    })

 