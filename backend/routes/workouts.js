const express = require('express');

const router = express.Router();

//GET request
router.get('/', (req,res) =>{
    res.json({msg : "This is a GET request"});
    
})

//Single GET request
router.get('/:id', (req,res) =>{
    res.json({msg : "This is a Single GET request"});
    
})

//POST request
router.post('/', (req,res) =>{
    res.json({msg : "This is a POST request"});
    
})

//DELETE request
router.delete('/:id', (req,res) =>{
    res.json({msg : "This is a DELETE request"});
    
})

//UPDATE request
router.patch('/:id', (req,res) =>{
   res.json({msg : "This is a UPDATE request"});
    
})

module.exports = router;