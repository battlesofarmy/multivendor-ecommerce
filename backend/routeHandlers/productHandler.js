const Product = require('../schemaModels/productSchemaModel');
const express = require('express');
const router = express.Router();

router.get('/', async(req, res)=>{
    try{
        const { category } = req.query;
        const filter = {};
        if(category) filter.category = category;

        const result = await Product.find(filter);
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message);
    }
})


router.get('/best-selling', async(req, res)=>{
    try{
        const result = await Product.find({ stock: { $lt: 25 } });
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message);
    }
})

// Search a single products
router.get('/:id', async(req, res)=>{
    // console.log(req.params.id)
    try{
        const result = await Product.findOne({_id: req.params.id});
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message);
    }
})


router.post('/', async(req, res)=>{
    // console.log(req.params.id)
    try{
        const result = await Product(req.body).save();
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