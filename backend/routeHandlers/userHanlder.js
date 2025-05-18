const User = require('../schemaModels/userSchemaModel');
const express = require('express');
const router = express.Router();


router.post('/', async(req, res)=>{
    const { uid } = req.body;
    const exists = await User.find({uid});
    console.log(uid)
    
    if(exists.length!=0){
        res.status(201).send("User Already Exists");
    }else{
        try{
            const result = await User(req.body).save();
            res.status(200).send(result);
        }catch(err){
            res.status(500).send(err.message);
        } 
    }
    
})


router.get('/:uid', async(req, res)=>{
    try{
        const {uid} = req.params;
        const result = await User.findOne({uid});
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message);
    }
})

router.get('/', async(req, res)=>{
    try{
        const result = await User.find({});
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message);
    }
})

router.delete('/', async(req, res)=>{
    try{
        const result = await User.deleteMany({});
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message);
    }
})



// router.get('/:uid', async(req, res)=>{
//     console.log("Hello")
//     try{
//         const { uid } = req.params;
//         const result = await User.find({uid});
//         res.status(200).send(result);
//     }catch(err){
//         res.status(500).send(err.message);
//     }
// })



// Delete all
router.delete('/', async(req, res)=> {
    try{
        const result = await User.deleteMany({});
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message);
    }
})

module.exports = router;