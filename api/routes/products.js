const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handing GET Request to /products'
    });
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message: 'Handling POST Request to /products',
        createdProduct: product
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'Yuo discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'you passed an ID'
        });
    }
    });

    router.patch('/:productId', (req, res, next) => {
        res.status(200).json({
            message: 'Updated product!'
        });
    }); 

    router.delete('/:productId', (req, res, next) => {
        res.status(200).json({
            message: 'Deleted product!'
        });
    }); 

module.exports = router;