const express = require('express');
const router = express.Router();
const candidateJobController = require('../controllers/candidateJobController');
const jwt = require('../middleware/jwt');

router.get('/', jwt.Verify, function(req, res){

    candidateJobController.getAll(function(resp){
        res.json(resp);
    })
});

router.get('/:id', jwt.Verify, function(req, res){
    const id = req.params.id;

    candidateJobController.getForId(id, function(resp){
        res.json(resp);
    })
});

router.get('/candidateId/:id', jwt.Verify, function(req, res){
    const candidateId = req.params.id;

    candidateJobController.getForCandidate(candidateId, function(resp){
        res.json(resp);
    })
});

router.get('/jobId/:id', jwt.Verify, function(req, res){
    const jobId = req.params.id;

    candidateJobController.getForJob(jobId, function(resp){
        res.json(resp);
    })
});

router.post('/add', jwt.Verify, function(req, res){
    const candidateId = req.body.candidateId;
    const jobId = req.body.jobId;
    const comment = req.body.comment;

    candidateJobController.add(candidateId, jobId, comment, function(resp){
        res.json(resp);
    })
});

module.exports = router;