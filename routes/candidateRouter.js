const express = require('express');
const router = express.Router();
const candidateController = require('../controllers/candidateController');
const jwt = require('../middleware/jwt');

router.get('/', jwt.Verify, function(req, res){

    candidateController.getAll(function(resp){
        res.json(resp);
    })
});

router.get('/:id', jwt.Verify, function(req, res){
    const id = req.params.id;

    candidateController.getUser(id, function(resp){
        res.json(resp);
    })
});

router.post('/add', jwt.Verify, function(req, res){
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const cpf = req.body.cpf;

    candidateController.add(name, email, phone, cpf, function(resp){
        res.json(resp);
    })
});

module.exports = router;