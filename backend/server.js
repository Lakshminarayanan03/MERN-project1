require('dotenv').config();



//setting up express
const express = require('express');
const app = express();
const workoutRoutes = require('./routes/workouts')

//middleware 

app.use((req,res,next) =>{
    console.log(req.path,req.method);
    next();
    
})

//routes
app.use('/api/workouts',workoutRoutes)

//listening request
app.listen(process.env.PORT,() =>{
    console.log("Listening to PORT",process.env.PORT); 
})  