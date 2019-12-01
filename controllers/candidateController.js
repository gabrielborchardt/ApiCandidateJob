'user strict';
const db = require('../config/dbConfig'); 
const uuid4 = require('uuid4');

const candidate = {
    getAll: function(result) {

        //Executa Query
        db.query('SELECT * FROM CANDIDATES', function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err);
            }
            else{
                console.log('candidates : ', res.rows);  
                result(res.rows);
            }
        });
    },
    getUser: function(id, result){
        
        var sql = "SELECT * FROM CANDIDATES WHERE ID = '" + id + "'"

        console.log("SQL: ", sql);

        db.query(sql, function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err);
            }
            else{
                console.log('candidate : ', res.rows);  
                result(res.rows);
            }
        });
    },
    add: function(name, email, phone, cpf, result) {    
    
        var sql = " INSERT INTO CANDIDATES (ID, NAME,EMAIL,PHONE,CPF) "
            sql += " VALUES('" + uuid4() + "','"+name+"','"+email+"','"+phone+"','"+cpf+"');"

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