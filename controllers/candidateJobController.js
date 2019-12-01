'user strict';
const db = require('../config/dbConfig'); 
const uuid4 = require('uuid4');

const candidate = {
    getAll: function(result){
        
        var sql = "SELECT * FROM CANDIDATE_JOB"

        console.log("SQL: ", sql);

        db.query(sql, function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err);
            }
            else{
                console.log('candidateJob : ', res.rows);  
                result(res.rows);
            }
        });
    },
    getForId: function(id, result){
        
        var sql = "SELECT * FROM CANDIDATE_JOB WHERE ID = '" + id + "'"

        console.log("SQL: ", sql);

        db.query(sql, function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err);
            }
            else{
                console.log('candidateJob : ', res.rows);  
                result(res.rows);
            }
        });
    },
    getForCandidate: function(candidateId, result) {

        var sql = "SELECT * FROM CANDIDATE_JOB WHERE CANDIDATE_ID = '" + candidateId + "'"

        console.log("SQL: ", sql);

        db.query(sql, function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err);
            }
            else{
                console.log('candidateJob : ', res.rows);  
                result(res.rows);
            }
        });
    },
    getForJob: function(jobId, result) {

        var sql = "SELECT * FROM CANDIDATE_JOB WHERE JOB_ID = '" + jobId + "'"

        console.log("SQL: ", sql);

        db.query(sql, function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err);
            }
            else{
                console.log('candidateJob : ', res.rows);  
                result(res.rows);
            }
        });
    },
    add: function(candidateId, jobId, comment, result) {    
    
        var sql = " INSERT INTO CANDIDATE_JOB (ID,CANDIDATE_ID,JOB_ID,COMMENT) "
            sql += " VALUES('" + uuid4() + "','"+candidateId+"','"+jobId+"','"+comment+"');"

        console.log("SQL: ", sql);

        db.query(sql,function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err);
            }
            else{
                console.log(res.insertId);
                result(res.insertId);
            }
        });
    }
};

module.exports = candidate;