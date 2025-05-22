const Order = require('../schemaModels/orderSchemaModel');
const express = require('express');
const router = express.Router();

router.get('/', async(req, res)=>{
    try{
        const result = await Order.find({});
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message);
    }
})


// Search a single products
router.get('/:id', async(req, res)=>{
    // console.log(req.params.id)
    try{
        const result = await Order.findOne({_id: req.params.id});
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message);
    }
})


router.post('/', async(req, res)=>{
    console.log("order gihint");
    console.log(req.body)
    try{
        const result = await Order(req.body).save();
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message);
    } 
})



router.delete('/:id', async(req, res)=> {
    const {id} = req.params;
    try{
        const result = await Order.deleteOne({_id: id});
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message);
    }
})

// Delete all
router.delete('/', async(req, res)=> {
    try{
        const result = await Order.deleteMany({});
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message);
    }
})

module.exports = router;