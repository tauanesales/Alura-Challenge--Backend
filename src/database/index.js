const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/controleF');
mongoose.Promise = global.Promise;


module.exports = mongoose;

