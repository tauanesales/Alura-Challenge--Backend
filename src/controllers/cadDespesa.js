const express = require ('express');

const Despesa = require ('../models/despesa.js');

const router = express.Router();

router.post('/register', async(req, res) => {
    try {
        const despesa = await Despesa.create(req.body);

        return res.send({despesa})
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed'});
    }
})

module.exports = app => app.use('/caddespesa', router);