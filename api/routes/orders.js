const express = require('express');
const router = express.Router();

//handles incoming GET requests to/orders
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched'
    });
});

router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(201).json({
        message: 'Orders was created',
        order: order
    });
});

router.get('/:oderId', (req, res, next) => {
    res.status(200).json({
        message: 'Orders details',
        orderId: req.params.orderId
    });
});

router.delete('/:oderId', (req, res, next) => {
    res.status(200).json({
        message: 'Orders deleted',
        orderId: req.params.orderId
    });
});

module.exports = router;