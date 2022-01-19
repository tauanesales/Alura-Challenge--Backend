const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false})) //entender parametros url

require('./controllers/cadDespesa')(app);

app.listen(3000); 