const express = require ('express');

const Despesa = require ('../models/despesa.js');

const router = express.Router();

router.post('/register', async(req, res) => {

    const {descricao, data} = req.body
    const condicao = await Despesa.findOne({descricao, data});
    //const {data} = req.body
    //const mesmaData = await Despesa.findOne({ data });
    //const mesmoMes = data.toString().split('/')[0];


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

router.get('/despesas', async(req, res) => {
    const {descricao, valor, data} = await Despesa.create(req.body);
    return res.send({descricao, valor, data});
  });

router.put('/despesas/:id' , function(req,res){
    const id = req.body.id;
    res.status(200).send({
        id: id
    });
});
  
router.delete("/despesas/:id", (req, res) => {
    const artigo = Despesa.deleteOne({_id: req.body.id}, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Error: Artigo não foi apagado com sucesso!"
        });
        return res.json({
            error: false,
            message: "Artigo apagado com sucesso!"
        });
    });
});

module.exports = app => app.use('/caddespesa', router);