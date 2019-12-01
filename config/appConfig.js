const express = require('express');
const bodyParser = require('body-parser');
const app = module.exports = express();

const PORT = process.env.PORT
//inicia o servidor
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

//configurando o body parser para pegar POSTS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//CORS - Permite acesso de outras aplicações a API
app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Origin','GET,POST,PUT,DELETE');
    next();
})

