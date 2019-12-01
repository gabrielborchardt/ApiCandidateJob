'user strict';
const db = require('../config/dbConfig'); 
const uuid4 = require('uuid4');

const job = {
    getAll: function(result) {

        //Executa Query
        db.query('SELECT * FROM JOBS', function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err);
            }
            else{
                console.log('jobs : ', res.rows);  
                result(res.rows);
            }
        });
    },
    getUser: function(id, result){
        
        var sql = "SELECT * FROM JOBS WHERE ID = '" + id + "'"

        console.log("SQL: ", sql);

        db.query(sql, function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err);
            }
            else{
                console.log('job : ', res.rows);  
                result(res.rows);
            }
        });
    },
    add: function(company, title, description, result) {    
    
        var sql = " INSERT INTO JOBS (ID,COMPANY,TITLE,DESCRIPTION) "
            sql += " VALUES('" + uuid4() + "','"+company+"','"+title+"','"+description+"');"

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

module.exports = job;