'use strict';

const express = require('express');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'mysql',
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : 'mysql'
});

connection.connect();
var solution = "";
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  solution = results[0].solution
  console.log('The solution is: ', results[0].solution);
});

connection.end();


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world 33 test\n'+ solution);
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
