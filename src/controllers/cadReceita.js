const express = require ('express');

const Receita = require ('../models/receita.js');

const router = express.Router();

router.post('/register', async(req, res) => {
    
    const {descricao}  = req.body;
    const mesmaDescricao = await Receita.findOne({descricao});

    const {data} = req.body;
    const mesmoMes = data.toString().split('/')[0];
    
   try {
      if (mesmaDescricao && mesmoMes) {
            return res.status(400).send({erro:'Conta já cadastrada'})
        }
        const receita = await Receita.create(req.body);
        return res.send({receita});
    } catch (err) {
       return res.status(400).send({ error: 'Registration failed'});
    }
});

router.get('/receitas', async(req, res) => {
    const receita = await Receita.create(req.body);
    return res.send({receita});
  });
  



module.exports = app => app.use('/cadreceita', router);