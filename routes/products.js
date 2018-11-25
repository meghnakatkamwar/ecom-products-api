const express = require('express');
const router = express.Router();
const { ProductModel } = require('../models')

/* Create product */
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


/* GET product listing. */
router.get('/', function (req, res, next) {
    ProductModel.findAll().then((data) => {
        console.log('product list', data)
        data = data.map((record) => {
            record.images = JSON.parse(record.images)
            return record;
        })
        res.send(data)
    })
});

/* Update product */
router.put('/:id', function (req, res, next) {
    const { name, description, price } = req.body
    const images = JSON.stringify(req.body.images)
    ProductModel.findOne({ id: req.params.id }).then((data) => {
        data.update({
            name,
            description,
            price,
            images
        }).then((result) => {
            console.log('updateResponse', result)
            res.send(result)
        })
    })
})

/* Delete product */
router.delete('/:id', function (req, res, next) {
    ProductModel.destroy({ where: { id: req.params.id } }).then((data) => {
        console.log('deleted product', data)
        const result = {
            status: "success"
        }
        res.send(result)
    })
})

module.exports = router;
