const express = require ('express');

const Receita = require ('../models/receita');

const router = express.Router();

router.post('/register', async(req, res) => {
    try {
        const receita = await Receita.create(req.body);

        return res.send({})
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed'});
    }
})

modulos.exports = app => app.use('/cadreceita', router);