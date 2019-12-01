var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

router.post('/', function(req, res){

    var email = req.body.email;
    var password = req.body.password;

    userController.login(email, password, function(resp){
        if(resp){
            res.status(200).send({ auth: true, token: resp })
        }else{
            res.status(500).send('Login inválido!')
        }
    })
});

module.exports = router;