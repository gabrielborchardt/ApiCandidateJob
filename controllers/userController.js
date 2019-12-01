'user strict';
const db = require('../config/dbConfig'); 
const uuid4 = require('uuid4');
const jwt = require('../middleware/jwt');

const user = {
    getAll: function(result) {

        //Executa Query
        db.query('SELECT * FROM USERS', function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err);
            }
            else{
                console.log('users : ', res.rows);  
                result(res.rows);
            }
        });
    },
    getUser: function(id, result){
        var sql = "SELECT * FROM USERS WHERE ID = '" + id + "'"

        console.log("SQL: ", sql);

        db.query(sql, function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(err);
            }
            else{
                console.log('user : ', res.rows);  
                result(res.rows);
            }
        });
    },
    add: function(name, email, password, result) {    
                
        var sql = " INSERT INTO USERS (ID, NAME,EMAIL,PASSWORD) "
            sql += " VALUES('" + uuid4() + "','"+name+"','"+email+"','"+password+"');"

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
    },
    login: function(email,password,result){
        
        //Executa Query
        var sql = "SELECT * FROM USERS WHERE " 
            sql += " EMAIL = '"+ email + "'";
            sql += " AND PASSWORD = '"+ password + "'";
        
        console.log("SQL: ", sql);

        db.query(sql, function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(err)
            }
            else{
                if(res.rows.length > 0){
                    const id = res.rows.id
                    const token = jwt.Sign(id)
                    console.log("TOKEN: "+token)
                    result(token)
                }else
                    result(null)
            }
        });
    }
};

module.exports = user;