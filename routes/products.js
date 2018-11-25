const express = require('express');
const router = express.Router();
const { ProductModel } = require('../models')


router.post('/', function (req, res, next) {
    const { name, description, price } = req.body
    const images = JSON.stringify(req.body.images)
    const created = new Date()
    console.log('req', req.body)
    ProductModel.create({ name, price, description, images, created }).then((response) => {
        const result = {
            status: "success",
            data: response.dataValues
        }
        console.log('product created successfully', response.dataValues)
        res.send(result)
    }).catch((error) => {
        const result = {
            error: error.message,
            status: "failure"
        }
        console.log('error in creating product', result)
        res.send(result)
    })
});




module.exports = router;
