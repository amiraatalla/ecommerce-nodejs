const router = require('express').Router();
const User = require('../models/User');
const Product = require('../models/Product');
const { json } = require('express/lib/response');


//create product

router.post('/create/new', async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500), json(err);
    }
});

//get all products with search

router.get("/", async (req, res) => {
    const productQuery = req.query.newProduct;
    const categoryQuery = req.query.category;

    try {
        let products;

        if (productQuery) {
            products = await Product.find().sort({ createdAt: -1 }).limit(1);
        } else if (categoryQuery) {
            products = await Product.find({
                categories: {
                    $in: [categoryQuery],
                },
            });
        } else {
            products = Product.find();
        }
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }

});

module.exports = router;