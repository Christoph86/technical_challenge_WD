const router = require("express").Router();
const mongoose = require('mongoose');

const Phone = require('../models/Phone.model');


//READ list all Phones
router.get('/phones', (req, res, next) => {
    Phone.find()
        .then(allPhones => {
            res.json(allPhones)
        })
        .catch(err => res.json(err));
});


//READ get single Phone by Id
router.get('/phones/:phoneId', (req, res, next) => {
    const { phoneId } = req.params;

    Phone.findById(phoneId)
        .then(phone => res.json(phone))
        .catch(error => res.json(error));
});


module.exports = router;
