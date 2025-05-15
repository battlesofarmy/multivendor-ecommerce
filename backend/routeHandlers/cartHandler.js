const Cart = require('../schemaModels/cartSchemaModel');
const express = require('express');
const router = express.Router();


router.post('/', async(req, res)=>{
    console.log("cart route hiting")
    try{
        const result = await Cart(req.body).save();
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message);
    }
})

router.get('/', async(req, res)=>{
    try{
        const result = await Cart({});
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message);
    }
})

module.exports = router;