const Cupon = require('../schemaModels/coupounCodeSchemalModel');
const express = require('express');
const router = express.Router();

router.get('/', async(req, res)=>{
    try{
        const result = await Cupon.find({});
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message);
    }
})


router.post('/', async(req, res)=>{
    try{
        const result = await Cupon(req.body).save();
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message);
    } 
})


// Delete all
router.delete('/', async(req, res)=> {
    try{
        const result = await Cupon.deleteMany({});
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err.message);
    }
})

module.exports = router;