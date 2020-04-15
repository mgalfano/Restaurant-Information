require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db-postgresql/db.js');
// const db = require('../db/db.js');

const app = express();
const port = 8000;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json())
// need to check the path
app.use(express.static(__dirname + '/../client/dist'));

let lastRetaurant;
// let randomRestaurant = Math.floor(Math.random() * 10000000) +1;

app.get('/api/restaurants/random', (req, res) => {
  lastRetaurant = Math.floor(Math.random() * 10000000) +1;
  db.query(`SELECT * FROM restaurants INNER JOIN reviews ON restaurants.id=restaurant_id WHERE restaurants.id = ${lastRetaurant}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result.rows.length ===0) {
        db.query(`SELECT * FROM restaurants where id=${lastRetaurant}`, (err,result) =>{
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }) 
      }else{
        // console.log('randomRestaurant????????', randomRestaurant);
        // lastRetaurant = randomRestaurant;
        res.send(result)
      }
    }
  });
});

app.get('/api/restaurants', (req, res) => {
  // const randomRestaurant = Math.floor(Math.random() * 10000000) +1;
  // console.log('lastRestaurant?????????', lastRetaurant);
  db.query(`SELECT * FROM restaurants INNER JOIN reviews ON restaurants.id=restaurant_id WHERE restaurants.id = $1`, [lastRetaurant], (err, result) => {
    if (err) {
      console.log('error line 48??????', err);
    } else {
      if (result.rows.length ===0) {
        db.query(`SELECT * FROM restaurants where id=$1`, [lastRetaurant], (err,result) =>{
          if (err) {
            console.log('error line 54?????????', err);
          } else {
            // console.log('result @ inner query:', result);
            res.send(result);
          }
        }) 
      }else{
        // lastRetaurant = randomRestaurant;
        // console.log('result @ outer query:', result);
        res.send(result)
      }
    }
  });
});

app.post('/api/restaurants', (req, res) => {

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  // var id;
  const queryString = `INSERT INTO reviews(rating, date, restaurant_id) VALUES ($1,now(),$2)`
  // console.log('id: ', id);
  db.query(queryString, [req.body.rating, lastRetaurant], (err) => {
    if (err) {
      console.log(err);
    } else {
      // console.log('post successful line 89 post')
      res.end();
    }
  });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
