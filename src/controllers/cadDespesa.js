const express = require ('express');

const Despesa = require ('../models/despesa.js');

const router = express.Router();

router.post('/register', async(req, res) => {

    const {descricao} = req.body
    const mesmaDescricao = await Despesa.findOne({descricao});
    const {data} = req.body
    const mesmaData = await Despesa.findOne({ data });
    const mesmoMes = data.toString().split('/')[0];


    try {
        if (mesmaDescricao && mesmaData){
            return res.status(400).send({erro :'Conta já cadastrada'})
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
	//Apagar o registro no banco de dados MongoDB
    const artigo = Despesa.deleteOne({_id: req.body.id}, (err) => {
		//Retornar erro quando não conseguir apagar no banco de dados
        if(err) return res.status(400).json({
            error: true,
            message: "Error: Artigo não foi apagado com sucesso!"
        });

		//Retornar mensagem de sucesso quando excluir o registro com sucesso no banco de dados
        return res.json({
            error: false,
            message: "Artigo apagado com sucesso!"
        });
    });
});

module.exports = app => app.use('/caddespesa', router);