const db = require('../config/dbConfig'); 

db.connect(async function(err){

    await createTableUsers();
    await createTableCandidates();
    await createTableJobs();
    await createTableCandidateJob();
    
    db.end;
})

async function createTableUsers(){
 
    const sql = "CREATE TABLE IF NOT EXISTS USERS (\n"+
                "id varchar PRIMARY KEY,\n"+
                "name varchar NOT NULL,\n"+
                "email varchar NOT NULL,\n"+
                "password varchar NOT NULL\n"+
                ");";
    
    db.query(sql, function (error, results, fields){
        if(error) return console.log(error);
        console.log('criou a tabela USERS!');
    });
}

async function createTableCandidates(){
 
    const sql = "CREATE TABLE IF NOT EXISTS CANDIDATES (\n"+
                "id varchar PRIMARY KEY,\n"+
                "name varchar NOT NULL,\n"+
                "email varchar NOT NULL,\n"+
                "phone varchar,\n"+
                "cpf varchar\n"+
                ");";
    
    db.query(sql, function (error, results, fields){
        if(error) return console.log(error);
        console.log('criou a tabela CANDIDATES!');
    });
}

async function createTableJobs(){
 
    const sql = "CREATE TABLE IF NOT EXISTS JOBS (\n"+
                "id varchar PRIMARY KEY,\n"+
                "company varchar NOT NULL,\n"+
                "title varchar NOT NULL,\n"+
                "description varchar\n"+
                ");";
    
    db.query(sql, function (error, results, fields){
        if(error) return console.log(error);
        console.log('criou a tabela JOBS!');
    });
}

async function createTableCandidateJob(){
 
    const sql = "CREATE TABLE IF NOT EXISTS CANDIDATE_JOB (\n"+
                "id varchar PRIMARY KEY,\n"+
                "candidate_id varchar NOT NULL REFERENCES candidates(id),\n"+
                "job_id varchar NOT NULL REFERENCES jobs(id),\n"+
                "comment varchar\n"+
                ");";
    
    db.query(sql, function (error, results, fields){
        if(error) return console.log(error);
        console.log('criou a tabela CANDIDATE_JOB!');
    });
}