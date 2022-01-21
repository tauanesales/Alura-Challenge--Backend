const mongoose = require('../database');

const ReceitaSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true,
    },
    descricao:{
        type: String,
        require: true, 
        lowercase:true,
    },
    valor: {
        type: String, 
        require: true,
        select: false,
    },
    data:{
        type: Date,
        require:true,
    },
});

const Receita = mongoose.model('Receita', ReceitaSchema);

module.exports = Receita;