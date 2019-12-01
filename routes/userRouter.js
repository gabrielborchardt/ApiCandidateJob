const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const jwt = require('../middleware/jwt');

router.get('/', jwt.Verify, function(req, res){

    userController.getAll(function(resp){
        res.json(resp);
    })
});

router.get('/:id', jwt.Verify, function(req, res){
    const id = req.params.id;

    userController.getUser(id, function(resp){
        res.json(resp);
    })
});

router.post('/add', jwt.Verify, function(req, res){
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    userController.add(name, email, password, function(resp){
        res.json(resp);
    })
});

module.exports = router;