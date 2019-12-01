const { Client } = require('pg');

const connectionString = process.env.DATABASE
console.log("connectionString2: " + connectionString)

const client = new Client({
    connectionString: connectionString
});

client.connect(function(err) {
    if (err) {
      console.error('error: ' + err.message);
      process.exit();
    }

    console.log('Conectado com sucesso ao PostgreSQL.');
  });

module.exports = client;
