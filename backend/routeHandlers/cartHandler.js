const Cart = require('../schemaModels/cartSchemaModel');
const express = require('express');
const router = express.Router();


router.post('/', async(req, res)=>{
    const { productId, email } = req.body;
    const exists = await Cart.findOne({productId, email});

    if(exists){ 
        exists.count++;
        await exists.save();
        res.send(exists);
    }else{
        try{
            const result = await Cart(req.body).save();
            res.status(200).send(result);
        }catch(err){
            res.status(500).send(err.message);
        }
    }    
})

router.get('/', async(req, res)=>{
    try{
        const result = await Cart.find({});
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message);
    }
})

router.delete('/', async(req, res)=>{
    try{
        const result = await Cart.deleteMany({});
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message);
    }
})

module.exports = router;