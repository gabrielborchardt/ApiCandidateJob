const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const jwt = require('../middleware/jwt');

router.get('/', jwt.Verify, function(req, res){

    jobController.getAll(function(resp){
        res.json(resp);
    })
});

router.get('/:id', jwt.Verify, function(req, res){
    const id = req.params.id;

    jobController.getUser(id, function(resp){
        res.json(resp);
    })
});

router.post('/add', jwt.Verify, function(req, res){
    const company = req.body.company;
    const title = req.body.title;
    const description = req.body.description;

    jobController.add(company, title, description, function(resp){
        res.json(resp);
    })
});

module.exports = router;