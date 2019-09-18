const express = require('express');
const router = express.Router();

//Event listner funktion som anropas vid inkommande
//http GET meddelanden
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET message on orders received'
    });
});


router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'POST on orders receivied'
    });
});

module.exports = router;