const router = require('express').Router();
const User = require('../models/User');
const Product = require('../models/Product');
const { json } = require('express/lib/response');


//create product

router.post('/create/product', async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    }catech(err){
        res.status(500), json(err);
    }
});


module.exports = router;