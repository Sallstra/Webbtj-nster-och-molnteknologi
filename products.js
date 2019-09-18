const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const mongoose = require('mongoose');

//Event listner funktion som anropas vid inkommande
//http GET meddelanden
router.get('/:id', (req, res, next) => {
    
    Product.findOne({'_id': req.params.id}).exec()
    .then(documents => {
        console.log(documents);
        res.status(200).json(documents)
    })
    .catch(err => {
        console.log(err),
        res.status(500).json({
            error: err
        });
    });
});

router.post('/', (req, res, next) => {

    const products = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    products.save()
        .then(result => {
            console.log(result);
            res.status(200).json(products);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });

});

module.exports = router;
