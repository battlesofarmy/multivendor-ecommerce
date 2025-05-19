const User = require('../schemaModels/userSchemaModel');
const express = require('express');
const router = express.Router();


router.post('/', async(req, res)=>{
    const { uid } = req.body;
    const exists = await User.find({uid});
    console.log(req.body);
    
    if(exists.length!=0 && 0){
        res.status(201).send("User Already Exists");
    }else{
        try{
            const result = await User(req.body).save();
            console.log("new user created")
            res.status(200).send(result);
        }catch(err){
            res.status(500).send(err.message);
        } 
    }
})

router.post('/create-shop', async(req, res)=>{
    const {uid, shopData} = req.body;
    // console.log(uid, shopData);
    // console.log()

    try{
        console.log("HI")
        const result = await User.findOneAndUpdate(
        { uid },{
            $set: {
               shop: shopData, // results is the array field in your User model
               role: "seller"
            },
            // $set:{
            // }
        },
        { new: true } // to return the updated document
        );
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message);
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
router.get('/role/:uid', async(req, res)=>{
    // console.log(req.params.uid)
    const { uid } = req.params;
    try{
        const result = await User.findOne({uid});
        res.status(200).send(result.role);
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