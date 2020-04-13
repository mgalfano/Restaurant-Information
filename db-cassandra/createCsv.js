const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const cliProgress = require('cli-progress');

const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

const restaurants = require('./csseedRestaurants');
const users = require('./csseedUsers');
const reviews = require('./csseedReviews');

restaurantRecords = restaurants.generateRestaurants(1000000);
userRecords = users.generateUsers(1000000);
reviewRecords = reviews.generateReviews(1000000, userRecords, restaurantRecords);

const csvWriterRestaurants = createCsvWriter({
  path: './restaurants.csv',
  header: [
    {id: 'id', title: 'id'},
    {id: 'cat', title: 'category'},
    {id: 'claimed', title: 'is_claimed'},
    {id: 'name', title: 'name'},
    {id: 'price', title: 'price'},
  ]
});

const csvWriterUsers = createCsvWriter({
  path: './users.csv',
  header: [
    {id: 'id', title: 'id'},
    {id: 'email', title: 'email'},
    {id: 'first_name', title: 'first_name'},
    {id: 'last_name', title: 'last_name'},
  ]
});

const csvWriterReviews = createCsvWriter({
  path: './reviews.csv',
  header: [
    {id: 'restaurant_id', title: 'restaurant_id'},
    {id: 'id', title: 'id'},
    {id: 'date', title: 'date'},
    {id: 'rating', title: 'rating'},
    {id: 'user_id', title: 'user_id'},
  ]
});

csvWriterRestaurants.writeRecords(restaurantRecords)
  .then(() => {
});

csvWriterUsers.writeRecords(userRecords)
  .then(() => {
});

csvWriterReviews.writeRecords(reviewRecords)
  .then(() => {
});