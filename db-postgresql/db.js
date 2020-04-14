const { Client } = require('pg');
const connection = new Client({
  user: 'msx',
  host: 'localhost',
  database: 'restaurantinfo_pg',
  // password: 'secretpassword',
  // port: 3211,
});

connection.connect();

connection.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message) // Hello World!
  // client.end()
})

module.exports = connection;