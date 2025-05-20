const Event = require('../schemaModels/evnetSchemaModel');
const express = require('express');
const router = express.Router();

router.get('/', async(req, res)=>{
    try{
        const result = await Event.find({});
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message);
    }
})

router.get('/:id', async(req, res)=>{
    try{
        const result = await Event.find({});
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message);
    }
})


router.post('/', async(req, res)=>{
    try{
        const result = await Event(req.body).save();
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message);
    } 
})


// Delete all
router.delete('/', async(req, res)=> {
    try{
        const result = await Product.deleteMany({});
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message);
    }
})

module.exports = router;