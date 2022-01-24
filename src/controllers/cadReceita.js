const express = require ('express');

const Receita = require ('../models/receita.js');

const router = express.Router();

router.post('/receitas', async(req, res) => {
    const {descricao, data} = req.body
    const condicao = await Receita.findOne({descricao, data});

    try {
        if (condicao){
            return res.status(400).send({erro :'Anotação já cadastrada esse mês'})
        }
        const despesa = await Despesa.create(req.body);
        return res.send({despesa});
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed'});
    }
});

router.get('/receitas', async(req, res) => {
    const {descricao, valor, data}= await Receita.create(req.body);
    return res.send({descricao, valor, data});
  });

router.put('/receitas/:id' , function(req,res){
    const id = req.body.id;
    res.status(200).send({
        id: id
    });
});

router.delete("/receitas/:id", (req, res) => {
    const artigo = Receita.deleteOne({_id: req.body.id}, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Error: essa despesa não foi apagada com sucesso!"
        });
        return res.json({
            error: false,
            message: "Despesa apagada com sucesso!"
        });
    });
});



module.exports = app => app.use('/cadreceita', router);